import StatCard from "../components/ui/StatCard";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="space-y-6">

          <span className="px-4 py-2 rounded-full bg-slate-800 text-sm">
            Compensation Intelligence Platform
          </span>
<br />
<br />
          <h1 className="text-5xl font-bold max-w-3xl">
            Compare compensation by level, not just job titles
          </h1>

          <p className="text-slate-400 max-w-2xl">
            Search and compare compensation across companies,
            locations and experience levels.
          </p>

          <div className="flex flex-wrap gap-4">

            <Link
              href="/salaries"
              className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:scale-105 transition"
            >
              Explore Salaries
            </Link>

            <Link
              href="/compare"
              className="border border-slate-700 px-6 py-3 rounded-lg hover:bg-slate-800 transition"
            >
              Compare Companies
            </Link>

          </div>

        </div>


        <div className="grid md:grid-cols-3 gap-6 mt-16">

          <StatCard
            title="Companies"
            value="500+"
          />

          <StatCard
            title="Salary Entries"
            value="50K+"
          />

          <StatCard
            title="Locations"
            value="120+"
          />

        </div>
        <section className="mt-16">

          <h2 className="text-3xl font-bold mb-8">
            Explore Compensation Intelligence
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="
                  bg-slate-900
                  rounded-xl
                  p-6
                  border border-slate-800
                  hover:border-blue-500
                  hover:scale-105
                  transition-all
                  duration-300
                  ">
              <h3 className="font-bold text-lg mb-3">
                📊 Compare Compensation
              </h3>

              <p className="text-slate-400">
                Compare compensation structures across companies.
              </p>
            </div>

            <div className="
                  bg-slate-900
                  rounded-xl
                  p-6
                  border border-slate-800
                  hover:border-blue-500
                  hover:scale-105
                  transition-all
                  duration-300
                  ">
              <h3 className="font-bold text-lg mb-3">
                📈 Salary Trends
              </h3>

              <p className="text-slate-400">
                Analyze compensation patterns and trends.
              </p>
            </div>

            <div className="
                bg-slate-900
                rounded-xl
                p-6
                border border-slate-800
                hover:border-blue-500
                hover:scale-105
                transition-all
                duration-300
                ">
              <h3 className="font-bold text-lg mb-3">
                🏢 Company Insights
              </h3>

              <p className="text-slate-400">
                Explore structured salary information.
              </p>
            </div>

            <div className="
                bg-slate-900
                rounded-xl
                p-6
                border border-slate-800
                hover:border-blue-500
                hover:scale-105
                transition-all
                duration-300
                ">
              <h3 className="font-bold text-lg mb-3">
                🎯 Level Intelligence
              </h3>

              <p className="text-slate-400">
                Compare compensation by level, not title.
              </p>
            </div>

          </div>

        </section>
        <section className="mt-16">

          <h2 className="text-3xl font-bold mb-8">
            Top Paying Companies
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-blue-500 transition">

              <h3 className="text-xl font-bold">
                Google
              </h3>

              <p className="text-slate-400 mt-3">
                Median Compensation
              </p>

              <h2 className="text-3xl font-bold mt-2">
                ₹58L
              </h2>

            </div>

            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-blue-500 transition">

              <h3 className="text-xl font-bold">
                Amazon
              </h3>

              <p className="text-slate-400 mt-3">
                Median Compensation
              </p>

              <h2 className="text-3xl font-bold mt-2">
                ₹45L
              </h2>

            </div>

            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-blue-500 transition">

              <h3 className="text-xl font-bold">
                Microsoft
              </h3>

              <p className="text-slate-400 mt-3">
                Median Compensation
              </p>

              <h2 className="text-3xl font-bold mt-2">
                ₹43L
              </h2>

            </div>

          </div>

        </section>

      </section>

    </main>
  );
}