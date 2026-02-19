import { useEffect, useRef } from 'react';
import { 
  Globe,
  MessageCircle,
  Send,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    {
      name: 'Website',
      url: 'https://www.maliqa.my.id',
      icon: Globe,
      color: 'bg-emerald-600',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/maliqauniversity',
      icon: FacebookIcon,
      color: 'bg-blue-600',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/maliqa_university',
      icon: InstagramIcon,
      color: 'bg-pink-600',
    },
    {
      name: 'Telegram',
      url: 'https://t.me/maliqa_university',
      icon: Send,
      color: 'bg-sky-500',
    },
    {
      name: 'WhatsApp Komunitas',
      url: 'https://chat.whatsapp.com/Fj8UOvDhzTqJp5z0BRbSnU',
      icon: MessageCircle,
      color: 'bg-green-500',
    },
    {
      name: 'WhatsApp Saluran',
      url: 'https://whatsapp.com/channel/0029VbBUknZ1iUxTNQYrVJ1B',
      icon: MessageCircle,
      color: 'bg-green-600',
    },
  ];

  const quickLinks = [
    { name: 'Mengenal Kampus', url: 'https://t.me/maliqa_university/5' },
    { name: 'Keunggulan Kampus', url: 'https://t.me/maliqa_university/7' },
    { name: 'Program Diploma', url: 'https://t.me/maliqa_university/9' },
    { name: 'Program RPL Sarjana', url: 'https://t.me/maliqa_university/27' },
    { name: 'Program Sarjana Reguler', url: 'https://t.me/maliqa_university/33' },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 sm:py-28 bg-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="animate-on-scroll opacity-0 inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            Hubungi Kami
          </span>
          <h2 className="animate-on-scroll opacity-0 font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
            Terhubung dengan <span className="text-gradient">MaliQa University</span>
          </h2>
          <p className="animate-on-scroll opacity-0 text-emerald-700/70 text-lg leading-relaxed">
            Ikuti akun resmi kami untuk mendapatkan informasi terbaru seputar 
            program kuliah dan kegiatan kampus
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Social Media Links */}
          <div className="animate-on-scroll opacity-0">
            <h3 className="font-serif text-2xl font-bold text-emerald-900 mb-6">
              Akun Resmi
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-white border border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl ${link.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <link.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-emerald-900 group-hover:text-emerald-700 transition-colors">
                      {link.name}
                    </div>
                    <div className="text-xs text-emerald-500 flex items-center gap-1">
                      Kunjungi
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-on-scroll opacity-0">
            <h3 className="font-serif text-2xl font-bold text-emerald-900 mb-6">
              Informasi Penting
            </h3>
            <div className="bg-emerald-50 rounded-2xl p-6 sm:p-8">
              <p className="text-emerald-700/70 mb-6">
                Pelajari lebih lanjut tentang MaliQa University melalui tautan berikut:
              </p>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-white rounded-xl border border-emerald-100 hover:border-emerald-300 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-200 transition-colors">
                      <ExternalLink className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-emerald-800 font-medium group-hover:text-emerald-700 transition-colors">
                      {link.name}
                    </span>
                    <ExternalLink className="w-4 h-4 text-emerald-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info Card */}
            <div className="mt-6 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-6 sm:p-8 text-white">
              <h4 className="font-serif text-xl font-bold mb-4">
                Butuh Bantuan?
              </h4>
              <p className="text-emerald-100 mb-6">
                Tim kami siap membantu Anda dengan informasi lebih detail tentang program kuliah.
              </p>
              <Button
                variant="secondary"
                className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold"
                onClick={() => window.open('https://wa.me/6287827111177', '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Hubungi Admin
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Facebook Icon Component
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

// Instagram Icon Component
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

export default Contact;
