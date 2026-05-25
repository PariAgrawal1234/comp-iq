"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Salaries", href: "/salaries" },
    { name: "Compare", href: "/compare" },
  ];

  return (
    <nav className="border-b border-slate-800 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link href="/" className="text-2xl font-bold">
          CompIQ
        </Link>

        <div className="flex gap-6">

          {links.map((link)=>(
            <Link
              key={link.href}
              href={link.href}
              className={`transition ${
                pathname === link.href
                  ? "text-blue-400 font-semibold"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}

        </div>

      </div>
    </nav>
  );
}