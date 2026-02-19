import { useEffect, useRef } from 'react';
import { CheckCircle, Target, Lightbulb, Heart } from 'lucide-react';

const About = () => {
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

  const features = [
    {
      icon: Target,
      title: 'Visi',
      description: 'Menjadi universitas Islam terkemuka yang menghasilkan generasi Qur\'ani yang berilmu, berakhlak mulia, dan mampu memberikan kontribusi positif bagi umat.',
    },
    {
      icon: Lightbulb,
      title: 'Misi',
      description: 'Menyelenggarakan pendidikan Islam berkualitas dengan pendekatan integrasi ilmu syar\'i dan kemoderenan untuk membentuk insan kamil.',
    },
    {
      icon: Heart,
      title: 'Nilai',
      description: 'Berlandaskan Al-Qur\'an dan Sunnah sesuai pemahaman salafush shalih, dengan semangat keikhlasan, kejujuran, dan kebersamaan.',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 sm:py-28 bg-emerald-50/50"
    >
      {/* Decorative Pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
          <rect width="200" height="200" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="animate-on-scroll opacity-0 inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            Tentang Kami
          </span>
          <h2 className="animate-on-scroll opacity-0 font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
            Mengenal <span className="text-gradient">MaliQa University</span>
          </h2>
          <p className="animate-on-scroll opacity-0 text-emerald-700/70 text-lg leading-relaxed">
            Kampus studi Islam yang berkomitmen untuk menghasilkan generasi 
            Qur'ani dengan pendekatan pembelajaran yang terintegrasi
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image */}
          <div className="animate-on-scroll opacity-0 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/about-img.jpg"
                alt="Belajar Al-Quran"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-emerald-100 max-w-xs hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="font-bold text-emerald-900">Terakreditasi</div>
                  <div className="text-sm text-emerald-600/70">PDDIKTI - Baik Sekali</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="animate-on-scroll opacity-0">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-900 mb-4">
                Pendidikan Islam Berkualitas untuk Generasi Qur'ani
              </h3>
              <p className="text-emerald-700/70 leading-relaxed mb-4">
                MaliQa University adalah lembaga pendidikan tinggi Islam yang didedikasikan 
                untuk menyebarkan ilmu-ilmu keislaman, khususnya dalam bidang Al-Qur'an 
                dan ilmu-ilmu syar'i lainnya.
              </p>
              <p className="text-emerald-700/70 leading-relaxed">
                Kami hadir dengan visi untuk menjadi universitas Islam terkemuka yang 
                menghasilkan lulusan berkualitas, berakhlak mulia, dan mampu memberikan 
                kontribusi positif bagi perkembangan umat Islam.
              </p>
            </div>

            {/* Feature List */}
            <div className="animate-on-scroll opacity-0 space-y-3">
              {[
                'Kurikulum terintegrasi Al-Qur\'an dan Sunnah',
                'Dosen berkualitas dan berpengalaman',
                'Lingkungan pembelajaran yang kondusif',
                'Fasilitas pembelajaran modern',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 h-3 text-gold-600" />
                  </div>
                  <span className="text-emerald-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision Mission Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 group bg-white rounded-2xl p-8 shadow-lg border border-emerald-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-serif text-xl font-bold text-emerald-900 mb-3">
                {feature.title}
              </h4>
              <p className="text-emerald-700/70 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
