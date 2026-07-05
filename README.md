# 🧠 Local AI Assistant — Privacy-Focused In-Browser AI Notepad

<div align="center">

*An AI notepad that runs entirely inside your browser. No server. No API keys. No data ever leaves your device.*

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?logo=vite&logoColor=white)](https://vitejs.dev)
[![WebGPU](https://img.shields.io/badge/WebGPU-enabled-blue)](https://www.w3.org/TR/webgpu/)
[![WebLLM](https://img.shields.io/badge/WebLLM-SmolLM2-orange)](https://github.com/mlc-ai/web-llm)

</div>

---

## 📝 What is this?

Most "AI notepad" tools send your text to a server to get a summary, an answer, or a rewrite. That means your notes — journal entries, private thoughts, sensitive drafts — pass through someone else's infrastructure.

**Local AI Assistant** takes a different approach: the language model runs **entirely on your own device**, directly in the browser, using **WebGPU** for hardware-accelerated inference. There's no backend, no API key to configure, and no network request carrying your data anywhere.

You type. The model thinks. Everything happens locally.

---

## ✨ Features

- 🖊️ **In-browser AI notepad** — write notes and get AI-powered summarization/assistance
- 🔒 **Fully local inference** — powered by [WebLLM](https://github.com/mlc-ai/web-llm) running the **SmolLM2** model via **WebGPU**, with no server round-trip
- 🚫 **Zero data collection** — no API keys, no accounts, nothing leaves the browser
- ⚙️ **Web Worker offloading** — model inference runs on a background thread (`worker.js`), keeping the main UI thread free so the interface stays responsive while the model works
- ⚡ **Fast dev/build tooling** — built with Vite for quick local development

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Browser (WebGPU-enabled) |
| AI inference | [WebLLM](https://github.com/mlc-ai/web-llm) running the SmolLM2 model |
| Concurrency | Web Workers (`worker.js`) — keeps LLM computation off the main thread |
| Build tool | Vite |
| Frontend | JavaScript, HTML, CSS |

---

## 📦 Project Structure

```
local-ai-assistant/
├── public/            # Static assets
├── src/               # Application source code
├── worker.js          # Web Worker — offloads LLM inference from the main thread
├── index.html         # App entry point
├── vite.config.js      # Vite configuration
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- A **WebGPU-compatible browser** (recent versions of Chrome or Edge). Check support at [webgpureport.org](https://webgpureport.org/).

### Installation

```bash
git clone https://github.com/varzzzzzh/local-ai-assistant.git
cd local-ai-assistant
npm install
```

### Run locally

```bash
npm run dev
```

Then open the local URL Vite prints in your terminal (typically `http://localhost:5173`).

### Build for production

```bash
npm run build
```

---

## ⚠️ Notes

- The model downloads and runs **on-device**, so the first load may take a moment while it initializes — this only happens once per browser session/cache.
- Since inference is entirely local, performance depends on your device's GPU. WebGPU support is required for this to run.

---

## 🔭 Possible Future Enhancements

- Support for swapping between multiple local models
- Persistent local storage for saved notes
- Export notes with AI-generated summaries attached
- Offline PWA support

---

## 👩‍💻 Author

**Varsha Ravi**
📧 varshar112006@gmail.com
🔗 [LinkedIn](https://linkedin.com/in/varzzzzzh) · 💻 [GitHub](https://github.com/varzzzzzh) · 🧩 [LeetCode](https://leetcode.com/u/Varshar111)

---

## ⭐ Support

If you find this project interesting, consider starring ⭐ the repo!
