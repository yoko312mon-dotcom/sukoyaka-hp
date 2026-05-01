"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { href: "/", label: "ホーム" },
  { href: "/services", label: "サービス" },
  { href: "/flow", label: "ご利用の流れ" },
  { href: "/faq", label: "よくある質問" },
  { href: "/about", label: "私たちについて" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white/90 py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* ロゴ */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-[#5BAD7F] flex items-center justify-center text-white font-bold text-lg">
            す
          </div>
          <div>
            <div className="font-bold text-[#3D3732] text-base leading-tight">
              サポートセンター
            </div>
            <div className="font-black text-[#5BAD7F] text-xl leading-tight tracking-wide">
              すこやか
            </div>
          </div>
        </Link>

        {/* PC ナビゲーション */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.slice(0, 5).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#3D3732] hover:text-[#5BAD7F] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-[#5BAD7F] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-[#3D8A60] transition-colors"
          >
            お問い合わせ
          </Link>
        </nav>

        {/* ハンバーガーボタン */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニュー"
        >
          <span
            className={`block w-6 h-0.5 bg-[#3D3732] transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#3D3732] transition-all ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#3D3732] transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* モバイルメニュー */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-3 text-[#3D3732] font-medium border-b border-gray-50 hover:text-[#5BAD7F] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4">
            <a
              href="tel:049-298-3625"
              className="block text-center bg-[#F5A64A] text-white py-3 rounded-full font-bold"
            >
              📞 049-298-3625
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
