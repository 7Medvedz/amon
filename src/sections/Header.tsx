import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Главная', href: '#hero' },
    { label: 'Услуги', href: '#services' },
    { label: 'О компании', href: '#about' },
    { label: 'Клиенты', href: '#clients' },
    { label: 'Контакты', href: '#contacts' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-dark/95 backdrop-blur-md border-b border-gold/20'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12">
              <img
                src="/images/logo.png"
                alt="Амон"
                className="w-full h-full object-contain shield-glow transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-serif text-xl text-white tracking-wider">АМОН</span>
              <span className="block text-xs text-gold tracking-widest">ОХРАНА</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/80 hover:text-gold transition-colors duration-300 tracking-wide uppercase"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+79119200005"
              className="flex items-center gap-2 text-gold hover:text-white transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+7 (911) 920-00-05</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-gold transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-dark/98 backdrop-blur-md border-b border-gold/20 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col py-6 px-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-3 text-white/80 hover:text-gold transition-colors duration-300 tracking-wide uppercase border-b border-white/10 last:border-0"
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:+79119200005"
            className="flex items-center gap-2 py-4 text-gold mt-4"
          >
            <Phone className="w-4 h-4" />
            <span className="font-medium">+7 (911) 920-00-05</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
