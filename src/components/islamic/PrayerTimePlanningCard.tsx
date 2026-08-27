import React from 'react';
import { Clock, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

const PrayerTimePlanningCard: React.FC = () => {
  const { t, dir } = useLanguage();

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden" dir={dir}>
      <div className={`absolute top-0 ${dir === 'rtl' ? 'left-0' : 'right-0'} p-6 opacity-5 pointer-events-none`}>
        <Clock size={100} />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <Clock className="text-sidqly-green-deep w-6 h-6 shrink-0" />
          <h3 className="text-lg font-bold text-sidqly-navy">{t('islamicTools.prayerPlanningCard.title')}</h3>
        </div>

        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          {t('islamicTools.prayerPlanningCard.description')}
        </p>

        <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl mb-4">
           <p className="text-sm font-bold text-sidqly-navy mb-2">{t('islamicTools.prayerPlanningCard.supportsTitle')}</p>
           <ul className="text-sm text-gray-600 space-y-2">
             <li>• {t('islamicTools.prayerPlanningCard.point1')}</li>
             <li>• {t('islamicTools.prayerPlanningCard.point2')}</li>
             <li>• {t('islamicTools.prayerPlanningCard.point3')}</li>
           </ul>
        </div>

        <div className="flex items-start gap-2 text-[10px] sm:text-xs text-gray-500">
           <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-gray-400" />
           <p>{t('islamicTools.prayerPlanningCard.disclaimer')}</p>
        </div>
      </div>
    </div>
  );
};

export default PrayerTimePlanningCard;
