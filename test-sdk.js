import Anthropic from "@anthropic-ai/sdk";
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY, authToken: process.env.ANTHROPIC_AUTH_TOKEN });
console.log(client);
const res = await client.messages.create({
  model: 'openrouter/free',
  max_tokens: 1024,
  messages: [{ role: 'user', content: 'Hello' }]
});
console.log(res);
