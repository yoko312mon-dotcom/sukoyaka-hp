import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#3D3732] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* ロゴ・概要 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#5BAD7F] flex items-center justify-center text-white font-bold text-lg">
                す
              </div>
              <div>
                <div className="text-white/70 text-sm">サポートセンター</div>
                <div className="font-black text-[#7ECC96] text-xl tracking-wide">
                  すこやか
                </div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              障がいのある方が、地域で自分らしく暮らせるよう
              心をこめてサポートします。
            </p>
          </div>

          {/* メニュー */}
          <div>
            <h3 className="font-bold text-[#7ECC96] mb-4">メニュー</h3>
            <ul className="space-y-2">
              {[
                { href: "/services", label: "サービス紹介" },
                { href: "/flow", label: "ご利用の流れ" },
                { href: "/faq", label: "よくある質問" },
                { href: "/about", label: "私たちについて" },
                { href: "/contact", label: "お問い合わせ" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 連絡先 */}
          <div>
            <h3 className="font-bold text-[#7ECC96] mb-4">お問い合わせ</h3>
            <div className="space-y-3 text-sm text-white/70">
              <div>
                <div className="text-white font-medium">株式会社 和（なごみ）</div>
                <div>サポートセンターすこやか</div>
              </div>
              <div>
                <a
                  href="tel:049-298-3625"
                  className="text-[#F5A64A] font-bold text-lg hover:text-[#F7BD78] transition-colors"
                >
                  📞 049-298-3625
                </a>
                <div className="text-xs mt-1">受付時間：9:00〜18:00（土日祝除く）</div>
              </div>
              <div>
                <div className="text-white/50 text-xs">サービス提供エリア</div>
                <div className="text-xs leading-relaxed mt-1">
                  狭山市・所沢市・入間市・日高市・
                  越生町・鶴ヶ島市・ときがわ町
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <div>© 2025 株式会社 和（なごみ）サポートセンターすこやか. All Rights Reserved.</div>
          <Link href="/privacy" className="hover:text-white/70 transition-colors">
            プライバシーポリシー
          </Link>
        </div>
      </div>
    </footer>
  );
}
