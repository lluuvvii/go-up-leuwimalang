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
    <section className="relative w-full h-screen bg-cover bg-center" id="home" style={{ backgroundImage: "url(/assets/images/hero.jpg)" }}>
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10 flex items-center justify-between h-full custom-container">
        <Fade direction="left" triggerOnce>
          <div className="text-left text-white">
            <h1 className="text-5xl font-bold text-[#629A1A] leading-tight">Go Up Leuwimalang</h1>
            <p className="mt-4 text-4xl leading-snug">
              Maju Bersama, <br /> Tingkatkan Literasi <br /> dan Kesadaran <br /> Lingkungan
            </p>
            <p className="mt-4 text-xl leading-relaxed">
              Bergabunglah dengan kami dan wujudkan <br /> perubahan nyata di desa Anda!
            </p>
            <button
              className="px-5 py-3 mt-4 text-white bg-[#629A1A] rounded-lg transition duration-300 hover:bg-[#5a7d2e]"
              onClick={handleButtonClick}
            >
              Belajar Sekarang
            </button>
          </div>
        </Fade>
        <Fade direction="right" triggerOnce>
          <div className="flex-shrink-0">
            <Image src="/assets/images/logo-hero.png" alt="Logo Go Up Leuwimalang" width={457} height={457} />
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Hero;
