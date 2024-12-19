import React, { useState } from "react";
import { Card, CardContent, Typography, Button, Box, FormControl, FormControlLabel, Radio, RadioGroup, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

const MateriDanQuizContent = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [points, setPoints] = useState(0);
  const [answers, setAnswers] = useState({});

  const correctAnswers = {
    1: "2", // Jawaban benar untuk soal 1
    2: "6", // Jawaban benar untuk soal 2
    3: "11", // Jawaban benar untuk soal 3
    4: "14", // Jawaban benar untuk soal 4
    5: "18", // Jawaban benar untuk soal 5
  };

  const handleQuizStart = () => {
    setShowQuiz(true);
    setQuizFinished(false);
    setPoints(0);
    setAnswers({});
  };

  const handleBackToMateri = () => {
    setShowQuiz(false);
  };

  const handleDialogOpen = () => {
    setShowDialog(true);
  };

  const handleDialogClose = (confirm) => {
    setShowDialog(false);
    if (confirm) calculatePoints();
  };

  const handleAnswerChange = (question, value) => {
    setAnswers({ ...answers, [question]: value });
  };

  const calculatePoints = () => {
    let totalPoints = 0;
    for (let question in correctAnswers) {
      if (answers[question] === correctAnswers[question]) {
        totalPoints += 10; // 10 poin per jawaban benar
      }
    }
    setPoints(totalPoints);
    setQuizFinished(true);
  };

  return (
    <div>
      {!showQuiz ? (
        <Card
          sx={{
            borderRadius: "18px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            margin: "20px",
            backgroundColor: "#FFFFFF",
          }}
        >
          <CardContent sx={{ padding: "30px" }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#000000", marginBottom: "20px", textAlign: "center" }}>
              Penggunaan Teknologi Secara Efektif
            </Typography>

            <Typography variant="body1" sx={{ color: "#555555", marginBottom: "20px", lineHeight: 1.6 }}>
              Penggunaan teknologi yang efektif berarti memaksimalkan manfaat perangkat dan aplikasi digital dalam kehidupan sehari-hari. Teknologi dapat membantu kita bekerja lebih cepat, terorganisir, dan produktif. Berikut adalah
              langkah-langkah dalam menggunakan teknologi secara efektif.
            </Typography>

            <Box sx={{ marginBottom: "20px" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000000" }}>
                1. Memilih Alat yang Tepat
              </Typography>
              <Typography variant="body1" sx={{ color: "#555555", lineHeight: 1.6 }}>
                Pastikan teknologi yang digunakan sesuai dengan kebutuhan. Contoh, untuk produktivitas, Anda bisa menggunakan aplikasi manajemen tugas atau kalender digital. Memilih alat yang tepat membantu dalam memaksimalkan
                produktivitas.
              </Typography>
            </Box>

            <Box sx={{ marginBottom: "20px" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000000" }}>
                2. Mengatur Notifikasi dengan Bijak
              </Typography>
              <Typography variant="body1" sx={{ color: "#555555", lineHeight: 1.6 }}>
                Notifikasi yang terlalu banyak dapat mengganggu fokus. Disarankan hanya mengaktifkan notifikasi yang benar-benar penting. Ini dapat membantu meningkatkan fokus dan produktivitas.
              </Typography>
            </Box>

            <Box sx={{ marginBottom: "20px" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000000" }}>
                3. Mengatur Waktu Penggunaan Teknologi
              </Typography>
              <Typography variant="body1" sx={{ color: "#555555", lineHeight: 1.6 }}>
                Menjaga batas waktu penggunaan teknologi juga penting untuk menjaga keseimbangan. Misalnya, menentukan batas waktu tertentu untuk aktivitas hiburan atau media sosial agar tetap fokus pada hal yang produktif.
              </Typography>
            </Box>

            <Box sx={{ marginBottom: "20px" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000000" }}>
                4. Menjaga Keamanan Data
              </Typography>
              <Typography variant="body1" sx={{ color: "#555555", lineHeight: 1.6 }}>
                Menggunakan autentikasi dua faktor dan memperbarui perangkat lunak secara berkala adalah langkah yang penting dalam menjaga keamanan. Ini akan melindungi data pribadi dari ancaman digital.
              </Typography>
            </Box>

            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000000", marginBottom: "10px" }}>
              Manfaat dari Penggunaan Teknologi yang Efektif
            </Typography>
            <ul style={{ color: "#555555", lineHeight: 1.8, marginLeft: "20px" }}>
              <li>Meningkatkan Produktivitas: Dengan memilih alat yang tepat, kita bisa mencapai lebih banyak dalam waktu yang lebih singkat.</li>
              <li>Mengurangi Risiko Gangguan: Pengaturan notifikasi yang bijak akan mengurangi distraksi.</li>
              <li>Mendukung Keamanan Digital: Dengan autentikasi dua faktor dan pengelolaan data yang baik, kita dapat melindungi privasi dan data dari risiko kejahatan digital.</li>
            </ul>

            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000000", marginTop: "20px", marginBottom: "10px" }}>
              Kesimpulan
            </Typography>
            <Typography variant="body1" sx={{ color: "#555555", lineHeight: 1.6 }}>
              Penggunaan teknologi yang efektif membantu kita mengoptimalkan kehidupan sehari-hari dan meningkatkan produktivitas. Dengan teknologi yang digunakan secara bijak, kita dapat mengurangi gangguan dan fokus pada tujuan utama.
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "30px" }}>
              <Button variant="outlined" sx={{ borderColor: "#555555", color: "#555555", fontWeight: "600" }}>
                Sebelumnya
              </Button>
              <Button
                variant="contained"
                onClick={handleQuizStart}
                sx={{
                  backgroundColor: "#629A1A",
                  color: "#FFFFFF",
                  fontWeight: "600",
                  borderRadius: "20px",
                }}
              >
                Ambil Quiz
              </Button>
            </Box>
          </CardContent>
        </Card>
      ) : !quizFinished ? (
        <Card sx={{ borderRadius: "18px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", margin: "20px", backgroundColor: "#FFFFFF" }}>
          <CardContent sx={{ padding: "20px" }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
              Quiz
            </Typography>

            <FormControl component="fieldset">
              {/* Pertanyaan Quiz */}
              <Typography sx={{ fontWeight: "bold" }}>1. Apa tujuan utama penggunaan teknologi dalam pendidikan?</Typography>
              <RadioGroup onChange={(e) => handleAnswerChange("1", e.target.value)}>
                <FormControlLabel value="1" control={<Radio />} label="Menghabiskan waktu" />
                <FormControlLabel value="2" control={<Radio />} label="Meningkatkan efisiensi dan efektivitas pembelajaran" />
                <FormControlLabel value="3" control={<Radio />} label="Mengurangi interaksi sosial" />
                <FormControlLabel value="4" control={<Radio />} label="Membeli gadget terbaru" />
              </RadioGroup>

              <Typography sx={{ fontWeight: "bold", marginTop: "20px" }}>2. Apa yang dimaksud dengan aplikasi produktivitas?</Typography>
              <RadioGroup onChange={(e) => handleAnswerChange("2", e.target.value)}>
                <FormControlLabel value="5" control={<Radio />} label="Aplikasi untuk bermain game" />
                <FormControlLabel value="6" control={<Radio />} label="Aplikasi yang membantu meningkatkan efisiensi kerja" />
                <FormControlLabel value="7" control={<Radio />} label="Aplikasi untuk berbagi foto" />
                <FormControlLabel value="8" control={<Radio />} label="Aplikasi untuk menonton film" />
              </RadioGroup>

              {/* Pertanyaan lain */}
              <Typography sx={{ fontWeight: "bold", marginTop: "20px" }}>3. Mengapa penting untuk mengatur waktu saat menggunakan teknologi?</Typography>
              <RadioGroup onChange={(e) => handleAnswerChange("3", e.target.value)}>
                <FormControlLabel value="11" control={<Radio />} label="Untuk meningkatkan fokus dan produktivitas" />
                <FormControlLabel value="12" control={<Radio />} label="Untuk meningkatkan penggunaan data" />
                <FormControlLabel value="13" control={<Radio />} label="Menggunakan bahasa yang rumit" />
                <FormControlLabel value="14" control={<Radio />} label="Memilih media komunikasi yang tepat" />
              </RadioGroup>

              <Typography sx={{ fontWeight: "bold", marginTop: "20px" }}>4. Apa yang dapat membantu kita berkomunikasi lebih efektif di era digital?</Typography>
              <RadioGroup onChange={(e) => handleAnswerChange("4", e.target.value)}>
                <FormControlLabel value="15" control={<Radio />} label="Memilih media komunikasi yang tepat" />
                <FormControlLabel value="16" control={<Radio />} label="Menghindari komunikasi sama sekali" />
                <FormControlLabel value="17" control={<Radio />} label="Mengirim pesan yang sangat panjang" />
                <FormControlLabel value="18" control={<Radio />} label="Meningkatnya kreativitas" />
              </RadioGroup>

              <Typography sx={{ fontWeight: "bold", marginTop: "20px" }}>5. Apa risiko yang dapat terjadi akibat ketergantungan teknologi?</Typography>
              <RadioGroup onChange={(e) => handleAnswerChange("5", e.target.value)}>
                <FormControlLabel value="18" control={<Radio />} label="Mengurangi produktivitas" />
                <FormControlLabel value="19" control={<Radio />} label="Meningkatkan pengetahuan" />
                <FormControlLabel value="20" control={<Radio />} label="Meningkatnya interaksi sosial" />
                <FormControlLabel value="21" control={<Radio />} label="Menghabiskan waktu" />
                
              </RadioGroup>
            </FormControl>

            <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
              <Button variant="outlined" onClick={handleBackToMateri} sx={{ color: "#555", borderColor: "#555" }}>
                Kembali
              </Button>
              <Button variant="contained" onClick={handleDialogOpen} sx={{ backgroundColor: "#629A1A", color: "#FFFFFF", fontWeight: "600" }}>
                Selesai
              </Button>
            </Box>

            {/* Dialog Konfirmasi */}
            <Dialog open={showDialog} onClose={() => handleDialogClose(false)}>
              <DialogTitle>Konfirmasi</DialogTitle>
              <DialogContent>
                <DialogContentText>Apakah Anda yakin ingin menyelesaikan quiz?</DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => handleDialogClose(false)}>Batal</Button>
                <Button onClick={() => handleDialogClose(true)} autoFocus>
                  Ya, Selesai
                </Button>
              </DialogActions>
            </Dialog>
          </CardContent>
        </Card>
      ) : (
        <Card sx={{ borderRadius: "18px", margin: "20px", backgroundColor: "#FFFFFF" }}>
          <CardContent sx={{ padding: "20px", textAlign: "center" }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
              Quiz Selesai!
            </Typography>
            <Typography variant="h5" sx={{ color: "#629A1A", fontWeight: "bold" }}>
              Anda mendapatkan {points} poin!
            </Typography>
            <Button variant="contained" onClick={handleBackToMateri} sx={{ marginTop: "20px", backgroundColor: "#629A1A", color: "#FFFFFF" }}>
              Kembali ke Materi
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default MateriDanQuizContent;
