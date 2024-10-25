"use client";
import { Zoom } from "react-awesome-reveal";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="bg-white"> {/* Latar belakang putih penuh */}
      <div className="max-w-screen-xl mx-auto py-20 px-8" id="tentang"> {/* Konten dengan padding */}
        <div className="text-center mb-12">
          <Zoom triggerOnce>
            <h2 className="text-2xl md:text-[42px] font-bold text-[#629A1A] leading-snug md:leading-tight">
              Tentang <span className="font-medium">Go Up Leuwimalang</span>
            </h2>
          </Zoom>
        </div>

        {/* Mobile Layout: Stack Image on top and text below */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-start" style={{ gap: "40px" }}>
          
          {/* Left Side: Text Content */}
          <div className="flex-1 space-y-8">
            <Zoom triggerOnce>
              <div>
                <h3 className="text-xl md:text-3xl font-semibold text-[#2F2F2F] leading-snug">
                  Edukasi
                </h3>
                <p className="text-gray-700 text-sm md:text-xl leading-relaxed">
                  Go Up Leuwimalang adalah platform edukasi online yang dirancang khusus untuk warga Desa Leuwimalang.
                </p>
              </div>
            </Zoom>

            <Zoom triggerOnce>
              <div>
                <h3 className="text-xl md:text-3xl font-semibold text-[#2F2F2F] leading-snug">
                  Komitmen
                </h3>
                <p className="text-gray-700 text-sm md:text-xl leading-relaxed">
                  Kami berkomitmen untuk memberikan akses mudah ke berbagai kursus yang relevan dengan kehidupan sehari-hari, mulai dari literasi digital, kebersihan lingkungan, hingga keterampilan praktis lainnya.
                </p>
              </div>
            </Zoom>

            <Zoom triggerOnce>
              <div>
                <h3 className="text-xl md:text-3xl font-semibold text-[#2F2F2F] leading-snug">
                  Harapan
                </h3>
                <p className="text-gray-700 text-sm md:text-xl leading-relaxed">
                  Melalui program ini, kami berharap bisa mendorong perubahan positif, memberdayakan masyarakat, dan meningkatkan kualitas hidup di desa Leuwimalang.
                </p>
              </div>
            </Zoom>
          </div>

          {/* Right Side: Image */}
          <div className="flex-1 mb-8 md:mb-0 flex justify-center md:justify-end">
            <Zoom triggerOnce>
              <Image
                src="/assets/images/about.jpg"
                alt="Tentang Kami"
                width={300} // Ukuran untuk mobile
                height={365} // Ukuran untuk mobile
                className="md:w-[375px] md:h-[456px] object-contain"
              />
            </Zoom>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
