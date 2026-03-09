import { useNavigate } from "react-router-dom";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import investorData from "../../../data/investorData";

/* ---------- CUSTOM TOOLTIP ---------- */
function CustomTooltip({ active, payload }) {
  if (!active || !payload || !payload.length) return null;

  const item = payload[0];
  const name = item.name;
  const value = item.value;
  const data = item.payload;
  const index = data.__index;

  let growth = null;

  if (index > 0) {
    const prev = investorData.chart[index - 1][name];
    if (prev) {
      growth = (((value - prev) / prev) * 100).toFixed(1);
    }
  }

  return (
    <div className="bg-[#2F4B6E]/90 backdrop-blur-md px-4 py-3 rounded-xl shadow-xl text-white text-xs sm:text-sm min-w-[180px] border border-white/20">

      <p className="font-semibold text-[14px] mb-1 text-purple-400">
        {name}
      </p>

      <div className="border-t border-dashed border-white/30 my-1" />

      <p className="flex justify-between">
        <span>Portfolio Value</span>
        <span className="font-semibold">
          ₹{value.toLocaleString("en-IN")}
        </span>
      </p>

      {growth !== null && (
        <p
          className={`mt-1 font-medium ${
            growth >= 0 ? "text-green-400" : "text-red-400"
          }`}
        >
          {growth >= 0 ? "▲" : "▼"} Growth {growth}%
        </p>
      )}
    </div>
  );
}

export default function InvestorCard() {
  const navigate = useNavigate();

  const chart = investorData.chart.map((item, index) => ({
    ...item,
    __index: index,
  }));

  const { shareholders } = investorData;

  return (
    <div
      className="
      w-full
      lg:h-[550px]
      mx-auto
      bg-[rgba(49,51,55,0.1)]
      backdrop-blur-[2px]
      border border-white/15
      rounded-[24px]
      p-4
      flex flex-col
      gap-4
      text-white
      overflow-hidden
      "
    >

      {/* TITLE */}
      <h2 className="text-md sm:text-lg font-semibold">
        Investor & Shareholders
      </h2>

      {/* CHART */}
      <div className="h-[180px] sm:h-[200px] lg:h-[200px]">

        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chart}>

            <CartesianGrid
              stroke="rgba(255,255,255,0.15)"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="month"
              stroke="rgba(255,255,255,0.6)"
              tick={{ fontSize: 11 }}
            />

            <YAxis
              domain={[0, 450000]}
              stroke="rgba(255,255,255,0.6)"
              tick={{ fontSize: 11 }}
              tickFormatter={(v) => {
                if (v >= 100000) return v / 100000 + "L";
                if (v >= 1000) return v / 1000 + "k";
                return v;
              }}
            />

            <Tooltip content={<CustomTooltip />} />

            <Line
              dataKey="Rajesh"
              stroke="#8979FF"
              strokeWidth={2.5}
              dot={{ r: 4 }}
            />

            <Line
              dataKey="Yash"
              stroke="#FFE88A"
              strokeWidth={2.5}
              dot={{ r: 4 }}
            />

            <Line
              dataKey="Parth"
              stroke="#0fa354"
              strokeWidth={2.5}
              dot={{ r: 4 }}
            />

            <Line
              dataKey="Piyush"
              stroke="#2e967a"
              strokeWidth={2.5}
              dot={{ r: 4 }}
            />

          </LineChart>
        </ResponsiveContainer>

      </div>

      {/* SHAREHOLDER TABLE */}
      <div className="bg-[#29354D]/50 rounded-[16px] border border-white/20 p-3 flex flex-col flex-1 overflow-hidden">

        {/* HEADER */}
        <div className="grid grid-cols-[2fr_0.8fr_1.2fr_1fr] text-xs sm:text-sm text-white/70 pb-2 border-b border-white/15">
          <span>Name</span>
          <span>Shares</span>
          <span>Dividend</span>
          <span>Total</span>
        </div>

        {/* BODY */}
        <div className="mt-2 flex-1 overflow-y-auto pr-1">

          {shareholders.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[2fr_0.8fr_1.2fr_1fr] items-center h-[38px] text-xs sm:text-sm rounded-lg px-2 hover:bg-white/10 transition"
            >

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400">
                  👤
                </div>

                <span>{item.name}</span>
              </div>

              <span>{item.shares}</span>
              <span>₹{item.dividend.toLocaleString()}</span>
              <span>₹{item.total.toLocaleString()}</span>

            </div>
          ))}
        </div>

        {/* TOTAL */}
        <div className="flex justify-between text-xs sm:text-sm font-medium pt-2 mt-2 border-t border-white/15">
          <span>Total Invested</span>
          <span>₹30,000</span>
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex flex-col sm:flex-row gap-3">

        <button
          onClick={() => navigate("/buy-shares")}
          className="flex-1 bg-[#D7E4F8] hover:bg-[#C3D6F3] rounded-lg py-2 font-medium text-[#1F3A5F] text-sm"
        >
          Buy Shares
        </button>

        <button
          onClick={() => navigate("/sell-shares")}
          className="flex-1 bg-[#FFD24A] hover:bg-[#FACC15] transition rounded-lg py-2 font-medium text-black text-sm"
        >
          Sell Shares
        </button>

      </div>
    </div>
  );
}