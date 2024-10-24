import React from "react";

const TugasAkhirDigitalContent = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Tugas Akhir - Penerapan Literasi Digital</h1>
      <p style={styles.content}>
        Tugas akhir ini akan membahas penerapan literasi digital dalam
        kehidupan sehari-hari. Mari kita eksplorasi lebih lanjut.
      </p>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#f0f8ff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  title: {
    color: "#007acc",
    fontSize: "2rem",
    marginBottom: "10px",
  },
  content: {
    color: "#333",
    fontSize: "1.2rem",
    lineHeight: "1.5",
  },
};

export default TugasAkhirDigitalContent;
