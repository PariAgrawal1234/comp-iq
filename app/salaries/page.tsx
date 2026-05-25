import SalaryTable from "@/components/salary/SalaryTable";

export default function SalariesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-3">
          Salary Explorer
        </h1>

        <p className="text-slate-400 mb-8">
          Compare compensation across companies,
          levels and locations.
        </p>

        <SalaryTable />

      </div>

    </main>
  );
}