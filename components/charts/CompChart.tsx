"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type ChartProps = {
  company1: string;
  company2: string;
  value1: number;
  value2: number;
};

export default function CompChart({
  company1,
  company2,
  value1,
  value2,
}: ChartProps) {
  const data = [
    {
      name: company1,
      compensation: value1 / 100000,
    },
    {
      name: company2,
      compensation: value2 / 100000,
    },
  ];

  return (
    <div className="bg-slate-900 rounded-xl p-6 mt-8 w-full min-h-[400px]">

      <h2 className="text-xl font-semibold mb-6">
        Total Compensation Comparison
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis
  dataKey="name"
  tick={{ fill: "#CBD5E1" }}
/>

<YAxis
  tick={{ fill: "#CBD5E1" }}
/>
          <Tooltip
  contentStyle={{
    background:"#0F172A",
    border:"1px solid #334155",
    color:"#fff"
  }}
/>
          <Bar
            dataKey="compensation"
            fill="#60A5FA"
            radius={[8, 8, 0, 0]}
            />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}