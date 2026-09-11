export interface DuaItem {
  id: string;
  category: DuaCategory;
  title: string;
  arabic: string;
  transliteration: string;
  translation: string;
  reference: string;
  repeatCount?: number;
}

export type DuaCategory =
  | 'morning'
  | 'evening'
  | 'after_salah'
  | 'sleeping'
  | 'waking'
  | 'travel'
  | 'food'
  | 'protection'
  | 'forgiveness'
  | 'stress'
  | 'gratitude'
  | 'general';

export const DUA_CATEGORIES: Array<{ id: DuaCategory; labelKey: string }> = [
  { id: 'morning', labelKey: 'islamicTools.duasAzkar.categories.morning' },
  { id: 'evening', labelKey: 'islamicTools.duasAzkar.categories.evening' },
  { id: 'after_salah', labelKey: 'islamicTools.duasAzkar.categories.afterSalah' },
  { id: 'sleeping', labelKey: 'islamicTools.duasAzkar.categories.sleeping' },
  { id: 'waking', labelKey: 'islamicTools.duasAzkar.categories.waking' },
  { id: 'travel', labelKey: 'islamicTools.duasAzkar.categories.travel' },
  { id: 'food', labelKey: 'islamicTools.duasAzkar.categories.food' },
  { id: 'protection', labelKey: 'islamicTools.duasAzkar.categories.protection' },
  { id: 'forgiveness', labelKey: 'islamicTools.duasAzkar.categories.forgiveness' },
  { id: 'stress', labelKey: 'islamicTools.duasAzkar.categories.stress' },
  { id: 'gratitude', labelKey: 'islamicTools.duasAzkar.categories.gratitude' },
  { id: 'general', labelKey: 'islamicTools.duasAzkar.categories.general' },
];

