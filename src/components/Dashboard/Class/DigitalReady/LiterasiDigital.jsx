import React from "react";

const LiterasiDigitalContent = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Literasi Digital</h1>
      <p style={styles.content}>
        Di sini, Anda dapat belajar tentang literasi digital, termasuk
        keamanan dan penggunaan teknologi secara efektif.
      </p>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#f0f8ff", // Warna latar belakang
    borderRadius: "10px", // Sudut melengkung
    padding: "20px", // Ruang di dalam kontainer
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Bayangan kotak
  },
  title: {
    color: "#007acc", // Warna judul
    fontSize: "2rem", // Ukuran font judul
    marginBottom: "10px", // Jarak bawah judul
  },
  content: {
    color: "#333", // Warna konten
    fontSize: "1.2rem", // Ukuran font konten
    lineHeight: "1.5", // Jarak antar baris
  },
};

export default LiterasiDigitalContent;
