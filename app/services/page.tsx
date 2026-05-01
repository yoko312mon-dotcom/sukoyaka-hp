import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "サービス紹介 | サポートセンターすこやか",
  description:
    "居宅介護・同行援護・デイサービスの3つのサービスで、障がいのある方の在宅生活をサポートします。",
};

const services = [
  {
    id: "kyotaku",
    color: "#5BAD7F",
    bg: "bg-[#E8F5EE]",
    icon: "🏠",
    title: "居宅介護",
    subtitle: "ご自宅での日常生活をサポート",
    desc: "障がいのある方が住み慣れたご自宅で生活できるよう、入浴・食事・排せつなどの身体介護や、掃除・洗濯・調理などの家事援助、通院のお手伝いをします。",
    details: [
      {
        category: "身体介護",
        items: ["入浴介助・清拭・洗髪", "排せつ介助", "食事介助", "衣服の着脱補助", "通院介助"],
      },
      {
        category: "生活援助",
        items: ["掃除・片づけ", "洗濯・衣類の整理", "食事の調理・配膳", "買い物の代行", "薬の受け取り"],
      },
    ],
    target: "身体障がい・知的障がい・精神障がいのある方（障がい支援区分1以上）",
    note: "障害者総合支援法に基づくサービスです。市区町村から支給決定を受けた方がご利用いただけます。",
  },
  {
    id: "douko",
    color: "#59B8C7",
    bg: "bg-[#E7F5F8]",
    icon: "👁",
    title: "同行援護",
    subtitle: "視覚障がいのある方の外出をサポート",
    desc: "視覚障がいのある方が安心して外出できるよう、移動のサポートや情報提供を行います。通院・買い物・娯楽など、行きたい場所へのお出かけをご一緒します。",
    details: [
      {
        category: "サポート内容",
        items: [
          "移動の際の誘導・補助",
          "外出先での情報提供（文字の読み取りなど）",
          "通院・行政手続きの付き添い",
          "買い物・趣味・娯楽への外出",
          "その他の外出全般",
        ],
      },
    ],
    target: "視覚障がいのある方（障害者手帳をお持ちの方）",
    note: "一人では外出が困難な視覚障がいのある方が対象です。",
  },
  {
    id: "day",
    color: "#F5A64A",
    bg: "bg-[#FEF3E7]",
    icon: "☀️",
    title: "デイサービス",
    subtitle: "日中を楽しく過ごせる場所",
    desc: "18歳以上の障がいのある方が、日中に安心して楽しめる活動の場を提供します。入浴・食事の提供はもちろん、散歩・運動・レクリエーションなど充実のプログラムをご用意しています。",
    details: [
      {
        category: "サービス内容",
        items: [
          "入浴サービス",
          "食事の提供",
          "散歩・外出活動",
          "運動・体操",
          "レクリエーション・創作活動",
          "生活技能の向上支援",
        ],
      },
    ],
    target: "18歳以上の障がいのある方",
    note: "飯能市・入間市・所沢市を中心にサービスを提供しています。送迎サービスについてはご相談ください。",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ページヘッダー */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#F0FAF4] to-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="inline-block bg-[#E8F5EE] text-[#5BAD7F] px-4 py-1 rounded-full text-sm font-bold mb-4">
            サービス紹介
          </div>
          <h1 className="text-4xl font-black text-[#3D3732] mb-4">
            3つのサービスで<br />
            <span className="text-[#5BAD7F]">在宅生活をサポート</span>
          </h1>
          <p className="text-[#6B5F58] max-w-xl mx-auto leading-relaxed">
            すこやかは、障がいのある方が地域で自分らしく生活できるよう、
            必要なサポートを提供しています。
          </p>
        </div>
      </section>

      {/* 各サービス詳細 */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, i) => (
              <ScrollReveal key={service.id} delay={100}>
                <div id={service.id} className="scroll-mt-24">
                  <div className={`${service.bg} rounded-4xl p-8 md:p-12`}>
                    <div className="flex flex-col md:flex-row gap-8">
                      {/* 左：タイトル */}
                      <div className="md:w-1/3">
                        <div className="text-6xl mb-4">{service.icon}</div>
                        <h2
                          className="text-3xl font-black mb-2"
                          style={{ color: service.color }}
                        >
                          {service.title}
                        </h2>
                        <p className="text-[#6B5F58] font-medium mb-4">
                          {service.subtitle}
                        </p>
                        <p className="text-[#6B5F58] text-sm leading-relaxed">
                          {service.desc}
                        </p>
                      </div>

                      {/* 右：詳細 */}
                      <div className="md:w-2/3 space-y-6">
                        {service.details.map((detail) => (
                          <div key={detail.category}>
                            <h3
                              className="font-bold text-sm mb-3 px-3 py-1 rounded-full inline-block text-white"
                              style={{ backgroundColor: service.color }}
                            >
                              {detail.category}
                            </h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {detail.items.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-2 text-sm text-[#3D3732]"
                                >
                                  <span
                                    className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs"
                                    style={{ backgroundColor: service.color }}
                                  >
                                    ✓
                                  </span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}

                        {/* 対象 */}
                        <div className="bg-white/70 rounded-2xl p-4">
                          <div
                            className="text-xs font-bold mb-1"
                            style={{ color: service.color }}
                          >
                            対象となる方
                          </div>
                          <p className="text-sm text-[#3D3732]">{service.target}</p>
                        </div>

                        {/* 備考 */}
                        <div className="text-xs text-[#6B5F58] bg-white/50 rounded-xl p-3">
                          ※ {service.note}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#E8F5EE]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-2xl font-black text-[#3D3732] mb-4">
              サービスについて詳しく聞きたい方へ
            </h2>
            <p className="text-[#6B5F58] mb-8 leading-relaxed">
              「自分（家族）はどのサービスが使えるの？」など、
              どんなご質問でもお気軽にご連絡ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#5BAD7F] text-white px-8 py-4 rounded-full font-bold hover:bg-[#3D8A60] transition-colors"
              >
                お問い合わせ
              </Link>
              <Link
                href="/flow"
                className="border-2 border-[#5BAD7F] text-[#5BAD7F] px-8 py-4 rounded-full font-bold hover:bg-white transition-colors"
              >
                ご利用の流れを見る
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