export const DUAS_DATA: DuaItem[] = [
  {
    id: 'm1',
    category: 'morning',
    title: 'Ayat al-Kursi (Morning & Evening)',
    arabic: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ',
    transliteration: 'Allahu la ilaha illa Huwa, Al-Hayyul-Qayyoom. La ta’khuthuhu sinatun wa la nawm. Lahu ma fis-samawati wa ma fil-ard.',
    translation: 'Allah! There is no deity except Him, the Ever-Living, the Sustainer of all existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth.',
    reference: 'Surah Al-Baqarah 2:255 / Hisn al-Muslim 75',
    repeatCount: 1,
  },
  {
    id: 'm2',
    category: 'morning',
    title: 'Morning Supplication for Provision & Guidance',
    arabic: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ',
    transliteration: 'Asbahna wa-asbahal-mulku lillah, wal-hamdu lillah, la ilaha illallahu wahdahu la shareeka lah.',
    translation: 'We have entered the morning and with it all dominion belongs to Allah. Praise be to Allah, none has the right to be worshipped except Allah alone, without partner.',
    reference: 'Sahih Muslim 2723',
    repeatCount: 1,
  },
  {
    id: 'e1',
    category: 'evening',
    title: 'Evening Supplication for Protection',
    arabic: 'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ',
    transliteration: 'Amsayna wa-amsal-mulku lillah, wal-hamdu lillah, la ilaha illallahu wahdahu la shareeka lah.',
    translation: 'We have reached the evening and with it all dominion belongs to Allah. Praise is to Allah, none has the right to be worshipped except Allah alone.',
    reference: 'Sahih Muslim 2723',
    repeatCount: 1,
  },
  {
    id: 'e2',
    category: 'evening',
    title: 'Seeking Complete Refuge in Allah\'s Words',
    arabic: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',
    transliteration: 'A\'udhu bikalimatil-lahit-tammati min sharri ma khalaq.',
    translation: 'I seek refuge in the perfect words of Allah from the evil of what He has created.',
    reference: 'Sahih Muslim 2708',
    repeatCount: 3,
  },
  {
    id: 'as1',
    category: 'after_salah',
    title: 'Asking Forgiveness After Prayer',
    arabic: 'أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ، اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ',
    transliteration: 'Astaghfirullah, Astaghfirullah, Astaghfirullah. Allahumma antas-Salamu wa minkas-salamu, tabarakta ya Dhal-Jalali wal-Ikram.',
    translation: 'I ask Allah for forgiveness (3 times). O Allah, You are Peace and from You comes peace. Blessed are You, O Owner of majesty and honor.',
    reference: 'Sahih Muslim 591',
    repeatCount: 1,
  },
  {
    id: 'as2',
    category: 'after_salah',
    title: 'Tasbih, Tahmid & Takbir',
    arabic: 'سُبْحَانَ اللَّهِ (٣٣) ، الْحَمْدُ لِلَّهِ (٣٣) ، اللَّهُ أَكْبَرُ (٣٣)',
    transliteration: 'SubhanAllah (33x), Alhamdulillah (33x), Allahu Akbar (33x).',
    translation: 'Glory be to Allah (33 times), Praise be to Allah (33 times), Allah is the Greatest (33 times).',
    reference: 'Sahih al-Bukhari 843, Sahih Muslim 595',
    repeatCount: 33,
  },
  {
    id: 's1',
    category: 'sleeping',
    title: 'Dua Before Sleeping',
    arabic: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',
    transliteration: 'Bismika-Allahumma amutu wa-ahya.',
    translation: 'In Your name, O Allah, I die and I live.',
    reference: 'Sahih al-Bukhari 6312',
    repeatCount: 1,
  },
  {
    id: 'w1',
    category: 'waking',
    title: 'Dua Upon Waking Up',
    arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',
    transliteration: 'Alhamdu lillahil-ladhi ahyana ba\'da ma amatana wa-ilayhin-nushur.',
    translation: 'Praise be to Allah Who brought us back to life after having caused us to die, and unto Him is the resurrection.',
    reference: 'Sahih al-Bukhari 6312',
    repeatCount: 1,
  },
  {
    id: 't1',
    category: 'travel',
    title: 'Dua for Traveling',
    arabic: 'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَىٰ رَبِّنَا لَمُنْقَلِبُونَ',
    transliteration: 'Subhanal-ladhi sakhkhara lana hadha wa ma kunna lahu muqrinin, wa inna ila Rabbina lamunqalibun.',
    translation: 'Glory unto Him Who has subjected this to us though we were unable to do so ourselves, and indeed to our Lord we shall return.',
    reference: 'Surah Az-Zukhruf 43:13-14 / Sahih Muslim 1342',
    repeatCount: 1,
  },
  {
    id: 'f1',
    category: 'food',
    title: 'Dua Before Eating',
    arabic: 'بِسْمِ اللَّهِ',
    transliteration: 'Bismillah.',
    translation: 'In the name of Allah.',
    reference: 'Sunan Abi Dawud 3767',
    repeatCount: 1,
  },
  {
    id: 'f2',
    category: 'food',
    title: 'Dua After Eating',
    arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَٰذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ',
    transliteration: 'Alhamdu lillahil-ladhi at\'amani hadha wa razaqanihi min ghayri hawlin minni wa la quwwah.',
    translation: 'Praise be to Allah Who fed me this and provided it for me without any strength or power on my part.',
    reference: 'Sunan Abu Dawud 4023',
    repeatCount: 1,
  },
  {
    id: 'pr1',
    category: 'protection',
    title: 'Protection Against All Harm',
    arabic: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
    transliteration: 'Bismillahil-ladhi la yadurru ma\'as-mihi shay\'un fil-ardi wa la fis-sama\'i wa Huwas-Sami\'ul-\'Alim.',
    translation: 'In the name of Allah with Whose name nothing can cause harm on the earth or in the heavens, and He is the All-Hearing, All-Knowing.',
    reference: 'Sunan Abu Dawud 5088',
    repeatCount: 3,
  },
  {
    id: 'fg1',
    category: 'forgiveness',
    title: 'Sayyid al-Istighfar (Master Supplication for Forgiveness)',
    arabic: 'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ',
    transliteration: 'Allahumma anta Rabbi la ilaha illa anta, khalaqtani wa ana \'abduka, wa ana \'ala \'ahdika wa wa\'dika mas-tata\'tu.',
    translation: 'O Allah, You are my Lord, none has the right to be worshipped except You. You created me and I am Your servant, and I abide by Your covenant and promise as best I can.',
    reference: 'Sahih al-Bukhari 6306',
    repeatCount: 1,
  },
  {
    id: 'st1',
    category: 'stress',
    title: 'Dua During Distress & Hardship',
    arabic: 'لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ',
    transliteration: 'La ilaha illa anta subhanaka inni kuntu minadh-dhalimin.',
    translation: 'There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.',
    reference: 'Surah Al-Anbiya 21:87 / Jami at-Tirmidhi 3505',
    repeatCount: 1,
  },
  {
    id: 'g1',
    category: 'gratitude',
    title: 'Expressing Gratitude to Allah',
    arabic: 'الْحَمْدُ لِلَّهِ حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ',
    transliteration: 'Alhamdu lillahi hamdan kathiran tayyiban mubarakan fih.',
    translation: 'Praise be to Allah, abundant, pure, and blessed praise.',
    reference: 'Sahih al-Bukhari 799',
    repeatCount: 1,
  },
  {
    id: 'gen1',
    category: 'general',
    title: 'Comprehensive Dua for Goodness in Both Worlds',
    arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
    transliteration: 'Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina \'adhaban-nar.',
    translation: 'Our Lord, grant us in this world that which is good and in the Hereafter that which is good and protect us from the punishment of the Fire.',
    reference: 'Surah Al-Baqarah 2:201 / Sahih al-Bukhari 6389',
    repeatCount: 1,
  },
];
