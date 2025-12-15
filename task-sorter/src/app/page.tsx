// app/page.tsx
"use client";

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSort = async () => {
    if (!input) return;
    setLoading(true);
    setResult("");

    try {
      const res = await fetch("/api/sort", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input }),
      });
      const data = await res.json();
      setResult(data.result);
    } catch (e) {
      setResult("エラーが発生しました");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#1e1e1e] text-[#d4d4d4] flex flex-col items-center p-8 font-mono">
      <h1 className="text-3xl font-bold text-[#4ec9b0] mb-8 tracking-wider">
        🧠 Task Sorter
      </h1>

      <textarea
        className="w-full max-w-2xl h-32 bg-[#252526] border border-[#3e3e42] rounded-lg p-4 text-lg focus:outline-none focus:border-[#0e639c] transition-colors resize-none placeholder-gray-600"
        placeholder="ここにタスクを書き殴る (例: 未踏のアイデア出し 部屋掃除 ギター練習)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={handleSort}
        disabled={loading}
        className="mt-6 px-8 py-3 bg-[#0e639c] hover:bg-[#1177bb] disabled:bg-[#333] text-white font-bold rounded transition-all transform active:scale-95"
      >
        {loading ? "Thinking..." : "整理・実行 (Execute)"}
      </button>

      {result && (
        <div className="mt-8 w-full max-w-2xl bg-[#2d2d2d] p-6 rounded-lg border-l-4 border-[#4ec9b0] shadow-lg whitespace-pre-wrap leading-relaxed">
          {result}
        </div>
      )}
    </main>
  );
}