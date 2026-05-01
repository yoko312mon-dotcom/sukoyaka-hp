"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  {
    category: "サービスについて",
    color: "#5BAD7F",
    bg: "bg-[#E8F5EE]",
    items: [
      {
        q: "どんなサービスを提供していますか？",
        a: "居宅介護（ご自宅での身体介護・生活援助・通院介助）、同行援護（視覚障がいのある方の外出サポート）、デイサービス（日中活動支援）の3つのサービスを提供しています。詳しくはサービス紹介ページをご覧ください。",
      },
      {
        q: "障がいの種類や程度に制限はありますか？",
        a: "居宅介護は障がい支援区分1以上の方、同行援護は視覚障がいのある方が対象です。デイサービスは18歳以上の障がいのある方であればご利用いただけます。まずはお気軽にご相談ください。",
      },
      {
        q: "介護保険との違いは何ですか？",
        a: "すこやかのサービスは障害者総合支援法に基づくサービスです。65歳未満の障がいのある方が主な対象となります。介護保険との併用が必要な場合は担当者がご説明します。",
      },
    ],
  },
  {
    category: "費用・手続きについて",
    color: "#F5A64A",
    bg: "bg-[#FEF3E7]",
    items: [
      {
        q: "費用はどのくらいかかりますか？",
        a: "原則としてサービス費用の1割が自己負担です（所得に応じて上限額あり）。世帯の収入状況によっては自己負担ゼロになる場合もあります。詳しくはお問い合わせください。",
      },
      {
        q: "サービスを使うために何か申請が必要ですか？",
        a: "はい。お住まいの市区町村への申請が必要です。申請後に調査を経て「障がい支援区分」が認定され、サービスの支給量が決定します。手続きについてはスタッフが丁寧にご説明しますのでご安心ください。",
      },
      {
        q: "相談支援事業所がないとサービスを使えませんか？",
        a: "相談支援専門員がいない場合でも「セルフプラン」という形でサービスを利用することができます。ご状況に応じてスタッフがご案内します。",
      },
    ],
  },
  {
    category: "はじめての方へ",
    color: "#59B8C7",
    bg: "bg-[#E7F5F8]",
    items: [
      {
        q: "はじめての連絡、何を伝えればいいですか？",
        a: "「サービスについて聞いてみたい」とお伝えいただくだけで構いません。具体的なことが何も決まっていなくても大丈夫です。現在の状況やお困りのことをざっくばらんにお話しください。",
      },
      {
        q: "家族が相談の窓口になれますか？",
        a: "もちろんです。ご本人だけでなく、ご家族・支援者の方からのお問い合わせも歓迎しています。",
      },
      {
        q: "対応エリアはどこですか？",
        a: "埼玉県西部エリア（狭山市・所沢市・入間市・日高市・越生町・鶴ヶ島市・ときがわ町）を中心にサービスを提供しています。エリア外の方もまずはご相談ください。",
      },
    ],
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="w-full text-left py-4 flex items-start justify-between gap-4 hover:text-[#5BAD7F] transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium text-[#3D3732] text-sm md:text-base">
          {q}
        </span>
        <span
          className={`text-xl text-[#5BAD7F] flex-shrink-0 transition-transform ${open ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>
      {open && (
        <div className="pb-4 text-sm text-[#6B5F58] leading-relaxed pl-0">
          {a}
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      {/* ページヘッダー */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#E7F5F8] to-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="inline-block bg-[#E7F5F8] text-[#59B8C7] px-4 py-1 rounded-full text-sm font-bold mb-4">
            よくある質問
          </div>
          <h1 className="text-4xl font-black text-[#3D3732] mb-4">
            FAQ
          </h1>
          <p className="text-[#6B5F58] max-w-xl mx-auto leading-relaxed">
            よくいただくご質問をまとめました。
            こちらに掲載されていない場合もお気軽にお問い合わせください。
          </p>
        </div>
      </section>

      {/* FAQ一覧 */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 space-y-12">
          {faqs.map((category, i) => (
            <ScrollReveal key={category.category} delay={i * 100}>
              <div>
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white font-bold text-sm mb-6"
                  style={{ backgroundColor: category.color }}
                >
                  {category.category}
                </div>
                <div className={`${category.bg} rounded-4xl p-6 md:p-8`}>
                  {category.items.map((item) => (
                    <FaqItem key={item.q} q={item.q} a={item.a} />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#E7F5F8]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-2xl font-black text-[#3D3732] mb-4">
              他にご質問がありましたら
            </h2>
            <p className="text-[#6B5F58] mb-8 leading-relaxed">
              FAQに載っていない質問も、お気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#59B8C7] text-white px-8 py-4 rounded-full font-bold hover:bg-[#3A96A8] transition-colors"
              >
                メールで問い合わせ
              </Link>
              <a
                href="tel:049-298-3625"
                className="border-2 border-[#59B8C7] text-[#59B8C7] px-8 py-4 rounded-full font-bold hover:bg-white transition-colors"
              >
                📞 049-298-3625
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
