import React from 'react';
import { useState } from 'react';
import { getIslamicDateInfo } from '../../lib/islamicCalendar';
import { CalendarDays, AlertCircle, Heart, Gift, Activity, Clock, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

const getIslamicEvent = (hijriMonthIndex: number, hijriDay: number) => {
    if (hijriMonthIndex === 8) return "Ramadan (Month of Fasting)";
    if (hijriMonthIndex === 11 && hijriDay >= 1 && hijriDay <= 10) return "Days of Dhul Hijjah";
    if (hijriMonthIndex === 11 && hijriDay >= 10 && hijriDay <= 12) return "Days of Eid al-Adha / Qurbani";
    if (hijriMonthIndex === 9 && hijriDay === 1) return "Eid al-Fitr";
    return null;
};

const IslamicCalendarPanel: React.FC = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState<Date | null>(today);

  const currentIslamic = getIslamicDateInfo(today);
  const selectedIslamic = selectedDate ? getIslamicDateInfo(selectedDate) : null;
  const eventInfo = selectedIslamic ? getIslamicEvent(selectedIslamic.hijriMonthIndex, selectedIslamic.hijriDay) : null;

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());
  const firstDay = getFirstDayOfMonth(currentDate.getFullYear(), currentDate.getMonth());

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDay }, (_, i) => i);

  // Generate next 12 Gregorian months with rough Hijri equivalents
  const upcomingMonths = Array.from({ length: 12 }).map((_, i) => {
    const d = new Date();
    d.setMonth(d.getMonth() + i);
    d.setDate(15); // Use the 15th of the month for a solid estimate of the overlapping Hijri month
    const iDate = getIslamicDateInfo(d);
    return {
      gMonth: d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      iMonth: iDate?.hijriMonthName || 'Unknown',
      iYear: iDate?.hijriYear || 'Unknown'
    };
  });

  return (
    <div className="space-y-8">
      {/* Current Overview */}
      <div className="bg-sidqly-navy rounded-3xl p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <CalendarDays size={120} />
        </div>
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl font-bold mb-2">Islamic Calendar Planning</h2>
          <p className="text-gray-300 mb-8">Plan your giving workflows, campaigns, and distribution operations.</p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white/10 p-4 rounded-xl border border-white/20">
               <p className="text-sm text-sidqly-green-soft font-bold mb-1">Current Gregorian Date</p>
               <p className="text-xl font-bold">{today.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</p>
            </div>
            <div className="bg-white/10 p-4 rounded-xl border border-white/20">
               <p className="text-sm text-sidqly-green-soft font-bold mb-1">Estimated Islamic Date</p>
               <p className="text-xl font-bold">{currentIslamic?.hijriDay} {currentIslamic?.hijriMonthName} {currentIslamic?.hijriYear}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Grid & Selected Details */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden p-4 sm:p-6">
           <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-sidqly-navy">
                 {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </h3>
              <div className="flex gap-2">
                 <button onClick={handlePrevMonth} className="p-2 bg-sidqly-ivory hover:bg-gray-200 rounded-lg text-sidqly-navy transition-colors">
                    <ChevronLeft size={20} />
                 </button>
                 <button onClick={handleNextMonth} className="p-2 bg-sidqly-ivory hover:bg-gray-200 rounded-lg text-sidqly-navy transition-colors">
                    <ChevronRight size={20} />
                 </button>
              </div>
           </div>

           <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold text-gray-500 mb-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => <div key={d}>{d}</div>)}
           </div>
           <div className="grid grid-cols-7 gap-1 sm:gap-2">
              {blanks.map(b => <div key={`blank-${b}`} className="aspect-square"></div>)}
              {days.map(day => {
                  const iterDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
                  const isToday = iterDate.toDateString() === today.toDateString();
                  const isSelected = selectedDate?.toDateString() === iterDate.toDateString();
                  const iterIslamic = getIslamicDateInfo(iterDate);

                  let bgColor = 'bg-gray-50 hover:bg-sidqly-green-soft/20';
                  if (isSelected) bgColor = 'bg-sidqly-green-deep text-white shadow-md';
                  else if (isToday) bgColor = 'bg-sidqly-green-emerald text-white shadow-md';
                  else if (iterIslamic && (iterIslamic.hijriMonthIndex === 8 || iterIslamic.hijriMonthIndex === 11)) bgColor = 'bg-yellow-50 hover:bg-yellow-100 text-yellow-900 border border-yellow-200';

                  return (
                     <button
                        key={day}
                        onClick={() => setSelectedDate(iterDate)}
                        className={`aspect-square rounded-xl flex flex-col items-center justify-center p-1 transition-all border border-transparent ${bgColor}`}
                     >
                        <span className={`text-sm font-bold ${isToday || isSelected ? 'text-white' : 'text-sidqly-navy'}`}>{day}</span>
                        {iterIslamic && (
                           <span className={`text-[8px] sm:text-[9px] truncate w-full px-1 ${isToday || isSelected ? 'text-white/80' : 'text-gray-400'}`}>
                              {iterIslamic.hijriDay} {iterIslamic.hijriMonthName.substring(0,3)}
                           </span>
                        )}
                     </button>
                  );
              })}
           </div>
        </div>

        <div className="bg-sidqly-ivory rounded-3xl border border-gray-100 p-6 flex flex-col">
           <h3 className="text-lg font-bold text-sidqly-navy mb-6 border-b border-gray-200 pb-4">Selected Date Details</h3>
           {selectedIslamic && selectedDate ? (
              <div className="flex-grow space-y-4">
                 <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Gregorian</p>
                    <p className="font-medium text-sidqly-navy">{selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</p>
                 </div>
                 <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Hijri (Estimated)</p>
                    <p className="font-bold text-sidqly-green-deep text-lg">{selectedIslamic.hijriDay} {selectedIslamic.hijriMonthName} {selectedIslamic.hijriYear}</p>
                 </div>
                 {eventInfo && (
                    <div className="bg-yellow-100/50 p-4 rounded-xl border border-yellow-200">
                       <div className="flex gap-2 items-start text-yellow-800">
                          <Info size={16} className="mt-0.5 shrink-0" />
                          <p className="text-sm font-bold">{eventInfo}</p>
                       </div>
                    </div>
                 )}
                 <div className="pt-4 border-t border-gray-200">
                     <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-3">Suggested Planning</p>
                     <div className="flex flex-col gap-2">
                        {selectedIslamic.hijriMonthIndex === 8 ? (
                           <Link to="/ramadan-planner" className="text-sm bg-white border border-gray-200 px-4 py-2 rounded-lg text-sidqly-navy font-bold hover:border-sidqly-green-emerald transition-colors">Open Ramadan Planner →</Link>
                        ) : selectedIslamic.hijriMonthIndex === 11 ? (
                           <Link to="/eid-qurbani-planner" className="text-sm bg-white border border-gray-200 px-4 py-2 rounded-lg text-sidqly-navy font-bold hover:border-sidqly-green-emerald transition-colors">Open Qurbani Planner →</Link>
                        ) : (
                           <Link to="/zakat-calculator" className="text-sm bg-white border border-gray-200 px-4 py-2 rounded-lg text-sidqly-navy font-bold hover:border-sidqly-green-emerald transition-colors">Calculate Zakat →</Link>
                        )}
                     </div>
                 </div>
              </div>
           ) : (
              <div className="flex-grow flex items-center justify-center text-gray-400 text-sm">Select a date to view details.</div>
           )}
        </div>
      </div>

      <div className="flex items-start gap-3 bg-yellow-50 p-4 rounded-xl border border-yellow-200 text-sm text-yellow-800">
        <AlertCircle size={20} className="shrink-0 mt-0.5" />
        <p>
          <strong>Disclaimer:</strong> Sidqly provides operational planning tools for Islamic giving workflows. Islamic dates may vary by country, moon sighting, local authority, calculation method, and official announcements. Dates shown here are planning estimates only.
        </p>
      </div>

      {/* Planning Context Cards */}
      <div>
        <h3 className="text-2xl font-bold text-sidqly-navy mb-6">Seasonal Planning Checklists</h3>
        <div className="grid md:grid-cols-2 gap-4">
           <Link to="/ramadan-planner" className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-gray-100 hover:border-sidqly-green-emerald hover:shadow-md transition-all group">
              <div className="bg-sidqly-ivory p-3 rounded-xl text-sidqly-green-deep group-hover:bg-sidqly-green-emerald group-hover:text-white transition-colors">
                <Heart size={24} />
              </div>
              <div>
                 <h4 className="font-bold text-sidqly-navy group-hover:text-sidqly-green-deep">Ramadan Planner</h4>
                 <p className="text-sm text-gray-500 mt-1">Checklists for Iftar, ration packs, volunteer coordination, and Sadqa workflows.</p>
              </div>
           </Link>

           <Link to="/eid-qurbani-planner" className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-gray-100 hover:border-sidqly-green-emerald hover:shadow-md transition-all group">
              <div className="bg-sidqly-ivory p-3 rounded-xl text-sidqly-green-deep group-hover:bg-sidqly-green-emerald group-hover:text-white transition-colors">
                <Gift size={24} />
              </div>
              <div>
                 <h4 className="font-bold text-sidqly-navy group-hover:text-sidqly-green-deep">Eid & Qurbani Planner</h4>
                 <p className="text-sm text-gray-500 mt-1">Vendor assignments, order tracking, manual payment review, and proof approval.</p>
              </div>
           </Link>

           <Link to="/hajj-countdown" className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-gray-100 hover:border-sidqly-green-emerald hover:shadow-md transition-all group">
              <div className="bg-sidqly-ivory p-3 rounded-xl text-sidqly-green-deep group-hover:bg-sidqly-green-emerald group-hover:text-white transition-colors">
                <Clock size={24} />
              </div>
              <div>
                 <h4 className="font-bold text-sidqly-navy group-hover:text-sidqly-green-deep">Hajj Countdown</h4>
                 <p className="text-sm text-gray-500 mt-1">Estimated Dhul Hijjah timelines for sponsor reporting and donor updates.</p>
              </div>
           </Link>

           <Link to="/zakat-calculator" className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-gray-100 hover:border-sidqly-green-emerald hover:shadow-md transition-all group">
              <div className="bg-sidqly-ivory p-3 rounded-xl text-sidqly-green-deep group-hover:bg-sidqly-green-emerald group-hover:text-white transition-colors">
                <Activity size={24} />
              </div>
              <div>
                 <h4 className="font-bold text-sidqly-navy group-hover:text-sidqly-green-deep">Sadqa & Zakat Planning</h4>
                 <p className="text-sm text-gray-500 mt-1">Zakat fund separation checklists and calculation tools for your campaigns.</p>
              </div>
           </Link>
        </div>
      </div>

      {/* Upcoming Year Estimate */}
      <div>
        <h3 className="text-2xl font-bold text-sidqly-navy mb-6">12-Month Estimate</h3>
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-sidqly-ivory border-b border-gray-100 text-gray-600">
              <tr>
                <th className="p-4 font-bold">Gregorian Month</th>
                <th className="p-4 font-bold">Estimated Hijri Overlap</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-gray-600 font-medium">
              {upcomingMonths.map((m, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="p-4">{m.gMonth}</td>
                  <td className="p-4 text-sidqly-green-deep">{m.iMonth} {m.iYear}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default IslamicCalendarPanel;
