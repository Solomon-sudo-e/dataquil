"use client"

import { Search, Bell, TrendingUp, TrendingDown } from 'lucide-react'
import { SidebarNav } from "@/components/sidebar-nav"
import { CryptoCard } from "@/components/crypto-card"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const generateChartData = (trend: "up" | "down" | "volatile") => {
  return Array.from({ length: 20 }, (_, i) => {
    if (trend === "up") {
      return { value: 50 + Math.sin(i / 3) * 20 + i * 2 }
    } else if (trend === "down") {
      return { value: 90 - Math.sin(i / 3) * 20 - i * 2 }
    } else {
      return { value: 70 + Math.sin(i / 2) * 30 }
    }
  })
}

const cryptoCards = [
  {
    symbol: "ETHUSDT",
    name: "Ethereum",
    price: 23738,
    pnl: 189.91,
    pnlPercentage: 24.68,
    chartColor: "#e685ff",
    iconBg: "bg-[#490517]",
    chartData: generateChartData("up"),
  },
  {
    symbol: "SOLUSDT",
    name: "Solana",
    price: 23738,
    pnl: 556.14,
    pnlPercentage: 64.11,
    chartColor: "#f61c7a",
    iconBg: "bg-[#490517]",
    chartData: generateChartData("down"),
  },
  {
    symbol: "BTCUSDT",
    name: "Bitcoin",
    price: 23738,
    pnl: -16.78,
    pnlPercentage: 14.67,
    chartColor: "#ff9b9b",
    iconBg: "bg-[#490517]",
    chartData: generateChartData("volatile"),
  },
  {
    symbol: "BTCUSDT",
    name: "Bitcoin",
    price: 721.6,
    pnl: 25.78,
    pnlPercentage: 14.67,
    chartColor: "#89b9ff",
    iconBg: "bg-[#082e66]",
    chartData: generateChartData("up"),
  },
]

const areaChartData = [
  { name: "30m", value: 15000 },
  { name: "1H", value: 17000 },
  { name: "4H", value: 19000 },
  { name: "1D", value: 21000 },
  { name: "7D", value: 25901 },
]

const stockData = [
  { symbol: "AAPL", name: "Apple Inc.", price: 150.25, change: 2.5, volume: "78.9M" },
  { symbol: "GOOGL", name: "Alphabet Inc.", price: 2750.80, change: -0.8, volume: "1.2M" },
  { symbol: "MSFT", name: "Microsoft Corporation", price: 305.15, change: 1.2, volume: "23.4M" },
  { symbol: "AMZN", name: "Amazon.com, Inc.", price: 3380.50, change: -0.3, volume: "3.1M" },
  { symbol: "TSLA", name: "Tesla, Inc.", price: 735.20, change: 3.2, volume: "21.7M" },
  { symbol: "FB", name: "Meta Platforms, Inc.", price: 330.75, change: -1.5, volume: "15.3M" },
  { symbol: "NVDA", name: "NVIDIA Corporation", price: 220.40, change: 4.1, volume: "32.6M" },
  { symbol: "JPM", name: "JPMorgan Chase & Co.", price: 155.30, change: 0.7, volume: "9.8M" },
]

export default function Home() {
  return (
      <div className="flex h-screen bg-[#202020] overflow-hidden">
        <SidebarNav />
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="flex items-center justify-between p-6 border-b border-[#323232]">
            <h1 className="text-2xl font-bold text-white">Home</h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                    type="search"
                    placeholder="Search..."
                    className="w-64 pl-10 pr-4 py-2 bg-[#323232] border-none rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0060ff]"
                />
              </div>
              <Button variant="ghost" size="icon" className="text-gray-400">
                <Bell size={20} />
              </Button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#323232]" />
                <span className="text-white">John Doe</span>
              </div>
            </div>
          </header>
          <main className="flex-1 overflow-auto p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <Card className="col-span-1 lg:col-span-2 p-6 bg-[#151515] border-[#323232] h-[500px] flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-white mb-1">Assets</h2>
                    <div className="text-3xl font-bold text-white">
                      $25,901.0
                      <span className="text-base ml-1">.41</span>
                      <span className="ml-2 px-2 py-0.5 rounded text-sm bg-[#07f8b5]/20 text-[#07f8b5]">+810%</span>
                    </div>
                    <div className="text-gray-400">$1,521.4</div>
                  </div>
                  <div className="px-3 py-1 rounded bg-[#0060ff]/20 text-[#0060ff]">
                    NYSE
                    <br />
                    15,780.01
                  </div>
                </div>
                <div className="flex-grow bg-[#151515] rounded-lg">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={areaChartData}>
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#0060ff" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#0060ff" stopOpacity={0.01} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#2A2A2A" vertical={false} />
                      <XAxis
                          dataKey="name"
                          stroke="#666"
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: "#666", fontSize: 12 }}
                      />
                      <YAxis
                          stroke="#666"
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: "#666", fontSize: 12 }}
                          tickFormatter={(value) => `$${value.toLocaleString()}`}
                      />
                      <Tooltip
                          contentStyle={{
                            backgroundColor: "#151515",
                            border: "1px solid #323232",
                            borderRadius: "8px",
                            color: "#fff",
                            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                          }}
                          itemStyle={{ color: "#fff" }}
                          labelStyle={{ color: "#666" }}
                      />
                      <Area
                          type="monotone"
                          dataKey="value"
                          stroke="#0060ff"
                          strokeWidth={3}
                          fillOpacity={1}
                          fill="url(#colorValue)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </Card>
              <Card className="col-span-1 p-6 bg-[#151515] border-[#323232] h-[500px] flex flex-col">
                <h2 className="text-xl font-bold text-white mb-4">Stocks</h2>
                <thead>
                <tr className="text-gray-400 text-sm">
                  <th className="pb-2 text-left">Symbol</th>
                  <th className="pb-2 text-right">Price</th>
                  <th className="pb-2 text-right">Change</th>
                  <th className="pb-2 text-right">Volume</th>
                </tr>
                </thead>
                <div className="flex-grow overflow-auto">
                  <table className="w-full">
                    <tbody>
                    {stockData.map((stock) => (
                        <tr key={stock.symbol} className="border-t border-[#323232]">
                          <td className="py-3">
                            <div className="text-white font-medium">{stock.symbol}</div>
                            <div className="text-gray-400 text-sm">{stock.name}</div>
                          </td>
                          <td className="py-3 text-right text-white">${stock.price.toFixed(2)}</td>
                          <td className="py-3 text-right">
                            <div className={`flex items-center justify-end ${stock.change >= 0 ? "text-green-500" : "text-red-500"}`}>
                              {stock.change >= 0 ? <TrendingUp size={10} className="mr-1" /> : <TrendingDown size={10} className="mr-1" />}
                              {stock.change >= 0 ? "+" : ""}{stock.change}%
                            </div>
                          </td>
                          <td className="py-3 text-right text-gray-400">{stock.volume}</td>
                        </tr>
                    ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {cryptoCards.map((card, index) => (
                  <CryptoCard key={index} {...card} />
              ))}
            </div>
          </main>
        </div>
      </div>
  )
}
