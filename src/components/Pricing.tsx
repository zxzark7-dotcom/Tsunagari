import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Dasar',
    price: '0',
    description: 'Untuk individu yang baru memulai perjalanan branding.',
    features: [
      'Hingga 50 Peserta',
      'Durasi 40 Menit',
      'Branding Dasar',
      'Integrasi 1 Platform Sosmed',
    ],
    popular: false,
  },
  {
    name: 'Bisnis',
    price: '499.000',
    description: 'Pilihan terbaik untuk UMKM dan tim profesional.',
    features: [
      'Hingga 300 Peserta',
      'Durasi Tanpa Batas',
      'Custom Branding Penuh',
      'Integrasi Semua Sosmed',
      'Dukungan Layanan Pelanggan 24/7',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '1.290.000',
    description: 'Solusi lengkap untuk korporasi dengan kebutuhan tinggi.',
    features: [
      'Hingga 1000 Peserta',
      'Keamanan Tingkat Lanjut',
      'Manajer Akun Khusus',
      'Analitik Data Mendalam',
      'Prioritas Integrasi API',
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="paket" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-bold text-gray-900 mb-4"
          >
            Paket Layanan Kami
          </motion.h2>
          <p className="text-gray-500 text-lg">Pilih paket langganan yang paling sesuai dengan skala bisnis Anda.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-10 rounded-3xl border ${
                plan.popular ? 'bg-white border-primary shadow-2xl scale-105 z-10' : 'bg-white/50 border-gray-100'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  Paling Populer
                </span>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{plan.description}</p>
              </div>
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-gray-900 text-sm font-bold">Rp</span>
                  <span className="text-4xl font-display font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500 text-sm">/bulan</span>
                </div>
              </div>
              <div className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-green-600" />
                    </div>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <button
                className={`w-full py-4 rounded-xl font-bold transition-all ${
                  plan.popular
                    ? 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-blue-200'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                Mulai Berlangganan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
