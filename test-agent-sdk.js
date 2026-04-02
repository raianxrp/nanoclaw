import { AgentRunner } from "@anthropic-ai/claude-agent-sdk";
const runner = new AgentRunner({
  client: undefined,
  env: process.env
});
console.log(runner);
