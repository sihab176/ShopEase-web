"use client";
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ComposedChart,
  CartesianGrid,
  Legend,
  Area,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

// Triangle Style Shape (unchanged)
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
    Z`;
};
const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return (
    <path
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      stroke="none"
      fill={fill}
    />
  );
};

const COLORS = ["#00C49F", "#e5e7eb"];

const page = () => {
  const [sellData, setSellData] = useState([]);
  useEffect(() => {
    const sellsFun = async () => {
      const res = await fetch("http://localhost:3000/api/save-payment", {
        cache: "no-store",
      });
      const sells = await res.json();
      setSellData(sells);
    };
    sellsFun();
  }, []);

  console.log("this is sell data", sellData);

  return (
    <div className="space-y-8">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800">
        📊 Dashboard Overview
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-gradient-to-r from-[#e0fbfc] to-[#c2dfe3] rounded shadow-lg ">
          <h2 className="text-lg font-medium">Total Products</h2>
          <p className="text-3xl font-bold">120</p>
        </div>

        <div className="p-6 bg-gradient-to-r from-[#e6ccb2] to-[#ddb892] rounded shadow-lg ">
          <h2 className="text-lg font-medium">Orders</h2>
          <p className="text-3xl font-bold">350</p>
        </div>

        <div className="p-6 bg-gradient-to-r from-[#edafb8] to-[#ffb3c6] rounded shadow-lg">
          <h2 className="text-lg font-medium">Users</h2>
          <p className="text-3xl font-bold">78</p>
        </div>
      </div>

      <div className="p-6 grid grid-cols-12 gap-6">
        {/* Top Line Chart */}
        <div className="col-span-12 bg-white rounded shadow p-4">
          <h2 className="text-lg font-semibold mb-2">Sales Overview</h2>
          {/* sells charts */}
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <ComposedChart
                width={500}
                height={200}
                data={sellData}
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="amount_total"
                  fill="#e6ccb2"
                  stroke="#8884d8"
                />
                <Bar dataKey="amount_total" barSize={20} fill="#413ea0" />
                {/* <Line type="monotone" dataKey="uv" stroke="#ff7300" /> */}
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right side vertical stats */}
        <div className="col-span-12 md:col-span-4 bg-white rounded-xl shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Stats</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex justify-between">
              <span>Orders</span>
              <span>634</span>
            </li>
            <li className="flex justify-between">
              <span>Products</span>
              <span>541</span>
            </li>
            <li className="flex justify-between">
              <span>Users</span>
              <span>123</span>
            </li>
            <li className="flex justify-between">
              <span>Revenue</span>
              <span>$9,234</span>
            </li>
          </ul>
        </div>

        {/* Large Bar Chart */}
        <div className="col-span-12 md:col-span-8 bg-white rounded-xl shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Performance</h2>

          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 0, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" interval={0} angle={-20} textAnchor="end" />
              <YAxis />
              <Bar dataKey="pv" shape={TriangleBar} label={{ position: "top" }}>
                {data.map((_entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default page;
