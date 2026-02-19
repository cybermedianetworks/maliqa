import { BookOpen, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Program',
      links: [
        { name: 'Diploma', href: '#program' },
        { name: 'RPL Sarjana', href: '#program' },
        { name: 'Sarjana Reguler', href: '#program' },
        { name: 'Magister', href: '#program' },
      ],
    },
    {
      title: 'Tentang',
      links: [
        { name: 'Profil Kampus', href: '#about' },
        { name: 'Visi & Misi', href: '#about' },
        { name: 'Keunggulan', href: '#keunggulan' },
        { name: 'Kontak', href: '#contact' },
      ],
    },
    {
      title: 'Sosial Media',
      links: [
        { name: 'Website', href: 'https://www.maliqa.my.id' },
        { name: 'Facebook', href: 'https://www.facebook.com/maliqauniversity' },
        { name: 'Instagram', href: 'https://www.instagram.com/maliqa_university' },
        { name: 'Telegram', href: 'https://t.me/maliqa_university' },
      ],
    },
  ];

  return (
    <footer className="relative bg-emerald-900 text-white overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="footer-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="1" fill="currentColor" />
          </pattern>
          <rect width="100" height="100" fill="url(#footer-pattern)" />
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#hero" className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-white/10 backdrop-blur-sm">
                <BookOpen className="w-6 h-6 text-gold-400" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl text-white">MaliQa</span>
                <span className="text-xs text-emerald-300">University</span>
              </div>
            </a>
            <p className="text-emerald-200/70 text-sm leading-relaxed mb-6">
              Kampus Studi Islam yang dipersembahkan oleh Markaz 'Âlamiy Lil Qirââtil 'Asyr. 
              Berkomitmen untuk menghasilkan generasi Qur'ani yang berilmu dan berakhlak mulia.
            </p>
            {/* Arabic Text */}
            <p className="font-arabic text-gold-400/80 text-base mb-1">
              جامعة القرآن الكريم واللغة العربية
            </p>
            <p className="font-arabic text-gold-400/60 text-sm">
              للمركز العالمي للقراءات العشر في إندونيسيا
            </p>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h4 className="font-serif font-bold text-lg text-white mb-5">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault();
                          document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-emerald-200/70 hover:text-gold-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:bg-gold-400 transition-colors" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-emerald-800/50 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-emerald-300/60 text-sm text-center sm:text-left">
              <p className="flex items-center gap-1 justify-center sm:justify-start">
                &copy; {currentYear} MaliQa University. Dibuat dengan
                <Heart className="w-4 h-4 text-rose-400 fill-rose-400 mx-1" />
                untuk umat.
              </p>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold-400/30 transition-all duration-300 group"
            >
              <span className="text-sm text-emerald-200/70 group-hover:text-gold-400 transition-colors">
                Kembali ke Atas
              </span>
              <ArrowUp className="w-4 h-4 text-emerald-300 group-hover:text-gold-400 group-hover:-translate-y-1 transition-all" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 via-gold-500 to-emerald-600" />
    </footer>
  );
};

export default Footer;
