import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";

const PengelolaanPolusiContent = () => {
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
            src="https://www.youtube.com/embed/pbrpdUiSYMY?si=-MnHt7IfUQ-5s1RR"
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
            Dampak Polusi dan Cara Menguranginya
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#555555",
              marginBottom: "20px",
              lineHeight: 1.6,
            }}
          >
            Deskripsi: Modul ini berfokus pada polusi udara, tanah, dan air, serta langkah-langkah yang bisa diambil untuk mengurangi polusi di lingkungan sekitar. Peserta akan belajar tentang penyebab polusi dan dampak jangka panjangnya.
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

export default PengelolaanPolusiContent;
