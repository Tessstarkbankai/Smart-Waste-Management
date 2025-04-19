import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// here we have used ai api
const apiKey = 'AIzaSyBDkVjNt4YlVbrkP9hKA4APjYy8zaBFOc0';

if (!apiKey) {
  console.error('GOOGLE_GENAI_API_KEY is not set.');
}

export const ai = genkit({
  promptDir: './prompts',
  plugins: [
    googleAI({
      apiKey: apiKey,
    }),
  ],
  model: 'googleai/gemini-2.0-flash',
});
