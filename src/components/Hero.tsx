import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="beranda" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
          alt="Modern Team Meeting"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
            Terhubung Lebih Dekat dengan <span className="text-primary italic">Tsunagari</span>
          </h1>
          <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-xl">
            Solusi konferensi video modern untuk memperkuat branding bisnis Anda, menyampaikan informasi dengan jelas, dan meningkatkan kualitas layanan pelanggan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary hover:bg-primary-dark text-white text-lg px-10 py-4 rounded-xl font-bold transition-all transform hover:scale-105">
              Coba Sekarang Gratis
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 text-lg px-10 py-4 rounded-xl font-bold transition-all transform hover:scale-105">
              Lihat Demo
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Blur Effect */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
