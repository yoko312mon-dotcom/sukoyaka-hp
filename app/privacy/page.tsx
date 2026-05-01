export const metadata = {
  title: "プライバシーポリシー | サポートセンターすこやか",
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-black text-[#3D3732] mb-8">
          プライバシーポリシー
        </h1>
        <div className="prose prose-sm text-[#6B5F58] space-y-6">
          <section>
            <h2 className="text-lg font-bold text-[#3D3732] mb-2">
              個人情報の取り扱いについて
            </h2>
            <p className="leading-relaxed">
              株式会社 和（なごみ）（以下「当社」）は、お問い合わせフォーム等を通じてご提供いただく個人情報を、以下の方針に基づき適切に取り扱います。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#3D3732] mb-2">
              収集する情報
            </h2>
            <p className="leading-relaxed">
              お問い合わせ時にお名前・メールアドレス・電話番号・ご相談内容等をご提供いただく場合があります。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#3D3732] mb-2">
              利用目的
            </h2>
            <ul className="list-disc list-inside space-y-1 leading-relaxed">
              <li>お問い合わせへの返答・対応のため</li>
              <li>サービスのご案内のため</li>
              <li>サービス向上のための分析（個人を特定しない形で）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#3D3732] mb-2">
              第三者への提供
            </h2>
            <p className="leading-relaxed">
              当社は、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#3D3732] mb-2">
              お問い合わせ
            </h2>
            <p className="leading-relaxed">
              個人情報の取り扱いに関するご質問は、下記までご連絡ください。<br />
              株式会社 和（なごみ）サポートセンターすこやか<br />
              TEL: 049-298-3625
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
