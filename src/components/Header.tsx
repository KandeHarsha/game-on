"use client"

import Image from "next/image"
import { UserOutlined } from "@ant-design/icons"
import Link from "next/link"
import { Avatar, Dropdown, MenuProps, Select } from 'antd';


export default function Header() {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Link href="/profile" className="block px-4 py-1 hover:bg-slate-100">
          Profile
        </Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link href="/settings" className="block px-4 py-1 hover:bg-slate-100">
          Settings
        </Link>
      ),
      // icon: <SmileOutlined />,
      // disabled: true,
    },
    {
      key: '4',
      danger: true,
      label: (
        <Link href="#" className="block px-4 py-1">
          Logout
        </Link>
      ),
    },
  ];

  return (
    <header className="bg-slate-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Image src="/images/GameOnLogo.webp" alt="Logo" width={32} height={32} />
          <span className="ml-2 text-xl font-bold text-indigo-100" style={{ fontFamily: "'Fontdiner Swanky', cursive" }}>
            Game On
          </span>
        </div>

        <div className="relative">
          <Dropdown menu={{ items }} placement="bottom">
          <Avatar className="bg-slate-500" icon={<UserOutlined />} />
          </Dropdown>
        </div>
      </div>
    </header>
  )
}



