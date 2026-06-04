import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-[65vh] sm:h-[75vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-avio-dark">
      {/* Background with deep dark high-altitude sky overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] scale-105 select-none pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 30, 54, 0.75), rgba(15, 30, 54, 0.9)), url('https://images.unsplash.com/photo-1464039397811-476f652a343b?auto=format&fit=crop&q=80&w=1500')`,
        }}
      />

      {/* Decorative high-tech ambient lines background */}
      <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ backgroundImage: 'radial-gradient(ellipse at center, rgba(255,255,255,0.15) 0%, transparent 80%)' }} />

      <div className="relative max-w-4xl mx-auto px-4 text-center z-10 flex flex-col items-center">
        {/* Subtle Category Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-semibold uppercase tracking-widest mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-high-vis animate-pulse" />
          Store Ufficiale di Aviation Curiosity
        </motion.div>

        {/* Dynamic Typography Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-none mb-6"
        >
          Porta la tua passione <br />
          <span className="text-high-vis block mt-2 relative inline-block">
            ad alta quota
          </span>
        </motion.h1>

        {/* Description Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg text-avio-light/90 max-w-2xl font-sans font-medium mb-10 leading-relaxed"
        >
          Esplora l'attrezzatura esclusiva ed il merchandising progettato per chi vive con la testa tra le nuvole ed il cuore nei cieli.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="#prodotti"
            className="group inline-flex items-center gap-2.5 px-8 py-4 bg-high-vis text-white font-sans font-bold text-sm sm:text-base uppercase tracking-wider rounded-lg shadow-lg hover:bg-high-vis-hover transition-all focus:outline-none focus:ring-2 focus:ring-high-vis/50 active:scale-95"
          >
            Esplora lo Store
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>

      {/* Decorative flight indicator compass curve at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-avio-light to-transparent" />
    </section>
  );
}
