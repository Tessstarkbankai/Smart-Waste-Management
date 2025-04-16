'use server';

/**
 * @fileOverview Classifies waste from an image using AI.
 *
 * - classifyWasteFlow - A Genkit flow that takes an image  base64 encoded and returns the waste classification.
 * - ClassifyWasteInput - The input type for the classifyWasteFlow function.
 * - ClassifyWasteOutput - The output type for the classifyWasteFlow function.
 */

import { ai } from '@/ai/ai-instance';
import { z } from 'genkit';

const ClassifyWasteInputSchema = z.object({
  imageData: z.string().describe('The base64 encoded waste image.'),
});
export type ClassifyWasteInput = z.infer<typeof ClassifyWasteInputSchema>;

const ClassifyWasteOutputSchema = z.object({
  wasteType: z.string().describe('The type of waste (e.g., Organic, Plastic, Metal, E-Waste, Glass).'),
  quantity: z.string().describe('The estimated quantity of waste (Light, Medium, Heavy).'),
  manpowerRequired: z.number().describe('The manpower required to clean the waste.'),
  recyclable: z.boolean().describe('Whether the waste is recyclable.'),
  decompositionTime: z.string().describe('The decomposition time of the waste.'),
});
export type ClassifyWasteOutput = z.infer<typeof ClassifyWasteOutputSchema>;

export async function classifyWasteFlow(input: ClassifyWasteInput): Promise<ClassifyWasteOutput> {
  return classifyWaste(input);
}

const prompt = ai.definePrompt({
  name: 'classifyWastePrompt',
  input: {
    schema: z.object({
      imageData: z.string().describe('The base64 encoded waste image.'),
    }),
  },
  output: {
    schema: z.object({
      wasteType: z.string().describe('The type of waste (e.g., Organic, Plastic, Metal, E-Waste, Glass).'),
      quantity: z.string().describe('The estimated quantity of waste (Light, Medium, Heavy).'),
      manpowerRequired: z.number().describe('The manpower required to clean the waste.'),
      recyclable: z.boolean().describe('Whether the waste is recyclable.'),
      decompositionTime: z.string().describe('The decomposition time of the waste.'),
    }),
  },
  prompt: `You are an expert in waste management and can accurately classify waste from an image.
Analyze the waste in the image and provide the following information:

- wasteType: The type of waste (e.g., Organic, Plastic, Metal, E-Waste, Glass).
- quantity: The estimated quantity of waste (Light, Medium, Heavy).
- manpowerRequired: The manpower required to clean the waste.
- recyclable: Whether the waste is recyclable (true or false).
- decompositionTime: The decomposition time of the waste.

Analyze this image:
{{media url=imageData type="image/png"}}

Return the result in JSON format.`,
});

const classifyWaste = ai.defineFlow<
  typeof ClassifyWasteInputSchema,
  typeof ClassifyWasteOutputSchema
>(
  {
    name: 'classifyWaste',
    inputSchema: ClassifyWasteInputSchema,
    outputSchema: ClassifyWasteOutputSchema,
  },
  async input => {
    const { output } = await prompt(input);
    return output!;
  }
);
