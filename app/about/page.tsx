import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "私たちについて | サポートセンターすこやか",
};

const values = [
  {
    icon: "🌱",
    color: "#5BAD7F",
    bg: "bg-[#E8F5EE]",
    title: "その人らしさを尊重する",
    desc: "障がいがあっても、その人が「こうしたい」「こんな生活をしたい」という気持ちを大切にします。私たちはその実現を支える存在でありたいと思っています。",
  },
  {
    icon: "💬",
    color: "#59B8C7",
    bg: "bg-[#E7F5F8]",
    title: "対話を大切に",
    desc: "一方的にサービスを提供するのではなく、ご本人・ご家族とじっくり対話しながら支援の内容を決めていきます。遠慮なく何でもお話しください。",
  },
  {
    icon: "🏡",
    color: "#F5A64A",
    bg: "bg-[#FEF3E7]",
    title: "地域とともに",
    desc: "住み慣れた地域で自分らしく暮らし続けられるよう、地域のつながりを大切にしながら支援します。",
  },
];

const info = [
  { label: "事業所名", value: "サポートセンターすこやか" },
  { label: "運営法人", value: "株式会社 和（なごみ）" },
  { label: "代表者", value: "平島 和男" },
  { label: "事業開始", value: "平成27年（2015年）1月" },
  { label: "電話番号", value: "049-298-3625" },
  { label: "受付時間", value: "9:00〜18:00（土日祝除く）" },
  {
    label: "サービス提供エリア",
    value: "狭山市・所沢市・入間市・日高市・越生町・鶴ヶ島市・ときがわ町",
  },
  {
    label: "提供サービス",
    value: "居宅介護・同行援護・デイサービス（生活介護）",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ページヘッダー */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#F2EDFA] to-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="inline-block bg-[#F2EDFA] text-[#9B7FCC] px-4 py-1 rounded-full text-sm font-bold mb-4">
            私たちについて
          </div>
          <h1 className="text-4xl font-black text-[#3D3732] mb-4">
            すこやかの<span className="text-[#9B7FCC]">想い</span>
          </h1>
          <p className="text-[#6B5F58] max-w-xl mx-auto leading-relaxed">
            2015年の創業以来、埼玉県西部エリアで障がいのある方の
            地域生活を支え続けてきました。
          </p>
        </div>
      </section>

      {/* 代表メッセージ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <div className="bg-[#F8FDFB] rounded-4xl p-8 md:p-12">
              <div className="text-4xl mb-4">💌</div>
              <h2 className="text-2xl font-black text-[#3D3732] mb-6">
                代表からのメッセージ
              </h2>
              <div className="space-y-4 text-[#6B5F58] leading-relaxed">
                <p>
                  「自分の生活を、自分で選びたい」—— 私たちがサポートセンターすこやかを立ち上げた理由は、
                  そのシンプルな願いを叶える場所をつくりたかったからです。
                </p>
                <p>
                  障がいのある方が地域で自分らしく暮らすためには、日々の生活の中でのきめ細かいサポートが欠かせません。
                  入浴、食事、外出——当たり前の日常生活が、支援があることで豊かになる。
                  そのお手伝いができることを、私たちはとても光栄に思っています。
                </p>
                <p>
                  小規模な事業所だからこそ、お一人おひとりとじっくり向き合える。
                  経験豊富なスタッフが、誠実に、温かく寄り添います。
                  何でもお気軽にご相談ください。
                </p>
                <p className="font-bold text-[#3D3732] pt-2">
                  代表 平島 和男
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 大切にしていること */}
      <section className="py-16 bg-[#F8FDFB]">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-[#3D3732]">
                大切にしていること
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 100}>
                <div className={`${v.bg} rounded-4xl p-8 text-center card-hover`}>
                  <div className="text-5xl mb-4">{v.icon}</div>
                  <h3
                    className="text-lg font-black mb-3"
                    style={{ color: v.color }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-sm text-[#6B5F58] leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 事業所情報 */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-2xl font-black text-[#3D3732]">事業所情報</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="bg-[#F8FDFB] rounded-4xl overflow-hidden">
              <table className="w-full">
                <tbody>
                  {info.map((item, i) => (
                    <tr
                      key={item.label}
                      className={`${i % 2 === 0 ? "bg-white/60" : ""} border-b border-gray-100 last:border-0`}
                    >
                      <th className="text-left text-sm font-bold text-[#5BAD7F] px-6 py-4 w-36">
                        {item.label}
                      </th>
                      <td className="text-sm text-[#3D3732] px-6 py-4">
                        {item.label === "電話番号" ? (
                          <a
                            href={`tel:${item.value}`}
                            className="text-[#F5A64A] font-bold hover:opacity-80"
                          >
                            {item.value}
                          </a>
                        ) : (
                          item.value
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#E8F5EE]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-2xl font-black text-[#3D3732] mb-4">
              すこやかと一緒に始めませんか
            </h2>
            <p className="text-[#6B5F58] mb-8 leading-relaxed">
              「どんなことをお願いできるの？」から始まって大丈夫です。
              まずはお気軽にご連絡ください。
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#5BAD7F] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#3D8A60] transition-colors"
            >
              お問い合わせする
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
