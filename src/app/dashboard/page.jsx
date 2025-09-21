"use client";
import React from "react";
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
} from "recharts";

const lineData = [
  { name: "Jan", value: 200 },
  { name: "Feb", value: 270 },
  { name: "Mar", value: 200 },
  { name: "Apr", value: 400 },
];

const barData = [
  { name: "A", uv: 300, pv: 456 },
  { name: "B", uv: 145, pv: 230 },
  { name: "C", uv: 100, pv: 345 },
  { name: "D", uv: 8, pv: 450 },
];

const pieData = [
  { name: "Completed", value: 65 },
  { name: "Remaining", value: 35 },
];
const COLORS = ["#00C49F", "#e5e7eb"];

const page = () => {
  return (
    <div className="space-y-8">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800">
        📊 Dashboard Overview
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded shadow-lg text-white">
          <h2 className="text-lg font-medium">Total Products</h2>
          <p className="text-3xl font-bold">120</p>
        </div>

        <div className="p-6 bg-gradient-to-r from-green-500 to-teal-500 rounded shadow-lg text-white">
          <h2 className="text-lg font-medium">Orders</h2>
          <p className="text-3xl font-bold">350</p>
        </div>

        <div className="p-6 bg-gradient-to-r from-pink-500 to-rose-600 rounded shadow-lg text-white">
          <h2 className="text-lg font-medium">Users</h2>
          <p className="text-3xl font-bold">78</p>
        </div>
      </div>

      <div className="p-6 grid grid-cols-12 gap-6">
        {/* Top Line Chart */}
        <div className="col-span-12 bg-white rounded-xl shadow p-4">
          <h2 className="text-lg font-semibold mb-2">Sales Overview</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={lineData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#6366f1"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Three small widgets */}
        <div className="col-span-12 md:col-span-4 bg-white rounded-xl shadow p-4 flex flex-col items-center justify-center">
          <h2 className="text-md font-semibold mb-2">Progress</h2>
          <PieChart width={120} height={120}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={50}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
          <p className="font-bold text-xl">65%</p>
        </div>

        <div className="col-span-12 md:col-span-4 bg-white rounded-xl shadow p-4">
          <h2 className="text-md font-semibold mb-2">Monthly Growth</h2>
          <ResponsiveContainer width="100%" height={120}>
            <LineChart data={lineData}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="#10b981"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="col-span-12 md:col-span-4 bg-white rounded-xl shadow p-4">
          <h2 className="text-md font-semibold mb-2">Bar Analytics</h2>
          <ResponsiveContainer width="100%" height={120}>
            <BarChart data={barData}>
              <Bar dataKey="uv" fill="#f59e0b" />
            </BarChart>
          </ResponsiveContainer>
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
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="pv" fill="#3b82f6" />
              <Bar dataKey="uv" fill="#f97316" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default page;
