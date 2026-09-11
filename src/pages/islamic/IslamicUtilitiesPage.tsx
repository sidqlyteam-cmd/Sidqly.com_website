import React from 'react';
import SEO from '../../components/SEO';
import { brand } from '../../config/brand';
import { useLanguage } from '../../i18n/LanguageContext';
import { Link } from 'react-router-dom';
import { Calendar, Compass, CloudSun, Moon, Gift, Heart, BookOpen, Clock, Activity, Calculator, ArrowRight, Languages } from 'lucide-react';

const IslamicUtilitiesPage: React.FC = () => {
  const { t, dir } = useLanguage();

  const utilities = [
    { titleKey: "islamicTools.quranReader.title", path: "/quran-reader", descKey: "islamicTools.quranReader.subtitle", icon: <BookOpen size={24} /> },
    { titleKey: "islamicTools.duasAzkar.title", path: "/duas-azkar", descKey: "islamicTools.duasAzkar.subtitle", icon: <Heart size={24} /> },
    { titleKey: "islamicTools.salahTracker.title", path: "/salah-tracker", descKey: "islamicTools.salahTracker.subtitle", icon: <Activity size={24} /> },
    { titleKey: "islamicTools.namazTranslator.title", path: "/namaz-translator", descKey: "islamicTools.namazTranslator.subtitle", icon: <Languages size={24} /> },
    { titleKey: "islamicTools.namaz.title", path: "/namaz-timings", descKey: "islamicTools.namaz.subtitle", icon: <Clock size={24} /> },
    { titleKey: "islamicTools.zakat.title", path: "/zakat-calculator", descKey: "islamicTools.zakat.subtitle", icon: <Calculator size={24} /> },
    { titleKey: "islamicTools.qibla.title", path: "/qibla-direction", descKey: "islamicTools.qibla.subtitle", icon: <Compass size={24} /> },
    { titleKey: "islamicTools.calendar.title", path: "/islamic-calendar", descKey: "islamicTools.calendar.subtitle", icon: <Calendar size={24} /> },
    { titleKey: "islamicTools.moonPhase.title", path: "/moon-phase-islamic-calendar", descKey: "islamicTools.moonPhase.subtitle", icon: <Moon size={24} /> },
    { titleKey: "islamicTools.weather.title", path: "/weather-charity-distribution", descKey: "islamicTools.weather.subtitle", icon: <CloudSun size={24} /> },
    { titleKey: "islamicTools.ramadan.title", path: "/ramadan-planner", descKey: "islamicTools.ramadan.subtitle", icon: <Heart size={24} /> },
    { titleKey: "islamicTools.eidQurbani.title", path: "/eid-qurbani-planner", descKey: "islamicTools.eidQurbani.subtitle", icon: <Gift size={24} /> },
    { titleKey: "islamicTools.hajj.title", path: "/hajj-countdown", descKey: "islamicTools.hajj.subtitle", icon: <Clock size={24} /> },
    { titleKey: "islamicTools.sadqaZakatPlanner.title", path: "/sadqa-zakat-planner", descKey: "islamicTools.sadqaZakatPlanner.subtitle", icon: <Activity size={24} /> },
    { titleKey: "islamicTools.glossary.title", path: "/islamic-glossary", descKey: "islamicTools.glossary.subtitle", icon: <BookOpen size={24} /> },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `${t('islamicTools.utilitiesHub.title')} | Sidqly`,
    "description": t('islamicTools.utilitiesHub.subtitle'),
    "url": `${brand.domain}/islamic-utilities`,
  };

  return (
    <div dir={dir}>
      <SEO
        title={`${t('islamicTools.utilitiesHub.title')} | Sidqly`}
        description={t('islamicTools.utilitiesHub.subtitle')}
        canonical="https://www.sidqly.com/islamic-utilities"
        schema={schema}
      />

      <div className="bg-sidqly-ivory min-h-screen py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-extrabold text-sidqly-navy mb-6">
              {t('islamicTools.utilitiesHub.title')}
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              {t('islamicTools.utilitiesHub.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {utilities.map((util, idx) => {
              const title = t(util.titleKey as any);
              const desc = t(util.descKey as any);

              return (
                <Link key={idx} to={util.path} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-sidqly-green-emerald hover:shadow-md transition-all flex flex-col group">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="bg-sidqly-ivory p-3 rounded-xl text-sidqly-green-deep group-hover:bg-sidqly-green-emerald group-hover:text-white transition-colors shrink-0">
                        {util.icon}
                     </div>
                     <h3 className="font-bold text-lg text-sidqly-navy">{title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 flex-grow leading-relaxed">{desc}</p>
                  <div className="mt-6 font-bold text-sm text-sidqly-green-deep flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    <span>{t('islamicTools.utilitiesHub.openTool')} {title}</span>
                    <ArrowRight size={16} className={dir === 'rtl' ? 'rotate-180' : ''} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IslamicUtilitiesPage;
