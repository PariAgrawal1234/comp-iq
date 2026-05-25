"use client";

import Link from "next/link";
import { salaryData } from "@/data/salaryData";
import { useState } from "react";

export default function SalaryTable() {
  const [search, setSearch] = useState("");
  const [level, setLevel] = useState("All");
  const [location, setLocation] = useState("All");
  const [sort, setSort] = useState("");

  let filteredData = salaryData.filter((salary) => {
    const matchesSearch =
      salary.company.toLowerCase().includes(search.toLowerCase());

    const matchesLevel =
      level === "All" || salary.level === level;

    const matchesLocation =
      location === "All" ||
      salary.location === location;

    return (
      matchesSearch &&
      matchesLevel &&
      matchesLocation
    );
  });

  if (sort === "high") {
    filteredData = [...filteredData].sort(
      (a, b) => b.totalComp - a.totalComp
    );
  }

  if (sort === "low") {
    filteredData = [...filteredData].sort(
      (a, b) => a.totalComp - b.totalComp
    );
  }

  return (
    <div>

      <div className="grid md:grid-cols-4 gap-4 mb-6">

        <input
          type="text"
          placeholder="Search company..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="p-4 rounded-lg bg-slate-900 border border-slate-800"
        />

        <select
          value={level}
          onChange={(e) =>
            setLevel(e.target.value)
          }
          className="p-4 rounded-lg bg-slate-900 border border-slate-800"
        >
          <option>All</option>
          <option>L4</option>
          <option>L63</option>
        </select>

        <select
          value={location}
          onChange={(e) =>
            setLocation(e.target.value)
          }
          className="p-4 rounded-lg bg-slate-900 border border-slate-800"
        >
          <option>All</option>
          <option>Bangalore</option>
          <option>Hyderabad</option>
        </select>

        <select
          value={sort}
          onChange={(e) =>
            setSort(e.target.value)
          }
          className="p-4 rounded-lg bg-slate-900 border border-slate-800"
        >
          <option value="">
            Sort Compensation
          </option>

          <option value="high">
            High → Low
          </option>

          <option value="low">
            Low → High
          </option>

        </select>

      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-800">

        <table className="w-full">

          <thead className="bg-slate-900">

            <tr className="text-left">
              <th className="p-4">Company</th>
              <th className="p-4">Role</th>
              <th className="p-4">Level</th>
              <th className="p-4">Location</th>
              <th className="p-4">Total Compensation</th>
            </tr>

          </thead>

          <tbody>

            {filteredData.map((salary) => (
              <tr
                key={salary.id}
                className="border-t border-slate-800 hover:bg-slate-900">
                <td className="p-4">
                <Link
                    href={`/companies/${salary.company.toLowerCase()}`}
                    className="text-blue-400 hover:text-blue-300 hover:underline">
                    {salary.company}
                </Link>
                </td>
                <td className="p-4">{salary.role}</td>
                <td className="p-4">{salary.level}</td>
                <td className="p-4">{salary.location}</td>
                <td className="p-4">
                  ₹{(salary.totalComp / 100000).toFixed(1)}L
                </td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}