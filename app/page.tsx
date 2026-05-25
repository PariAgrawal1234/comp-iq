import StatCard from "../components/ui/StatCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="space-y-6">

          <span className="px-4 py-2 rounded-full bg-slate-800 text-sm">
            Compensation Intelligence Platform
          </span>

          <h1 className="text-5xl font-bold max-w-3xl">
            Compare compensation by level, not just job titles
          </h1>

          <p className="text-slate-400 max-w-2xl">
            Search and compare compensation across companies,
            locations and experience levels.
          </p>

          <div className="flex gap-4">

            <button className="bg-white text-black px-6 py-3 rounded-lg font-medium">
              Explore Salaries
            </button>

            <button className="border border-slate-700 px-6 py-3 rounded-lg">
              Compare Companies
            </button>

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

      </section>

    </main>
  );
}