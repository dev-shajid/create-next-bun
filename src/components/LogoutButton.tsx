'use client'

import { logout } from '@/action/auth';
import React from 'react'
import { IoIosLogOut } from "react-icons/io";


export default function LogoutButton() {
  const handleLogout = async () => {
    const res = await logout()
    console.log(res)
  }
  return (
    <div
      onClick={handleLogout}
      className={`flex items-center gap-3 rounded-sm px-3 py-2 text-primary transition-all border bg-transparent border-transparent md:hover:bg-muted cursor-pointer`}
    >
      <IoIosLogOut
        size={18}
        aria-hidden="true"
      />
      Logout
    </div>
  )
}
