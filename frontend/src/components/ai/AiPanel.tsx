import { useState } from "react";

export default function AiPanel() {
  const [prompt, setPrompt] = useState("");

  return (
    <aside
      className="
      w-80
      border-l
      bg-white
      p-4
      "
    >
      <h2 className="font-bold mb-4">AI Copilot</h2>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="
        AI에게 요청하세요
        "
        className="
        w-full
        h-40
        border
        rounded
        p-2
        "
      />

      <button
        className="
        mt-3
        w-full
        bg-blue-600
        text-white
        p-2
        rounded
        "
      >
        실행
      </button>

      <div className="mt-5 space-y-2">
        <button className="w-full border p-2 rounded">문서 요약</button>

        <button className="w-full border p-2 rounded">보고서 생성</button>

        <button className="w-full border p-2 rounded">맞춤법 검사</button>

        <button className="w-full border p-2 rounded">번역</button>
      </div>
    </aside>
  );
}
