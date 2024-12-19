import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";

const TugasAkhirContent = () => {
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
        <CardContent sx={{ padding: "20px" }}>
          {/* Judul */}
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#000000", marginBottom: "20px", textAlign: "center" }}
          >
            Tugas Akhir - Aksi Nyata untuk Lingkungan Bersih
          </Typography>

          {/* Deskripsi */}
          <Typography
            variant="body1"
            sx={{
              color: "#555555",
              marginBottom: "30px",
              lineHeight: 1.6,
              textAlign: "center",
            }}
          >
            <strong>Deskripsi:</strong> Modul ini berfungsi sebagai evaluasi dari semua materi yang telah
            dipelajari dalam Modul 1 hingga 4. Peserta akan diuji melalui tugas akhir atau kuis yang menilai
            pemahaman mereka tentang kesadaran kebersihan lingkungan.
          </Typography>

          {/* Form Input File */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "30px",
            }}
          >
            <input
              type="file"
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "10px",
                width: "80%",
                backgroundColor: "#F8F8F8",
              }}
            />
          </Box>

          {/* Tombol Aksi */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                borderColor: "#555555",
                color: "#555555",
                fontWeight: "600",
                textTransform: "none",
                borderRadius: "20px",
                padding: "8px 20px",
                ":hover": { borderColor: "#555555" },
              }}
            >
              Sebelumnya
            </Button>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#629A1A",
                color: "#FFFFFF",
                fontWeight: "600",
                textTransform: "none",
                borderRadius: "20px",
                padding: "8px 20px",
                ":hover": { backgroundColor: "#527E17" },
              }}
            >
              Selesai
            </Button>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default TugasAkhirContent;