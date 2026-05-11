/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  Instagram, 
  ChevronRight, 
  CheckCircle2, 
  Star, 
  ShieldCheck, 
  Clock, 
  UserSquare2, 
  Award,
  X,
  ChevronLeft,
  Calendar
} from 'lucide-react';

// --- CONSTANTS & ASSETS ---

const WHATSAPP_URL = "https://wa.me/5547991082561?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20site!";
const INSTAGRAM_URL = "https://www.instagram.com/guilherme.ribeiroalves/";

const EXPERT_PHOTOS = [
  "https://i.imgur.com/cpF0BH2.png",
  "https://i.imgur.com/yJKocem.png"
];

const VITRINE_UNHAS = [
  "https://i.imgur.com/cRCcmZ1.jpeg",
  "https://i.imgur.com/5hYCcj0.jpeg",
  "https://i.imgur.com/W7wFsTe.jpeg",
  "https://i.imgur.com/zFyTVq2.jpeg",
  "https://i.imgur.com/d0otwov.jpeg",
  "https://i.imgur.com/A69Prcu.jpeg",
  "https://i.imgur.com/uN8fNVV.jpeg",
  "https://i.imgur.com/TJPLyIU.jpeg",
  "https://i.imgur.com/OnQpaj1.jpeg",
  "https://i.imgur.com/R5LNrzs.jpeg",
  "https://i.imgur.com/uDoNNL1.jpeg",
  "https://i.imgur.com/BhFBaaz.jpeg",
  "https://i.imgur.com/vZnT5Pa.jpeg",
  "https://i.imgur.com/N8e9Eq4.jpeg",
  "https://i.imgur.com/yp6U38C.jpeg",
  "https://i.imgur.com/AYrjIkV.jpeg",
  "https://i.imgur.com/AQx1lGX.jpeg",
  "https://i.imgur.com/tIAfLTl.jpeg",
  "https://i.imgur.com/oFMEM4Q.jpeg",
  "https://i.imgur.com/9kC5Sji.jpeg",
  "https://i.imgur.com/CXPUZoX.jpeg",
  "https://i.imgur.com/KrtbpxA.jpeg",
  "https://i.imgur.com/r3EJLgH.jpeg",
  "https://i.imgur.com/oqCelYN.jpeg",
  "https://i.imgur.com/ExC0WJs.jpeg",
  "https://i.imgur.com/Th6PujH.jpeg",
  "https://i.imgur.com/PyRyAeW.jpeg",
  "https://i.imgur.com/pvLg2Bq.jpeg",
  "https://i.imgur.com/57M6sFY.jpeg",
  "https://i.imgur.com/sVY62uo.jpeg",
  "https://i.imgur.com/Ya3X1ra.jpeg",
  "https://i.imgur.com/mKtiL0R.jpeg",
  "https://i.imgur.com/y81nN4i.jpeg",
  "https://i.imgur.com/fkKdVOA.jpeg",
  "https://i.imgur.com/bqWUJQD.jpeg",
  "https://i.imgur.com/j5AlFk4.jpeg",
  "https://i.imgur.com/kX4962B.jpeg",
  "https://i.imgur.com/kdK0LFQ.jpeg",
  "https://i.imgur.com/S8dfuzN.jpeg",
  "https://i.imgur.com/eAavdcx.jpeg",
  "https://i.imgur.com/TBWWXid.jpeg",
  "https://i.imgur.com/hnaHMdG.jpeg",
  "https://i.imgur.com/fd03Xhw.jpeg",
  "https://i.imgur.com/O59XObh.jpeg",
  "https://i.imgur.com/h4paqA9.jpeg",
  "https://i.imgur.com/7LFRkus.jpeg",
  "https://i.imgur.com/lgYKWN0.jpeg"
];

const PROVAS_SOCIAIS = [
  "https://i.imgur.com/M1UTlMH.png",
  "https://i.imgur.com/Ny0j73a.png",
  "https://i.imgur.com/lyBWE0L.png",
  "https://i.imgur.com/xcdZVEX.png",
  "https://i.imgur.com/MTDOrfV.png",
  "https://i.imgur.com/2JrH2Wf.png",
  "https://i.imgur.com/6H3L3Qz.png",
  "https://i.imgur.com/awEX00H.png",
  "https://i.imgur.com/oP5jepp.png",
  "https://i.imgur.com/e1vSrb2.png",
  "https://i.imgur.com/fLMoWcx.png",
  "https://i.imgur.com/zmkmcN3.png",
  "https://i.imgur.com/Ju9W025.png",
  "https://i.imgur.com/NxNDSj1.png",
  "https://i.imgur.com/VA5Fmao.png"
];

