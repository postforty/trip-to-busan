import { ChatGoogleGenerativeAI } from '@langchain/google-genai';

/**
 * gemini-3.5-flash-lite 모델 인스턴스를 반환합니다.
 * API 키가 없는 경우 null을 반환하여 안전하게 Fallback 하도록 지원합니다.
 */
export function getGeminiModel() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }

  return new ChatGoogleGenerativeAI({
    model: 'gemini-3.5-flash-lite',
    apiKey,
    temperature: 0.7,
    maxOutputTokens: 2048,
  });
}
