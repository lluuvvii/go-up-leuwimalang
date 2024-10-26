"use client";

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import DashboardContent from "./Menu/Dashboard";
import GoUpMartContent from "./Menu/GoUpMart";
import PremiumContent from "./Menu/Premium";
import AboutUsContent from "./Menu/About";

// Mengimpor konten dari Peduli Bersih
import PengenalanKebersihanPB from "./Class/PeduliBersih/KebersihanLingkungan";
import PengelolaanSampahPB from "./Class/PeduliBersih/PengelolaanSampah";
import DampakPolusiPB from "./Class/PeduliBersih/DampakPolusi";
import PeranEdukasiPB from "./Class/PeduliBersih/PeranEdukasi";
import TugasAkhirPB from "./Class/PeduliBersih/TugasAkhir";

// Mengimpor konten dari Digital Ready
import DigitalReadyContentDR from "./Class/DigitalReady/DigitalReady";
import LiterasiDigitalContentDR from "./Class/DigitalReady/LiterasiDigital";
import PenggunaanTeknologiDR from "./Class/DigitalReady/PenggunaanTeknologi";
import KeamananPrivasiDR from "./Class/DigitalReady/KeamananPrivasi";
import PemikiranKritisDR from "./Class/DigitalReady/PemikiranKritis";
import TugasAkhirDR from "./Class/DigitalReady/TugasAkhir";

import Navbar from "./Navbar";
import { Box, CssBaseline } from "@mui/material";

const MainLayout = () => {
  const [selectedMenu, setSelectedMenu] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (selectedMenu) {
      case "dashboard":
        return <DashboardContent />;
      case "go-up-mart":
        return <GoUpMartContent />;
      case "kebersihan-lingkungan":
        return <PengenalanKebersihanPB />;
      case "pengelolaan-sampah":
        return <PengelolaanSampahPB />;
      case "dampak-polusi":
        return <DampakPolusiPB />;
      case "peran-edukasi":
        return <PeranEdukasiPB />;
      case "tugas-akhir-lingkungan":
        return <TugasAkhirPB />;
      
      // Digital Ready
      case "digital-ready":
        return <DigitalReadyContentDR />;
      case "literasi-digital":
        return <LiterasiDigitalContentDR />;
      case "penggunaan-teknologi":
        return <PenggunaanTeknologiDR />;
      case "keamanan-privasi":
        return <KeamananPrivasiDR />;
      case "pemikiran-kritis":
        return <PemikiranKritisDR />;
      case "tugas-akhir-digital":
        return <TugasAkhirDR />;
      case "berlangganan":
        return <PremiumContent />;
      case "about-us":
        return <AboutUsContent />;
      default:
        return <DashboardContent />;
    }
  };

  const getTitle = () => {
    switch (selectedMenu) {
      case "dashboard":
        return "Dashboard";
      case "go-up-mart":
        return "Go Up Mart";
      case "kebersihan-lingkungan":
        return "Kebersihan Lingkungan";
      case "pengelolaan-sampah":
        return "Pengelolaan Sampah yang Benar";
      case "dampak-polusi":
        return "Dampak Polusi dan Cara Menguranginya";
      case "peran-edukasi":
        return "Peran Edukasi dalam Meningkatkan Kesadaran Lingkungan";
      case "tugas-akhir-lingkungan":
        return "Tugas Akhir - Aksi Nyata untuk Lingkungan Bersih";
      case "literasi-digital":
        return "Literasi Digital";
      case "penggunaan-teknologi":
        return "Penggunaan Teknologi Secara Efektif";
      case "keamanan-privasi":
        return "Keamanan dan Privasi di Dunia Digital";
      case "pemikiran-kritis":
        return "Pemikiran Kritis dalam Mengakses Informasi Daring";
      case "tugas-akhir-digital":
        return "Tugas Akhir - Penerapan Literasi Digital";
      case "berlangganan":
        return "Konten Premium";
      case "about-us":
        return "Tentang Kami";
      default:
        return "Dashboard Pelajar";
    }
  };

  // Data Dummy
  const userName = "Kelvin Erlangga";
  const profilePhoto = "/assets/images/profil.png";

  return (
    <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <CssBaseline />
      {/* Sidebar for Desktop */}
      <Box>
        <Sidebar selectedMenu={selectedMenu} onSelectMenu={setSelectedMenu} isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#EDEDED",
          padding: "20px",
          overflowY: "auto",
          transition: "margin-left 0.3s", // Add a smooth transition
          marginLeft: { xs: 0, sm: "412px" }, // Adjust margin for mobile view
        }}
      >
        <Navbar title={getTitle()} userName={userName} profilePhoto={profilePhoto} />
        {renderContent()}
      </Box>
    </Box>
  );
};

export default MainLayout;