const CURSO_CERTIFICADOS = [
  "https://i.imgur.com/yGtGk7S.png",
  "https://i.imgur.com/pBuREgn.png",
  "https://i.imgur.com/Kqf4sty.png",
  "https://i.imgur.com/rg1BUm3.png",
  "https://i.imgur.com/ARfRu6n.png"
];

const CURSO_PROVA_SOCIAL = [
  "https://i.imgur.com/YxPQu2k.jpeg",
  "https://i.imgur.com/nZw2KvT.jpeg",
  "https://i.imgur.com/sVoKAtd.jpeg",
  "https://i.imgur.com/qyTuHkV.jpeg",
  "https://i.imgur.com/k5CAr81.jpeg",
  "https://i.imgur.com/rdZwSLc.jpeg",
  "https://i.imgur.com/UjhfnJG.jpeg"
];

const TRUST_CARDS = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-gold" />,
    title: "Avaliação Honesta",
    desc: "Análise técnica real da saúde das suas unhas antes de qualquer procedimento."
  },
  {
    icon: <UserSquare2 className="w-6 h-6 text-gold" />,
    title: "Atendimento Exclusivo",
    desc: "Você é atendida diretamente por mim, com foco total na sua satisfação."
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-gold" />,
    title: "Clareza Total",
    desc: "Sem termos complicados. Explico exatamente o que estamos fazendo."
  },
  {
    icon: <Clock className="w-6 h-6 text-gold" />,
    title: "Pontualidade",
    desc: "Respeito ao seu tempo com horários rigorosamente seguidos."
  }
];

// --- COMPONENTS ---

