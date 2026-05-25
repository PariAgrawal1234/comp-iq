import { salaryData } from "@/data/salaryData";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CompanyPage({
  params,
}: Props) {

  const { id } = await params;

  const company = salaryData.find(
    (item) =>
      item.company.toLowerCase() ===
      id.toLowerCase()
  );

  if (!company) {
    return (
      <main className="min-h-screen bg-slate-950 text-white p-8">
        Company not found
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-3">
          {company.company}
        </h1>

        <p className="text-slate-400 mb-10">
          Compensation insights and salary structure
        </p>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-slate-900 rounded-xl p-6">
            <p className="text-slate-400">Base</p>
            <h2 className="text-2xl font-bold">
              ₹{company.base / 100000}L
            </h2>
          </div>

          <div className="bg-slate-900 rounded-xl p-6">
            <p className="text-slate-400">Bonus</p>
            <h2 className="text-2xl font-bold">
              ₹{company.bonus / 100000}L
            </h2>
          </div>

          <div className="bg-slate-900 rounded-xl p-6">
            <p className="text-slate-400">Equity</p>
            <h2 className="text-2xl font-bold">
              ₹{company.equity / 100000}L
            </h2>
          </div>

          <div className="bg-slate-900 rounded-xl p-6">
            <p className="text-slate-400">
              Total Compensation
            </p>

            <h2 className="text-2xl font-bold">
              ₹{company.totalComp / 100000}L
            </h2>
          </div>

        </div>

      </div>

    </main>
  );
}