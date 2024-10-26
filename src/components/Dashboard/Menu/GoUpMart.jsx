"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography, Grid, Box, useMediaQuery, useTheme } from "@mui/material";
import { useRouter } from "next/navigation"; // Ensure this is the correct import for Next.js routing

const GoUpMart = () => {
  const [items, setItems] = useState([]);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  // Get the theme and media query for responsiveness
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Ensures the component is mounted before rendering content
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Fetch items only after the component is mounted
  useEffect(() => {
    if (isMounted) {
      const fetchItems = async () => {
        const response = await fetch("/json/products.json");
        const data = await response.json();
        setItems(data);
      };

      fetchItems();
    }
  }, [isMounted]);

  // Handler function to navigate to the product details page
  const handleCardClick = (itemId) => {
    if (isMounted) {
      router.push(`/product/${itemId}`); // Adjust the route to your product detail page
    }
  };

  return (
    <Box>
      {/* Point and Voucher Section */}
      <Grid container spacing={2} justifyContent="center" className="mb-5">
        <Grid item xs={12} sm={6} md={6}>
          <Box className="rounded-lg shadow-md p-5 text-center bg-white w-full">
            <Typography variant={isMobile ? "subtitle1" : "h6"} className="text-gray-600">
              Point Saya
            </Typography>
            <Typography variant={isMobile ? "h4" : "h3"} className="text-[#629A1A] font-bold">
              2500
            </Typography>
            <Typography variant="body2" className="text-gray-500">
              Ayo kumpulkan Point mu!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Box className="rounded-lg shadow-md p-5 text-center bg-white w-full">
            <Typography variant={isMobile ? "subtitle1" : "h6"} className="text-gray-600">
              Voucher Saya
            </Typography>
            <Typography variant={isMobile ? "h4" : "h3"} className="text-[#629A1A] font-bold">
              2
            </Typography>
            <Typography variant="body2" className="text-gray-500">
              Voucher belum digunakan
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Item List Section - Responsive cards */}
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid item xs={6} sm={6} md={4} key={item.id}>
            {" "}
            {/* 2 cards per row on mobile */}
            <Card
              onClick={() => handleCardClick(item.id)}
              className="rounded-lg shadow-md cursor-pointer"
              style={{
                height: "100%",
                borderRadius: "12px",
                overflow: "hidden",
                padding: isMobile ? "8px" : "16px", // Reduced padding for mobile
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardMedia
                component="img"
                image={item.imageUrl}
                alt={item.title}
                style={{
                  height: isMobile ? "120px" : "239px", // Responsive height for mobile
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: isMobile ? "5px" : "10px", // Adjust margin for mobile
                }}
              />
              <CardContent
                className="text-center"
                style={{
                  padding: "0px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant={isMobile ? "subtitle2" : "h6"}
                  className="font-bold mb-1"
                  style={{ fontWeight: 600, fontSize: isMobile ? "14px" : "16px" }} // Responsive font size for title
                >
                  {item.title}
                </Typography>
                <Typography
                  variant=""
                  className="text-gray-600 mb-1"
                  style={{ fontSize: isMobile ? "12px" : "14px" }} // Responsive font size for description
                >
                  {item.description}
                </Typography>
                <Typography
                  variant={isMobile ? "subtitle1" : "h5"}
                  className="text-[#629A1A] font-bold"
                  style={{
                    marginTop: "auto",
                    fontWeight: 700,
                    fontSize: isMobile ? "14px" : "18px", // Responsive font size for price
                  }}
                >
                  {item.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GoUpMart;
