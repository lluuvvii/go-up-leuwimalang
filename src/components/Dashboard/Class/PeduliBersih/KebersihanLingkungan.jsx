import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
  Box,
} from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

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
        <CardMedia
          component="div"
          sx={{
            position: "relative",
            paddingTop: "56.25%", // Aspect ratio 16:9
            backgroundImage: "url('/assets/images/video.png')", // Ganti dengan path gambar Anda
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <PlayCircleOutlineIcon
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "64px",
              color: "#FFFFFF",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderRadius: "50%",
              padding: "10px",
            }}
          />
        </CardMedia>
        <CardContent sx={{ textAlign: "center", padding: "20px" }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#000000", marginBottom: "10px" }}
          >
            Pengenalan Literasi Digital
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#555555",
              marginBottom: "20px",
              lineHeight: 1.6,
            }}
          >
            Video ini membahas dasar literasi digital, meliputi definisi, manfaat,
            dan keterampilan yang diperlukan untuk memahami, mengakses, dan mengevaluasi
            informasi digital secara aman dan bertanggung jawab. Video ini juga
            memberikan panduan penting tentang bagaimana berperilaku bijak di dunia
            digital.
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