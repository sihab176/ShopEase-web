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

const colors = [
  "#2d6a4f",
  "#2d6a4f",
  "#2d6a4f",
  "#2d6a4f",
  "#2d6a4f",
  "#2d6a4f",
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

// const COLORS = ["#00C49F", "#e5e7eb"];

const page = () => {
  const [user, setUser] = useState([]);
  const [sellData, setSellData] = useState([]);
  const [allProducts, setAllProduct] = useState([]);
  // sells payment data ------------------>
  useEffect(() => {
    const sellsFun = async () => {
      const res = await fetch(
        "https://shop-ease-six-xi.vercel.app/api/save-payment",
        {
          cache: "no-store",
        }
      );
      const sells = await res.json();
      setSellData(sells);
    };
    sellsFun();
  }, []);
  // product data -------------------------->
  useEffect(() => {
    const Product = async () => {
      const res = await fetch(
        "https://shop-ease-six-xi.vercel.app/api/product",
        {
          cache: "no-store",
        }
      );
      const data = await res.json();
      setAllProduct(data);
    };
    Product();
  }, []);
  // user data------------------------------>
  useEffect(() => {
    const userFan = async () => {
      const res = await fetch(
        "https://shop-ease-six-xi.vercel.app/api/all_user_Api",
        {
          cache: "no-store",
        }
      );
      const data = await res.json();
      setUser(data);
    };
    userFan();
  }, []);
  console.log("this the all user", user);

  return (
    <div className="space-y-8">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800">
        📊 Dashboard Overview
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-gradient-to-r from-[#e0fbfc] to-[#c2dfe3] rounded shadow-lg border-l-4">
          <h2 className="text-lg font-medium">Total Products</h2>
          <p className="text-3xl font-bold">{allProducts.length}</p>
          <p className="text-[10px] text-gray-700 mt-1">
            Products currently listed in the marketplace
          </p>
        </div>

        <div className="p-6 bg-gradient-to-r from-[#e6ccb2] to-[#ddb892] rounded shadow-lg border-l-4">
          <h2 className="text-lg font-medium">Total Sales</h2>
          <p className="text-3xl font-bold">{sellData.length}</p>
          <p className="text-[10px] text-gray-700 mt-1">
            Completed orders processed through the platform
          </p>
        </div>

        <div className="p-6 bg-gradient-to-r from-[#edafb8] to-[#ffb3c6] rounded shadow-lg border-l-4">
          <h2 className="text-lg font-medium">Total Users</h2>
          <p className="text-3xl font-bold">{user.length}</p>
          <p className="text-[10px] text-gray-700 mt-1">
            Active customers registered on your system
          </p>
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
        <div className="col-span-12 md:col-span-4">
          <div
            className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg p-6 
                  hover:shadow-xl  "
          >
            <h2 className="text-xl font-bold text-gray-800 mb-5 flex items-center gap-2">
              📊 Stats Overview
            </h2>

            <div className="space-y-4">
              {/* Item */}
              <div
                className="flex justify-between items-center p-3 rounded-lg bg-gray-50 
                      hover:bg-gray-100 transition"
              >
                <span className="text-gray-600 flex items-center gap-2">
                  🛒 Total Payments
                </span>
                <span className="font-semibold text-gray-900">
                  {sellData.length}
                </span>
              </div>

              <div
                className="flex justify-between items-center p-3 rounded-lg bg-gray-50 
                      hover:bg-gray-100 transition"
              >
                <span className="text-gray-600 flex items-center gap-2">
                  📦 Products
                </span>
                <span className="font-semibold text-gray-900">
                  {allProducts.length}
                </span>
              </div>

              <div
                className="flex justify-between items-center p-3 rounded-lg bg-gray-50 
                      hover:bg-gray-100 transition"
              >
                <span className="text-gray-600 flex items-center gap-2">
                  👤 Users
                </span>
                <span className="font-semibold text-gray-900">
                  {user.length}
                </span>
              </div>

              {/* <div
                className="flex justify-between items-center p-3 rounded-lg bg-gray-50 
                      hover:bg-gray-100 transition"
              >
                <span className="text-gray-600 flex items-center gap-2">
                  💰 Revenue
                </span>
                <span className="font-semibold text-gray-900">$9,234</span>
              </div> */}
            </div>
          </div>
        </div>

        {/* Large Bar Chart */}
        <div className="col-span-12 md:col-span-8 bg-white rounded-xl shadow px-4 pb-12">
          <h2 className="text-lg font-semibold mb-4">Products Price</h2>

          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={allProducts}
              margin={{ top: 20, right: 0, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="brand"
                interval={0}
                angle={-20}
                textAnchor="end"
              />
              <YAxis />
              <Bar
                dataKey="offerPrice"
                shape={TriangleBar}
                label={{ position: "top" }}
              >
                {allProducts.map((_entry, index) => (
                  <Cell key={`cell-${index}`} fill={`#2d6a4f`} />
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
