"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [activeLink, setActiveLink] = useState("beranda");
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
      section.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
      setActiveLink(id);
    }
    setIsDrawerOpen(false);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top when logo is clicked
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="bg-white shadow sticky top-0 z-50 w-full">
      <div className="max-w-screen-xl mx-auto py-4 px-4 md:px-10 flex items-center justify-between">
        {/* Icon Hamburger for mobile mode */}
        <div className="md:hidden">
          <IconButton onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        </div>
        {/* Logo as a Button, Hidden in mobile view */}
        <div className="hidden md:block">
          <button onClick={handleLogoClick} className="focus:outline-none">
            <Image src="/assets/images/logo-navbar.png" alt="Logo" width={57} height={57} className="rounded-full" />
          </button>
        </div>
        {/* Link Menu for desktop */}
        <div className="hidden md:flex space-x-8">
          {["beranda", "program", "tentang"].map((id) => (
            <a
              key={id}
              onClick={() => handleScroll(id)}
              className={`cursor-pointer relative group ${activeLink === id ? "text-[#629A1A]" : "text-gray-600"}`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
              <span
                className={`absolute left-0 bottom-0 w-0 h-[2px] bg-[#629A1A] transition-all duration-300 group-hover:w-full ${
                  activeLink === id ? "w-full" : ""
                }`}
              ></span>
            </a>
          ))}
          {/* Forum Diskusi Button */}
          <a
            href="/forum-diskusi" // Tautan langsung ke halaman Forum Diskusi
            className={`cursor-pointer relative group ${activeLink === "Forum Diskusi" ? "text-[#629A1A]" : "text-gray-600"}`}
          >
            Forum Diskusi
            <span
              className={`absolute left-0 bottom-0 w-0 h-[2px] bg-[#629A1A] transition-all duration-300 group-hover:w-full ${
                activeLink === "Forum Diskusi" ? "w-full" : ""
              }`}
            ></span>
          </a>
          {/* Tukar Poin Button */}
          <a
            href="/go-up-mart"
            className={`cursor-pointer relative group ${activeLink === "Tukar Poin" ? "text-[#629A1A]" : "text-gray-600"}`}
          >
            Tukar Poin
            <span
              className={`absolute left-0 bottom-0 w-0 h-[2px] bg-[#629A1A] transition-all duration-300 group-hover:w-full ${
                activeLink === "Tukar Poin" ? "w-full" : ""
              }`}
            ></span>
          </a>
        </div>
        {/* Login and Logout Button */}
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
        {/* Drawer for mobile menu */}
        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
          <div className="flex flex-col p-4 space-y-4 w-64">
            {/* Logo in the drawer */}
            <div className="flex justify-center mb-4">
              <button onClick={handleLogoClick} className="focus:outline-none">
                <Image src="/assets/images/logo-navbar.png" alt="Logo" width={57} height={57} className="rounded-full" />
              </button>
            </div>

            {["home", "program", "tentang", "Forum Diskusi", "Tukar Poin"].map((id) => (
              <a key={id} onClick={() => handleScroll(id)} className={`cursor-pointer ${activeLink === id ? "text-[#629A1A]" : "text-gray-600"}`}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}

            {/* Login and Logout Button in the drawer */}
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
      </div>
    </nav>
  );
};

export default Navbar;
