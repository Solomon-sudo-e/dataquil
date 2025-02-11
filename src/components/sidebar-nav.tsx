import Link from "next/link"
import { Home, LineChart, Wallet, PieChart, HelpCircle, LogOut } from "lucide-react"

export function SidebarNav() {
    return (
        <div className="flex flex-col h-screen w-[240px] bg-[#202020] border-r border-[#323232]">
            <div className="p-6">
                <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white">
                    <span className="text-[#0060ff]">DataQuil</span>
                </Link>
            </div>
            <nav className="flex flex-col gap-2 p-4 flex-grow">
                <Link href="/" className="flex items-center gap-3 px-4 py-2 text-white rounded-lg bg-[#323232]">
                    <Home size={20} />
                    <span>Home</span>
                </Link>
                <Link
                    href="/portfolio"
                    className="flex items-center gap-3 px-4 py-2 text-gray-400 rounded-lg hover:bg-[#323232]"
                >
                    <LineChart size={20} />
                    <span>Portfolio</span>
                </Link>
                <Link
                    href="/strategies"
                    className="flex items-center gap-3 px-4 py-2 text-gray-400 rounded-lg hover:bg-[#323232]"
                >
                    <PieChart size={20} />
                    <span>Strategies</span>
                </Link>
                <Link href="/Analytics" className="flex items-center gap-3 px-4 py-2 text-gray-400 rounded-lg hover:bg-[#323232]">
                    <Wallet size={20} />
                    <span>Analytics</span>
                </Link>
            </nav>
            <div className="mt-auto p-4">
                <Link
                    href="/help"
                    className="flex items-center gap-3 px-4 py-2 text-gray-400 rounded-lg hover:bg-[#323232] mb-2"
                >
                    <HelpCircle size={20} />
                    <span>Help</span>
                </Link>
                <Link href="/logout" className="flex items-center gap-3 px-4 py-2 text-gray-400 rounded-lg hover:bg-[#323232]">
                    <LogOut size={20} />
                    <span>Log Out</span>
                </Link>
            </div>
        </div>
    )
}

