import { useState } from 'react';
import { 
  Shield, 
  Video, 
  Users, 
  Building2,
  ChevronRight,
  Check
} from 'lucide-react';

interface Service {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  image: string;
}

const services: Service[] = [
  {
    id: 'physical',
    icon: Shield,
    title: 'Физическая охрана',
    description: 'Вооружённая и невооружённая охрана объектов любой сложности',
    features: [
      'Контроль входа/выхода и подъездов',
      'Личные досмотры',
      'Патрулирование с собакой',
      'Дежурство днём и ночью',
      'Сопровождение физических лиц и грузов'
    ],
    image: '/images/guard-hero.jpg'
  },
  {
    id: 'monitoring',
    icon: Video,
    title: 'Техническая безопасность',
    description: 'Проектирование, монтаж и обслуживание технических средств охраны с принятием соответствующих мер реагирования на их сигнальную информацию',
    features: [
      'Системы видеонаблюдения',
      'Охранно-пожарная сигнализация',
      'СКУД (контроль доступа)',
      'GPS мониторинг',
      'Удалённый мониторинг объектов'
    ],
    image: '/images/monitoring.jpg'
  },
  {
    id: 'consulting',
    icon: Users,
    title: 'Консультационные услуги',
    description: 'Консультирование и подготовка рекомендаций клиентам по вопросам правомерной защиты от противоправных посягательств',
    features: [
      'Проверка партнёров',
      'Оценка уязвимостей объекта',
      'Разработка плана охраны',
      'Аудит безопасности'
    ],
    image: '/images/patrol.jpg'
  },
  {
    id: 'events',
    icon: Building2,
    title: 'Обеспечение порядка в местах проведения массовых мероприятий',
    description: 'Профессиональная охрана массовых мероприятий любой сложности',
    features: [
      'Обеспечение порядка в местах проведения массовых мероприятий',
      'Досмотр лиц при входе на территорию проведения мероприятия с применением портативных металлодетекторов',
      'Установка магнитных рамок'
    ],
    image: '/images/business-center.jpg'
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState<string>('physical');

  const activeServiceData = services.find(s => s.id === activeService);

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-dark">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold text-sm tracking-widest uppercase mb-4">
            Наши услуги
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Комплексная <span className="text-gold">безопасность</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Предоставляем полный спектр охранных услуг для бизнеса и частных клиентов
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Service Cards */}
          <div className="space-y-4">
            {services.map((service) => {
              const Icon = service.icon;
              const isActive = activeService === service.id;
              
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`group cursor-pointer p-6 border transition-all duration-300 ${
                    isActive
                      ? 'border-gold bg-gold/10'
                      : 'border-white/10 bg-dark-light hover:border-gold/30 hover:bg-dark-lighter'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-sm transition-colors duration-300 ${
                      isActive ? 'bg-gold text-dark' : 'bg-white/5 text-gold'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl text-white mb-2 group-hover:text-gold transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-white/60 text-sm mb-4">
                        {service.description}
                      </p>
                      <div className={`flex items-center gap-2 text-sm ${
                        isActive ? 'text-gold' : 'text-white/40'
                      }`}>
                        <span>Подробнее</span>
                        <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                          isActive ? 'translate-x-1' : ''
                        }`} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Service Details */}
          <div className="relative">
            {activeServiceData && (
              <div className="sticky top-24">
                {/* Image */}
                <div className="relative h-64 lg:h-80 mb-6 overflow-hidden rounded-sm">
                  <img
                    src={activeServiceData.image}
                    alt={activeServiceData.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-serif text-2xl text-white">
                      {activeServiceData.title}
                    </h3>
                  </div>
                </div>

                {/* Features */}
                <div className="bg-dark-light border border-white/10 p-6 rounded-sm">
                  <h4 className="text-gold text-sm tracking-widest uppercase mb-4">
                    Включает
                  </h4>
                  <ul className="space-y-3">
                    {activeServiceData.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <a
                  href="#contacts"
                  className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-4 bg-gold text-dark font-semibold rounded-sm hover:bg-gold-light transition-colors duration-300"
                >
                  <span>Заказать услугу</span>
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