function SectionTitle({ children, subtitle, light = false }: { children: ReactNode, subtitle?: string, light?: boolean }) {
  return (
    <div className="mb-12 text-center">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`text-3xl md:text-4xl font-serif font-bold mb-4 ${light ? 'text-white' : 'text-premium-black'}`}
      >
        {children}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`text-sm md:text-base uppercase tracking-widest ${light ? 'text-gray-400' : 'text-gray-500'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

function WhatsAppButton({ text = "Fale comigo no WhatsApp", subtext = "Resposta rápida • Atendimento personalizado", className = "" }: { text?: string, subtext?: string, className?: string }) {
  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-green-600/20 transition-all w-full md:w-auto text-center justify-center border-b-4 border-green-800"
      >
        <MessageCircle className="w-6 h-6" />
        {text}
      </motion.a>
      {subtext && <p className="text-xs text-gray-500 opacity-80">{subtext}</p>}
    </div>
  );
}

function ImageLightbox({ images, isOpen, onClose, initialIndex = 0 }: { images: string[], isOpen: boolean, onClose: () => void, initialIndex?: number }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-8"
        >
          <button onClick={onClose} className="absolute top-6 right-6 text-white hover:text-gold transition-all p-2 z-50">
            <X size={32} />
          </button>
          
          <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-all p-2 hidden md:block">
            <ChevronLeft size={48} />
          </button>
          
          <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-all p-2 hidden md:block">
            <ChevronRight size={48} />
          </button>

          <motion.img
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            src={images[currentIndex]}
            className="max-h-[85vh] max-w-full object-contain shadow-2xl rounded-lg"
          />
          
          <div className="absolute bottom-10 left-0 right-0 text-center text-white/50 text-sm font-mono">
            {currentIndex + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function GalleryCarousel({ images, onImageClick }: { images: string[], onImageClick: (idx: number) => void }) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-8 snap-x no-scrollbar px-4">
      {images.map((img, idx) => (
        <motion.div
          key={idx}
          whileHover={{ y: -5 }}
          onClick={() => onImageClick(idx)}
          className="flex-shrink-0 w-64 h-80 rounded-2xl overflow-hidden shadow-lg snap-start cursor-pointer border border-white/10"
        >
          <img src={img} alt={`Resultado ${idx}`} className="w-full h-full object-cover transition-all duration-500" />
        </motion.div>
      ))}
    </div>
  );
}

// --- MAIN APP ---

export default function App() {
  const [lightbox, setLightbox] = useState<{ isOpen: boolean, images: string[], index: number }>({
    isOpen: false,
    images: [],
    index: 0
  });

  const openLightbox = (images: string[], index: number) => {
    setLightbox({ isOpen: true, images, index });
  };

  const closeLightbox = () => {
    setLightbox({ ...lightbox, isOpen: false });
  };

  return (
    <div className="overflow-x-hidden selection:bg-gold selection:text-white">
      {/* 1. HERO SECTION */}
      <header className="relative min-h-screen flex flex-col items-center justify-end overflow-hidden bg-[#0a0a0a]">
        {/* Background Decorative Aura */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[70vh] bg-gold/5 blur-[120px] rounded-full" />
        
        {/* Shadow Overlay for text readability at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
        
        {/* Expert Image (Large) */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 flex justify-center items-end"
        >
          <img 
            src={EXPERT_PHOTOS[0]} 
            alt="Guilherme Nail Designer" 
            className="h-[95vh] md:h-[105vh] w-auto object-contain object-bottom select-none translate-y-[5vh]"
          />
        </motion.div>

        {/* Content Overlay */}
        <div className="relative z-20 w-full max-w-5xl mx-auto px-6 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <h1 className="text-4xl md:text-7xl font-serif text-white mb-6 leading-[1.1]">
              Eu sou <span className="text-gold italic font-bold">Guilherme</span>,<br />
              <span className="text-white font-light uppercase tracking-[0.1em] text-2xl md:text-4xl">Nail Designer.</span>
            </h1>

            <h2 className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto mb-10 leading-relaxed tracking-wide">
              Especialista em elevar sua autoestima e imagem pessoal através de <span className="text-gold font-medium">técnicas exclusivas</span> e acabamento impecável.
            </h2>
            
            <WhatsAppButton 
              text="Fale comigo agora" 
              subtext="Resposta rápida • Atendimento personalizado"
              className="w-full md:w-auto"
            />
          </motion.div>
        </div>
      </header>

      {/* 2. QUEM SOU EU */}
      <section className="py-24 px-6 bg-white overflow-hidden" id="about">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 border-2 border-gold/20 rounded-3xl -z-10 translate-x-4 translate-y-4" />
            <img 
              src={EXPERT_PHOTOS[1]} 
              alt="Guilherme Ribeiro" 
              className="rounded-2xl shadow-2xl w-full transition-all duration-700" 
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="text-gold font-bold tracking-[0.2em] uppercase text-sm">Autoridade Pessoal</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 leading-tight mb-6">Expertise que transforma olhares</h2>
              <p className="text-gray-600 leading-loose text-lg">
                Olá, eu sou o Guilherme. Meu trabalho vai além de fazer unhas; eu foco em anatomia, naturalidade e design personalizado. Em Itajaí, me tornei referência por descomplicar técnicas que antes pareciam impossíveis e por entregar um resultado que dura e brilha.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                "Especialista em Alongamento de Fibra",
                "Foco absoluto na qualidade da sua unha",
                "Atendimento VIP individualizado",
                "Instrutor de técnicas de alta performance"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-premium-black font-medium">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="pt-4">
              <a 
                href={INSTAGRAM_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-bold text-lg group transition-all"
              >
                Veja bastidores no Instagram 
                <Instagram className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. UNHAS */}
      <section className="py-24 px-6 bg-premium-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Showcase">Unhas</SectionTitle>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {VITRINE_UNHAS.slice(0, 15).map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => openLightbox(VITRINE_UNHAS, idx)}
                className="aspect-square rounded-xl overflow-hidden cursor-pointer group relative shadow-md"
              >
                <img 
                  src={img} 
                  alt={`Unha ${idx}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <ChevronRight className="text-white w-8 h-8" />
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-500 italic text-sm">Resultados únicos e personalizados para cada pessoa.</p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              onClick={() => openLightbox(VITRINE_UNHAS, 15)}
              className="mt-8 px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-white rounded-full font-bold transition-all"
            >
              Ver Galeria Completa
            </motion.button>
          </div>
        </div>
      </section>

      {/* 4. DEPOIMENTOS */}
      <section className="py-24 bg-premium-black text-white">
        <SectionTitle light subtitle="Mais que unha - Autoestima">Depoimentos</SectionTitle>
        <GalleryCarousel images={PROVAS_SOCIAIS} onImageClick={(idx) => openLightbox(PROVAS_SOCIAIS, idx)} />
        <div className="text-center mt-8 px-6">
          <p className="text-gray-400 text-sm italic">"O poder que a unha tem na sua vida e na sua imagem."</p>
        </div>
      </section>

      {/* 5. CURSOS */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="Treinamento">Formando Experts</SectionTitle>
          
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-serif font-bold italic border-l-4 border-gold pl-6 py-2">Mude sua vida através da Técnica descomplicada.</h3>
                <p className="text-gray-600 leading-relaxed">
                  Curso presencial dedicado a iniciantes que sonham em ingressar no mundo de Nails Designer. curso de 9 horas, um dia intenso de teoria e muita prática. Aprendendo desde a anatomia da unha até o ganho de tempo em mesa, curvatura C sem pinça e sem presilhas. No curso ensino a metodologia de trabalho que me fez ser destaque na minha região com meus resultados. Ensino também os formatos que mais saem em mesa: Quadrada e bailarina. E decorações como: Esmaltação em gel perfeita e Aplicação de adesivos de forma rápida e fácil. Também vem com suporte por whatsapp 3 meses e coffee break.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                <div className="space-y-4">
                  <h4 className="font-bold text-gold uppercase tracking-wider">Conteúdo</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-lg">Minha história</li>
                    <li className="flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-lg">Propósito da profissão</li>
                    <li className="flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-lg">Alongamento do zero (sem pinça)</li>
                    <li className="flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-lg">Quanto cobrar & Como vender</li>
                    <li className="flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-lg">Materiais & Demonstração</li>
                    <li className="flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-lg">Posicionamento no atendimento</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-gold uppercase tracking-wider">Incluso</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2"> <CheckCircle2 className="w-4 h-4 text-green-500" /> Apostila completa </li>
                    <li className="flex items-center gap-2"> <CheckCircle2 className="w-4 h-4 text-green-500" /> Certificado </li>
                    <li className="flex items-center gap-2"> <CheckCircle2 className="w-4 h-4 text-green-500" /> Suporte 3 meses (WhatsApp) </li>
                    <li className="flex items-center gap-2"> <CheckCircle2 className="w-4 h-4 text-green-500" /> Material p/ o curso </li>
                    <li className="flex items-center gap-2"> <CheckCircle2 className="w-4 h-4 text-green-500" /> Kit p/ alunas </li>
                    <li className="flex items-center gap-2"> <CheckCircle2 className="w-4 h-4 text-green-500" /> Coffee Break </li>
                  </ul>
                </div>
              </div>

              <div className="bg-premium-white p-6 rounded-2xl border border-gold/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-premium-black">Investimento</span>
                  <span className="text-gold font-bold text-xl">R$ 399,90</span>
                </div>
                <p className="text-xs text-gray-500">Matrícula de R$ 150 (abatido no valor final) • Carga horária 9h</p>
              </div>

              <WhatsAppButton text="Garantir minha vaga no Curso" subtext="Consultoria sobre próximas turmas" className="!items-start" />
            </div>
            
            <div className="grid grid-cols-2 gap-4 content-start">
              {CURSO_CERTIFICADOS.slice(0, 4).map((img, i) => (
                <img 
                  key={i} 
                  src={img} 
                  alt="Certificado" 
                  className="rounded-lg shadow-xl cursor-pointer hover:scale-105 transition-transform" 
                  onClick={() => openLightbox(CURSO_CERTIFICADOS, i)}
                />
              ))}
            </div>
          </div>

          <div className="bg-premium-black rounded-3xl p-8 md:p-12 text-white">
            <h4 className="text-xl font-bold mb-8 text-gold flex items-center gap-2">
              <Star className="w-5 h-5 fill-gold" />
              Resultados das alunas:
            </h4>
            <GalleryCarousel images={CURSO_PROVA_SOCIAL} onImageClick={(idx) => openLightbox(CURSO_PROVA_SOCIAL, idx)} />
          </div>
        </div>
      </section>

      {/* 6. POR QUE CONFIAR? */}
      <section className="py-24 px-6 bg-premium-white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle subtitle="Diferenciais">Por que confiar em mim?</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TRUST_CARDS.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className="mb-4 bg-premium-white w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-gray-500 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA FINAL */}
      <section className="py-32 px-6 bg-white relative overflow-hidden text-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <Award className="w-16 h-16 text-gold mx-auto mb-8 opacity-20" />
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Não deixe para depois as unhas dos seus sonhos.</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Vagas limitadas para novos atendimentos este mês. Garanta sua exclusividade agora.
          </p>
          <WhatsAppButton text="Entrar em contato agora" />
        </motion.div>
        
        {/* Background elements */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      </section>

      {/* 11. FOOTER */}
      <footer className="py-16 px-6 bg-premium-black border-t border-white/5 text-center text-white/40">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h3 className="text-2xl font-serif font-bold text-white mb-2">Guilherme Ribeiro</h3>
            <p className="text-gold uppercase tracking-[0.3em] text-xs font-bold">Nail Designer • Itajaí - SC</p>
          </div>
          
          <div className="flex justify-center gap-6 mb-12">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>
          
          <p className="text-sm font-light">
            © {new Date().getFullYear()} Guilherme Ribeiro Alves. Todos os direitos reservados.<br/>
            Feito com excelência para unhas extraordinárias.
          </p>
        </div>
      </footer>

      {/* Lightbox Overlay */}
      <ImageLightbox 
        images={lightbox.images} 
        isOpen={lightbox.isOpen} 
        onClose={closeLightbox} 
        initialIndex={lightbox.index} 
      />
    </div>
  );
}
