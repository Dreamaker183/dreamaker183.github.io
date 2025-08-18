"use server";

import { getSuggestedInterestsContent } from "@/ai/flows/suggested-interests-content";
import { z } from "zod";

const SuggestionResultSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});

export async function getSuggestions(
  aboutMe: string
): Promise<{ success: boolean; message: string }> {
  try {
    const result = await getSuggestedInterestsContent({ aboutMe });
    return {
      success: true,
      message: result.suggestedContent,
    };
  } catch (error) {
    console.error("Error getting suggestions:", error);
    return {
      success: false,
      message: "Failed to generate suggestions. Please try again later.",
    };
  }
}
