"use client";
import { Zoom } from "react-awesome-reveal";
import Image from "next/image";

const StartLearning = () => {
  return (
    <section className="custom-container py-20 bg-gray-100">
      <div className="text-center mb-12">
        <Zoom triggerOnce>
          <h2 className="text-[42px] font-bold text-[#629A1A] leading-tight">
            Mulai Perjalanan <span className="font-medium">Belajar Anda!</span>
          </h2>
        </Zoom>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex-1 flex justify-center" style={{ margin: "46px 0" }}>
          <Zoom triggerOnce>
            <Image src="/assets/images/learning.png" alt="Mulai Perjalanan Belajar" width={416} height={456} className="object-contain" />
          </Zoom>
        </div>
        <Zoom triggerOnce>
          <div className="flex-1 pl-12" style={{ margin: "46px 0" }}>
            <p className="text-3xl font-semibold text-[#2F2F2F] leading-relaxed mb-4">
              Tingkatkan kualitas hidup dan <br /> keterampilan Anda hari ini!
            </p>
            <p className="text-xl text-gray-700 leading-[1.6] mb-6">
              Daftarkan diri Anda dan ikuti kursus <br /> yang paling sesuai dengan kebutuhan.
            </p>
            <button className="px-6 py-3 bg-[#629A1A] text-white text-xl font-semibold rounded-lg transition duration-300 hover:bg-[#5a7d2e]">Daftar Gratis Sekarang!</button>
          </div>
        </Zoom>
      </div>
    </section>
  );
};

export default StartLearning;
