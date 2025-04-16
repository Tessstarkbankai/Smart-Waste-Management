'use server';

/**
 * @fileOverview Summarizes the waste analysis report using AI.
 *
 * - summarizeWasteAnalysisReport - A function that summarizes the waste analysis report.
 * - SummarizeWasteAnalysisReportInput - The input type for the summarizeWasteAnalysisReport function.
 * - SummarizeWasteAnalysisReportOutput - The return type for the summarizeWasteAnalysisReport function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const SummarizeWasteAnalysisReportInputSchema = z.object({
  report: z.string().describe('The waste analysis report to summarize.'),
});
export type SummarizeWasteAnalysisReportInput = z.infer<typeof SummarizeWasteAnalysisReportInputSchema>;

const SummarizeWasteAnalysisReportOutputSchema = z.object({
  summary: z.string().describe('A summary of the waste analysis report.'),
});
export type SummarizeWasteAnalysisReportOutput = z.infer<typeof SummarizeWasteAnalysisReportOutputSchema>;

export async function summarizeWasteAnalysisReport(
  input: SummarizeWasteAnalysisReportInput
): Promise<SummarizeWasteAnalysisReportOutput> {
  return summarizeWasteAnalysisReportFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeWasteAnalysisReportPrompt',
  input: {
    schema: z.object({
      report: z.string().describe('The waste analysis report to summarize.'),
    }),
  },
  output: {
    schema: z.object({
      summary: z.string().describe('A summary of the waste analysis report.'),
    }),
  },
  prompt: `Summarize the following waste analysis report.  Focus on key findings and important details.\n\nReport: {{{report}}}`,
});

const summarizeWasteAnalysisReportFlow = ai.defineFlow<
  typeof SummarizeWasteAnalysisReportInputSchema,
  typeof SummarizeWasteAnalysisReportOutputSchema
>(
  {
    name: 'summarizeWasteAnalysisReportFlow',
    inputSchema: SummarizeWasteAnalysisReportInputSchema,
    outputSchema: SummarizeWasteAnalysisReportOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
