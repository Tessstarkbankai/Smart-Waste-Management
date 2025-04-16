/**
 * Represents the classification of waste, including its type, quantity, manpower required, and other details.
 */
export interface WasteClassification {
  /**
   * The type of waste (e.g., Organic, Plastic, Metal, E-Waste, Glass).
   */
  wasteType: string;
  /**
   * The estimated quantity of waste (Light, Medium, Heavy).
   */
  quantity: string;
  /**
   * The manpower required to clean the waste.
   */
  manpowerRequired: number;
  /**
   * Additional details about the waste, such as whether it's recyclable and its decomposition time.
   */
  details: {
    recyclable: boolean;
    decompositionTime: string;
  };
}

import { classifyWasteFlow, ClassifyWasteInput, ClassifyWasteOutput } from '@/ai/flows/classify-waste';

/**
 * Asynchronously classifies waste from an image and returns a WasteClassification object.
 *
 * @param imageUrl The URL of the image to classify.
 * @returns A promise that resolves to a WasteClassification object containing the classification results.
 */
export async function classifyWaste(imageUrl: string): Promise<WasteClassification> {
  // Call the Genkit flow to classify the waste
  const input: ClassifyWasteInput = { imageUrl: imageUrl };
  const classificationResult: ClassifyWasteOutput = await classifyWasteFlow(input);

  return {
    wasteType: classificationResult.wasteType,
    quantity: classificationResult.quantity,
    manpowerRequired: classificationResult.manpowerRequired,
    details: {
      recyclable: classificationResult.recyclable,
      decompositionTime: classificationResult.decompositionTime,
    },
  };
}
