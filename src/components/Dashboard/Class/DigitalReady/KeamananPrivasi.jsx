import React from "react";

const KeamananPrivasiContent = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Keamanan dan Privasi di Dunia Digital</h1>
      <p style={styles.content}>
        Memahami cara melindungi privasi dan keamanan kita di dunia digital adalah
        sangat penting. Mari kita bahas cara-cara yang efektif.
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

export default KeamananPrivasiContent;
