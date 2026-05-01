"use client";

import { useState } from "react";

type FormData = {
  name: string;
  kana: string;
  email: string;
  phone: string;
  category: string;
  message: string;
};

const categories = [
  "居宅介護について",
  "同行援護について",
  "デイサービスについて",
  "費用・手続きについて",
  "その他",
];

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    kana: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email || !form.message) {
      setError("お名前・メールアドレス・お問い合わせ内容は必須です。");
      return;
    }

    // TODO: APIエンドポイントへ送信
    // 現時点ではメール送信機能の実装が必要です
    // 例: /api/contact へPOST
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("送信に失敗しました。お電話でもお問い合わせいただけます。");
      }
    } catch {
      setError("送信に失敗しました。お電話でもお問い合わせいただけます。");
    }
  };

  if (submitted) {
    return (
      <div className="bg-[#E8F5EE] rounded-4xl p-10 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h2 className="text-xl font-black text-[#5BAD7F] mb-3">
          お問い合わせありがとうございます
        </h2>
        <p className="text-[#6B5F58] text-sm leading-relaxed">
          内容を確認の上、担当者より2営業日以内にご連絡いたします。
          <br />
          お急ぎの方はお電話（049-298-3625）でも受け付けております。
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#F8FDFB] rounded-4xl p-6 md:p-8 space-y-5"
    >
      <h2 className="text-xl font-black text-[#3D3732] mb-2">メールで相談する</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-bold text-[#3D3732] mb-1">
            お名前 <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="山田 太郎"
            required
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#5BAD7F] transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-[#3D3732] mb-1">
            ふりがな
          </label>
          <input
            type="text"
            name="kana"
            value={form.kana}
            onChange={handleChange}
            placeholder="やまだ たろう"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#5BAD7F] transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-[#3D3732] mb-1">
          メールアドレス <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="example@email.com"
          required
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#5BAD7F] transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-[#3D3732] mb-1">
          電話番号
        </label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="090-1234-5678"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#5BAD7F] transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-[#3D3732] mb-1">
          お問い合わせ種別
        </label>
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#5BAD7F] transition-colors bg-white"
        >
          <option value="">選択してください</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-bold text-[#3D3732] mb-1">
          お問い合わせ内容 <span className="text-red-400">*</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="ご質問・ご相談の内容をご記入ください。「まだ具体的に決まっていない」という段階でも歓迎です。"
          required
          rows={5}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#5BAD7F] transition-colors resize-none"
        />
      </div>

      {error && (
        <p className="text-red-500 text-sm bg-red-50 rounded-xl px-4 py-2">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="w-full bg-[#5BAD7F] text-white py-4 rounded-full font-bold text-base hover:bg-[#3D8A60] transition-colors"
      >
        送信する
      </button>

      <p className="text-xs text-[#6B5F58] text-center">
        送信後、2営業日以内にご返信いたします
      </p>
    </form>
  );
}
