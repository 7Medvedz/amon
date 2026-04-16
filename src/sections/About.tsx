import { Shield, Target, Users, Award } from 'lucide-react';

const stats = [
  { icon: Shield, value: '25+', label: 'Лет опыта' },
  { icon: Target, value: '500+', label: 'Объектов' },
  { icon: Users, value: '1000+', label: 'Сотрудников' },
  { icon: Award, value: '50+', label: 'Клиентов' },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-dark-light">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-gold text-sm tracking-widest uppercase mb-4">
              О компании
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-white mb-6">
              ОО «АМОН» — <span className="text-gold">надёжная защита</span> с 1999 года
            </h2>
            
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                ОО «АМОН» основана в 1999 году бывшими сотрудниками силовых структур. 
                Специфика деятельности компании — предоставление комплексных услуг охраны 
                для юридических и физических лиц.
              </p>
              <p>
                Мы гарантируем полную сохранность материального имущества, безопасность объекта 
                и персональную защиту благодаря индивидуальному подходу к каждому клиенту. 
                Наши специалисты разрабатывают индивидуальный план охраны после визита на объект 
                и оценки степени его безопасности.
              </p>
              <p>
                ОО «АМОН» работает в тесном сотрудничестве с силовыми ведомствами и имеет 
                доступ к информационным ресурсам, что позволяет нам оперативно реагировать 
                на любые угрозы.
              </p>
            </div>

            {/* License Badge */}
            <div className="mt-8 p-6 bg-gold/10 border border-gold/30 rounded-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gold rounded-sm">
                  <Shield className="w-6 h-6 text-dark" />
                </div>
                <div>
                  <p className="text-gold text-sm tracking-wider uppercase">Лицензия Росгвардии</p>
                  <p className="text-white font-mono text-lg">ЛО56-00106-78/00140214</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image & Stats */}
          <div>
            {/* Main Image */}
            <div className="relative mb-8">
              <div className="relative h-80 lg:h-96 overflow-hidden rounded-sm">
                <img
                  src="/images/patrol.jpg"
                  alt="Охрана Амон"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-gold p-6 rounded-sm shadow-gold-lg">
                <p className="font-serif text-4xl text-dark font-bold">25+</p>
                <p className="text-dark/80 text-sm">лет на рынке</p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center p-4 bg-dark border border-white/10 rounded-sm">
                    <Icon className="w-6 h-6 text-gold mx-auto mb-2" />
                    <p className="font-serif text-2xl text-white">{stat.value}</p>
                    <p className="text-white/60 text-xs">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Protected Objects */}
        <div className="mt-20">
          <h3 className="font-serif text-2xl text-white text-center mb-8">
            Объекты, которые мы <span className="text-gold">охраняем</span>
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              'Промышленные объекты',
              'Бизнес-центры',
              'Торговые центры',
              'Склады',
              'Банки',
              'Жилые комплексы',
              'Строительные площадки',
              'Гостиницы',
              'Муниципальные объекты',
              'Медицинские учреждения',
              'Транспорт',
              'Частная недвижимость'
            ].map((item, index) => (
              <div
                key={index}
                className="p-4 bg-dark border border-white/10 rounded-sm text-center hover:border-gold/30 transition-colors"
              >
                <span className="text-white/70 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
