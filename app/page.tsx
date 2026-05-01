import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    color: "bg-[#E8F5EE] text-[#5BAD7F]",
    border: "border-[#5BAD7F]",
    icon: "🏠",
    title: "居宅介護",
    desc: "ご自宅での入浴・食事・排せつなどの身体介護や、生活援助（掃除・洗濯・調理など）をサポートします。",
    link: "/services#kyotaku",
  },
  {
    color: "bg-[#E7F5F8] text-[#59B8C7]",
    border: "border-[#59B8C7]",
    icon: "👁",
    title: "同行援護",
    desc: "視覚障がいのある方の外出をお手伝いします。通院・買い物・お出かけなど、行きたい場所へご一緒します。",
    link: "/services#douko",
  },
  {
    color: "bg-[#FEF3E7] text-[#F5A64A]",
    border: "border-[#F5A64A]",
    icon: "☀️",
    title: "デイサービス",
    desc: "日中の活動・入浴・食事・レクリエーションなど、楽しく充実した時間を過ごせる場を提供します。",
    link: "/services#day",
  },
];

const features = [
  {
    icon: "💚",
    title: "一人ひとりに\n寄り添うサポート",
    desc: "ご本人の「こうしたい」という気持ちを大切に、生活スタイルに合わせた支援を行います。",
    bg: "bg-[#E8F5EE]",
  },
  {
    icon: "🤝",
    title: "経験豊富な\nスタッフ",
    desc: "資格を持つヘルパーが丁寧に対応。気兼ねなくご相談いただける関係づくりを大切にしています。",
    bg: "bg-[#E7F5F8]",
  },
  {
    icon: "📍",
    title: "地域密着で\n安心",
    desc: "埼玉県西部エリアを中心に、地域に根ざした身近なサービスを提供しています。",
    bg: "bg-[#FEF3E7]",
  },
  {
    icon: "📞",
    title: "相談しやすい\n窓口",
    desc: "はじめての方も安心。サービスの内容やご利用方法について、いつでもお気軽にご相談ください。",
    bg: "bg-[#FEF0F3]",
  },
];

const flowSteps = [
  { num: "01", title: "お問い合わせ", desc: "電話またはメールでお気軽にご連絡ください。" },
  { num: "02", title: "ご相談・面談", desc: "ご本人・ご家族のご希望やお困りごとをうかがいます。" },
  { num: "03", title: "サービス計画の作成", desc: "担当者がお一人おひとりに合ったプランを作成します。" },
  { num: "04", title: "サービス開始", desc: "ご自宅や施設へスタッフが伺い、支援を開始します。" },
];

const areas = [
  "狭山市", "所沢市", "入間市", "日高市", "越生町", "鶴ヶ島市", "ときがわ町",
];

