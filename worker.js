// // // src/worker.js

// import { WebWorkerMLCEngineHandler } from "@mlc-ai/web-llm";

// const handler = new WebWorkerMLCEngineHandler();
// self.onmessage = (msg) => {
//   handler.onmessage(msg);
// };

// worker.js
// import { WebWorkerMLCEngineHandler } from "@mlc-ai/web-llm";

// console.log("Worker initialized and listening...");

// const handler = new WebWorkerMLCEngineHandler();
// self.onmessage = (msg) => {
//   handler.onmessage(msg);
// };

import { WebWorkerMLCEngineHandler } from "@mlc-ai/web-llm";
const handler = new WebWorkerMLCEngineHandler();
self.onmessage = (msg) => { handler.onmessage(msg); };