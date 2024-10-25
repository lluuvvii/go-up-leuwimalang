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
        <Grid item xs={12} md={4}>
          {/* Linear Progress */}
          <Card
            sx={{
              borderRadius: "18px",
              padding: { xs: "20px", md: "45px" }, // Responsive padding
              backgroundColor: "#FDFAFA",
              boxShadow: "none",
              marginBottom: "20px",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: "20px", fontSize: { xs: "1.2rem", md: "1.5rem" } }}>
              Progress
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography sx={{ marginBottom: 2, fontWeight: 600, fontSize: { xs: "2rem", md: "48px" } }}>{progress}%</Typography>
              <Box
                sx={{
                  width: "100%",
                  height: "10px",
                  backgroundColor: "#E0E0E0",
                  borderRadius: "5px",
                }}
              >
                <Box
                  sx={{
                    width: `${progress}%`,
                    height: "100%",
                    backgroundColor: "#629A1A",
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
              padding: { xs: "20px", md: "45px" },
              backgroundColor: "#FDFAFA",
              boxShadow: "none",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: "20px", fontSize: { xs: "1.2rem", md: "1.5rem" } }}>
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
              <CircularProgress
                variant="determinate"
                value={100}
                size={153}
                thickness={3.1}
                sx={{
                  color: "#E0E0E0",
                  position: "absolute",
                }}
              />
              <CircularProgress
                variant="determinate"
                value={watchTime}
                size={153}
                thickness={3.1}
                sx={{
                  color: "#629A1A",
                  zIndex: 1,
                  "& .MuiCircularProgress-circle": {
                    strokeLinecap: "round",
                  },
                }}
              />
              <Typography sx={{ position: "absolute", fontWeight: 600, fontSize: { xs: "2rem", md: "48px" } }}>{watchTime}%</Typography>
            </Box>
          </Card>
        </Grid>

        {/* Right Section (Recommended Classes) */}
        <Grid item xs={12} md={8}>
          <Card
            sx={{
              borderRadius: "18px",
              padding: { xs: "20px", md: "40px" },
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
              <Typography variant="h6" sx={{ fontWeight: 600, fontSize: { xs: "16px", md: "20px" } }}>
                Rekomendasi Kelas
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 600,
                  color: "#629A1A",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Lihat Lanjut
                <Box
                  component="img"
                  src="/assets/icons/ic-arrow.png"
                  alt="Lihat Lanjut Icon"
                  sx={{
                    width: "16px",
                    height: "16px",
                    marginLeft: "8px",
                  }}
                />
              </Typography>
            </Box>

            {/* Class Cards */}
            <Grid container spacing={2}>
              {classRecommendations.map((classItem, index) => (
                <Grid item xs={12} key={index}>
                  <Box component="a" href={`#dummy-link-${index}`} sx={{ textDecoration: "none" }}>
                    <Card
                      sx={{
                        borderRadius: "18px",
                        display: "flex",
                        backgroundColor: "#FFFFFF",
                        cursor: "pointer",
                        height: { xs: "100px", md: "auto" }, // Responsif
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{ width: 120 }} // Lebar gambar disesuaikan
                        image={classItem.imageUrl}
                        alt={classItem.title}
                      />
                      <CardContent sx={{ padding: "4px", paddingLeft: "10px" }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            fontSize: { xs: "12px", md: "16px" }, // Responsif
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
                            fontSize: { xs: "8px", md: "12px" }, // Responsif
                            marginTop: "3px",
                          }}
                        >
                          {classItem.description}
                        </Typography>
                        <Typography variant="h6" sx={{ color: "#FFAA00", marginTop: "4px", fontSize: { xs: "14px", md: "16px" } }}>
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
              padding: { xs: "20px", md: "40px" }, // Padding kecil untuk mobile
              backgroundColor: "#FDFAFA", // Warna latar belakang yang sama
              boxShadow: "none",
              marginBottom: "20px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                marginBottom: "10px",
                color: "#000000",
                fontSize: { xs: "1.2rem", md: "1.5rem" }, // Ukuran font lebih kecil di mobile
              }}
            >
              Lanjut Belajar
            </Typography>
            <Grid container spacing={2}>
              {learningProgress.map((course, index) => (
                <Grid item xs={12} key={index}>
                  <Card
                    sx={{
                      borderRadius: "18px",
                      padding: { xs: "10px", md: "20px" }, // Padding kecil untuk mobile
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
                          size={80} // Ukuran untuk tampilan mobile
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
                          size={80} // Ukuran untuk tampilan mobile
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
                            fontSize: { xs: "24px", md: "28px" }, // Ukuran font untuk tampilan mobile
                          }}
                        >
                          {course.progress}%
                        </Typography>
                      </Box>
                      <Typography variant="h6" sx={{ fontSize: { xs: "0.8rem", md: "1.4rem" } }}>
                        {course.title}
                      </Typography>
                    </Box>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#FFFFFF",
                        color: "#629A1A",
                        fontWeight: 600,
                        borderRadius: "10px",
                        fontSize: { xs: "0.4rem", md: "1rem" }, // Ukuran font tombol lebih kecil di mobile
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
                  fontSize: { xs: "0.8rem", md: "1rem" }, // Ukuran font tombol lebih kecil di mobile
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