export default function HomePage() {
  return (
    <>
      {/* ヒーローセクション */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-gradient-to-br from-[#F0FAF4] via-white to-[#EBF7FA]">
        {/* 背景の装飾 */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#5BAD7F]/10 blob -z-0" />
        <div className="absolute bottom-10 left-0 w-72 h-72 bg-[#59B8C7]/10 blob -z-0" style={{ animationDelay: "2s" }} />
        <div className="absolute top-40 left-1/4 w-48 h-48 bg-[#F5A64A]/10 blob -z-0" style={{ animationDelay: "4s" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
          <div className="max-w-2xl">
            {/* タグライン */}
            <div className="inline-flex items-center gap-2 bg-[#5BAD7F]/10 text-[#5BAD7F] px-4 py-2 rounded-full text-sm font-bold mb-6">
              <span>🌿</span>
              <span>埼玉県西部エリアの障がい福祉サービス</span>
            </div>

            {/* メインキャッチコピー */}
            <h1 className="text-4xl md:text-5xl font-black text-[#3D3732] leading-tight mb-6">
              あなたらしい毎日を、<br />
              <span className="text-[#5BAD7F]">一緒に</span>つくりたい。
            </h1>

            <p className="text-lg text-[#6B5F58] leading-relaxed mb-10">
              サポートセンターすこやかは、障がいのある方が地域で自分らしく暮らせるよう、
              居宅介護・同行援護・デイサービスを通じて心をこめてサポートする事業所です。
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-[#5BAD7F] text-white px-8 py-4 rounded-full font-bold text-lg text-center hover:bg-[#3D8A60] transition-all hover:shadow-lg"
              >
                まずはご相談ください
              </Link>
              <Link
                href="/services"
                className="border-2 border-[#5BAD7F] text-[#5BAD7F] px-8 py-4 rounded-full font-bold text-lg text-center hover:bg-[#E8F5EE] transition-all"
              >
                サービスを見る
              </Link>
            </div>

            {/* 電話番号 */}
            <div className="mt-8 flex items-center gap-3">
              <a
                href="tel:049-298-3625"
                className="flex items-center gap-2 text-[#F5A64A] font-black text-2xl hover:opacity-80 transition-opacity"
              >
                <span className="text-3xl">📞</span>
                049-298-3625
              </a>
              <span className="text-sm text-[#6B5F58]">受付 9:00〜18:00（土日祝除く）</span>
            </div>
          </div>
        </div>

        {/* 右側のイラスト的要素 */}
        <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-4">
          {[
            { color: "bg-[#5BAD7F]", text: "居宅介護", icon: "🏠" },
            { color: "bg-[#59B8C7]", text: "同行援護", icon: "👁" },
            { color: "bg-[#F5A64A]", text: "デイサービス", icon: "☀️" },
          ].map((item) => (
            <div
              key={item.text}
              className={`${item.color} text-white rounded-3xl px-6 py-4 text-center shadow-lg animate-float`}
              style={{ animationDelay: `${Math.random() * 2}s` }}
            >
              <div className="text-3xl mb-1">{item.icon}</div>
              <div className="font-bold text-sm">{item.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* サービス紹介 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="inline-block bg-[#E8F5EE] text-[#5BAD7F] px-4 py-1 rounded-full text-sm font-bold mb-3">
                サービス紹介
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#3D3732]">
                3つのサービスで<br className="md:hidden" />
                <span className="text-[#5BAD7F]">生活をサポート</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 100}>
                <Link href={s.link} className="block">
                  <div className={`${s.color.split(" ")[0]} rounded-4xl p-8 card-hover border-2 ${s.border} h-full`}>
                    <div className="text-5xl mb-4">{s.icon}</div>
                    <h3 className={`text-xl font-black mb-3 ${s.color.split(" ")[1]}`}>
                      {s.title}
                    </h3>
                    <p className="text-[#6B5F58] text-sm leading-relaxed">{s.desc}</p>
                    <div className={`mt-4 text-sm font-bold ${s.color.split(" ")[1]}`}>
                      詳しく見る →
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-10">
              <Link
                href="/services"
                className="inline-block border-2 border-[#5BAD7F] text-[#5BAD7F] px-8 py-3 rounded-full font-bold hover:bg-[#E8F5EE] transition-colors"
              >
                サービス詳細を見る
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* すこやかの特長 */}
      <section className="py-20 bg-[#F8FDFB]">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="inline-block bg-[#E8F5EE] text-[#5BAD7F] px-4 py-1 rounded-full text-sm font-bold mb-3">
                すこやかの特長
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#3D3732]">
                選ばれる<span className="text-[#5BAD7F]">4つの理由</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 100}>
                <div className={`${f.bg} rounded-4xl p-8 flex gap-5 card-hover`}>
                  <div className="text-4xl flex-shrink-0">{f.icon}</div>
                  <div>
                    <h3 className="text-lg font-black text-[#3D3732] mb-2 whitespace-pre-line">
                      {f.title}
                    </h3>
                    <p className="text-[#6B5F58] text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ご利用の流れ（ダイジェスト） */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="inline-block bg-[#FEF3E7] text-[#F5A64A] px-4 py-1 rounded-full text-sm font-bold mb-3">
                ご利用の流れ
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#3D3732]">
                <span className="text-[#F5A64A]">4ステップ</span>ではじめられます
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {flowSteps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 100}>
                <div className="relative text-center">
                  {i < flowSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 right-0 translate-x-1/2 text-[#5BAD7F] text-2xl z-10">
                      →
                    </div>
                  )}
                  <div className="bg-[#5BAD7F] text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-black mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-black text-[#3D3732] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#6B5F58] leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-10">
              <Link
                href="/flow"
                className="inline-block border-2 border-[#F5A64A] text-[#F5A64A] px-8 py-3 rounded-full font-bold hover:bg-[#FEF3E7] transition-colors"
              >
                詳しい流れを見る
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 対応エリア */}
      <section className="py-20 bg-[#E8F5EE]">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-10">
              <div className="inline-block bg-white text-[#5BAD7F] px-4 py-1 rounded-full text-sm font-bold mb-3">
                対応エリア
              </div>
              <h2 className="text-3xl font-black text-[#3D3732]">
                埼玉県西部エリアに<span className="text-[#5BAD7F]">対応</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {areas.map((area) => (
                <span
                  key={area}
                  className="bg-white text-[#5BAD7F] font-bold px-5 py-2 rounded-full shadow-sm text-sm"
                >
                  📍 {area}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-center text-[#6B5F58] text-sm">
              上記エリア以外の方もまずはお問い合わせください。対応可能な場合があります。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-20 bg-[#3D3732] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#5BAD7F] blob" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#59B8C7] blob" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <ScrollReveal>
            <div className="text-4xl mb-4">🌿</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              まずはお気軽に<br />
              <span className="text-[#7ECC96]">ご相談ください</span>
            </h2>
            <p className="text-white/70 leading-relaxed mb-10">
              「どんなサービスが使えるの？」「費用はどのくらい？」
              どんな小さなご不明点でもお気軽にどうぞ。
              はじめての方も丁寧にご説明します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#5BAD7F] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#3D8A60] transition-all"
              >
                メールで相談する
              </Link>
              <a
                href="tel:049-298-3625"
                className="bg-[#F5A64A] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#D4832A] transition-all"
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
