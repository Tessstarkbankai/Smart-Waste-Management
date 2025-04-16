'use server';
/**
 * @fileOverview Provides AI-powered suggestions on how to improve waste management practices based on the analysis.
 *
 * - suggestImprovements - A function that handles the waste improvement suggestion process.
 * - SuggestImprovementsInput - The input type for the suggestImprovements function.
 * - SuggestImprovementsOutput - The return type for the suggestImprovements function.
 */

import {ai} from '@/ai/ai-instance';
import {WasteClassification} from '@/services/waste-classification';
import {z} from 'genkit';

const SuggestImprovementsInputSchema = z.object({
  wasteClassification: z.custom<WasteClassification>((val: any) => {
    try {
      WasteClassificationSchema.parse(val);
      return true;
    } catch (e) {
      return false;
    }
  }).describe('The waste classification results.'),
});
export type SuggestImprovementsInput = z.infer<typeof SuggestImprovementsInputSchema>;

const SuggestImprovementsOutputSchema = z.object({
  suggestions: z.array(z.string()).describe('AI-powered suggestions on how to improve waste management practices.'),
});
export type SuggestImprovementsOutput = z.infer<typeof SuggestImprovementsOutputSchema>;

export async function suggestImprovements(input: SuggestImprovementsInput): Promise<SuggestImprovementsOutput> {
  return suggestImprovementsFlow(input);
}

const WasteClassificationSchema = z.object({
  wasteType: z.string(),
  quantity: z.string(),
  manpowerRequired: z.number(),
  details: z.object({
    recyclable: z.boolean(),
    decompositionTime: z.string(),
  }),
});

const prompt = ai.definePrompt({
  name: 'suggestImprovementsPrompt',
  input: {
    schema: z.object({
      wasteClassification: z.custom<WasteClassification>((val: any) => {
        try {
          WasteClassificationSchema.parse(val);
          return true;
        } catch (e) {
          return false;
        }
      }).describe('The waste classification results.'),
    }),
  },
  output: {
    schema: z.object({
      suggestions: z.array(z.string()).describe('AI-powered suggestions on how to improve waste management practices.'),
    }),
  },
  prompt: `Based on the following waste classification, provide suggestions on how to improve waste management practices:

Waste Type: {{{wasteClassification.wasteType}}}
Quantity: {{{wasteClassification.quantity}}}
Manpower Required: {{{wasteClassification.manpowerRequired}}}
Recyclable: {{{wasteClassification.details.recyclable}}}
Decomposition Time: {{{wasteClassification.details.decompositionTime}}}

Suggestions:`, 
});

const suggestImprovementsFlow = ai.defineFlow<
  typeof SuggestImprovementsInputSchema,
  typeof SuggestImprovementsOutputSchema
>(
  {
    name: 'suggestImprovementsFlow',
    inputSchema: SuggestImprovementsInputSchema,
    outputSchema: SuggestImprovementsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
