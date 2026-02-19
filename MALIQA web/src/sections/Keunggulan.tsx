import { useEffect, useRef } from 'react';
import { 
  Award, 
  BookOpen, 
  Users, 
  Globe, 
  Monitor, 
  FileCheck,
  GraduationCap,
  Building2
} from 'lucide-react';

const Keunggulan = () => {
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

  const advantages = [
    {
      icon: Award,
      title: 'Akreditasi Resmi',
      description: 'Gelar sarjana resmi diakui PDDIKTI dengan akreditasi indukan Baik Sekali',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: BookOpen,
      title: 'Kurikulum Terpadu',
      description: 'Integrasi ilmu syar\'i dengan pendekatan modern dan aplikatif',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: Users,
      title: 'Dosen Berkualitas',
      description: 'Pengajar berpengalaman dan kompeten di bidangnya masing-masing',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Globe,
      title: 'Gelar Internasional',
      description: 'Program kuliah online full Arabic dengan gelar BA Internasional',
      color: 'from-amber-500 to-amber-600',
    },
    {
      icon: Monitor,
      title: 'Pembelajaran Online',
      description: 'Sistem pembelajaran daring yang fleksibel dan interaktif',
      color: 'from-rose-500 to-rose-600',
    },
    {
      icon: FileCheck,
      title: 'Sertifikasi Profesional',
      description: 'Program sertifikasi untuk meningkatkan kompetensi lulusan',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: GraduationCap,
      title: 'Jenjang Lengkap',
      description: 'Program Diploma, Sarjana, dan Magister dalam satu tempat',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: Building2,
      title: 'Lingkungan Islami',
      description: 'Suasana belajar yang kondusif dengan nilai-nilai keislaman',
      color: 'from-teal-500 to-teal-600',
    },
  ];

  return (
    <section
      id="keunggulan"
      ref={sectionRef}
      className="relative py-20 sm:py-28 bg-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, emerald 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="animate-on-scroll opacity-0 inline-block px-4 py-1.5 rounded-full bg-gold-100 text-gold-700 text-sm font-medium mb-4">
            Keunggulan Kami
          </span>
          <h2 className="animate-on-scroll opacity-0 font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
            Mengapa Memilih <span className="text-gradient-gold">MaliQa University</span>?
          </h2>
          <p className="animate-on-scroll opacity-0 text-emerald-700/70 text-lg leading-relaxed">
            Berbagai keunggulan yang kami tawarkan untuk mendukung perjalanan 
            akademik dan spiritual Anda
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 group relative bg-white rounded-2xl p-6 border border-emerald-100 hover:border-emerald-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${advantage.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <advantage.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-lg font-bold text-emerald-900 mb-2 group-hover:text-emerald-700 transition-colors">
                {advantage.title}
              </h3>
              <p className="text-emerald-700/60 text-sm leading-relaxed">
                {advantage.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="animate-on-scroll opacity-0 mt-16 text-center">
          <p className="text-emerald-700/70 mb-4">
            Tertarik untuk bergabung dengan kami?
          </p>
          <a
            href="#program"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#program')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-emerald-700 font-semibold hover:text-emerald-800 transition-colors"
          >
            Lihat Program Studi
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Keunggulan;
