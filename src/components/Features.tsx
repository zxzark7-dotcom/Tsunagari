import { motion } from 'motion/react';
import { Target, Info, Headset, Instagram, Facebook, Youtube, Share2 } from 'lucide-react';

const mainFeatures = [
  {
    title: 'Branding Profesional',
    description: 'Sesuaikan tampilan platform dengan identitas brand Anda untuk kesan pertama yang tak terlupakan.',
    icon: Target,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Informasi Real-time',
    description: 'Bagikan informasi penting ke seluruh tim atau audiens Anda tanpa hambatan latensi.',
    icon: Info,
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    title: 'Layanan Pelanggan Premium',
    description: 'Berikan dukungan tatap muka yang personal untuk meningkatkan kepuasan pelanggan secara instan.',
    icon: Headset,
    color: 'bg-cyan-100 text-cyan-600',
  },
];

const socialIcons = [
  { icon: Instagram, name: 'Instagram' },
  { icon: Facebook, name: 'Facebook' },
  { icon: Youtube, name: 'YouTube' },
  { icon: Share2, name: 'TikTok & X' },
];

export default function Features() {
  return (
    <section id="tentang" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-bold text-gray-900 mb-4"
          >
            Fokus Utama Layanan Kami
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto"
          >
            Tsunagari dirancang untuk membantu bisnis Anda tumbuh lebih kuat di era digital melalui 3 pilar utama.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {mainFeatures.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${f.color}`}>
                <f.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Social Media Integration */}
        <div className="relative rounded-3xl bg-primary overflow-hidden p-12 lg:p-20">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-display font-bold text-white mb-6">
                Integrasi Media Sosial Tanpa Batas
              </h3>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Unggah hasil konferensi, presentasi, atau konten branding Anda secara otomatis ke berbagai platform populer. Jangkau audiens lebih luas di Instagram, Facebook, YouTube, TikTok, dan X dengan satu klik.
              </p>
              <div className="flex flex-wrap gap-6">
                {socialIcons.map((s, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 group">
                    <div className="w-12 h-12 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary transition-all cursor-pointer">
                      <s.icon size={24} />
                    </div>
                    <span className="text-white/60 text-xs font-medium">{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 relative z-20">
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-10 h-10 rounded-full bg-white/20" />
                   <div className="h-4 w-32 bg-white/20 rounded-full" />
                </div>
                <div className="h-40 w-full bg-white/5 rounded-xl mb-4" />
                <div className="flex justify-between">
                  <div className="h-3 w-20 bg-white/20 rounded-full" />
                  <div className="flex gap-2">
                    <div className="w-6 h-6 bg-white/20 rounded-full" />
                    <div className="w-6 h-6 bg-white/20 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
