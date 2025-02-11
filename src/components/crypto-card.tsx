import { Card } from "@/components/ui/card"
import { LineChart, Line, ResponsiveContainer } from "recharts"

interface CryptoCardProps {
    symbol: string
    name: string
    price: number
    pnl: number
    pnlPercentage: number
    chartData: Array<{ value: number }>
    chartColor: string
    iconBg: string
}

export function CryptoCard({
                               symbol,
                               name,
                               price,
                               pnl,
                               pnlPercentage,
                               chartData,
                               chartColor,
                               iconBg,
                           }: CryptoCardProps) {
    return (
        <Card className="p-6 bg-[#202020] border-[#323232]">
            <div className="flex items-center gap-4 mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${iconBg}`}>
                    <span className="text-white font-medium">{symbol.slice(0, 3)}</span>
                </div>
                <div>
                    <h3 className="text-white font-medium">{symbol}</h3>
                    <p className="text-gray-400 text-sm">{name}</p>
                </div>
            </div>
            <div className="mb-4">
                <div className="text-2xl font-bold text-white">${price.toLocaleString()}</div>
                <div className="flex items-center gap-2">
                    <span className={pnl >= 0 ? "text-[#07f8b5]" : "text-[#ff5555]"}>${Math.abs(pnl).toLocaleString()}</span>
                    <span
                        className={`px-2 py-0.5 rounded text-sm ${
                            pnlPercentage >= 0 ? "bg-[#07f8b5]/20 text-[#07f8b5]" : "bg-[#ff5555]/20 text-[#ff5555]"
                        }`}
                    >
            {pnlPercentage >= 0 ? "+" : ""}
                        {pnlPercentage}%
          </span>
                </div>
            </div>
            <div className="h-16">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                        <defs>
                            <linearGradient id={`gradient-${symbol}`} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor={chartColor} stopOpacity={0.5} />
                                <stop offset="100%" stopColor={chartColor} stopOpacity={0.02} />
                            </linearGradient>
                        </defs>
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke={chartColor}
                            strokeWidth={3}
                            dot={false}
                            fill={`url(#gradient-${symbol})`}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </Card>
    )
}

