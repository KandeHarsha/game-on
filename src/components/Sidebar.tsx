"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { TrophyOutlined, AimOutlined, TeamOutlined, ThunderboltOutlined }  from "@ant-design/icons"

export default function Sidebar() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", icon: TrophyOutlined, label: "Dashboard" },
    { href: "/my-games", icon: AimOutlined , label: "My  Games" },
    { href: "join-game", icon: TeamOutlined, label: "Join Game"},
    { href: "create-game", icon: ThunderboltOutlined , label: "Create Game"},
  ]

  return (
    <nav className="bg-slate-100 text-slate-600 w-64 h-full overflow-y-auto">
      <ul className="space-y-2 p-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center p-2 rounded transition-colors ${
                  isActive ? "bg-indigo-100 text-indigo-700" : "hover:bg-slate-200"
                }`}
              >
                <item.icon className="mr-2" />
                {item.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}



