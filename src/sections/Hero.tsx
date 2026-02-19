import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, GraduationCap, BookOpen, Users } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: BookOpen, value: '10+', label: 'Program Studi' },
    { icon: Users, value: '1000+', label: 'Mahasiswa' },
    { icon: GraduationCap, value: '500+', label: 'Alumni' },
  ];

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="MaliQa University"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/80 via-emerald-800/70 to-emerald-900/90" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border border-gold-400/20 rounded-full animate-float" />
        <div className="absolute bottom-40 right-20 w-24 h-24 border border-gold-400/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-on-scroll opacity-0 mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-gold-400/30 text-gold-300 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              Ahlan Wa Sahlan
            </span>
          </div>

          {/* Main Title */}
          <h1 className="animate-on-scroll opacity-0 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            MaliQa{' '}
            <span className="text-gradient-gold">University</span>
          </h1>

          {/* Arabic Text */}
          <p className="animate-on-scroll opacity-0 font-arabic text-lg sm:text-xl text-gold-300 mb-2">
            جامعة القرآن الكريم واللغة العربية
          </p>
          <p className="animate-on-scroll opacity-0 font-arabic text-base sm:text-lg text-gold-300/80 mb-4">
            للمركز العالمي للقراءات العشر في إندونيسيا
          </p>

          {/* Subtitle */}
          <p className="animate-on-scroll opacity-0 text-lg sm:text-xl text-white/80 mb-2 max-w-2xl mx-auto">
            Kampus Studi Islam yang dipersembahkan oleh
          </p>
          <p className="animate-on-scroll opacity-0 text-base sm:text-lg text-gold-300/90 mb-8 font-medium">
            Markaz 'Âlamiy Lil Qirââtil 'Asyr
          </p>

          {/* Description */}
          <p className="animate-on-scroll opacity-0 text-white/70 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Menyediakan berbagai program kuliah berkualitas dengan kurikulum 
            yang terintegrasi antara ilmu syar'i dan kemoderenan
          </p>

          {/* CTA Buttons */}
          <div className="animate-on-scroll opacity-0 flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              onClick={() => scrollToSection('#program')}
              className="bg-gold-500 hover:bg-gold-600 text-emerald-950 font-semibold px-8 py-6 text-base rounded-xl shadow-gold transition-all duration-300 hover:scale-105 group"
            >
              Lihat Program
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('#about')}
              className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-6 text-base rounded-xl transition-all duration-300"
            >
              Kenali Kami
            </Button>
          </div>

          {/* Stats */}
          <div className="animate-on-scroll opacity-0 grid grid-cols-3 gap-4 sm:gap-8 max-w-xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <stat.icon className="w-6 h-6 text-gold-400 mx-auto mb-2" />
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-emerald-50 to-transparent" />
    </section>
  );
};

export default Hero;
