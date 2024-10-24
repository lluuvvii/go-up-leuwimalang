"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query; // Get the product ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch("/json/products.json");
      const data = await response.json();
      const selectedProduct = data.find((item) => item.id === parseInt(id));
      setProduct(selectedProduct);
    };

    if (id) fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <Box className="p-5">
      <Button onClick={() => router.back()} style={{ marginBottom: "20px" }}>
        ← Kembali
      </Button>
      <Card className="rounded-lg shadow-md" style={{ display: "flex", padding: "20px" }}>
        <CardMedia
          component="img"
          image={product.imageUrl}
          alt={product.title}
          style={{ width: "250px", objectFit: "cover", borderRadius: "8px", marginRight: "20px" }}
        />
        <CardContent style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <Typography variant="h5" className="font-bold mb-1" style={{ fontWeight: 600 }}>
            {product.title}
          </Typography>
          <Typography variant="body2" className="text-gray-600 mb-3" style={{ fontSize: "14px" }}>
            {product.description}
          </Typography>
          <Typography className="text-gray-500 mb-2" style={{ fontSize: "12px" }}>
            {product.storeAddress} {/* Display store address here */}
          </Typography>
          <Typography variant="h5" className="text-[#629A1A] font-bold" style={{ fontWeight: 700 }}>
            {product.price}
          </Typography>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#629A1A",
              color: "#fff",
              marginTop: "20px",
              textTransform: "none",
            }}
          >
            Tukar Point Anda
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductDetail;
