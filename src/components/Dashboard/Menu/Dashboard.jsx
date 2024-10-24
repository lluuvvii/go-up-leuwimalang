import React, { useEffect, useState } from "react";
import { CircularProgress, Box, Typography, Card, CardContent, Grid, Button, CardMedia, Divider } from "@mui/material";

const Dashboard = () => {
  const progress = 43;
  const watchTime = 16;
  const learningProgress = [
    { title: "Pengenalan Literasi Digital", progress: 54 },
    { title: "Penggunaan Teknologi Secara Efektif", progress: 40 },
  ];

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
      <Grid container spacing={2}>
        {/* Left Section (Progress and Watch Time) */}
        <Grid item xs={6} md={4}>
          {/* Linear Progress */}
          <Card
            sx={{
              borderRadius: "18px",
              padding: "50px",
              backgroundColor: "#FDFAFA",
              boxShadow: "none",
              marginBottom: "20px",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: "35px" }}>
              Progress
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography sx={{ marginBottom: 2, fontWeight: 600, fontSize: 48 }}>{progress}%</Typography>
              <Box
                sx={{
                  width: "100%",
                  height: "10px",
                  backgroundColor: "#E0E0E0", // Warna abu-abu untuk yang belum selesai
                  borderRadius: "5px",
                }}
              >
                <Box
                  sx={{
                    width: `${progress}%`, // Ini akan menyesuaikan dengan nilai progress
                    height: "100%",
                    backgroundColor: "#629A1A", // Warna hijau untuk progress
                    borderRadius: "5px",
                  }}
                />
              </Box>
            </Box>
          </Card>

          {/* Watch Time Circular Progress */}
          <Card
            sx={{
              borderRadius: "18px",
              padding: "50px",
              backgroundColor: "#FDFAFA",
              boxShadow: "none",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: "50px" }}>
              Watch Time
            </Typography>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Background (abu-abu) */}
              <CircularProgress
                variant="determinate"
                value={100}
                size={153}
                thickness={3.1}
                sx={{
                  color: "#E0E0E0", // Warna abu-abu untuk bagian yang belum selesai
                  position: "absolute", // Ini memastikan bahwa background ada di belakang
                }}
              />

              {/* Progress (hijau) */}
              <CircularProgress
                variant="determinate"
                value={watchTime}
                size={153}
                thickness={3.1}
                sx={{
                  color: "#629A1A", // Warna hijau untuk progress
                  zIndex: 1, // Pastikan berada di atas
                  "& .MuiCircularProgress-circle": {
                    strokeLinecap: "round",
                  },
                }}
              />

              <Typography sx={{ position: "absolute", fontWeight: 600, fontSize: 48 }}>{watchTime}%</Typography>
            </Box>
          </Card>
        </Grid>

        {/* Right Section (Recommended Classes) */}
        <Grid item xs={12} md={8}>
          <Card
            sx={{
              borderRadius: "18px",
              padding: "40px",
              backgroundColor: "#FDFAFA",
              boxShadow: "none",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "25px",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Rekomendasi Kelas
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 600,
                  color: "#629A1A",
                  cursor: "pointer",
                  display: "flex", // Flexbox untuk meratakan teks dan ikon
                  alignItems: "center", // Menjaga ikon sejajar dengan teks secara vertikal
                }}
              >
                Lihat Lanjut
                <Box
                  component="img"
                  src="/assets/icons/ic-arrow.png" // Ganti dengan path ikon Anda
                  alt="Lihat Lanjut Icon"
                  sx={{
                    width: "16px", // Atur ukuran ikon sesuai kebutuhan
                    height: "16px",
                    marginLeft: "8px", // Jarak antara teks dan ikon
                  }}
                />
              </Typography>
            </Box>

            {/* Class Cards */}
            <Grid container spacing={2}>
              {classRecommendations.map((classItem, index) => (
                <Grid item xs={12} key={index}>
                  <Box
                    component="a"
                    href={`#dummy-link-${index}`} // Dummy link for now, you can replace it with actual URLs or dynamic IDs
                    sx={{ textDecoration: "none" }} // Remove underline on link
                  >
                    <Card
                      sx={{
                        borderRadius: "18px",
                        display: "flex",
                        backgroundColor: "#FFFFFF",
                        cursor: "pointer", // Make the card look clickable
                      }}
                    >
                      {/* Gambar untuk setiap kelas */}
                      <CardMedia component="img" sx={{ width: 170 }} image={classItem.imageUrl} alt={classItem.title} />
                      <CardContent sx={{ padding: "10px", paddingLeft: "20px" }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            fontSize: "16px",
                            color: "#629A1A",
                          }}
                        >
                          {classItem.title}
                        </Typography>
                        <Divider />
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#666",
                            fontSize: "12px",
                            marginTop: "3px",
                          }}
                        >
                          {classItem.description}
                        </Typography>
                        <Typography variant="h6" sx={{ color: "#FFAA00", marginTop: "4px" }}>
                          ★★★★★
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Card>
        </Grid>

        {/* Lanjut Belajar Section */}
        <Grid item xs={12}>
          <Card
            sx={{
              borderRadius: "18px", // Sama dengan bagian lainnya
              padding: "40px",
              backgroundColor: "#FDFAFA", // Warna latar belakang yang sama
              boxShadow: "none",
              marginBottom: "20px",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: "10px", color: "#000000" }}>
              Lanjut Belajar
            </Typography>
            <Grid container spacing={2}>
              {learningProgress.map((course, index) => (
                <Grid item xs={12} key={index}>
                  <Card
                    sx={{
                      borderRadius: "18px",
                      padding: "20px",
                      backgroundColor: "#629A1A",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      color: "#FFFFFF",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Box sx={{ position: "relative", marginRight: "15px" }}>
                        {/* Background (abu-abu) */}
                        <CircularProgress
                          variant="determinate"
                          value={100}
                          size={121}
                          thickness={3.1}
                          sx={{
                            color: "#87A878",
                            position: "absolute", // Memastikan background ada di belakang progress
                          }}
                        />

                        {/* Progress (hijau) */}
                        <CircularProgress
                          variant="determinate"
                          value={course.progress}
                          size={121}
                          thickness={3.1}
                          sx={{
                            color: "#FFFFFF", // Warna putih untuk progress
                            zIndex: 1, // Pastikan progress ada di atas
                          }}
                        />

                        <Typography
                          variant="body1"
                          sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            fontWeight: 600,
                            fontSize: "40px",
                          }}
                        >
                          {course.progress}%
                        </Typography>
                      </Box>
                      <Typography variant="h6">{course.title}</Typography>
                    </Box>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#FFFFFF",
                        color: "#629A1A",
                        fontWeight: 600,
                        borderRadius: "10px",
                      }}
                    >
                      Lanjutkan pembelajaran
                    </Button>
                  </Card>
                </Grid>
              ))}
            </Grid>
            {/* Tombol Lihat lebih detail */}
            <Box sx={{ marginTop: "20px", textAlign: "center" }}>
              <Button
                variant="outlined"
                sx={{
                  color: "#629A1A",
                  borderColor: "#629A1A",
                  fontWeight: 600,
                  borderRadius: "20px",
                }}
              >
                Lihat lebih detail
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
