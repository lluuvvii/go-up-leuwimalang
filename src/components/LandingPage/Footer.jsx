import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Website Information */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <a href="/">
              <Image src="/assets/images/logo-hero.png" alt="Logo" width={40} height={40} className="h-8 w-auto" />
            </a>
            <h2 className="text-xl font-bold">Go Up Leuwimalang</h2>
          </div>
          <p className="text-gray-400 mb-3">Maju Bersama, Tingkatkan Literasi dan Kesadaran Lingkungan.</p>
          <ul className="text-gray-400 space-y-2 mb-6">
            <li className="flex items-center">
              <span className="mr-2">📍</span> Leuwimalang, Jawa Barat
            </li>
            <li className="flex items-center">
              <span className="mr-2">✉️</span> admin@leuwimalang.ac.id
            </li>
            <li className="flex items-center">
              <span className="mr-2">📞</span> +6281222002253
            </li>
          </ul>
        </div>

        {/* Produk */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Produk</h3>
          <ul className="space-y-2 mb-6">
            <li>
              <a href="#" className="text-gray-400 hover:text-gray-200">
                Kursus
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-gray-200">
                Tantangan Harian
              </a>
            </li>
          </ul>
        </div>

        {/* Lainnya */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Lainnya</h3>
          <ul className="space-y-2 mb-6">
            <li>
              <a href="#" className="text-gray-400 hover:text-gray-200">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-gray-200">
                Syarat dan Ketentuan
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-gray-200">
                Privasi
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bawah */}
      <div className="border-t border-gray-800 pt-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Copyrights by{" "}
            <a href="#" className="text-gray-200 underline">
              Trio Go Through
            </a>
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
