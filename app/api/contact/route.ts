import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, kana, email, phone, category, message } = body;

    // バリデーション
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "必須項目が不足しています" },
        { status: 400 }
      );
    }

    // メール送信（Cloudflare Workers環境ではSendGrid等の外部サービスを利用）
    // 環境変数 SENDGRID_API_KEY を Cloudflare Secrets に設定してください
    const apiKey = (process.env as NodeJS.ProcessEnv).SENDGRID_API_KEY;

    if (!apiKey) {
      // 開発環境でAPIキーがない場合はログだけ出してOKを返す
      console.log("お問い合わせ受信（開発環境）:", { name, email, category });
      return NextResponse.json({ ok: true });
    }

    const emailBody = `
お名前: ${name}（${kana || "かな未記入"}）
メール: ${email}
電話: ${phone || "未記入"}
種別: ${category || "未選択"}

【お問い合わせ内容】
${message}
    `.trim();

    const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: "info@sukoyaka-kaigo.info" }],
            subject: `【すこやかHP】お問い合わせ：${name}様`,
          },
        ],
        from: { email: "noreply@sukoyaka-kaigo.info", name: "すこやかHP" },
        reply_to: { email, name },
        content: [{ type: "text/plain", value: emailBody }],
      }),
    });

    if (!res.ok) {
      throw new Error("SendGrid送信失敗");
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("お問い合わせ送信エラー:", err);
    return NextResponse.json(
      { error: "送信に失敗しました" },
      { status: 500 }
    );
  }
}
