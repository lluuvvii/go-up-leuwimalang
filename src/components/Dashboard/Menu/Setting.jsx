"use client";
import React from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const Settings = () => {
  const settingsData = [
    {
      label: "Bahasa",
      options: ["Bahasa Indonesia", "English"],
      defaultValue: "Bahasa Indonesia",
    },
    {
      label: "Pengingat",
      options: ["Aktif", "Nonaktif"],
      defaultValue: "Aktif",
    },
    {
      label: "Tema",
      options: ["Tema Dasar", "Tema Gelap", "Tema Terang"],
      defaultValue: "Tema Dasar",
    },
  ];

  return (
    <Box
      className="rounded-lg shadow-md p-6 bg-gray-100"
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        backgroundColor: "#F9F9F9",
        borderRadius: "12px",
      }}
    >
      <Typography
        variant="h6"
        className="font-bold text-gray-800 mb-4"
        style={{ fontSize: "18px" }}
      >
        Setelan Umum
      </Typography>
      {settingsData.map((setting, index) => (
        <FormControl
          fullWidth
          key={index}
          className="mb-4"
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "8px",
            padding: "8px 12px",
          }}
        >
          <InputLabel style={{ fontSize: "14px" }}>{setting.label}</InputLabel>
          <Select
            defaultValue={setting.defaultValue}
            style={{
              fontSize: "14px",
              borderRadius: "8px",
              backgroundColor: "transparent",
            }}
          >
            {setting.options.map((option, i) => (
              <MenuItem
                value={option}
                key={i}
                style={{ fontSize: "14px" }}
              >
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ))}
    </Box>
  );
};

export default Settings;
