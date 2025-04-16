import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import crypto from 'crypto';

// Function to generate a random API key
function generateApiKey() {
  return crypto.randomBytes(32).toString('hex'); // 64 character random string
}

// Check if the API key exists in environment variables
let apiKey = process.env.GOOGLE_GENAI_API_KEY;

// If not, generate one and set it in the environment variables
if (!apiKey) {
  apiKey = generateApiKey();
  process.env.GOOGLE_GENAI_API_KEY = apiKey;
  console.warn('No GOOGLE_GENAI_API_KEY found in environment variables. Generated a new API key.  Please be aware that this key is only stored in memory and will be lost when the server restarts.');
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
