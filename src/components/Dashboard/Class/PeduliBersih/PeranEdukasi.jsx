import React from "react";

const PeranEdukasiContent = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Peran Edukasi dalam Meningkatkan Kesadaran Lingkungan</h1>
      <p style={styles.content}>
        Edukasi memainkan peran penting dalam meningkatkan kesadaran akan isu
        lingkungan. Mari kita eksplorasi lebih lanjut tentang hal ini.
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

export default PeranEdukasiContent;
