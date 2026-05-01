import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "お問い合わせ | サポートセンターすこやか",
};

export default function ContactPage() {
  return (
    <>
      {/* ページヘッダー */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#FEF3E7] to-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="inline-block bg-[#FEF3E7] text-[#F5A64A] px-4 py-1 rounded-full text-sm font-bold mb-4">
            お問い合わせ
          </div>
          <h1 className="text-4xl font-black text-[#3D3732] mb-4">
            まずは<span className="text-[#F5A64A]">ご相談ください</span>
          </h1>
          <p className="text-[#6B5F58] max-w-xl mx-auto leading-relaxed">
            「どんなサービスが使えるの？」「費用は？」「どこに申請すればいいの？」——
            どんな小さなご質問でもお気軽にどうぞ。
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 左：連絡先 */}
            <div className="md:col-span-1 space-y-4">
              <ScrollReveal>
                <div className="bg-[#E8F5EE] rounded-3xl p-6">
                  <div className="text-2xl mb-2">📞</div>
                  <h3 className="font-black text-[#3D3732] mb-1">電話で相談</h3>
                  <a
                    href="tel:049-298-3625"
                    className="text-2xl font-black text-[#5BAD7F] block mb-1"
                  >
                    049-298-3625
                  </a>
                  <p className="text-xs text-[#6B5F58]">
                    受付時間：9:00〜18:00<br />（土日祝除く）
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="bg-[#FEF3E7] rounded-3xl p-6">
                  <div className="text-2xl mb-2">📍</div>
                  <h3 className="font-black text-[#3D3732] mb-2">対応エリア</h3>
                  <p className="text-xs text-[#6B5F58] leading-relaxed">
                    狭山市 / 所沢市 / 入間市 / 日高市 / 越生町 / 鶴ヶ島市 / ときがわ町
                  </p>
                  <p className="text-xs text-[#F5A64A] mt-2 font-medium">
                    ※ エリア外の方もご相談ください
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="bg-[#F2EDFA] rounded-3xl p-6">
                  <div className="text-2xl mb-2">💡</div>
                  <h3 className="font-black text-[#3D3732] mb-2">こんな方へ</h3>
                  <ul className="text-xs text-[#6B5F58] space-y-1">
                    <li>✓ はじめてサービスを検討している</li>
                    <li>✓ 今のサービスから乗り換えたい</li>
                    <li>✓ 家族のことを相談したい</li>
                    <li>✓ 手続きの方法を知りたい</li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* 右：フォーム */}
            <div className="md:col-span-2">
              <ScrollReveal delay={100}>
                <ContactForm />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
