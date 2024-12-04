import React, { useState } from "react";
import { Typography, Avatar, Box, useMediaQuery, Menu, MenuItem, Button } from "@mui/material";
import { useSession, signOut } from "next-auth/react";

const Navbar = ({ title }) => {
  const { data: session } = useSession();
  const isMobile = useMediaQuery("(max-width:600px)");

  const [anchorEl, setAnchorEl] = useState(null); // State for the dropdown menu
  const open = Boolean(anchorEl); // Boolean to check if the menu is open
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget); // Open the menu when the button is clicked
  };
  const handleClose = () => {
    setAnchorEl(null); // Close the menu
  };

  const handleSignOut = () => {
    signOut(); // Trigger sign out
    handleClose(); // Close the menu
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        backgroundColor: "#fff",
        borderBottom: "1px solid #e0e0e0",
        marginBottom: "20px",
        color: "#1D1D1D",
        borderRadius: 18,
        marginTop: isMobile ? "20px" : "0",
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 700, textAlign: isMobile ? "center" : "left" }}>
        {title}
      </Typography>

      {/* User profile section as a button with dropdown */}
      <Box
        display="flex"
        alignItems="center"
        flexDirection={isMobile ? "column" : "row"}
        marginTop={isMobile ? "10px" : "0"}
        onClick={handleClick} // Make the entire Box clickable
        sx={{ cursor: "pointer" }} // Change cursor to pointer to indicate it's clickable
      >
        <Typography variant="body1" sx={{ marginRight: isMobile ? "0" : "10px", fontWeight: 500, textAlign: "center" }}>
          Hi, {session?.user.name} {/* Username is not clickable */}
        </Typography>
        <Avatar alt={session?.user.name} src={session?.user.image} />
      </Box>

      {/* Dropdown menu for profile and sign out */}
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Profil</MenuItem>
        <MenuItem onClick={handleSignOut}>Keluar</MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;
