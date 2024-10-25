import { useEffect, useState } from "react";

export default function DigitalReady() {
  const [course, setCourse] = useState(null); // State untuk menyimpan kursus "Digital Ready"
  const [loading, setLoading] = useState(true); // State untuk loading
  const [error, setError] = useState(null); // State untuk error handling

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/courses"); // Panggil API
        if (!response.ok) {
          throw new Error("Failed to fetch course data");
        }

        const data = await response.json();
        console.log("Fetched data:", data);

        // Filter kursus yang memiliki title "Digital Ready"
        const digitalReadyCourse = data.find((course) => course.title === "Digital Ready");
        console.log("Digital Ready course:", digitalReadyCourse);

        setCourse(digitalReadyCourse); // Set kursus di state
      } catch (err) {
        setError(err.message); // Tangani error jika fetch gagal
        console.error("Fetch error:", err);
      } finally {
        setLoading(false); // Hentikan loading state
      }
    };

    fetchCourse();
  }, []);

  if (loading) return <p>Loading...</p>; // Tampilkan "Loading" saat data sedang diambil
  if (error) return <p>Error: {error}</p>; // Tampilkan error jika fetch gagal

  return (
    <div>
      {course ? (
        <div>
          <h1>{course.title}</h1>
          <p>{course.description}</p>
          <img src={course.image} alt={course.title} />
        </div>
      ) : (
        <p>Course not found</p> // Tampilkan jika kursus "Digital Ready" tidak ditemukan
      )}
    </div>
  );
}
