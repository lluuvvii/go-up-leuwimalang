import React from "react";

const PemikiranKritisContent = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Pemikiran Kritis dalam Mengakses Informasi Daring</h1>
      <p style={styles.content}>
        Mengakses informasi daring memerlukan kemampuan berpikir kritis. Mari
        kita pelajari bagaimana cara melakukannya dengan bijak.
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

export default PemikiranKritisContent;
