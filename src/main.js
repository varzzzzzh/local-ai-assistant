
import * as webllm from "https://esm.run/@mlc-ai/web-llm";

async function init() {
  const statusText = document.getElementById("status-text");
  const progressBar = document.getElementById("loading-bar");

  try {
    if (!navigator.gpu) {
      throw new Error("Your browser supports WebGPU but it's disabled in settings.");
    }

    statusText.innerText = "Initializing Engine (Connecting to CDN)...";
    const engine = await webllm.CreateMLCEngine(
    "gemma-2b-it-q4f16_1-MLC",
      {
        initProgressCallback: (report) => {
          progressBar.value = report.progress;
          statusText.innerText = report.text;
          console.log(report.text);
        }
      }
    );

    document.getElementById("loading-container").style.display = "none";
    document.getElementById("editor-container").style.display = "block";

    document.getElementById("summarize-btn").onclick = async () => {
        const text = document.getElementById("notepad").value;
        const output = document.getElementById("output-text");
        output.innerText = "Processing...";
        const reply = await engine.chat.completions.create({
            messages: [{ role: "user", content: "Summarize: " + text }]
        });
        output.innerText = reply.choices[0].message.content;
    };

  } catch (e) {
    console.error(e);
    statusText.innerText = " FAILED: " + e.message;
  }
}

init();
