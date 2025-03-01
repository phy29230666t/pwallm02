import { CreateMLCEngine } from "@mlc-ai/web-llm";

export async function initMLCEngine() {
  const engine = await CreateMLCEngine("Llama-3.2-3B-Instruct-q4f32_1-MLC", {
    initProgressCallback: ({ progress }) => console.log(`Loading: ${progress}%`),
  });
  return engine;
}
