"use client";

import { useState, useCallback } from "react";
import { classifyWaste, WasteClassification } from "@/services/waste-classification";
import { Dashboard } from "@/components/dashboard";

export default function Home() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [wasteClassification, setWasteClassification] = useState<WasteClassification | null>(null);

  const handleImageUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  }, []);

  const handleClassify = useCallback(async () => {
    if (preview) {
      const classification = await classifyWaste(preview);
      setWasteClassification(classification);
    }
  }, [preview]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">WasteWise AI</h1>
      <p className="text-gray-600 mb-8">Upload an image of waste to classify it.</p>

      <div className="flex flex-col items-center mb-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
          id="image-upload"
        />
        <label
          htmlFor="image-upload"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        >
          {image ? "Change Image" : "Upload Image"}
        </label>
        {preview && (
          <div className="mt-4">
            <img src={preview} alt="Waste Preview" className="max-w-md rounded-lg shadow-md" />
          </div>
        )}
        {image && !wasteClassification && (
          <button
            onClick={handleClassify}
            className="mt-4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            Classify Waste
          </button>
        )}
      </div>

      {wasteClassification && (
        <Dashboard wasteClassification={wasteClassification} />
      )}
    </div>
  );
}
