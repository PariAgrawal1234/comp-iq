import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-slate-800 bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

          <Link
            href="/"
            className="text-2xl font-bold"
          >
            CompIQ
          </Link>

          <div className="flex flex-wrap gap-6">

            <Link
              href="/"
              className="text-slate-300 hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/salaries"
              className="text-slate-300 hover:text-white"
            >
              Salaries
            </Link>

            <Link
              href="/compare"
              className="text-slate-300 hover:text-white"
            >
              Compare
            </Link>

          </div>

        </div>

      </div>

    </nav>
  );
}