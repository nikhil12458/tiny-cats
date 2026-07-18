import type { Request, Response } from "express";
import { generateAiResponse } from "../services/gemini.service.ts";

export const askAiController = async (req: Request, res: Response) => {
  const prompt = req.body.prompt;

  const result = await generateAiResponse(prompt);

  return res.status(200).json({
    message: "ai responded",
    success: true,
    data: result,
  });
};
