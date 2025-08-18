"use client";

import { useState, useTransition } from "react";
import { Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getSuggestions } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";

interface SuggestedContentProps {
  aboutMe: string;
}

export function SuggestedContent({ aboutMe }: SuggestedContentProps) {
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleGenerate = () => {
    startTransition(async () => {
      const result = await getSuggestions(aboutMe);
      if (result.success) {
        setSuggestion(result.message);
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: result.message,
        });
      }
    });
  };

  return (
    <div className="mt-12">
      <div className="flex flex-col items-center text-center">
        <h3 className="text-2xl font-bold tracking-tight">Need some inspiration?</h3>
        <p className="text-muted-foreground mt-2 max-w-md">
          Let AI suggest new portfolio content based on your interests.
        </p>
        <Button
          onClick={handleGenerate}
          disabled={isPending}
          className="mt-4"
        >
          {isPending ? (
            "Generating..."
          ) : (
            <>
              <Wand2 className="mr-2 h-4 w-4" />
              Suggest Content
            </>
          )}
        </Button>
      </div>
      {suggestion && (
        <Card className="mt-8 max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Badge variant="outline">AI Suggestion</Badge>
              Portfolio Content Idea
            </CardTitle>
            <CardDescription>
              Here is a suggestion to enhance your portfolio:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed">{suggestion}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
