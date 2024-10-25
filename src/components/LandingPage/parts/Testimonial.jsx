"use client";
import { Fade } from 'react-awesome-reveal';
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="max-w-screen-xl mx-auto py-20 px-8"> {/* Menambahkan padding horizontal */}
        <div className="text-center mb-12">
          <Fade triggerOnce>
            <h2 className="text-2xl md:text-[42px] font-bold text-[#629A1A] leading-tight">
              Apa Kata <span className="font-medium">Warga Leuwimalang?</span>
            </h2>
          </Fade>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <Fade direction="up" triggerOnce>
            <div className="bg-[#629A1A] rounded-xl p-8 text-white text-center h-full flex flex-col">
              <div className="mb-6">
                <Image src="/assets/images/person1.jpg" alt="Budi" width={120} height={120} className="rounded-full mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold">Budi</h3>
              <p className="text-lg">Warga Leuwimalang</p>
              <div className="mt-6 relative flex-grow">
                <Image src="/assets/icons/ic-quote.svg" alt="Quote Start" width={17} height={12} className="absolute -top-4 left-0" />
                <p className="text-sm md:text-2xl leading-relaxed font-semibold">Dengan mengikuti kursus literasi digital, saya jadi lebih percaya diri menggunakan internet untuk kebutuhan sehari-hari.</p>
                <Image src="/assets/icons/ic-quote.svg" alt="Quote End" width={17} height={12} className="absolute -bottom-4 right-0 rotate-180" />
              </div>
            </div>
          </Fade>

          {/* Testimonial 2 */}
          <Fade direction="up" triggerOnce>
            <div className="bg-[#629A1A] rounded-xl p-8 text-white text-center h-full flex flex-col">
              <div className="mb-6">
                <Image src="/assets/images/person2.jpg" alt="Rahma" width={120} height={120} className="rounded-full mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold">Rahma</h3>
              <p className="text-lg">Warga Leuwimalang</p>
              <div className="mt-6 relative flex-grow">
                <Image src="/assets/icons/ic-quote.svg" alt="Quote Start" width={17} height={12} className="absolute -top-4 left-0" />
                <p className="text-sm md:text-2xl leading-relaxed font-semibold">Kursus ini sangat membantu saya memahami teknologi dan mengaplikasikannya dalam kehidupan sehari-hari.</p>
                <Image src="/assets/icons/ic-quote.svg" alt="Quote End" width={17} height={12} className="absolute -bottom-4 right-0 rotate-180" />
              </div>
            </div>
          </Fade>

          {/* Testimonial 3 */}
          <Fade direction="up" triggerOnce>
            <div className="bg-[#629A1A] rounded-xl p-8 text-white text-center h-full flex flex-col">
              <div className="mb-6">
                <Image src="/assets/images/person3.jpg" alt="Abdul" width={120} height={120} className="rounded-full mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold">Abdul</h3>
              <p className="text-lg">Warga Leuwimalang</p>
              <div className="mt-6 relative flex-grow">
                <Image src="/assets/icons/ic-quote.svg" alt="Quote Start" width={17} height={12} className="absolute -top-4 left-0" />
                <p className="text-sm md:text-2xl leading-relaxed font-semibold">Saya sangat bersyukur ada program ini. Sekarang saya bisa memanfaatkan internet dengan lebih baik.</p>
                <Image src="/assets/icons/ic-quote.svg" alt="Quote End" width={17} height={12} className="absolute -bottom-4 right-0 rotate-180" />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
