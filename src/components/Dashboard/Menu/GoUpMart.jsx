"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography, Grid, Box } from "@mui/material";
import { useRouter } from "next/navigation"; // Ensure this is the correct import for Next.js routing

const GoUpMart = () => {
  const [items, setItems] = useState([]);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter(); // Move `useRouter` outside of the conditional

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
            <Typography variant="h6" className="text-gray-600">
              Point Saya
            </Typography>
            <Typography variant="h3" className="text-[#629A1A] font-bold">
              2500
            </Typography>
            <Typography variant="body2" className="text-gray-500">
              Ayo kumpulkan Point mu!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Box className="rounded-lg shadow-md p-5 text-center bg-white w-full">
            <Typography variant="h6" className="text-gray-600">
              Voucher Saya
            </Typography>
            <Typography variant="h3" className="text-[#629A1A] font-bold">
              2
            </Typography>
            <Typography variant="body2" className="text-gray-500">
              Voucher belum digunakan
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Item List Section - 3 items per row */}
      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card
              onClick={() => handleCardClick(item.id)} // Make the card clickable
              className="rounded-lg shadow-md cursor-pointer" // Add cursor-pointer for visual feedback
              style={{
                height: "100%",
                borderRadius: "12px",
                overflow: "hidden",
                padding: "16px",
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
                  height: "239px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "10px",
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
                <Typography variant="h6" className="font-bold mb-1" style={{ fontWeight: 600 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" className="text-gray-600 mb-3" style={{ fontSize: "14px" }}>
                  {item.description}
                </Typography>
                <Typography
                  variant="h5"
                  className="text-[#629A1A] font-bold"
                  style={{
                    marginTop: "auto",
                    fontWeight: 700,
                    fontSize: "18px",
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
