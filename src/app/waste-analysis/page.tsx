"use client";

import React, { useState } from 'react';
import { classifyWaste } from "@/services/waste-classification";
import { Dashboard } from "@/components/dashboard";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

export default function WasteAnalysisPage() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [wasteClassification, setWasteClassification] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  const { toast } = useToast();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setWasteClassification(null);
    }
  };

  const handleSubmit = async () => {
    if (!preview) {
      toast({
        variant: "destructive",
        title: "No image selected",
        description: "Please upload an image of the waste.",
      });
      return;
    }

    setIsLoading(true);
    try {
      // Convert image to base64
      const response = await fetch(preview);
      const blob = await response.blob();
      const base64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });

      const classification = await classifyWaste(base64);
      setWasteClassification(classification);
    } catch (error: any) {
      console.error("Error classifying waste:", error);
      toast({
        variant: "destructive",
        title: "Classification Failed",
        description: error.message || "Failed to classify waste. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-background">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Waste Analysis
      </h1>

      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-x-4">
        {/* Image Upload */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
          id="image-upload"
        />
        <label htmlFor="image-upload">
          <Button variant="secondary" size="lg">
            Upload Image <Icons.upload className="ml-2" />
          </Button>
        </label>

        {/* Analyze Button */}
        <Button variant="primary" size="lg" onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? (
            <>
              <Icons.loader className="mr-2 h-4 w-4 animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              Analyze <Icons.search className="ml-2" />
            </>
          )}
        </Button>
      </div>

      {/* Image Preview */}
      {preview && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-foreground mb-2">Image Preview</h2>
          <img src={preview} alt="Waste Preview" className="max-w-md rounded-lg shadow-md" />
        </div>
      )}

      {/* Dashboard */}
      {wasteClassification && (
        <div className="mt-8 w-full max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Analysis Results</h2>
          <Dashboard wasteClassification={wasteClassification} />
        </div>
      )}
    </div>
  );
}

