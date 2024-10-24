"use client";
import { Zoom } from "react-awesome-reveal";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="custom-container py-20 bg-white" id="tentang">
      <div className="text-center mb-12">
        <Zoom triggerOnce>
          <h2 className="text-[42px] font-bold text-[#629A1A] leading-tight">
            Tentang <span className="font-medium">Go Up Leuwimalang</span>
          </h2>
        </Zoom>
      </div>
      <div className="flex justify-between items-start" style={{ gap: "80px" }}>
        <div className="flex-1 space-y-8">
          <Zoom triggerOnce>
            <div>
              <h3 className="text-3xl font-semibold text-[#2F2F2F] leading-snug">Edukasi</h3>
              <p className="text-gray-700 text-xl leading-relaxed">Go Up Leuwimalang adalah platform edukasi online yang dirancang khusus untuk warga Desa Leuwimalang.</p>
            </div>
          </Zoom>
          <Zoom triggerOnce>
            <div>
              <h3 className="text-3xl font-semibold text-[#2F2F2F] leading-snug">Komitmen</h3>
              <p className="text-gray-700 text-xl leading-relaxed">
                Kami berkomitmen untuk memberikan akses mudah ke berbagai kursus yang relevan dengan kehidupan sehari-hari, mulai dari literasi digital, kebersihan lingkungan, hingga keterampilan praktis lainnya.
              </p>
            </div>
          </Zoom>
          <Zoom triggerOnce>
            <div>
              <h3 className="text-3xl font-semibold text-[#2F2F2F] leading-snug">Harapan</h3>
              <p className="text-gray-700 text-xl leading-relaxed">Melalui program ini, kami berharap bisa mendorong perubahan positif, memberdayakan masyarakat, dan meningkatkan kualitas hidup di desa Leuwimalang.</p>
            </div>
            ;
          </Zoom>
          {/* Repeat for other sections (Komitmen, Harapan) */}
        </div>
        <div className="flex-1 flex justify-end">
          <Zoom triggerOnce>
            <Image src="/assets/images/about.jpg" alt="Tentang Kami" width={375} height={456} className="object-contain" />
          </Zoom>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
