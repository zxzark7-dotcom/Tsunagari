import { Video, Instagram, Facebook, Youtube, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Video className="text-primary w-8 h-8" />
              <span className="text-2xl font-display font-bold">Tsunagari</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Membangun koneksi bermakna melalui konferensi video berkualitas tinggi untuk masa depan bisnis Indonesia.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <Instagram size={20} />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <Facebook size={20} />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <Twitter size={20} />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <Youtube size={20} />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Tautan Cepat</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#beranda" className="hover:text-primary transition-colors">Beranda</a></li>
              <li><a href="#paket" className="hover:text-primary transition-colors">Paket Layanan</a></li>
              <li><a href="#tentang" className="hover:text-primary transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog & Artikel</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Hubungi Kami</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <span>info@tsunagari.id</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <span>+62-21-555-1234</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-primary" />
                <span>SCBD District 8, Jakarta Selatan</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Berlangganan Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Dapatkan tips branding dan pembaruan fitur terbaru langsung di email Anda.</p>
            <div className="flex bg-white/5 rounded-lg p-1 border border-white/10">
              <input
                type="email"
                placeholder="Email Anda"
                className="bg-transparent border-none outline-none px-4 py-2 w-full text-sm"
              />
              <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary-dark transition-colors">
                Daftar
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Tsunagari. Hak Cipta Dilindungi Undang-Undang.
          </p>
          <div className="flex gap-6 text-gray-600 text-xs">
            <a href="#" className="hover:text-white">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
