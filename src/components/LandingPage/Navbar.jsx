"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [activeLink, setActiveLink] = useState("home");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    setUpProviders();
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveLink(id);
    }
    setIsDrawerOpen(false); // Tutup drawer saat link diklik
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow sticky top-0 z-50">
      {/* Icon Hamburger untuk mode mobile */}
      <div className="md:hidden">
        <IconButton onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
      </div>
      
      <div>
        <Image src="/assets/images/logo-navbar.png" alt="Logo" width={57} height={57} className="rounded-full" />
      </div>

      {/* Link Menu untuk desktop */}
      <div className="hidden md:flex space-x-8">
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

      {/* Button Masuk dan Logout */}
      <div>
        {session?.user ? (
          <button className="px-4 py-2 text-[#629A1A] border border-[#629A1A] rounded-lg transition duration-300 hover:bg-[#629A1A] hover:text-white" onClick={signOut}>
            Keluar
          </button>
        ) : (
          providers &&
          Object.values(providers).map((provider) => (
            <button key={provider.name} className="px-4 py-2 text-white bg-[#629A1A] rounded-lg transition duration-300 hover:bg-white hover:text-[#629A1A] border" onClick={() => signIn(provider.id)}>
              Masuk
            </button>
          ))
        )}
      </div>

      {/* Drawer untuk menu mobile */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <div className="flex flex-col p-4 space-y-4">
          <a onClick={() => handleScroll("home")} className={`cursor-pointer ${activeLink === "home" ? "text-[#629A1A]" : "text-gray-600"}`}>
            Beranda
          </a>
          <a onClick={() => handleScroll("program")} className={`cursor-pointer ${activeLink === "program" ? "text-[#629A1A]" : "text-gray-600"}`}>
            Program
          </a>
          <a onClick={() => handleScroll("tentang")} className={`cursor-pointer ${activeLink === "tentang" ? "text-[#629A1A]" : "text-gray-600"}`}>
            Tentang Kita
          </a>

          {/* Button Masuk dan Logout dalam drawer */}
          {session?.user ? (
            <button className="px-4 py-2 text-[#629A1A] border border-[#629A1A] rounded-lg transition duration-300 hover:bg-[#629A1A] hover:text-white" onClick={signOut}>
              Keluar
            </button>
          ) : (
            providers &&
            Object.values(providers).map((provider) => (
              <button key={provider.name} className="px-4 py-2 text-white bg-[#629A1A] rounded-lg transition duration-300 hover:bg-white hover:text-[#629A1A] border" onClick={() => signIn(provider.id)}>
                Masuk
              </button>
            ))
          )}
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
