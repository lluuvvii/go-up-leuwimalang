import React from "react";

const TugasAkhirContent = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Tugas Akhir - Aksi Nyata untuk Lingkungan Bersih</h1>
      <p style={styles.content}>
        Mari kita lakukan aksi nyata untuk menjaga kebersihan lingkungan. 
        Tugas akhir ini akan membahas beberapa inisiatif yang dapat kita lakukan.
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

export default TugasAkhirContent;
