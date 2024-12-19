import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";

const Dashboard = () => {
  const [classRecommendations, setClassRecommendations] = useState([]);

  useEffect(() => {
    const fetchClassRecommendations = async () => {
      const response = await fetch("/json/classRecommendations.json");
      const data = await response.json();
      setClassRecommendations(data);
    };

    fetchClassRecommendations();
  }, []);

  return (
    <div>
      <Card
        sx={{
          borderRadius: "18px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          margin: "20px",
          backgroundColor: "#FFFFFF",
        }}
      >
        {/* Embedded YouTube Video */}
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            paddingTop: "56.25%", // 16:9 Aspect Ratio
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/DFkS9EehQDw?si=NWYSXBqCQQU-N_r9"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          ></iframe>
        </Box>
        <CardContent sx={{ textAlign: "center", padding: "20px" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#000000", marginBottom: "10px" }}>
            Pentingnya Menjaga Kebersihan Lingkungan
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#555555",
              marginBottom: "20px",
              lineHeight: 1.6,
            }}
          >
            Deskripsi: Modul ini akan memperkenalkan pentingnya menjaga kebersihan lingkungan sebagai bagian dari tanggung jawab individu dan komunitas. Peserta akan belajar tentang dampak lingkungan kotor terhadap kesehatan dan
            kesejahteraan masyarakat.
          </Typography>
          <Box sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#629A1A",
                color: "#FFFFFF",
                fontWeight: "600",
                textTransform: "none",
                borderRadius: "20px",
                padding: "10px 20px",
              }}
            >
              Selanjutnya
            </Button>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
