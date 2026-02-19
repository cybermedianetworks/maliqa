import { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Tentang', href: '#about' },
    { name: 'Keunggulan', href: '#keunggulan' },
    { name: 'Program', href: '#program' },
    { name: 'Kontak', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
            className="flex items-center gap-3 group"
          >
            <div className={`p-2 rounded-xl transition-all duration-300 ${
              isScrolled ? 'bg-emerald-700' : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <BookOpen className={`w-6 h-6 ${isScrolled ? 'text-gold-400' : 'text-white'}`} />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif font-bold text-lg leading-tight transition-colors duration-300 ${
                isScrolled ? 'text-emerald-800' : 'text-white'
              }`}>
                MaliQa
              </span>
              <span className={`text-xs transition-colors duration-300 ${
                isScrolled ? 'text-emerald-600' : 'text-white/80'
              }`}>
                University
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isScrolled
                    ? 'text-emerald-800 hover:text-emerald-600 hover:bg-emerald-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('#program')}
              className={`font-medium transition-all duration-300 ${
                isScrolled
                  ? 'bg-emerald-700 hover:bg-emerald-800 text-white'
                  : 'bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30'
              }`}
            >
              Daftar Sekarang
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled
                ? 'text-emerald-800 hover:bg-emerald-50'
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <div className={`rounded-2xl p-4 space-y-2 ${
            isScrolled ? 'bg-emerald-50' : 'bg-white/10 backdrop-blur-md'
          }`}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isScrolled
                    ? 'text-emerald-800 hover:text-emerald-600 hover:bg-emerald-100'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {link.name}
              </a>
            ))}
            <Button
              onClick={() => window.open('https://wa.me/6287827111177', '_blank')}
              className="w-full mt-2 bg-emerald-700 hover:bg-emerald-800 text-white"
            >
              Daftar Sekarang
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
