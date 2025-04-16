"use client";

import { useState, useCallback } from "react";
import { classifyWaste, WasteClassification } from "@/services/waste-classification";
import { Dashboard } from "@/components/dashboard";

// Function to convert image to base64
const toBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

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
    if (image) {
      try {
        const base64Image = await toBase64(image);
        const classification = await classifyWaste(base64Image);
        setWasteClassification(classification);
      } catch (error) {
        console.error("Error classifying waste:", error);
        // Handle error (e.g., display an error message to the user)
      }
    }
  }, [image]);

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
