"use client";
import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Grid,
  TextField,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const Profil = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const userData = {
    avatar: "/path/to/avatar.jpg", // Ganti dengan path gambar avatar
    name: "Ahmad Ryan",
    role: "Pelajar",
    details: {
      Username: "ryanahmad01",
      Email: "ryanahmad@gmail.com",
      Password: "********",
      "Nama Lengkap": "Ahmad Ryan",
      "Alamat Lengkap": "Jl. Agung No.1, Desa Leuwimalang",
      Status: "Pelajar",
    },
  };

  return (
    <Box
      className="rounded-lg shadow-md p-6 bg-gray-100 w-full"
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        backgroundColor: "#F9F9F9",
        borderRadius: "12px",
      }}
    >
      {/* Header Section */}
      <Box className="flex items-center mb-6">
        <Avatar
          src={userData.avatar}
          alt={userData.name}
          sx={{ width: 72, height: 72, marginRight: 2 }}
        />
        <Box>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            className="font-bold text-gray-800"
          >
            {userData.name}
          </Typography>
          <Typography
            variant="body1"
            className="text-gray-600"
            style={{ fontSize: isMobile ? "14px" : "16px" }}
          >
            {userData.role}
          </Typography>
        </Box>
      </Box>

      {/* Form Section */}
      <Typography
        variant={isMobile ? "h6" : "h5"}
        className="font-bold text-gray-800 mb-4"
      >
        Akun Saya
      </Typography>
      <Grid container spacing={3}>
        {Object.entries(userData.details).map(([label, value]) => (
          <Grid item xs={12} sm={6} key={label}>
            <Box
              className="flex items-center bg-white rounded-lg shadow-sm p-3"
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                padding: isMobile ? "8px" : "16px",
              }}
            >
              <TextField
                variant="standard"
                fullWidth
                InputProps={{
                  disableUnderline: true,
                  style: {
                    fontSize: isMobile ? "14px" : "16px",
                    fontWeight: 600,
                  },
                }}
                label={label}
                defaultValue={value}
              />
              <IconButton>
                <EditIcon sx={{ fontSize: isMobile ? "18px" : "24px" }} />
              </IconButton>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Profil;
