import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Главная', href: '#hero' },
    { label: 'Услуги', href: '#services' },
    { label: 'О компании', href: '#about' },
    { label: 'Клиенты', href: '#clients' },
    { label: 'Контакты', href: '#contacts' },
  ];

  const services = [
    'Физическая охрана',
    'Техническая безопасность',
    'Консультационные услуги',
    'Охрана мероприятий',
  ];

  return (
    <footer className="relative bg-dark border-t border-white/10">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16">
                <img
                  src="/images/logo.png"
                  alt="Амон"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-2xl text-white tracking-wider">АМОН</span>
                <span className="block text-xs text-gold tracking-widest">ОХРАНА</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Частное охранное предприятие. Комплексные услуги по охране с 1999 года.
            </p>
            <div className="p-3 bg-gold/10 border border-gold/30 rounded-sm">
              <p className="text-gold text-xs tracking-wider uppercase mb-1">Лицензия</p>
              <p className="text-white font-mono text-sm">ЛО56-00106-78/00140214</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-medium mb-6">Навигация</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-medium mb-6">Услуги</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/60 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-medium mb-6">Контакты</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+79119200005"
                  className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  <span className="text-sm">+7 (911) 920-00-05</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:amon-security@mail.ru"
                  className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors"
                >
                  <Mail className="w-4 h-4 text-gold" />
                  <span className="text-sm">amon-security@mail.ru</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/60">
                  <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-sm">
                    Санкт-Петербург,<br />
                    Московское шоссе, 5
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {currentYear} ОО «АМОН». Все права защищены.
            </p>
            <p className="text-white/40 text-sm">
              Лицензия Росгвардии: ЛО56-00106-78/00140214
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
