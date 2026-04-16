import { Building2, Hotel, Factory, Warehouse, Home, Car } from 'lucide-react';

interface Client {
  name: string;
  description?: string;
  icon: React.ElementType;
  category: string;
}

const clients: Client[] = [
  {
    name: 'ООО «ВТБ Долговой Центр»',
    description: 'Финансовая группа ВТБ — охрана долговых проектов в разных регионах РФ',
    icon: Building2,
    category: 'Финансы'
  },
  {
    name: 'Courtyard by Marriott',
    description: 'Комплексная охрана гостиничных комплексов в СПб, Казани, Иркутске',
    icon: Hotel,
    category: 'Гостиницы'
  },
  {
    name: 'ООО «Теорема - Терминал»',
    description: 'Европейский складской комплекс',
    icon: Warehouse,
    category: 'Склады'
  },
  {
    name: 'ЗАО «57 Автомобильный ремонтный завод»',
    description: '',
    icon: Factory,
    category: 'Промышленность'
  },
  {
    name: 'СЗГМУ им. И.И. Мечникова',
    description: 'Комплексная охрана учебных, лечебных корпусов, общежитий',
    icon: Building2,
    category: 'Образование'
  },
  {
    name: 'СПб ГКУЗ «ГТБ №3 им. И.И. Скворцова-Степанова»',
    description: '',
    icon: Building2,
    category: 'Медицина'
  },
  {
    name: 'ООО «АЛАЙТЕ - СПБ»',
    description: 'Городская типография',
    icon: Factory,
    category: 'Производство'
  },
  {
    name: 'ООО РРТ «Северо-Запад»',
    description: 'Автосалоны Subaru',
    icon: Car,
    category: 'Авто'
  },
  {
    name: 'ООО «Архитектурная мастерская Студия-44»',
    description: '',
    icon: Building2,
    category: 'Архитектура'
  },
  {
    name: 'ЖК «Александрия», «Илмаринен»',
    description: 'Финские жилые комплексы от котлована до охраны ТСЖ',
    icon: Home,
    category: 'Жилые комплексы'
  },
  {
    name: 'ЖК «Петровский квартал на воде»',
    description: 'Бизнес-класс',
    icon: Home,
    category: 'Жилые комплексы'
  },
  {
    name: 'ЖК «ПАЛАЦИО»',
    description: 'Бизнес-класс',
    icon: Home,
    category: 'Жилые комплексы'
  },
  {
    name: 'ООО «НСК-Механизация»',
    description: 'Строительная компания',
    icon: Factory,
    category: 'Строительство'
  },
  {
    name: 'ЗАО «АКРОС», ООО «ГРАДИСС»',
    description: 'Строительные площадки',
    icon: Factory,
    category: 'Строительство'
  },
  {
    name: 'ЗАО «Трансстрой»',
    description: 'Инжиниринговая корпорация',
    icon: Factory,
    category: 'Строительство'
  },
  {
    name: 'Бизнес-центры',
    description: 'Левашовский, Дмитровский, Мельник',
    icon: Building2,
    category: 'Бизнес-центры'
  },
  {
    name: 'ТЦ «КУПЕЧЕСКИЙ ДВОР»',
    description: '',
    icon: Building2,
    category: 'Торговля'
  },
  {
    name: 'Индустриальный парк «NK Парк»',
    description: 'Склады Софийская-КАД',
    icon: Warehouse,
    category: 'Склады'
  },
  {
    name: 'ГК «Балтрос» ООО «Сотэкс»',
    description: 'Строительные проекты многоквартирных домов, детских садов и школ',
    icon: Home,
    category: 'Строительство'
  },
  {
    name: 'Пункт базирования катеров Управления охраны ФСО России',
    description: 'Северо-Западный федеральный округ',
    icon: Building2,
    category: 'Государственные'
  }
];

const Clients = () => {
  return (
    <section id="clients" className="relative py-24 lg:py-32 bg-dark">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-light via-dark to-dark" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold text-sm tracking-widest uppercase mb-4">
            Нам доверяют
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Наши <span className="text-gold">клиенты</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Среди наших клиентов — крупнейшие компании Санкт-Петербурга и России
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {clients.map((client, index) => {
            const Icon = client.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-dark-light border border-white/10 rounded-sm hover:border-gold/30 transition-all duration-300 hover:bg-dark-lighter"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gold/10 rounded-sm group-hover:bg-gold/20 transition-colors">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="inline-block text-xs text-gold/70 mb-1">
                      {client.category}
                    </span>
                    <h4 className="text-white font-medium text-sm leading-tight mb-2">
                      {client.name}
                    </h4>
                    {client.description && (
                      <p className="text-white/50 text-xs line-clamp-2">
                        {client.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gold/10 border border-gold/30 rounded-sm">
            <div className="text-left">
              <p className="text-gold font-serif text-2xl">20+</p>
              <p className="text-white/60 text-sm">лет доверия</p>
            </div>
            <div className="w-px h-12 bg-gold/30" />
            <div className="text-left">
              <p className="text-gold font-serif text-2xl">50+</p>
              <p className="text-white/60 text-sm">постоянных клиентов</p>
            </div>
            <div className="w-px h-12 bg-gold/30" />
            <div className="text-left">
              <p className="text-gold font-serif text-2xl">500+</p>
              <p className="text-white/60 text-sm">охраняемых объектов</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
