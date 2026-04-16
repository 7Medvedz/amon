import { Phone, Mail, MapPin, Shield, Clock, Check } from 'lucide-react';

const Contacts = () => {
  return (
    <section id="contacts" className="relative py-24 lg:py-32 bg-dark-light">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold text-sm tracking-widest uppercase mb-4">
            Свяжитесь с нами
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Наши <span className="text-gold">контакты</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Готовы обсудить ваши потребности в безопасности. Свяжитесь с нами любым удобным способом.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4 p-6 bg-dark border border-white/10 rounded-sm hover:border-gold/30 transition-colors">
                <div className="p-3 bg-gold/10 rounded-sm">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Телефон</p>
                  <a
                    href="tel:+79119200005"
                    className="text-white text-xl font-medium hover:text-gold transition-colors"
                  >
                    +7 (911) 920-00-05
                  </a>
                  <p className="text-white/40 text-sm mt-2">
                    Работаем круглосуточно
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-6 bg-dark border border-white/10 rounded-sm hover:border-gold/30 transition-colors">
                <div className="p-3 bg-gold/10 rounded-sm">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Email</p>
                  <a
                    href="mailto:amon-security@mail.ru"
                    className="text-white text-xl font-medium hover:text-gold transition-colors"
                  >
                    amon-security@mail.ru
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 p-6 bg-dark border border-white/10 rounded-sm hover:border-gold/30 transition-colors">
                <div className="p-3 bg-gold/10 rounded-sm">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Адрес</p>
                  <p className="text-white text-lg">
                    Санкт-Петербург, Московское шоссе, 5
                  </p>
                </div>
              </div>

              {/* License */}
              <div className="flex items-start gap-4 p-6 bg-gold/10 border border-gold/30 rounded-sm">
                <div className="p-3 bg-gold rounded-sm">
                  <Shield className="w-6 h-6 text-dark" />
                </div>
                <div>
                  <p className="text-gold text-sm mb-1">Лицензия Росгвардии</p>
                  <p className="text-white font-mono text-lg">
                    ЛО56-00106-78/00140214
                  </p>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="mt-8 p-6 bg-dark border border-white/10 rounded-sm">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-gold" />
                <h4 className="text-white font-medium">Режим работы</h4>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Офис</span>
                  <span className="text-white">Пн-Пт: 9:00 - 18:00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Охрана объектов</span>
                  <span className="text-gold">Круглосуточно</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Диспетчерская</span>
                  <span className="text-gold">24/7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-dark border border-white/10 rounded-sm p-8">
            <h3 className="font-serif text-2xl text-white mb-2">
              Получить консультацию
            </h3>
            <p className="text-white/60 mb-6">
              Оставьте заявку, и мы свяжемся с вами в ближайшее время
            </p>

            <form 
              className="space-y-4" 
              action="https://formsubmit.co/amon-security@mail.ru" 
              method="POST"
            >
              {/* Настройки FormSubmit */}
              <input type="hidden" name="_subject" value="Новая заявка с сайта АМОН" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://amon-security.ru?sent=true" />

              <div>
                <label className="block text-white/60 text-sm mb-2">Ваше имя *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Иван Иванов"
                  className="w-full px-4 py-3 bg-dark-light border border-white/10 rounded-sm text-white placeholder:text-white/30 focus:border-gold focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-white/60 text-sm mb-2">Телефон *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+7 (___) ___-__-__"
                  className="w-full px-4 py-3 bg-dark-light border border-white/10 rounded-sm text-white placeholder:text-white/30 focus:border-gold focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-white/60 text-sm mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@mail.ru"
                  className="w-full px-4 py-3 bg-dark-light border border-white/10 rounded-sm text-white placeholder:text-white/30 focus:border-gold focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-white/60 text-sm mb-2">Тип услуги</label>
                <select name="service" className="w-full px-4 py-3 bg-dark-light border border-white/10 rounded-sm text-white focus:border-gold focus:outline-none transition-colors">
                  <option value="" className="bg-dark">Выберите услугу</option>
                  <option value="Физическая охрана" className="bg-dark">Физическая охрана</option>
                  <option value="Техническая безопасность" className="bg-dark">Техническая безопасность</option>
                  <option value="Консультационные услуги" className="bg-dark">Консультационные услуги</option>
                  <option value="Охрана мероприятий" className="bg-dark">Охрана мероприятий</option>
                  <option value="Другое" className="bg-dark">Другое</option>
                </select>
              </div>

              <div>
                <label className="block text-white/60 text-sm mb-2">Сообщение</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Опишите ваши потребности..."
                  className="w-full px-4 py-3 bg-dark-light border border-white/10 rounded-sm text-white placeholder:text-white/30 focus:border-gold focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gold text-dark font-semibold rounded-sm hover:bg-gold-light transition-colors"
              >
                <span>Отправить заявку</span>
                <Check className="w-5 h-5" />
              </button>

              <p className="text-white/40 text-xs text-center">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
