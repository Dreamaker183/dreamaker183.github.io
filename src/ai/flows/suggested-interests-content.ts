'use server';
/**
 * @fileOverview A suggested interests content AI agent.
 *
 * - getSuggestedInterestsContent - A function that generates suggested content based on user interests.
 * - SuggestedInterestsContentInput - The input type for the getSuggestedInterestsContent function.
 * - SuggestedInterestsContentOutput - The return type for the getSuggestedInterestsContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestedInterestsContentInputSchema = z.object({
  aboutMe: z
    .string()
    .describe('A description of the user, including their interests.'),
});
export type SuggestedInterestsContentInput = z.infer<typeof SuggestedInterestsContentInputSchema>;

const SuggestedInterestsContentOutputSchema = z.object({
  suggestedContent: z
    .string()
    .describe('Suggested content based on the user\u0027s interests.'),
});
export type SuggestedInterestsContentOutput = z.infer<typeof SuggestedInterestsContentOutputSchema>;

export async function getSuggestedInterestsContent(
  input: SuggestedInterestsContentInput
): Promise<SuggestedInterestsContentOutput> {
  return suggestedInterestsContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestedInterestsContentPrompt',
  input: {schema: SuggestedInterestsContentInputSchema},
  output: {schema: SuggestedInterestsContentOutputSchema},
  prompt: `You are an AI assistant that helps users expand their portfolio with relevant content based on their interests.

  Given the following \"About Me\" section, suggest content that the user can add to their portfolio to showcase their interests and expertise. Be concise and provide specific suggestions.

  About Me: {{{aboutMe}}}

  Suggested Content:`,
});

const suggestedInterestsContentFlow = ai.defineFlow(
  {
    name: 'suggestedInterestsContentFlow',
    inputSchema: SuggestedInterestsContentInputSchema,
    outputSchema: SuggestedInterestsContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
