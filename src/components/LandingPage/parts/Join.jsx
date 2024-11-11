"use client";
import { Slide } from "react-awesome-reveal";
import Image from "next/image";

const JoinUs = () => {
  return (
    <section className="bg-gray-100">
      <div className="max-w-screen-xl mx-auto py-20 px-8" id="program"> {/* Menambahkan padding horizontal */}
        <div className="text-center mb-12">
          <Slide direction="up" triggerOnce>
            <h2 className="text-2xl md:text-[42px] font-bold text-[#629A1A] leading-snug md:leading-tight">
              Mengapa Bergabung dengan <br />
              <span className="font-medium">Go Up Leuwimalang?</span>
            </h2>
          </Slide>
        </div>

        {/* Adjust layout for mobile: image on top and text below */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-start" style={{ gap: "20px" }}> {/* Mengurangi jarak antar elemen */}
          
          {/* Text Content */}
          <div className="flex-1 space-y-6"> {/* Mengurangi jarak antar teks */}
            <Slide direction="up" triggerOnce>
              <div>
                <h3 className="text-xl md:text-3xl font-semibold text-[#2F2F2F] leading-snug">
                  Akses Mudah dan Gratis
                </h3>
                <p className="text-gray-700 text-sm md:text-xl leading-relaxed">
                  Belajar kapan saja dan di mana saja, tanpa biaya.
                </p>
              </div>
            </Slide>
            <Slide direction="up" triggerOnce>
              <div>
                <h3 className="text-xl md:text-3xl font-semibold text-[#2F2F2F] leading-snug">
                  Materi Relevan
                </h3>
                <p className="text-gray-700 text-sm md:text-xl leading-relaxed">
                  Kursus dirancang untuk kebutuhan masyarakat Leuwimalang dengan fokus pada literasi digital, kebersihan, dan keterampilan praktis.
                </p>
              </div>
            </Slide>
            <Slide direction="up" triggerOnce>
              <div>
                <h3 className="text-xl md:text-3xl font-semibold text-[#2F2F2F] leading-snug">
                  Komunitas Kolaboratif
                </h3>
                <p className="text-gray-700 text-sm md:text-xl leading-relaxed">
                  Belajar bersama warga lainnya dan terlibat dalam inisiatif lokal yang mendukung perubahan.
                </p>
              </div>
            </Slide>
          </div>

          {/* Image Section */}
          <div className="flex-1 mb-8 md:mb-0 flex justify-center md:justify-end">
            <Slide direction="up" triggerOnce>
              <Image
                src="/assets/images/join.png"
                alt="Mengapa Bergabung"
                width={300} // Ukuran untuk mobile
                height={365} // Ukuran untuk mobile
                className="md:w-[495px] md:h-[456px] object-contain"
              />
            </Slide>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
