import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Andi Pratama',
    role: 'CEO Technova Indonesia',
    content: 'Tsunagari mengubah cara kami berkomunikasi dengan pelanggan. Fitur branding kustomnya membuat setiap meeting terasa sangat profesional.',
    avatar: 'https://i.pravatar.cc/150?u=andi',
  },
  {
    name: 'Santi Wijaya',
    role: 'Marketing Manager Glo-Up',
    content: 'Fitur posting langsung ke media sosial sangat membantu efisiensi tim kreatif kami. Sangat direkomendasikan untuk agensi pemasaran!',
    avatar: 'https://i.pravatar.cc/150?u=santi',
  },
  {
    name: 'Budi Santoso',
    role: 'Head of Customer Success',
    content: 'Dukungan layanan pelanggan yang terintegrasi di Tsunagari sangat stabil. Pengalaman video call tetap lancar meski koneksi terbatas.',
    avatar: 'https://i.pravatar.cc/150?u=budi',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-bold text-gray-900 mb-4"
          >
            Apa Kata Mereka?
          </motion.h2>
          <p className="text-gray-500 text-lg">Kepercayaan ribuan bisnis di Indonesia adalah prioritas kami.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                   <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <div className="relative mb-6">
                <Quote className="absolute -top-4 -left-2 text-primary/10 w-12 h-12" />
                <p className="text-gray-700 italic leading-relaxed relative z-10">"{t.content}"</p>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-gray-900 leading-none mb-1">{t.name}</h4>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
