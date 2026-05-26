"use client";

import { useState } from "react";
import { salaryData } from "@/data/salaryData";
import CompChart from "@/components/charts/CompChart";

export default function ComparePage() {
  const [company1, setCompany1] = useState("Google");
  const [company2, setCompany2] = useState("Amazon");

  const data1 = salaryData.find(
    (item) => item.company === company1
  );

  const data2 = salaryData.find(
    (item) => item.company === company2
  );

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-3">
          Compare Compensation
        </h1>

        <p className="text-slate-400 mb-8">
          Compare compensation structures across companies.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">

          <select
            value={company1}
            onChange={(e)=>setCompany1(e.target.value)}
            className="p-4 rounded-lg bg-slate-900 border border-slate-800"
          >
            {salaryData.map((item)=>(
              <option
                key={item.id}
              >
                {item.company}
              </option>
            ))}
          </select>

          <select
            value={company2}
            onChange={(e)=>setCompany2(e.target.value)}
            className="p-4 rounded-lg bg-slate-900 border border-slate-800"
          >
            {salaryData.map((item)=>(
              <option
                key={item.id}
              >
                {item.company}
              </option>
            ))}
          </select>

        </div>

        {data1 && data2 && (

        <>

        <div className="overflow-hidden rounded-xl border border-slate-800">

          <table className="w-full">

            <thead className="bg-slate-900">

              <tr>

                <th className="p-4 text-left">
                  Component
                </th>

                <th className="p-4 text-left">
                  {company1}
                </th>

                <th className="p-4 text-left">
                  {company2}
                </th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-t border-slate-800">
                <td className="p-4">Base</td>
                <td className="p-4">₹{data1.base/100000}L</td>
                <td className="p-4">₹{data2.base/100000}L</td>
              </tr>

              <tr className="border-t border-slate-800">
                <td className="p-4">Bonus</td>
                <td className="p-4">₹{data1.bonus/100000}L</td>
                <td className="p-4">₹{data2.bonus/100000}L</td>
              </tr>

              <tr className="border-t border-slate-800">
                <td className="p-4">Equity</td>
                <td className="p-4">₹{data1.equity/100000}L</td>
                <td className="p-4">₹{data2.equity/100000}L</td>
              </tr>

              <tr className="border-t border-slate-800 font-bold">
                <td className="p-4">
                  Total Compensation
                </td>

                <td className="p-4">
                  ₹{data1.totalComp/100000}L
                </td>

                <td className="p-4">
                  ₹{data2.totalComp/100000}L
                </td>

              </tr>

              <tr className="border-t border-slate-800">

                <td className="p-4">
                  Difference
                </td>

                <td
                  colSpan={2}
                  className="p-4 text-blue-400 font-semibold"
                >
                  {(
                    (
                      Math.abs(
                        data1.totalComp -
                        data2.totalComp
                      )/
                      Math.min(
                        data1.totalComp,
                        data2.totalComp
                      )
                    )*100
                  ).toFixed(1)}

                  % difference

                </td>

              </tr>

            </tbody>

          </table>

        </div>


        <CompChart
          company1={company1}
          company2={company2}
          value1={data1.totalComp}
          value2={data2.totalComp}
        />


        <div className="grid md:grid-cols-2 gap-6 mt-8">

          <div className="bg-slate-900 p-6 rounded-xl">

            <h3 className="font-bold mb-2">
              Higher Equity Allocation
            </h3>

            <p className="text-slate-400">

              {data1.equity > data2.equity
                ? company1
                : company2}

              {" "}offers stronger equity compensation.

            </p>

          </div>

          <div className="bg-slate-900 p-6 rounded-xl">

            <h3 className="font-bold mb-2">
              Base Salary Leader
            </h3>

            <p className="text-slate-400">

              {data1.base > data2.base
                ? company1
                : company2}

              {" "}has higher base compensation.

            </p>

          </div>

        </div>


        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mt-8">

          <h2 className="text-xl font-semibold mb-4">
            Compensation Insight
          </h2>

          <p className="text-slate-300">

            {data1.totalComp > data2.totalComp
            ? `${company1} compensation is ${(
              (
                (
                  data1.totalComp -
                  data2.totalComp
                )/
                data2.totalComp
              )*100
            ).toFixed(1)}% higher than ${company2}.`

            : `${company2} compensation is ${(
              (
                (
                  data2.totalComp -
                  data1.totalComp
                )/
                data1.totalComp
              )*100
            ).toFixed(1)}% higher than ${company1}.`
            }

          </p>

        </div>

        </>

        )}

      </div>

    </main>
  );
}