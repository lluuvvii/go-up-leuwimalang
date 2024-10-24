"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Navbar = () => {
  const { data: session } = useSession()
  const [providers, setProviders] = useState(null)
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders()

      setProviders(response)
    }

    setUpProviders()
  }, [])

  // Set menu link aktif saat di-scroll
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveLink(id);
    }
  };

  return (
    <nav className="custom-container flex items-center justify-between p-4 bg-white shadow sticky top-0 z-50">
      <div className="flex items-center space-x-20">
        <Image src="/assets/images/logo-navbar.png" alt="Logo" width={57} height={57} className="rounded-full" />
        <div className="flex items-center border border-gray-300 rounded-full overflow-hidden w-[450px]">
          <button className="px-4">
            <Image src="/assets/icons/ic-search.svg" alt="Search Icon" width={20} height={20} />
          </button>
          <input type="text" placeholder="Cari Apapun..." className="w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent text-black" />
        </div>
      </div>

      {/* Link Menu */}
      <div className="flex space-x-8">
        <a onClick={() => handleScroll("home")} className={`cursor-pointer relative group ${activeLink === "home" ? "text-[#629A1A]" : "text-gray-600"}`}>
          Beranda
          <span className={`absolute left-0 bottom-0 w-0 h-[2px] bg-[#629A1A] transition-all duration-300 group-hover:w-full ${activeLink === "home" ? "w-full" : ""}`}></span>
        </a>
        <a onClick={() => handleScroll("program")} className={`cursor-pointer relative group ${activeLink === "program" ? "text-[#629A1A]" : "text-gray-600"}`}>
          Program
          <span className={`absolute left-0 bottom-0 w-0 h-[2px] bg-[#629A1A] transition-all duration-300 group-hover:w-full ${activeLink === "program" ? "w-full" : ""}`}></span>
        </a>
        <a onClick={() => handleScroll("tentang")} className={`cursor-pointer relative group ${activeLink === "tentang" ? "text-[#629A1A]" : "text-gray-600"}`}>
          Tentang Kita
          <span className={`absolute left-0 bottom-0 w-0 h-[2px] bg-[#629A1A] transition-all duration-300 group-hover:w-full ${activeLink === "tentang" ? "w-full" : ""}`}></span>
        </a>
      </div>

      {/* Button Masuk dan Logout*/}
      <div className="flex items-center space-x-3">
        {session?.user ?
          <button className="px-4 py-2 text-[#629A1A] border border-[#629A1A] rounded-lg transition duration-300 hover:bg-[#629A1A] hover:text-white" onClick={signOut}>Keluar</button>
          :
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button key={provider.name} className="px-4 py-2 text-white bg-[#629A1A] rounded-lg transition duration-300 hover:bg-white hover:text-[#629A1A] border" onClick={() => signIn(provider.id)}>Masuk</button>
              ))}
          </>}
      </div>
    </nav>
  );
};

export default Navbar;
