import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Collapse,
  ListSubheader,
  IconButton,
  Toolbar,
  AppBar,
  Box,
  useMediaQuery,
  useTheme, // Import useTheme dari MUI
} from "@mui/material";
import { ExpandLess, ExpandMore, Menu as MenuIcon } from "@mui/icons-material";
import {
  Home as HomeIcon,
  Dashboard as DashboardIcon,
  Store as StoreIcon,
  History as HistoryIcon,
  Star as StarIcon,
  Settings as SettingsIcon,
  Person as PersonIcon,
  Assignment as AssignmentIcon,
  Chat as ChatIcon,
} from "@mui/icons-material";

const Sidebar = ({ onSelectMenu }) => {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [openPeduliBersih, setOpenPeduliBersih] = useState(false);
  const [openDigitalReady, setOpenDigitalReady] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme(); // Mengambil tema menggunakan useTheme
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Menggunakan theme dari useTheme

  const handleTogglePeduliBersih = () => {
    setOpenPeduliBersih(!openPeduliBersih);
  };

  const handleToggleDigitalReady = () => {
    setOpenDigitalReady(!openDigitalReady);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    if (onSelectMenu) onSelectMenu(menu);

    if (menu === "home") {
      router.push("/");
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const renderMenuItem = (menu, text, IconComponent) => {
    const isActive = activeMenu === menu;
    return (
      <ListItem
        button
        onClick={() => handleMenuClick(menu)}
        sx={{
          pl: 4,
          backgroundColor: isActive ? "#629A1A" : "transparent",
          color: isActive ? "#EDEDED" : "inherit",
          "&:hover": {
            backgroundColor: "#629A1A",
            color: "#EDEDED",
          },
          marginBottom: "10px",
          borderRadius: "8px",
        }}
      >
        <ListItemIcon sx={{ color: isActive ? "#EDEDED" : "inherit" }}>
          <IconComponent />
        </ListItemIcon>
        <ListItemText primary={text} primaryTypographyProps={{ fontSize: "16px", fontWeight: 600 }} />
      </ListItem>
    );
  };

  const renderDropdownItem = (menu, text) => {
    const isActive = activeMenu === menu;
    return (
      <ListItem
        button
        onClick={() => handleMenuClick(menu)}
        sx={{
          pl: 6,
          backgroundColor: isActive ? "#629A1A" : "transparent",
          color: isActive ? "#EDEDED" : "inherit",
          "&:hover": {
            backgroundColor: "#629A1A",
            color: "#EDEDED",
          },
          marginBottom: "8px",
          borderRadius: "8px",
        }}
      >
        <ListItemText primary={text} primaryTypographyProps={{ fontSize: "14px", fontWeight: 500 }} />
      </ListItem>
    );
  };

  const drawerContent = (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 3,
          mt: 3,
        }}
      >
        <img
          src="/assets/images/logo.png"
          alt="Logo"
          style={{
            width: isMobile ? "170px" : "274px",
            height: "auto",
          }}
        />
      </Box>

      <Divider />

      <List sx={{ fontFamily: "'Poppins', sans-serif" }}>
        <ListSubheader sx={{ fontSize: "16px", fontWeight: "bold", color: "#444", position: "relative" }}>Menu</ListSubheader>
        {renderMenuItem("home", "Home", HomeIcon)}
        {renderMenuItem("dashboard", "Dashboard", DashboardIcon)}
        {renderMenuItem("go-up-mart", "Go Up Mart", StoreIcon)}
        {renderMenuItem("diskusi", "Diskusi", ChatIcon)}

        <Divider sx={{ my: 2 }} />

        <ListSubheader sx={{ fontSize: "16px", fontWeight: "bold", color: "#444", position: "relative" }}>Kelas</ListSubheader>

        <ListItem button onClick={handleTogglePeduliBersih}>
          <ListItemIcon sx={{ paddingLeft: "16px" }}>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Peduli Bersih" primaryTypographyProps={{ fontSize: "16px", fontWeight: 600, paddingLeft: "16px" }} />
          {openPeduliBersih ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openPeduliBersih} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {renderDropdownItem("kebersihan-lingkungan", "1. Pengenalan Kebersihan Lingkungan")}
            {renderDropdownItem("pengelolaan-sampah", "2. Pengelolaan Sampah yang Benar")}
            {renderDropdownItem("dampak-polusi", "3. Dampak Polusi dan Cara Menguranginya")}
            {renderDropdownItem("peran-edukasi", "4. Peran Edukasi dalam Meningkatkan Kesadaran Lingkungan")}
            {renderDropdownItem("tugas-akhir-lingkungan", "5. Tugas Akhir - Aksi Nyata untuk Lingkungan Bersih")}
          </List>
        </Collapse>

        <ListItem button onClick={handleToggleDigitalReady}>
          <ListItemIcon sx={{ paddingLeft: "16px" }}>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Digital Ready" primaryTypographyProps={{ fontSize: "16px", fontWeight: 600, paddingLeft: "16px" }} />
          {openDigitalReady ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openDigitalReady} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {renderDropdownItem("digital-ready", "0. Pengenalan Digital Ready")}
            {renderDropdownItem("literasi-digital", "1. Pengenalan Literasi Digital")}
            {renderDropdownItem("penggunaan-teknologi", "2. Penggunaan Teknologi Secara Efektif")}
            {renderDropdownItem("keamanan-privasi", "3. Keamanan dan Privasi di Dunia Digital")}
            {renderDropdownItem("pemikiran-kritis", "4. Pemikiran Kritis dalam Mengakses Informasi Daring")}
            {renderDropdownItem("tugas-akhir-digital", "5. Tugas Akhir - Penerapan Literasi Digital")}
          </List>
        </Collapse>

        {renderMenuItem("pencapaian", "Pencapaian", StarIcon)}
        {renderMenuItem("histori-kelas", "Histori Kelas", HistoryIcon)}

        <Divider sx={{ my: 2 }} />

        <ListSubheader sx={{ fontSize: "16px", fontWeight: "bold", color: "#444", position: "relative" }}>Pengguna</ListSubheader>
        {renderMenuItem("profil", "Profil", PersonIcon)}
        {renderMenuItem("settings", "Settings", SettingsIcon)}
      </List>
    </div>
  );

  return (
    <>
      {/* Hamburger Menu for Mobile */}
      <AppBar position="fixed" sx={{ display: { sm: "none" }, backgroundColor: "#629A1A" }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: "65%" },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Permanent Sidebar for Larger Screens */}
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            width: "412px",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            overflowY: "auto",
            backgroundColor: "#fff",
            "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Sidebar;
