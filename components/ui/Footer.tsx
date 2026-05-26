import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        <div>

          <h2 className="text-2xl font-bold text-white mb-4">
            CompIQ
          </h2>

          <p className="text-slate-400">
            Compensation intelligence platform focused on
            structured salary insights and comparison.
          </p>

        </div>

        <div>

          <h3 className="font-semibold mb-4 text-white">
            Platform
          </h3>

          <div className="flex flex-col gap-2">

            <Link
              href="/salaries"
              className="text-slate-400 hover:text-white"
            >
              Salary Explorer
            </Link>

            <Link
              href="/compare"
              className="text-slate-400 hover:text-white"
            >
              Compare Companies
            </Link>

          </div>

        </div>

        <div>

          <h3 className="font-semibold mb-4 text-white">
            Built With
          </h3>

          <div className="flex flex-col gap-2 text-slate-400">

            <p>Next.js</p>
            <p>TypeScript</p>
            <p>TailwindCSS</p>

          </div>

        </div>

      </div>

      <div className="text-center text-slate-500 border-t border-slate-800 py-4">

        © 2026 CompIQ

      </div>

    </footer>
  );
}