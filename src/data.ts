import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'maglia',
    name: 'tee esempio 1',
    price: 25.00,
    category: 'Abbigliamento',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=600',
    description: 'T-Shirt premium in cotone biologico al 100% con serigrafia del profilo aerodinamico di decollo e diagramma di portanza. Cuciture rinforzate e morbidezza imbattibile.',
    specs: [
      { name: 'Materiale', value: 'sborra' },
      { name: 'Stampa', value: 'ciao' },
      { name: 'Peso', value: 'aaa' },
      { name: 'Certificazione', value: 'gagatg' }
    ]
  },
  {
    id: 'tazza-hud',
    name: 'Tazza',
    price: 15.00,
    category: 'Accessori',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600',
    description: 'Tazza in ceramica tecnica nera opaca che riproduce fedelmente l\'interfaccia Head-Up Display (HUD) di un moderno caccia multiruolo europeo.',
    specs: [
      { name: 'Capacità', value: '330 ml (11 oz)' },
      { name: 'Finitura', value: 'Nero opaco antiriflesso stealth' },
      { name: 'Resistenza', value: 'Lavabile in lavastoviglie e microonde' },
      { name: 'Diametro', value: '80 mm' }
    ]
  },
  {
    id: 'orologio-aviator',
    name: 'Orologio Aviatore "Mach Chrono"',
    price: 120.00,
    category: 'Tech & Precisione',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600',
    description: 'Cronografo tattico d\'aviazione ispirato alla strumentazione analogica degli storici cockpit. Lancette luminescenti Super-LumiNova® per la massima leggibilità notturna.',
    specs: [
      { name: 'Movimento', value: 'Quarzo Giapponese VD53 Alta Precisione' },
      { name: 'Materiale Cassa', value: 'Acciaio Inossidabile 316L Sabbiato' },
      { name: 'Cinturino', value: 'Pelle bovina cucita a mano con rivetti' },
      { name: 'Resistenza Acqua', value: '5 ATM (50 metri)' }
    ]
  },
  {
    id: 'occhiali-mach1',
    name: 'Occhiali da Sole "Mach 1"',
    price: 85.00,
    category: 'Premium Gear',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=600',
    description: 'I leggendari occhiali a goccia con lenti polarizzate in policarbonato infrangibile. Proteggono dai riflessi intensi dell\'alta quota mantenendo un contrasto cromatico perfetto.',
    specs: [
      { name: 'Lenti', value: 'UV400 Polarizzate G-15 (Trasmittanza 15%)' },
      { name: 'Montatura', value: 'Lega di Titanio ultraleggera flessibile' },
      { name: 'Poggianaso', value: 'Silicone anallergico regolabile' },
      { name: 'Peso', value: 'Soli 18 grammi' }
    ]
  }
];
