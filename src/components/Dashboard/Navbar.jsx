import React from "react";
import { Typography, Avatar, Box } from "@mui/material";
import { useSession } from "next-auth/react";

const Navbar = ({ title, userName, profilePhoto }) => {
  const { data: session } = useSession()
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        backgroundColor: "#fff",
        borderBottom: "1px solid #e0e0e0",
        marginBottom: "20px",
        color: "#1D1D1D",
        borderRadius: 18,
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 700 }}>
        {title}
      </Typography>

      {/* User profile section */}
      <Box display="flex" alignItems="center">
        <Typography variant="body1" sx={{ marginRight: "10px", fontWeight: 500 }}>
          Hi, {session?.user.name}
        </Typography>
        <Avatar alt={session?.user.name} src={session?.user.image} />
      </Box>
    </div>
  );
};

export default Navbar;
