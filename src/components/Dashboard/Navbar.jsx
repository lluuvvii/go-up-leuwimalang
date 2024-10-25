import React from "react";
import { Typography, Avatar, Box, useMediaQuery } from "@mui/material";
import { useSession } from "next-auth/react";

const Navbar = ({ title }) => {
  const { data: session } = useSession();
  
  const isMobile = useMediaQuery("(max-width:600px)");

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

      {/* User profile section */}
      <Box
        display="flex"
        alignItems="center"
        flexDirection={isMobile ? "column" : "row"}
        marginTop={isMobile ? "10px" : "0"}
      >
        <Typography variant="body1" sx={{ marginRight: isMobile ? "0" : "10px", fontWeight: 500, textAlign: "center" }}>
          Hi, {session?.user.name}
        </Typography>
        <Avatar alt={session?.user.name} src={session?.user.image} />
      </Box>
    </div>
  );
};

export default Navbar;
