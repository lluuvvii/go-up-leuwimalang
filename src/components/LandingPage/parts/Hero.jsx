"use client";
import { useRouter } from "next/navigation";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";

const Hero = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/dashboard");
  };

  return (
    <section className="relative w-full h-screen bg-cover bg-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/assets/images/hero.jpg)" }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>

      {/* Konten dengan padding */}
      <div className="max-w-screen-xl mx-auto h-full flex flex-col-reverse md:flex-row items-center justify-between p-10"> {/* Menambahkan padding dan memusatkan konten */}
        
        {/* Left Side: Text Content, which will be below the image on mobile */}
        <Fade direction="left" triggerOnce>
          <div className="text-center md:text-left text-white max-w-md mt-6 md:mt-0">
            <h1 className="text-3xl md:text-5xl font-bold text-[#629A1A] leading-snug md:leading-tight">
              Go Up Leuwimalang
            </h1>
            <p className="mt-4 text-xl md:text-4xl leading-snug md:leading-snug">
              Maju Bersama, <br /> Tingkatkan Literasi <br /> dan Kesadaran <br /> Lingkungan
            </p>
            <p className="mt-4 text-sm md:text-xl leading-relaxed md:leading-relaxed">
              Bergabunglah dengan kami dan wujudkan <br className="hidden md:block" /> perubahan nyata di desa Anda!
            </p>
            <button
              className="px-4 py-2 md:px-5 md:py-3 mt-4 text-white bg-[#629A1A] rounded-lg transition duration-300 hover:bg-[#5a7d2e] text-sm md:text-base"
              onClick={handleButtonClick}
            >
              Belajar Sekarang
            </button>
          </div>
        </Fade>

        {/* Right Side: Image, which will be on top on mobile */}
        <Fade direction="right" triggerOnce>
          <div className="flex-shrink-0 mb-6 md:mb-0 mx-auto md:mx-0">
            <Image
              src="/assets/images/logo-hero.png"
              alt="Logo Go Up Leuwimalang"
              width={250} // Ukuran untuk mobile
              height={250} // Ukuran untuk mobile
              className="md:w-[457px] md:h-[457px]"
            />
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Hero;
