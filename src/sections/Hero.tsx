import { ChevronRight, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/images/hero-main.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20 pb-16 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full mb-6 animate-fade-in-up">
            <Shield className="w-4 h-4 text-gold" />
            <span className="text-sm text-gold tracking-wider uppercase">
              Лицензия Росгвардии
            </span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white mb-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            ОХРАННАЯ ОРГАНИЗАЦИЯ «АМОН»
          </h1>
          
          <p className="text-gold text-lg sm:text-xl mb-6 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            Охрана
          </p>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-white/70 mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Основана в 1999 году бывшими сотрудниками силовых структур
          </p>

          <p className="text-sm sm:text-base text-white/60 max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
            Комплексные услуги по физической охране, технической безопасности и сопровождению 
            для бизнеса и частных клиентов в Санкт-Петербурге и регионах
          </p>

          {/* CTA Button */}
          <div className="flex items-center justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="#services"
              className="group flex items-center gap-2 px-8 py-4 border border-gold/50 text-gold rounded-sm hover:bg-gold/10 transition-all duration-300"
            >
              <span>Наши услуги</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* License */}
          <div className="mt-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-sm text-white/40 tracking-wider">
              ЛИЦЕНЗИЯ — ЛО56-00106-78/00140214
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
