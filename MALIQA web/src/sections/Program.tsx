import { useEffect, useRef, useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Clock, 
  ChevronDown,
  Award,
  Scroll,
  Languages,
  Mic,
  Baby,
  Radio,
  TrendingUp,
  CheckCircle2,
  Scale,
  Brain,
  Users,
  School
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProgramItem {
  name: string;
  icon: React.ElementType;
}

interface ProgramCategory {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  programs: ProgramItem[];
}

const Program = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>('diploma');

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

  const programCategories: ProgramCategory[] = [
    {
      id: 'diploma',
      title: 'Diploma',
      subtitle: 'Program Diploma',
      duration: '2 Tahun',
      icon: Scroll,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      programs: [
        { name: 'Diploma Syari\'ah', icon: BookOpen },
        { name: 'Diploma \'Ulûmul Qur\'ân dan Tafsîr', icon: Scroll },
        { name: 'Diploma Bahasa Arab Terpadu', icon: Languages },
        { name: 'Diploma Tajwîd', icon: Mic },
        { name: 'Diploma Qirâ\'ât', icon: Mic },
      ],
    },
    {
      id: 'sarjana',
      title: 'Sarjana Reguler',
      subtitle: 'Program Sarjana S1',
      duration: '4 Tahun (8 Semester)',
      icon: GraduationCap,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      programs: [
        { name: 'Pendidikan Agama Islam', icon: BookOpen },
        { name: 'Pendidikan Islam Anak Usia Dini', icon: Baby },
        { name: 'Ilmu Al-Qur\'ân dan Tafsîr', icon: Scroll },
        { name: 'Ekonomi Syari\'ah', icon: TrendingUp },
        { name: 'Komunikasi Penyiaran Islam', icon: Radio },
      ],
    },
    {
      id: 'rpl',
      title: 'RPL Sarjana',
      subtitle: 'Rekognisi Pembelajaran Lampau',
      duration: '2 Tahun (4 Semester)',
      icon: Award,
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      programs: [
        { name: 'Pendidikan Bahasa Arab', icon: Languages },
        { name: 'Pendidikan Agama Islam', icon: BookOpen },
        { name: 'Pendidikan Islam Anak Usia Dini', icon: Baby },
        { name: 'Ilmu Al-Qur\'ân dan Tafsîr', icon: Scroll },
        { name: 'Ekonomi Syari\'ah', icon: TrendingUp },
        { name: 'Komunikasi Penyiaran Islam', icon: Radio },
      ],
    },
    {
      id: 'magister',
      title: 'Magister',
      subtitle: 'Program Magister S2',
      duration: '2 Tahun',
      icon: Award,
      color: 'from-amber-500 to-amber-600',
      bgColor: 'bg-amber-50',
      programs: [
        { name: 'Pendidikan Bahasa Arab (M.Pd)', icon: Languages },
        { name: 'Pendidikan Agama Islam (M.Pd)', icon: BookOpen },
        { name: 'Pendidikan Islam Anak Usia Dini (M.Pd)', icon: Baby },
        { name: 'Pendidikan Guru Madrasah Ibtidaiyah (M.Pd)', icon: School },
        { name: 'Manajemen Pendidikan Islam (M.Pd)', icon: Users },
        { name: 'Hukum Ekonomi Syariah (M.Hes)', icon: Scale },
        { name: 'Psikologi Islam (M.Psi)', icon: Brain },
      ],
    },
  ];

  const toggleCategory = (id: string) => {
    setExpandedCategory(expandedCategory === id ? null : id);
  };

  return (
    <section
      id="program"
      ref={sectionRef}
      className="relative py-20 sm:py-28 bg-emerald-50/50 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="animate-on-scroll opacity-0 inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            Program Studi
          </span>
          <h2 className="animate-on-scroll opacity-0 font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
            Pilihan <span className="text-gradient">Program Kuliah</span>
          </h2>
          <p className="animate-on-scroll opacity-0 text-emerald-700/70 text-lg leading-relaxed">
            Kami menyediakan berbagai program kuliah dari jenjang Diploma, 
            Sarjana, hingga Magister untuk memenuhi kebutuhan akademik Anda
          </p>
        </div>

        {/* Coming Soon Banner */}
        <div className="animate-on-scroll opacity-0 mb-12 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-6 sm:p-8 text-center shadow-emerald">
          <div className="flex items-center justify-center gap-3 mb-3">
            <GlobeIcon className="w-6 h-6 text-gold-400" />
            <span className="text-gold-300 font-semibold">Segera Hadir</span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
            Kuliah Online Full Arabic
          </h3>
          <p className="text-emerald-100 max-w-2xl mx-auto">
            Program kuliah online dengan pengantar bahasa Arab penuh yang akan 
            memberikan gelar BA Internasional dan Gelar Sarjana resmi diakui PDDIKTI
          </p>
        </div>

        {/* Program Categories */}
        <div className="space-y-4">
          {programCategories.map((category, index) => (
            <div
              key={category.id}
              className="animate-on-scroll opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className={`bg-white rounded-2xl border border-emerald-100 overflow-hidden transition-all duration-300 ${
                  expandedCategory === category.id ? 'shadow-xl' : 'shadow-sm hover:shadow-md'
                }`}
              >
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full p-6 sm:p-8 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <category.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-emerald-900">
                        {category.title}
                      </h3>
                      <p className="text-emerald-600/70 text-sm sm:text-base">
                        {category.subtitle}
                      </p>
                      <div className="flex items-center gap-2 mt-2 text-sm text-emerald-500">
                        <Clock className="w-4 h-4" />
                        <span>{category.duration}</span>
                      </div>
                    </div>
                  </div>
                  <ChevronDown 
                    className={`w-6 h-6 text-emerald-400 transition-transform duration-300 flex-shrink-0 ${
                      expandedCategory === category.id ? 'rotate-180' : ''
                    }`} 
                  />
                </button>

                {/* Category Content */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedCategory === category.id ? 'max-h-[1000px]' : 'max-h-0'
                  }`}
                >
                  <div className={`px-6 sm:px-8 pb-6 sm:pb-8 ${category.bgColor} mx-6 sm:mx-8 mb-6 sm:mb-8 rounded-xl`}>
                    <h4 className="font-semibold text-emerald-800 mb-4 pt-6 flex items-center gap-2">
                      <BookOpen className="w-5 h-5" />
                      Program Tersedia:
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3 pb-6">
                      {category.programs.map((program, pIndex) => (
                        <div
                          key={pIndex}
                          className="flex items-center gap-3 p-3 bg-white rounded-xl border border-emerald-100 hover:border-emerald-300 hover:shadow-sm transition-all duration-200"
                        >
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0`}>
                            <program.icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-emerald-800 font-medium text-sm">
                            {program.name}
                          </span>
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 ml-auto flex-shrink-0" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="animate-on-scroll opacity-0 mt-12 text-center">
          <p className="text-emerald-700/70 mb-6">
            Pilih program yang sesuai dengan minat dan bakat Anda
          </p>
          <Button
            size="lg"
            className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-8 py-6 text-base rounded-xl shadow-emerald transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://wa.me/6287827111177', '_blank')}
          >
            <GraduationCap className="w-5 h-5 mr-2" />
            Daftar Sekarang
          </Button>
        </div>
      </div>
    </section>
  );
};

// Globe Icon Component
const GlobeIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
    />
  </svg>
);

export default Program;
