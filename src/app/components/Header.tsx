"use client";
import Link from "next/link";
import { Search, User, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="absolute top-0 w-full z-50 flex items-center px-6 md:px-12 py-6 bg-transparent text-white">
      {/* LEFT: Branding */}
      <div className="flex-1">
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter uppercase leading-[0.8] font-serif"
        >
          Trip
          <br />
          <span className="text-[#e61e77]">Plan</span>ner
        </Link>
      </div>

      {/* CENTER: Navigation Links (Small, Aligned, Centered) */}
      <nav className="hidden lg:flex flex-1 justify-center items-center gap-10 text-[11px] uppercase tracking-[0.25em] font-bold">
        <div className="flex items-center gap-2 cursor-pointer hover:text-[#e61e77] transition-colors">
          <Search size={18} />
        </div>
        <Link href="#" className="hover:text-[#e61e77] transition-colors">
          Destinations
        </Link>
        <Link href="#" className="hover:text-[#e61e77] transition-colors">
          Experiences
        </Link>
        <Link href="#" className="hover:text-[#e61e77] transition-colors">
          About
        </Link>
        <div className="cursor-pointer hover:text-[#e61e77] transition-colors">
          <Menu size={22} />
        </div>
      </nav>

      {/* RIGHT: Actions */}
      <div className="flex-1 flex justify-end items-center gap-6">
        <span className="hidden md:block text-[12px] font-bold tracking-widest">
          +123456789
        </span>
        <User
          size={20}
          className="cursor-pointer hover:text-[#e61e77] transition-colors"
        />
        <Link
          href="#"
          className="bg-[#e61e77] text-white px-6 py-2.5 text-[10px] uppercase tracking-[0.2em] font-bold transition-transform hover:scale-105"
        >
          Enquire Now
        </Link>
      </div>
    </header>
  );
}
