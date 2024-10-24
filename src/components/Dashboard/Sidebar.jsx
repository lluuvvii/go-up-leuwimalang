"use client";
import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Collapse,
  ListSubheader,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
  Dashboard as DashboardIcon,
  Store as StoreIcon,
  Subscriptions as SubscriptionsIcon,
  Info as InfoIcon,
  History as HistoryIcon,
  Star as StarIcon,
  Settings as SettingsIcon,
  Person as PersonIcon,
  Assignment as AssignmentIcon,
} from '@mui/icons-material';

const Sidebar = ({ onSelectMenu }) => {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [openPeduliBersih, setOpenPeduliBersih] = useState(false);
  const [openDigitalReady, setOpenDigitalReady] = useState(false);

  // Handler for toggling dropdowns
  const handleTogglePeduliBersih = () => {
    setOpenPeduliBersih(!openPeduliBersih);
  };

  const handleToggleDigitalReady = () => {
    setOpenDigitalReady(!openDigitalReady);
  };

  // Handler for menu click
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    if (onSelectMenu) onSelectMenu(menu);
  };

  // Function to render each menu item
  const renderMenuItem = (menu, text, IconComponent) => {
    const isActive = activeMenu === menu;
    return (
      <ListItem
        button
        onClick={() => handleMenuClick(menu)}
        sx={{
          pl: 4,
          backgroundColor: isActive ? '#629A1A' : 'transparent',
          color: isActive ? '#EDEDED' : 'inherit',
          '&:hover': {
            backgroundColor: '#629A1A',
            color: '#EDEDED',
          },
          marginBottom: '10px',
          borderRadius: '8px',
        }}
      >
        <ListItemIcon sx={{ color: isActive ? '#EDEDED' : 'inherit' }}>
          <IconComponent />
        </ListItemIcon>
        <ListItemText primary={text} primaryTypographyProps={{ fontSize: '16px', fontWeight: 600 }} />
      </ListItem>
    );
  };

  // Function to render items inside dropdown with lower font-weight
  const renderDropdownItem = (menu, text) => {
    const isActive = activeMenu === menu;
    return (
      <ListItem
        button
        onClick={() => handleMenuClick(menu)}
        sx={{
          pl: 4.5,
          backgroundColor: isActive ? '#629A1A' : 'transparent',
          color: isActive ? '#EDEDED' : 'inherit',
          '&:hover': {
            backgroundColor: '#629A1A',
            color: '#EDEDED',
          },
          marginBottom: '5px',
          borderRadius: '8px',
        }}
      >
        <ListItemText
          primary={text}
          primaryTypographyProps={{ fontSize: '16px', fontWeight: 400 }} // Font-weight set to 400 for dropdown items
        />
      </ListItem>
    );
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        '& .MuiDrawer-paper': {
          width: 412,
          backgroundColor: '#F5F5F5',
          boxSizing: 'border-box',
          padding: '20px 15px',
          overflowY: 'auto', // Enable scrolling
          '::-webkit-scrollbar': { display: 'none' }, // Hide scrollbar
          msOverflowStyle: 'none', // IE and Edge
          scrollbarWidth: 'none', // Firefox
        },
      }}
    >
      {/* Logo Section */}
      <div className="flex justify-center mb-6">
        <img src="/assets/images/logo.png" alt="Logo" style={{ width: '274px' }} />
      </div>

      <Divider />

      <List>
        {/* Menu Label */}
        <ListSubheader sx={{ fontSize: '16px', fontWeight: 'bold', color: '#444', position: 'relative' }}>Menu</ListSubheader>

        {/* Dashboard */}
        {renderMenuItem('dashboard', 'Dashboard', DashboardIcon)}

        {/* Go Up Mart */}
        {renderMenuItem('go-up-mart', 'Go Up Mart', StoreIcon)}

        {/* Berlangganan */}
        {renderMenuItem('berlangganan', 'Berlangganan', SubscriptionsIcon)}

        {/* About Us */}
        {renderMenuItem('about-us', 'About Us', InfoIcon)}

        <Divider sx={{ my: 2 }} />

        {/* Kelas Label */}
        <ListSubheader sx={{ fontSize: '16px', fontWeight: 'bold', color: '#444', position: 'relative' }}>Kelas</ListSubheader>

        {/* Peduli Bersih Dropdown */}
        <ListItem button onClick={handleTogglePeduliBersih}>
          <ListItemIcon sx={{ paddingLeft: "16px" }}>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Peduli Bersih" primaryTypographyProps={{ fontSize: '16px', fontWeight: 600, paddingLeft: "16px" }} />
          {openPeduliBersih ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openPeduliBersih} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {renderDropdownItem('kebersihan-lingkungan', '1. Pengenalan Kebersihan Lingkungan')}
            {renderDropdownItem('pengelolaan-sampah', '2. Pengelolaan Sampah yang Benar')}
            {renderDropdownItem('dampak-polusi', '3. Dampak Polusi dan Cara Menguranginya')}
            {renderDropdownItem('peran-edukasi', '4. Peran Edukasi dalam Meningkatkan Kesadaran Lingkungan')}
            {renderDropdownItem('tugas-akhir-lingkungan', '5. Tugas Akhir - Aksi Nyata untuk Lingkungan Bersih')}
          </List>
        </Collapse>

        {/* Digital Ready Dropdown */}
        <ListItem button onClick={handleToggleDigitalReady}>
          <ListItemIcon sx={{ paddingLeft: "16px" }}>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Digital Ready" primaryTypographyProps={{ fontSize: '16px', fontWeight: 600, paddingLeft: "16px" }} />
          {openDigitalReady ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openDigitalReady} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {renderDropdownItem('literasi-digital', '1. Pengenalan Literasi Digital')}
            {renderDropdownItem('penggunaan-teknologi', '2. Penggunaan Teknologi Secara Efektif')}
            {renderDropdownItem('keamanan-privasi', '3. Keamanan dan Privasi di Dunia Digital')}
            {renderDropdownItem('pemikiran-kritis', '4. Pemikiran Kritis dalam Mengakses Informasi Daring')}
            {renderDropdownItem('tugas-akhir-digital', '5. Tugas Akhir - Penerapan Literasi Digital')}
          </List>
        </Collapse>

        {/* Pencapaian */}
        {renderMenuItem('pencapaian', 'Pencapaian', StarIcon)}

        {/* Histori Kelas */}
        {renderMenuItem('histori-kelas', 'Histori Kelas', HistoryIcon)}

        <Divider sx={{ my: 2 }} />

        {/* Pengguna Label */}
        <ListSubheader sx={{ fontSize: '16px', fontWeight: 'bold', color: '#444', position: 'relative' }}>Pengguna</ListSubheader>

        {/* User */}
        {renderMenuItem('profil', 'Profil', PersonIcon)}

        {/* Settings */}
        {renderMenuItem('settings', 'Settings', SettingsIcon)}
      </List>
    </Drawer>
  );
};

export default Sidebar;
