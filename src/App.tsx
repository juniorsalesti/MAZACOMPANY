/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, useMotionValue, useInView, animate } from "motion/react";
import { 
  Camera, 
  Video, 
  Film, 
  Star, 
  ArrowRight, 
  Instagram, 
  Youtube, 
  Mail, 
  ChevronRight,
  Play,
  Award,
  Users,
  MessageCircle
} from "lucide-react";
import { useRef, useEffect } from "react";

function Counter({ value }: { value: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration: 2, ease: "easeOut" });
    }
  }, [inView, value, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY, scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const logoHeight = useTransform(scrollY, [0, 100], [80, 56]); // De 80px para 56px
  const logoHeightMobile = useTransform(scrollY, [0, 100], [72, 48]); // De 72px para 48px

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  const testimonials = [
    {
      name: "Ana Silva",
      role: "Diretora de Marketing, TechCorp",
      content: "A MAZA COMPANY elevou o patamar da nossa marca. O olhar cinematográfico deles é incomparável.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      name: "Carlos Mendes",
      role: "Fundador, Estilo & Co",
      content: "Profissionalismo e entrega impecável. Cada frame conta uma história poderosa.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      name: "Juliana Costa",
      role: "Influenciadora Digital",
      content: "Trabalhar com a MAZA foi uma experiência transformadora. Eles captam a essência como ninguém.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
    }
  ];

  const services = [
    {
      title: "Filmmaker",
      description: "Produções cinematográficas de alta fidelidade para marcas e eventos exclusivos.",
      icon: <Video className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Fotografia",
      description: "Capturando momentos e produtos com iluminação e composição de nível editorial.",
      icon: <Camera className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Pós-Produção",
      description: "Color grading e edição rítmica que trazem a alma do seu projeto à vida.",
      icon: <Film className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div ref={containerRef} className="relative bg-brand-dark text-white selection:bg-white selection:text-black">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            {/* Logo para Desktop */}
            <motion.img 
              src="https://i.ibb.co/mCfzLPDy/Prancheta-1.png" 
              alt="MAZA COMPANY" 
              style={{ height: logoHeight }}
              className="hidden md:block w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            {/* Logo para Mobile */}
            <motion.img 
              src="https://i.ibb.co/mCfzLPDy/Prancheta-1.png" 
              alt="MAZA COMPANY" 
              style={{ height: logoHeightMobile }}
              className="block md:hidden w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-brand-secondary/70">
            <a href="#about" className="hover:text-white transition-colors">Sobre</a>
            <a href="#services" className="hover:text-white transition-colors">Serviços</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Portfólio</a>
            <a href="#contact" className="hover:text-white transition-colors">Contato</a>
          </nav>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white/90 transition-colors"
          >
            Solicitar Orçamento
          </motion.button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity, scale }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-brand-dark z-10" />
          <img 
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=2000" 
            alt="Cinematic Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1 border border-white/20 rounded-full text-[10px] uppercase tracking-[0.3em] mb-6 backdrop-blur-sm">
              Filmmaker & Fotógrafo Premium
            </span>
            <h1 className="text-3xl md:text-8xl font-display font-medium leading-[0.9] tracking-tight mb-8">
              Transformamos ideias <br />
              <span className="italic text-brand-secondary/80">em realidade visual</span>
            </h1>
            <p className="text-base md:text-xl text-brand-secondary/60 max-w-2xl mb-10 font-light leading-relaxed">
              Produções audiovisuais sofisticadas que conectam, engajam e fortalecem marcas através de um olhar cinematográfico exclusivo.
            </p>
            <div className="flex flex-col sm:flex-row items-start justify-start gap-4">
              <a 
                href="https://matheuszacharias.myportfolio.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-full flex items-center gap-2 hover:bg-white/90 transition-all"
              >
                Ver Portfólio
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#services"
                className="px-8 py-4 border border-white/20 hover:bg-white/10 rounded-full font-bold uppercase tracking-widest transition-all"
              >
                Nossos Serviços
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 opacity-30"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </section>

      {/* Authority Marquee */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="flex overflow-hidden whitespace-nowrap">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-20 pr-20"
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-20">
                <span className="text-2xl font-display italic opacity-20">LUXURY BRANDS</span>
                <span className="text-2xl font-display italic opacity-20">CINEMATIC STORYTELLING</span>
                <span className="text-2xl font-display italic opacity-20">EDITORIAL PHOTOGRAPHY</span>
                <span className="text-2xl font-display italic opacity-20">GLOBAL PRODUCTIONS</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Differentials - Bento Grid */}
      <section id="about" className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="text-sm uppercase tracking-[0.4em] text-brand-secondary/40 mb-4">Diferenciais</h2>
          <h3 className="text-3xl md:text-6xl font-display">Por que escolher a MAZA?</h3>
        </div>

        <div className="bento-grid">
          <motion.div 
            whileHover={{ y: -5 }}
            className="col-span-1 md:col-span-2 row-span-1 glass rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-display mb-4">Qualidade Editorial</h4>
              <p className="text-brand-secondary/60 font-light">Equipamentos de ponta e um olhar treinado para entregar o padrão das maiores revistas e produções do mundo.</p>
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-tl-full -mr-8 -mb-8 group-hover:scale-110 transition-transform" />
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="col-span-1 md:col-span-1 row-span-1 glass rounded-3xl p-8 flex flex-col items-center justify-center text-center"
          >
            <div className="text-5xl font-display mb-2">
              <Counter value={150} />+
            </div>
            <div className="text-xs uppercase tracking-widest text-brand-secondary/40">Projetos Entregues</div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="col-span-1 md:col-span-1 row-span-2 glass rounded-3xl p-8 flex flex-col justify-between bg-gradient-to-br from-white/10 to-transparent"
          >
            <div>
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-display mb-4">Conexão Humana</h4>
              <p className="text-brand-secondary/60 font-light">Não apenas filmamos, contamos histórias que ressoam com o seu público-alvo de forma profunda.</p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=400" 
              alt="Connection" 
              className="rounded-2xl mt-8 grayscale hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="col-span-1 md:col-span-2 row-span-1 glass rounded-3xl p-8 flex items-center gap-8"
          >
            <div className="flex-1">
              <h4 className="text-2xl font-display mb-2">Prazos Rigorosos</h4>
              <p className="text-brand-secondary/60 font-light">O luxo também está na pontualidade e no respeito ao seu cronograma.</p>
            </div>
            <div className="hidden sm:block w-24 h-24 border border-white/10 rounded-full flex items-center justify-center">
              <div className="w-16 h-16 border border-white/20 rounded-full animate-spin-slow" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-24 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-sm uppercase tracking-[0.4em] text-brand-secondary/40 mb-4">Especialidades</h2>
            <h3 className="text-3xl md:text-6xl font-display italic">Nossa Arte, Seu Sucesso</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl aspect-[4/5]"
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h4 className="text-2xl font-display mb-2">{service.title}</h4>
                  <p className="text-sm text-brand-secondary/70 font-light leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="text-sm uppercase tracking-[0.4em] text-brand-secondary/40 mb-4">Depoimentos</h2>
            <h3 className="text-3xl md:text-6xl font-display mb-8">O que dizem sobre <br /> nossa visão</h3>
            <p className="text-brand-secondary/60 font-light text-base md:text-lg mb-8">
              A satisfação dos nossos clientes é o reflexo da dedicação que colocamos em cada frame, em cada clique.
            </p>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                <Star className="w-5 h-5 text-brand-secondary/40" />
              </div>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                <Star className="w-5 h-5 text-brand-secondary/40" />
              </div>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                <Star className="w-5 h-5 text-brand-secondary/40" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass p-5 md:p-6 rounded-2xl flex gap-4 md:gap-6 items-start"
              >
                <img src={t.image} alt={t.name} className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-white/10" referrerPolicy="no-referrer" />
                <div>
                  <p className="text-brand-secondary/80 italic mb-3 font-light text-sm md:text-base">"{t.content}"</p>
                  <h5 className="font-bold text-xs md:text-sm">{t.name}</h5>
                  <span className="text-[10px] text-brand-secondary/40 uppercase tracking-widest">{t.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto glass rounded-[2rem] md:rounded-[3rem] p-8 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-7xl font-display mb-8">Pronto para elevar <br /> sua marca?</h2>
            <p className="text-base md:text-lg text-brand-secondary/60 mb-10 md:mb-12 max-w-xl mx-auto font-light">
              Vamos conversar sobre o seu próximo projeto e criar algo verdadeiramente extraordinário juntos.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="px-10 py-5 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:bg-white/90 transition-all flex items-center gap-3">
                <Mail className="w-5 h-5" />
                Solicitar Orçamento
              </button>
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.instagram.com/matheuszacharias_" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp Flutuante */}
      <motion.a
        href="https://wa.me/5511999999999" // Substitua pelo número real
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[60] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/20"
      >
        <MessageCircle className="w-8 h-8 text-white fill-current" />
      </motion.a>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <img 
              src="https://i.ibb.co/mCfzLPDy/Prancheta-1.png" 
              alt="MAZA COMPANY" 
              className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="text-[10px] uppercase tracking-[0.3em] text-brand-secondary/30">
            © 2026 MAZA COMPANY - Filmmaker & Fotógrafo. Todos os direitos reservados.
          </div>

          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-brand-secondary/50">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
