import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "ご利用の流れ | サポートセンターすこやか",
};

const steps = [
  {
    num: "01",
    icon: "📞",
    title: "お問い合わせ",
    color: "#5BAD7F",
    bg: "bg-[#E8F5EE]",
    desc: "まずはお電話またはメールフォームよりご連絡ください。「どんなサービスがあるの？」「費用はどのくらい？」など、どんな小さなご質問でも歓迎です。専任のスタッフが丁寧にお答えします。",
    point: "電話・メールどちらでもOK",
  },
  {
    num: "02",
    icon: "🤝",
    title: "ご相談・アセスメント",
    color: "#59B8C7",
    bg: "bg-[#E7F5F8]",
    desc: "ご本人やご家族と面談を行い、現在の生活状況やお困りごと、どんなサポートが必要かをくわしくうかがいます。担当スタッフがご自宅へ訪問することも可能です。",
    point: "ご自宅への訪問面談も可能",
  },
  {
    num: "03",
    icon: "📋",
    title: "支給申請のサポート",
    color: "#9B7FCC",
    bg: "bg-[#F2EDFA]",
    desc: "サービスを利用するには市区町村の「支給決定」が必要です。手続きが不安な方もご安心ください。申請の流れや必要書類についてスタッフがわかりやすくご説明します。",
    point: "申請手続きのご説明もお任せを",
  },
  {
    num: "04",
    icon: "📝",
    title: "サービス計画の作成",
    color: "#F5A64A",
    bg: "bg-[#FEF3E7]",
    desc: "支給決定を受けたら、担当者がお一人おひとりのご希望・生活リズムに合わせたサービス計画書（個別支援計画）を作成します。内容をご確認いただき、ご同意いただいてから進めます。",
    point: "ご希望に合わせたプランを作成",
  },
  {
    num: "05",
    icon: "🌿",
    title: "サービス開始",
    color: "#5BAD7F",
    bg: "bg-[#E8F5EE]",
    desc: "計画に基づき、担当ヘルパーがご自宅または施設へ伺いサービスを開始します。定期的なモニタリングを行い、状況の変化に合わせて計画を見直すなど継続的にサポートします。",
    point: "開始後もしっかりフォローします",
  },
];

const fees = [
  {
    label: "自己負担",
    value: "原則1割",
    note: "利用したサービス費用の1割をご負担いただきます（所得に応じて上限あり）",
  },
  {
    label: "低所得の方",
    value: "負担なし〜",
    note: "世帯の収入状況によっては自己負担ゼロになる場合があります",
  },
  {
    label: "上限月額",
    value: "最大37,200円",
    note: "一定の上限額が設定されており、それ以上の負担はありません",
  },
];

export default function FlowPage() {
  return (
    <>
      {/* ページヘッダー */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#FEF3E7] to-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="inline-block bg-[#FEF3E7] text-[#F5A64A] px-4 py-1 rounded-full text-sm font-bold mb-4">
            ご利用の流れ
          </div>
          <h1 className="text-4xl font-black text-[#3D3732] mb-4">
            はじめての方も<br />
            <span className="text-[#F5A64A]">安心してご利用いただけます</span>
          </h1>
          <p className="text-[#6B5F58] max-w-xl mx-auto leading-relaxed">
            サービスのご利用はステップに沿って進めていきます。
            各ステップでスタッフがしっかりとサポートしますのでご安心ください。
          </p>
        </div>
      </section>

      {/* ステップ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 80}>
                <div className="flex gap-6">
                  {/* ステップ番号と縦線 */}
                  <div className="flex flex-col items-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center text-white font-black text-xl flex-shrink-0"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.num}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-0.5 h-8 bg-gray-200 mt-2" />
                    )}
                  </div>

                  {/* コンテンツ */}
                  <div className={`${step.bg} rounded-4xl p-6 flex-1 mb-4`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{step.icon}</span>
                      <div>
                        <h2 className="text-xl font-black text-[#3D3732]">
                          {step.title}
                        </h2>
                        <span
                          className="text-xs font-bold"
                          style={{ color: step.color }}
                        >
                          POINT: {step.point}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-[#6B5F58] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 費用について */}
      <section className="py-16 bg-[#F8FDFB]">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-10">
              <div className="inline-block bg-[#E8F5EE] text-[#5BAD7F] px-4 py-1 rounded-full text-sm font-bold mb-3">
                費用について
              </div>
              <h2 className="text-2xl font-black text-[#3D3732]">
                利用料金のご案内
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {fees.map((fee, i) => (
              <ScrollReveal key={fee.label} delay={i * 100}>
                <div className="bg-white rounded-3xl p-6 text-center shadow-sm">
                  <div className="text-sm text-[#6B5F58] mb-1">{fee.label}</div>
                  <div className="text-2xl font-black text-[#5BAD7F] mb-2">
                    {fee.value}
                  </div>
                  <p className="text-xs text-[#6B5F58] leading-relaxed">{fee.note}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="bg-[#E8F5EE] rounded-3xl p-6 text-sm text-[#6B5F58] leading-relaxed">
              <p className="font-bold text-[#3D3732] mb-2">💡 費用について詳しくは</p>
              <p>
                具体的な費用はご利用されるサービスの種類・時間・頻度によって異なります。
                まずはお気軽にご相談ください。概算のご説明をさせていただきます。
                また、市区町村の窓口や相談支援事業所でも確認いただけます。
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-2xl font-black text-[#3D3732] mb-4">
              ご不明な点はお気軽にどうぞ
            </h2>
            <p className="text-[#6B5F58] mb-8 leading-relaxed">
              「手続きが複雑そう…」「どこから始めればいいかわからない」
              そんな方もぜひご連絡ください。一緒に考えます。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#5BAD7F] text-white px-8 py-4 rounded-full font-bold hover:bg-[#3D8A60] transition-colors"
              >
                相談する・問い合わせる
              </Link>
              <a
                href="tel:049-298-3625"
                className="bg-[#F5A64A] text-white px-8 py-4 rounded-full font-bold hover:bg-[#D4832A] transition-colors"
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
