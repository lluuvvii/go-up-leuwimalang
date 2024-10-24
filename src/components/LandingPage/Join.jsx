"use client";
import { Slide } from "react-awesome-reveal";
import Image from "next/image";

const JoinUs = () => {
  return (
    <section className="custom-container py-20 bg-gray-100" id="program">
      <div className="text-center mb-12">
        <Slide direction="up" triggerOnce>
          <h2 className="text-[42px] font-bold text-[#629A1A] leading-tight">
            Mengapa Bergabung dengan <br /> <span className="font-medium">Go Up Leuwimalang?</span>
          </h2>
        </Slide>
      </div>
      <div className="flex justify-between items-start" style={{ gap: "80px" }}>
        <div className="flex-1 space-y-8">
          {/* Repeat for all text sections, wrapping each in Slide */}
          <Slide direction="up" triggerOnce>
            <div>
              <h3 className="text-3xl font-semibold text-[#2F2F2F] leading-snug">Akses Mudah dan Gratis</h3>
              <p className="text-gray-700 text-xl leading-relaxed">Belajar kapan saja dan di mana saja, tanpa biaya.</p>
            </div>
          </Slide>
          <Slide direction="up" triggerOnce>
            <div>
              <h3 className="text-3xl font-semibold text-[#2F2F2F] leading-snug">Materi Relevan</h3>
              <p className="text-gray-700 text-xl leading-relaxed">Kursus dirancang untuk kebutuhan masyarakat Leuwimalang dengan fokus pada literasi digital, kebersihan, dan keterampilan praktis.</p>
            </div>
          </Slide>
          <Slide direction="up" triggerOnce>
            <div>
              <h3 className="text-3xl font-semibold text-[#2F2F2F] leading-snug">Komunitas Kolaboratif</h3>
              <p className="text-gray-700 text-xl leading-relaxed">Belajar bersama warga lainnya dan terlibat dalam inisiatif lokal yang mendukung perubahan.</p>
            </div>
          </Slide>
        </div>
        <div className="flex-1 flex justify-end">
          <Slide direction="up" triggerOnce>
            <Image src="/assets/images/join.png" alt="Mengapa Bergabung" width={495} height={456} className="object-contain" />
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
