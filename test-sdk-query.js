import { query } from "@anthropic-ai/claude-agent-sdk";

export async function run() {
  for await (const message of query({
    prompt: "Hello",
    options: {
      env: process.env,
      tools: []
    }
  })) {
    console.log("Got message:", JSON.stringify(message).substring(0,200));
  }
}
run();
