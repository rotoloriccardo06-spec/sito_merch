import { Youtube, Bell, Heart, ExternalLink } from 'lucide-react';

export default function YoutubeBanner() {
  return (
    <section id="youtube" className="bg-red-600 relative overflow-hidden py-16 text-white border-t border-red-700">
      {/* Immersive backdrop graphics */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(0, 0, 0, 0.4) 0%, transparent 90%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          
          <div className="flex flex-col lg:flex-row items-center gap-6">
            {/* Animated YouTube Icon Shield */}
            <div className="w-16 h-16 rounded-2xl bg-white text-red-600 flex items-center justify-center shadow-lg transform transition-transform duration-500 hover:rotate-12 select-none shrink-0 border border-white/20">
              <Youtube className="w-9 h-9 fill-red-600" />
            </div>

            <div className="space-y-2">
              <h2 className="font-sans font-extrabold text-2xl sm:text-3xl tracking-tight uppercase">
                Non perderti il prossimo decollo
              </h2>
              <p className="text-sm sm:text-base text-red-100/90 max-w-xl font-sans font-medium">
                Iscriviti a <strong className="text-white hover:underline cursor-pointer">Aviation Curiosity</strong> per analisi storiche, documentari d'aviazione e recensioni tecniche dettagliate. Unisciti alla nostra squadriglia!
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            {/* CTA action buttons */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener Referrer"
              className="group font-sans font-bold text-xs sm:text-sm uppercase tracking-wider bg-white text-red-600 px-7 py-4 rounded-lg flex items-center justify-center gap-2.5 transition-all shadow-md hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-white/50 w-full sm:w-auto"
            >
              ISCRIVITI AL CANALE
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Subtle secondary visual stats indicator */}
            <div className="flex items-center gap-1.5 px-4 py-2 rounded bg-black/10 text-xs font-mono border border-white/5 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
              <span>+250K SQUAD</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
