// app/api/sort/route.ts
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    console.log("API Key Status:", process.env.GEMINI_API_KEY ? "Loaded" : "Missing");
    const { text } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: "API Key not found" }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const systemPrompt = `
    あなたはエンジニア専属タスクマネージャーです。
    入力されたタスクを整理し、Markdown形式を使わずに見やすいプレーンテキストで返してください。

    # 分類基準
    1. 📂 [A. メモリ解放] (事務・即完了・片付け)
    2. ⚔️ [B. 本丸] (自己実現・制作・重要)
    3. 🔋 [C. メンテナンス] (趣味・休息)

    # 出力ルール
    - 各カテゴリごとに箇条書き
    - 最後に 💡 Next Action (Aから1つ指定して激励) をつける
    `;

    const result = await model.generateContent(`${systemPrompt}\n\nUser Input:\n${text}`);
    const response = result.response.text();

    return NextResponse.json({ result: response });
  } catch (error) {
    console.error("🚨 Gemini API Error Details:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}