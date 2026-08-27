import React, { useState } from 'react';
import { HeartHandshake, CheckCircle2, Circle, AlertCircle, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';

const SadqaZakatPlanner: React.FC = () => {
  const { t, dir } = useLanguage();
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleReset = () => {
    setCheckedItems({});
  };

  type ItemKey = 's1' | 's2' | 's3' | 's4' | 'z1' | 'z2' | 'z3' | 'z4';

  const lists = [
    {
      title: t('islamicTools.sadqaZakatPlanner.sadqaTitle'),
      items: (['s1', 's2', 's3', 's4'] as ItemKey[]).map(id => ({
        id,
        text: t(`islamicTools.sadqaZakatPlanner.items.${id}` as const)
      }))
    },
    {
      title: t('islamicTools.sadqaZakatPlanner.zakatTitle'),
      items: (['z1', 'z2', 'z3', 'z4'] as ItemKey[]).map(id => ({
        id,
        text: t(`islamicTools.sadqaZakatPlanner.items.${id}` as const)
      }))
    }
  ];

  const totalItems = 8;
  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / totalItems) * 100);

  return (
    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm" dir={dir}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-sidqly-green-deep/10 p-3 rounded-xl shrink-0">
            <HeartHandshake className="text-sidqly-green-deep w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-sidqly-navy">{t('islamicTools.sadqaZakatPlanner.title')}</h2>
            <p className="text-sm text-gray-500">{t('islamicTools.sadqaZakatPlanner.subtitle')}</p>
          </div>
        </div>

        {completedCount > 0 && (
          <button
            type="button"
            onClick={handleReset}
            className="self-start sm:self-center flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-sidqly-navy bg-gray-100 px-3 py-1.5 rounded-lg transition-colors"
          >
            <RotateCcw size={14} />
            <span>{t('islamicTools.reset')}</span>
          </button>
        )}
      </div>

      <div className="mb-6 bg-gray-50 p-4 rounded-xl border border-gray-100">
        <div className="flex justify-between items-center text-sm font-semibold text-sidqly-navy mb-2">
          <span>{t('islamicTools.ramadan.completed')}: {completedCount} / {totalItems}</span>
          <span>{progressPercent}%</span>
        </div>
        <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
          <div
            className="bg-sidqly-green-deep h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {lists.map((list, i) => (
          <div key={i} className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-sidqly-green-deep mb-4">{list.title}</h3>
            <ul className="space-y-3">
              {list.items.map(item => (
                <li
                  key={item.id}
                  className="flex items-start gap-3 cursor-pointer group py-1 min-h-[40px]"
                  onClick={() => toggleCheck(item.id)}
                >
                  <div className="mt-0.5 shrink-0">
                    {checkedItems[item.id] ? (
                      <CheckCircle2 className="text-sidqly-green-emerald w-5 h-5" />
                    ) : (
                      <Circle className="text-gray-300 group-hover:text-sidqly-green-soft w-5 h-5 transition-colors" />
                    )}
                  </div>
                  <span className={`text-sm select-none transition-colors leading-relaxed ${checkedItems[item.id] ? 'text-gray-400 line-through' : 'text-gray-700 group-hover:text-sidqly-navy'}`}>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 mb-6">
         <Link to="/modules/zakat-fund-separation" className="text-sm font-bold bg-sidqly-ivory text-sidqly-navy px-4 py-2.5 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
            {t('islamicTools.sadqaZakatPlanner.zakatModuleLink')}
         </Link>
         <Link to="/modules/sadaqah" className="text-sm font-bold bg-sidqly-ivory text-sidqly-navy px-4 py-2.5 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
            {t('islamicTools.sadqaZakatPlanner.sadaqahModuleLink')}
         </Link>
      </div>

      <div className="flex items-start gap-2 text-xs text-yellow-800 bg-yellow-50 p-3.5 rounded-xl border border-yellow-200">
         <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
         <p>{t('islamicTools.sadqaZakatPlanner.disclaimer')}</p>
      </div>
    </div>
  );
};

export default SadqaZakatPlanner;
