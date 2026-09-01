/**
 * Namaz / Salah Recitation Data & Verified Translations Dataset
 *
 * SOURCES AND LICENSES:
 * 1. Arabic Text (Quran & Hadith recitations): Standard Uthmani Script and authentic Hadith collections
 *    (Sahih al-Bukhari, Sahih Muslim, Sunan Abi Dawud, Jami` at-Tirmidhi, Sunan an-Nasa'i, Sunan Ibn Majah). Public Domain / Standard Religious Text.
 * 2. English Translations: Sahih International (Quran) & Verified Hadith Translations (Public Domain / Open License).
 * 3. Urdu Translations: Fateh Muhammad Jalandhri (Quran) & Authentic Urdu Islamic Liturgy Texts (Public Domain).
 * 4. French Translations: Muhammad Hamidullah (Quran) & Standard French Islamic Liturgy Texts (Public Domain).
 * 5. German Translations: Frank Bubenheim & Nadeem Elyas (Quran) & Standard German Islamic Liturgy Texts (Public Domain).
 * 6. Arabic Explanations: Standard Classical Arabic Lexicon & Tafsir (Tafsir Ibn Kathir, Al-Qurtubi, Al-Jalalayn).
 *
 * JURISPRUDENTIAL COMPLIANCE:
 * - Variants are labeled with authentic Hadith citations (e.g. Sahih al-Bukhari, Sahih Muslim).
 * - No single disputed wording is presented as the only valid wording.
 * - Unsupported school/madhhab claims are strictly avoided.
 */

export interface WordBreakdown {
  arabic: string;
  transliteration: string;
  translations: {
    en: string;
    ar: string;
    ur: string;
    fr: string;
    de: string;
  };
}

export interface SunnahVariant {
  id: string;
  name: {
    en: string;
    ar: string;
    ur: string;
    fr: string;
    de: string;
  };
  sourceReference: string;
  arabicText: string;
  transliteration: string;
  translations: {
    en: string;
    ar: string;
    ur: string;
    fr: string;
    de: string;
  };
  wordBreakdown?: WordBreakdown[];
}

export type SalahSectionCategory =
  | 'takbir'
  | 'sana'
  | 'taawwudh'
  | 'basmalah'
  | 'fatihah'
  | 'ruku'
  | 'qawmah'
  | 'sujood'
  | 'jalsah'
  | 'tashahhud'
  | 'durood'
  | 'closing_dua'
  | 'qunut';

export interface SalahRecitationItem {
  id: string;
  section: SalahSectionCategory;
  order: number;
  title: {
    en: string;
    ar: string;
    ur: string;
    fr: string;
    de: string;
  };
  sourceReference: string;
  primaryArabic: string;
  primaryTransliteration: string;
  primaryTranslations: {
    en: string;
    ar: string;
    ur: string;
    fr: string;
    de: string;
  };
  wordBreakdown?: WordBreakdown[];
  variants?: SunnahVariant[];
  contextNote?: {
    en: string;
    ar: string;
    ur: string;
    fr: string;
    de: string;
  };
}

export const SALAH_SECTIONS_META: {
  id: SalahSectionCategory;
  name: { en: string; ar: string; ur: string; fr: string; de: string };
  order: number;
}[] = [
  { id: 'takbir', name: { en: 'Takbir al-Ihram', ar: 'تكبيرة الإحرام', ur: 'تکبیر تحریمہ', fr: 'Takbir al-Ihram', de: 'Takbir al-Ihram' }, order: 1 },
  { id: 'sana', name: { en: 'Sana / Thana (Opening Supplication)', ar: 'دعاء الاستفتاح (الثناء)', ur: 'ثناء / ثناء', fr: 'Invocation d\'ouverture (Sana)', de: 'Eröffnungsbitte (Sana)' }, order: 2 },
  { id: 'taawwudh', name: { en: 'Ta\'awwudh (Seeking Refuge)', ar: 'التعوذ', ur: 'تعوذ', fr: 'Ta\'awwudh (Demande de protection)', de: 'Ta\'awwudh (Schutzsuche)' }, order: 3 },
  { id: 'basmalah', name: { en: 'Basmalah', ar: 'البسملة', ur: 'تسمیہ / بسم اللہ', fr: 'Basmalah', de: 'Basmalah' }, order: 4 },
  { id: 'fatihah', name: { en: 'Surah Al-Fatihah', ar: 'سورة الفاتحة', ur: 'سورۃ الفاتحہ', fr: 'Sourate Al-Fatiha', de: 'Sure Al-Fatiha' }, order: 5 },
  { id: 'ruku', name: { en: 'Ruku (Bowing)', ar: 'أذكار الركوع', ur: 'رکوع کی تسبیح', fr: 'Ruku (Inclinaison)', de: 'Ruku (Verbeugung)' }, order: 6 },
  { id: 'qawmah', name: { en: 'Qawmah (Standing after Ruku)', ar: 'القومة (الاعتدال)', ur: 'قومہ (رکوع کے بعد قیام)', fr: 'Qawmah (Redressement)', de: 'Qawmah (Aufrichten)' }, order: 7 },
  { id: 'sujood', name: { en: 'Sujood (Prostration)', ar: 'أذكار السجود', ur: 'سجدہ کی تسبیح', fr: 'Sujood (Prosternation)', de: 'Sujood (Niederwerfung)' }, order: 8 },
  { id: 'jalsah', name: { en: 'Jalsah (Sitting between Sujood)', ar: 'الجلسة بين السجدتين', ur: 'جلسہ (دو سجدوں کے درمیان بیٹھنا)', fr: 'Jalsah (Assise entre les prosternations)', de: 'Jalsah (Sitzen zwischen Niederwerfungen)' }, order: 9 },
  { id: 'tashahhud', name: { en: 'Tashahhud (Sitting & Testimony)', ar: 'التشهد', ur: 'تشہد (التحیات)', fr: 'Tashahhud', de: 'Tashahhud' }, order: 10 },
  { id: 'durood', name: { en: 'Durood Ibrahim (Salawat)', ar: 'الصلاة الإبراهيمية', ur: 'درودِ ابراہیمی', fr: 'Durood Ibrahim (Salawat)', de: 'Durood Ibrahim (Salawat)' }, order: 11 },
  { id: 'closing_dua', name: { en: 'Closing Dua (Before Taslim)', ar: 'الدعاء قبل التسليم', ur: 'دعائے ماثورہ', fr: 'Invocation avant le Taslim', de: 'Bittgebet vor dem Taslim' }, order: 12 },
  { id: 'qunut', name: { en: 'Qunut (Dua al-Qunut)', ar: 'دعاء القنوت', ur: 'دعائے قنوت', fr: 'Dua al-Qunut', de: 'Dua al-Qunut' }, order: 13 },
];

export const SALAH_DATASET: SalahRecitationItem[] = [
  // 1. TAKBIR
  {
    id: 'takbir-1',
    section: 'takbir',
    order: 1,
    title: {
      en: 'Takbir al-Ihram (Opening Takbir)',
      ar: 'تكبيرة الإحرام',
      ur: 'تکبیر تحریمہ',
      fr: 'Takbir al-Ihram (Takbir d\'ouverture)',
      de: 'Takbir al-Ihram (Eröffnungs-Takbir)',
    },
    sourceReference: 'Sahih al-Bukhari 735, Sahih Muslim 390',
    primaryArabic: 'اللَّهُ أَكْبَرُ',
    primaryTransliteration: 'Allāhu Akbar',
    primaryTranslations: {
      en: 'Allah is the Greatest.',
      ar: 'الله أعظم وأكبر من كل شيء.',
      ur: 'اللہ سب سے بڑا ہے۔',
      fr: 'Allah est le Plus Grand.',
      de: 'Allah ist der Größte.',
    },
    wordBreakdown: [
      {
        arabic: 'اللَّهُ',
        transliteration: 'Allāh',
        translations: { en: 'Allah', ar: 'الله جل جلاله', ur: 'اللہ تعالی', fr: 'Allah', de: 'Allah' },
      },
      {
        arabic: 'أَكْبَرُ',
        transliteration: 'Akbar',
        translations: { en: '[is] Greatest', ar: 'أكبر وأعظم', ur: 'سب سے بڑا ہے', fr: '[est] le Plus Grand', de: '[ist] am größten' },
      },
    ],
  },

  // 2. SANA / THANA
  {
    id: 'sana-1',
    section: 'sana',
    order: 2,
    title: {
      en: 'Sana / Thana (Subhanakal-lahumma)',
      ar: 'دعاء الاستفتاح - سبحانك اللهم',
      ur: 'ثناء - سبحانک اللھم',
      fr: 'Invocation d\'ouverture (Subhanakal-lahumma)',
      de: 'Eröffnungsbitte (Subhanakal-lahumma)',
    },
    sourceReference: 'Sunan Abi Dawud 775, Jami` at-Tirmidhi 243',
    primaryArabic: 'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَلَا إِلَهَ غَيْرُكَ',
    primaryTransliteration: 'Subḥānakal-lāhumma wa biḥamdika wa tabārakasmuka wa ta‘ālā jadduka wa lā ilāha ghayruk',
    primaryTranslations: {
      en: 'Glory be to You, O Allah, and praise. Blessed is Your Name, exalted is Your Majesty, and there is no deity worthy of worship besides You.',
      ar: 'تنزيهًا لك يا الله وتقديسًا لك مع حمدك، وتكاثرت بركة اسمك، وعلا قدرك وجلالك، ولا معبود بحق سواك.',
      ur: 'اے اللہ! تیری ذات پاک ہے اور تیرے ہی لیے تمام تعریفیں ہیں، اور تیرا نام بابرکت ہے، اور تیری شان بلند ہے، اور تیرے سوا کوئی معبود نہیں۔',
      fr: 'Gloire et pureté à Toi, ô Allah, et à Toi la louange. Béni soit Ton Nom, exaltée soit Ta Majesté, et il n\'y a pas d\'autre divinité [digne d\'adoration] en dehors de Toi.',
      de: 'Gepriesen seist Du, o Allah, und gelobt. Segensreich ist Dein Name, erhaben ist Deine Majestät, und es gibt keinen Gott außer Dir.',
    },
    wordBreakdown: [
      {
        arabic: 'سُبْحَانَكَ',
        transliteration: 'Subḥānaka',
        translations: { en: 'Glory be to You', ar: 'تنزيهًا وتقديسًا لك', ur: 'پاک ہے تیری ذات', fr: 'Gloire à Toi', de: 'Gepriesen seist Du' },
      },
      {
        arabic: 'اللَّهُمَّ',
        transliteration: 'Allāhumma',
        translations: { en: 'O Allah', ar: 'يا الله', ur: 'اے اللہ', fr: 'Ô Allah', de: 'O Allah' },
      },
      {
        arabic: 'وَبِحَمْدِكَ',
        transliteration: 'wa biḥamdika',
        translations: { en: 'and with Your praise', ar: 'ومقترن بحمدك', ur: 'اور تیری ہی تعریف ہے', fr: 'et avec Ta louange', de: 'und mit Deinem Lob' },
      },
      {
        arabic: 'وَتَبَارَكَ',
        transliteration: 'wa tabāraka',
        translations: { en: 'and blessed is', ar: 'وتكاثرت بركة', ur: 'اور بابرکت ہے', fr: 'et béni est', de: 'und segensreich ist' },
      },
      {
        arabic: 'اسْمُكَ',
        transliteration: 'asmuka',
        translations: { en: 'Your Name', ar: 'اسمك الكريم', ur: 'تیرا نام', fr: 'Ton Nom', de: 'Dein Name' },
      },
      {
        arabic: 'وَتَعَالَى',
        transliteration: 'wa ta‘ālā',
        translations: { en: 'and exalted is', ar: 'ارتفع وعلا', ur: 'اور بلند ہے', fr: 'et exaltée est', de: 'und erhaben ist' },
      },
      {
        arabic: 'جَدُّكَ',
        transliteration: 'jadduka',
        translations: { en: 'Your Majesty', ar: 'عظمتك وجلالك', ur: 'تیری شان', fr: 'Ta Majesté', de: 'Deine Majestät' },
      },
      {
        arabic: 'وَلَا إِلَهَ',
        transliteration: 'wa lā ilāha',
        translations: { en: 'and no deity', ar: 'ولا معبود بحق', ur: 'اور کوئی معبود نہیں', fr: 'et aucune divinité', de: 'und kein Gott' },
      },
      {
        arabic: 'غَيْرُكَ',
        transliteration: 'ghayruk',
        translations: { en: 'besides You', ar: 'سواك', ur: 'تیرے سوا', fr: 'en dehors de Toi', de: 'außer Dir' },
      },
    ],
    variants: [
      {
        id: 'sana-variant-allahumma-baid',
        name: {
          en: 'Variant: Allahumma ba\'id bayni (Sahih al-Bukhari 744, Sahih Muslim 598)',
          ar: 'رواية: اللهم باعد بيني وبين خطاياي (صحيح البخاري 744، صحيح مسلم 598)',
          ur: 'روایت: اللهم باعد بینی وبین خطایای (صحیح البخاری 744، صحیح مسلم 598)',
          fr: 'Variante : Allahumma ba\'id bayni (Sahih al-Bukhari 744, Sahih Muslim 598)',
          de: 'Variante: Allahumma ba\'id bayni (Sahih al-Bukhari 744, Sahih Muslim 598)',
        },
        sourceReference: 'Sahih al-Bukhari 744, Sahih Muslim 598',
        arabicText: 'اللَّهُمَّ بَاعِدْ بَيْنِي وَبَيْنَ خَطَايَايَ كَمَا بَاعَدْتَ بَيْنَ الْمَشْرِقِ وَالْمَغْرِبِ، اللَّهُمَّ نَقِّنِي مِنَ الْخَطَايَا كَمَا يُنَقَّى الثَّوْبُ الأَبْيَضُ مِنَ الدَّنَسِ، اللَّهُمَّ اغْسِلْ خَطَايَايَ بِالْمَاءِ وَالثَّلْجِ وَالْبَرَدِ',
        transliteration: 'Allāhumma bā‘id baynī wa bayna khaṭāyāya kamā bā‘adta baynal-mashriqi wal-maghrib. Allāhumma naqqinī minal-khaṭāyā kamā yunaqqath-thawbul-abyadu minad-danas. Allāhummaghsil khaṭāyāya bil-mā\'i wath-thalji wal-barad',
        translations: {
          en: 'O Allah, distance me from my sins as You have distanced the East from the West. O Allah, cleanse me of my sins as a white garment is cleansed of dirt. O Allah, wash away my sins with water, snow, and hail.',
          ar: 'اللهم أبعد بيني وبين ذنوبي كما باعدت بين المشرق والمغرب، اللهم طهرني من الخطايا كما ينقى الثوب الأبيض من الوسخ، اللهم اغسل خطاياي بالماء والثلج والبرد.',
          ur: 'اے اللہ! میرے اور میری خطاؤں کے درمیان اتنی دوری کر دے جتنی تو نے مشرق اور مغرب کے درمیان کی ہے۔ اے اللہ! مجھے خطاؤں سے یوں پاک کر دے جیسے سفید کپڑا میل کچیل سے پاک کیا جاتا ہے۔ اے اللہ! میری خطاؤں کو پانی، برف اور اولوں سے دھو دے۔',
          fr: 'Ô Allah, éloigne-moi de mes péchés comme Tu as éloigné l\'Orient de l\'Occident. Ô Allah, purifie-moi de mes péchés comme on nettoie le vêtement blanc de sa saleté. Ô Allah, lave mes péchés avec l\'eau, la neige et la grêle.',
          de: 'O Allah, entferne mich von meinen Sünden, so wie Du den Osten vom Westen entfernt hast. O Allah, reinige mich von den Sünden, wie ein weißes Kleid von Schmutz gereinigt wird. O Allah, wasche meine Sünden mit Wasser, Schnee und Hagel ab.',
        },
      },
    ],
  },

  // 3. TA'AWWUDH
  {
    id: 'taawwudh-1',
    section: 'taawwudh',
    order: 3,
    title: {
      en: 'Ta\'awwudh (Seeking Refuge from Satan)',
      ar: 'التعوذ من الشيطان الرجيم',
      ur: 'تعوذ (شیطان سے پناہ)',
      fr: 'Ta\'awwudh (Demande de protection contre Satan)',
      de: 'Ta\'awwudh (Schutzsuche vor Satan)',
    },
    sourceReference: 'Surah An-Nahl 16:98, Sunan Abi Dawud 775',
    primaryArabic: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ',
    primaryTransliteration: 'A‘ūdhu billāhi minash-shayṭānir-rajīm',
    primaryTranslations: {
      en: 'I seek refuge in Allah from Satan, the accursed.',
      ar: 'ألوذ وأعتصم بالله من شر الشيطان المطرود من رحمة الله.',
      ur: 'میں اللہ کی پناہ مانگتا ہوں شیطان مردود سے۔',
      fr: 'Je cherche refuge auprès d\'Allah contre Satan, le lapidé.',
      de: 'Ich suche Zuflucht bei Allah vor dem gesteinigten Satan.',
    },
    wordBreakdown: [
      {
        arabic: 'أَعُوذُ',
        transliteration: 'A‘ūdhu',
        translations: { en: 'I seek refuge', ar: 'ألوذ وأعتصم', ur: 'میں پناہ مانگتا ہوں', fr: 'Je cherche refuge', de: 'Ich suche Zuflucht' },
      },
      {
        arabic: 'بِاللَّهِ',
        transliteration: 'billāh',
        translations: { en: 'in Allah', ar: 'بالله تعالى', ur: 'اللہ کی', fr: 'auprès d\'Allah', de: 'bei Allah' },
      },
      {
        arabic: 'مِنَ',
        transliteration: 'mina',
        translations: { en: 'from', ar: 'من شر', ur: 'سے', fr: 'contre', de: 'vor' },
      },
      {
        arabic: 'الشَّيْطَانِ',
        transliteration: 'ash-shayṭān',
        translations: { en: 'Satan', ar: 'الشيطان', ur: 'شیطان', fr: 'Satan', de: 'dem Satan' },
      },
      {
        arabic: 'الرَّجِيمِ',
        transliteration: 'ar-rajīm',
        translations: { en: 'the accursed', ar: 'المطرود من الرحمة', ur: 'مردود', fr: 'le lapidé', de: 'dem gesteinigten' },
      },
    ],
  },

  // 4. BASMALAH
  {
    id: 'basmalah-1',
    section: 'basmalah',
    order: 4,
    title: {
      en: 'Basmalah (In the Name of Allah)',
      ar: 'البسملة',
      ur: 'تسمیہ',
      fr: 'Basmalah',
      de: 'Basmalah',
    },
    sourceReference: 'Surah Al-Fatihah 1:1',
    primaryArabic: 'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ',
    primaryTransliteration: 'Bismillāhir-Raḥmānir-Raḥīm',
    primaryTranslations: {
      en: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.',
      ar: 'أبدأ قراءتي باسم الله الرحمن ذي الرحمة العامة، الرحيم بالمؤمنين.',
      ur: 'شروع اللہ کے نام سے جو بڑا مہربان، نہایت رحم کرنے والا ہے۔',
      fr: 'Au nom d\'Allah, le Tout Miséricordieux, le Très Miséricordieux.',
      de: 'Im Namen Allahs, des Allerbarmers, des Barmherzigen.',
    },
    wordBreakdown: [
      {
        arabic: 'بِسْمِ',
        transliteration: 'Bismi',
        translations: { en: 'In the name', ar: 'باسم', ur: 'نام سے', fr: 'Au nom', de: 'Im Namen' },
      },
      {
        arabic: 'اللَّهِ',
        transliteration: 'Allāh',
        translations: { en: 'of Allah', ar: 'الله', ur: 'اللہ کے', fr: 'd\'Allah', de: 'Allahs' },
      },
      {
        arabic: 'الرَّحْمَنِ',
        transliteration: 'ar-Raḥmān',
        translations: { en: 'the Entirely Merciful', ar: 'الرحمن (عظيم الرحمة)', ur: 'بڑا مہربان', fr: 'le Tout Miséricordieux', de: 'des Allerbarmers' },
      },
      {
        arabic: 'الرَّحِيمِ',
        transliteration: 'ar-Raḥīm',
        translations: { en: 'the Especially Merciful', ar: 'الرحيم (دائم الرحمة)', ur: 'نہایت رحم والا', fr: 'le Très Miséricordieux', de: 'des Barmherzigen' },
      },
    ],
  },

  // 5. SURAH AL-FATIHAH (7 Verses)
  {
    id: 'fatihah-v2',
    section: 'fatihah',
    order: 5,
    title: {
      en: 'Surah Al-Fatihah - Verse 2',
      ar: 'سورة الفاتحة - الآية 2',
      ur: 'سورۃ الفاتحہ - آیت 2',
      fr: 'Sourate Al-Fatiha - Verset 2',
      de: 'Sure Al-Fatiha - Vers 2',
    },
    sourceReference: 'Surah Al-Fatihah 1:2',
    primaryArabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
    primaryTransliteration: 'Al-ḥamdu lillāhi rabbil-‘ālamīn',
    primaryTranslations: {
      en: '[All] praise is [due] to Allah, Lord of the worlds.',
      ar: 'الثناء الكامل والمحامد كلها لله تعالى وحده، مالك وخالق ومربي جميع المخلوقات.',
      ur: 'سب تعریفیں اللہ کے لیے ہیں جو تمام جہانوں کا پروردگار ہے۔',
      fr: 'Louange à Allah, Seigneur des mondes.',
      de: 'Alles Lob gebührt Allah, dem Herrn der Welten.',
    },
    wordBreakdown: [
      {
        arabic: 'الْحَمْدُ',
        transliteration: 'Al-ḥamdu',
        translations: { en: 'All praise', ar: 'الثناء والحمد كله', ur: 'سب تعریفیں', fr: 'Toute la louange', de: 'Alles Lob' },
      },
      {
        arabic: 'لِلَّهِ',
        transliteration: 'lillāhi',
        translations: { en: 'is for Allah', ar: 'لله وحده', ur: 'اللہ ہی کے لیے', fr: 'est à Allah', de: 'gebührt Allah' },
      },
      {
        arabic: 'رَبِّ',
        transliteration: 'Rabbi',
        translations: { en: 'Lord', ar: 'رب وخالق', ur: 'پروردگار', fr: 'Seigneur', de: 'dem Herrn' },
      },
      {
        arabic: 'الْعَالَمِينَ',
        transliteration: 'al-‘ālamīn',
        translations: { en: 'of the worlds', ar: 'العالمين والمخلوقات', ur: 'تمام جہانوں کا', fr: 'des mondes', de: 'der Welten' },
      },
    ],
  },
  {
    id: 'fatihah-v3',
    section: 'fatihah',
    order: 6,
    title: {
      en: 'Surah Al-Fatihah - Verse 3',
      ar: 'سورة الفاتحة - الآية 3',
      ur: 'سورۃ الفاتحہ - آیت 3',
      fr: 'Sourate Al-Fatiha - Verset 3',
      de: 'Sure Al-Fatiha - Vers 3',
    },
    sourceReference: 'Surah Al-Fatihah 1:3',
    primaryArabic: 'الرَّحْمَنِ الرَّحِيمِ',
    primaryTransliteration: 'Ar-Raḥmānir-Raḥīm',
    primaryTranslations: {
      en: 'The Entirely Merciful, the Especially Merciful.',
      ar: 'الرحمن بذاته العظيمة، الرحيم بعباده المؤمنين.',
      ur: 'بہت مہربان، نہایت رحم فرمانے والا۔',
      fr: 'Le Tout Miséricordieux, le Très Miséricordieux.',
      de: 'Der Allerbarmer, der Barmherzige.',
    },
  },
  {
    id: 'fatihah-v4',
    section: 'fatihah',
    order: 7,
    title: {
      en: 'Surah Al-Fatihah - Verse 4',
      ar: 'سورة الفاتحة - الآية 4',
      ur: 'سورۃ الفاتحہ - آیت 4',
      fr: 'Sourate Al-Fatiha - Verset 4',
      de: 'Sure Al-Fatiha - Vers 4',
    },
    sourceReference: 'Surah Al-Fatihah 1:4',
    primaryArabic: 'مَالِكِ يَوْمِ الدِّينِ',
    primaryTransliteration: 'Māliki yawmid-dīn',
    primaryTranslations: {
      en: 'Sovereign of the Day of Recompense.',
      ar: 'مالك ومتصرف يوم الحساب والجزاء.',
      ur: 'روزِ جزا کا مالک۔',
      fr: 'Maître du Jour du Jugement.',
      de: 'Herrscher am Tag des Gerichts.',
    },
    wordBreakdown: [
      {
        arabic: 'مَالِكِ',
        transliteration: 'Māliki',
        translations: { en: 'Sovereign / Owner', ar: 'مالك', ur: 'مالک', fr: 'Maître', de: 'Herrscher' },
      },
      {
        arabic: 'يَوْمِ',
        transliteration: 'yawmi',
        translations: { en: 'Day', ar: 'يوم', ur: 'دن کا', fr: 'du Jour', de: 'am Tag' },
      },
      {
        arabic: 'الدِّينِ',
        transliteration: 'ad-dīn',
        translations: { en: 'of Recompense / Judgment', ar: 'الجزاء والحساب', ur: 'جزا و سزا', fr: 'du Jugement', de: 'des Gerichts' },
      },
    ],
  },
  {
    id: 'fatihah-v5',
    section: 'fatihah',
    order: 8,
    title: {
      en: 'Surah Al-Fatihah - Verse 5',
      ar: 'سورة الفاتحة - الآية 5',
      ur: 'سورۃ الفاتحہ - آیت 5',
      fr: 'Sourate Al-Fatiha - Verset 5',
      de: 'Sure Al-Fatiha - Vers 5',
    },
    sourceReference: 'Surah Al-Fatihah 1:5',
    primaryArabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
    primaryTransliteration: 'Iyyāka na‘budu wa iyyāka nasta‘īn',
    primaryTranslations: {
      en: 'It is You we worship and You we ask for help.',
      ar: 'نخصك وحدك بالعبادة، ونخصك وحدك بطلب العون والنصرة.',
      ur: 'ہم تیری ہی عبادت کرتے ہیں اور تجھ ہی سے مدد مانگتے ہیں۔',
      fr: 'C\'est Toi seul que nous adorons, et c\'est Toi seul dont nous implorons le secours.',
      de: 'Dir allein dienen wir, und Dich allein bitten wir um Hilfe.',
    },
    wordBreakdown: [
      {
        arabic: 'إِيَّاكَ',
        transliteration: 'Iyyāka',
        translations: { en: 'You alone', ar: 'إياك وحدك', ur: 'صرف تجھی', fr: 'Toi seul', de: 'Dir allein' },
      },
      {
        arabic: 'نَعْبُدُ',
        transliteration: 'na‘budu',
        translations: { en: 'we worship', ar: 'نعبد', ur: 'ہم عبادت کرتے ہیں', fr: 'nous adorons', de: 'dienen wir' },
      },
      {
        arabic: 'وَإِيَّاكَ',
        transliteration: 'wa iyyāka',
        translations: { en: 'and You alone', ar: 'وإياك وحدك', ur: 'اور صرف تجھی', fr: 'et Toi seul', de: 'und Dich allein' },
      },
      {
        arabic: 'نَسْتَعِينُ',
        transliteration: 'nasta‘īn',
        translations: { en: 'we ask for help', ar: 'نستعين ونطلب العون', ur: 'ہم مدد مانگتے ہیں', fr: 'nous implorons secours', de: 'bitten wir um Hilfe' },
      },
    ],
  },
  {
    id: 'fatihah-v6-7',
    section: 'fatihah',
    order: 9,
    title: {
      en: 'Surah Al-Fatihah - Verses 6-7',
      ar: 'سورة الفاتحة - الآيتان 6-7',
      ur: 'سورۃ الفاتحہ - آیات 6-7',
      fr: 'Sourate Al-Fatiha - Versets 6-7',
      de: 'Sure Al-Fatiha - Verse 6-7',
    },
    sourceReference: 'Surah Al-Fatihah 1:6-7',
    primaryArabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۞ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
    primaryTransliteration: 'Ihdinaṣ-ṣirāṭal-mustaqīm. Ṣirāṭalladhīna an‘amta ‘alayhim ghayril-maghḍūbi ‘alayhim wa laḍ-ḍāllīn',
    primaryTranslations: {
      en: 'Guide us to the straight path - The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.',
      ar: 'وفقنا واهدنا إلى الطريق المستقيم، طريق الذين أنعمت عليهم من النبيين والصديقين، غير طريق المغضوب عليهم ولا الضالين.',
      ur: 'ہمیں سیدھے راستے کی ہدایت فرما، ان لوگوں کا راستہ جن پر تو نے انعام فرمایا، نہ کہ ان کا جن پر غضب ہوا اور نہ گمراہوں کا۔',
      fr: 'Guide-nous dans le droit chemin, Le chemin de ceux que Tu as comblés de Tes bienfaits, non pas de ceux qui ont encouru Ton courroux, ni des égarés.',
      de: 'Führe uns den geraden Weg, den Weg derer, denen Du Gnade erwiesen hast, nicht derer, die [Deinen] Zorn erregt haben, und nicht der Irrenden.',
    },
  },

  // 6. RUKU
  {
    id: 'ruku-1',
    section: 'ruku',
    order: 10,
    title: {
      en: 'Ruku Recitation (Subhana Rabbiyal-A\'dheem)',
      ar: 'ذكر الركوع - سبحان ربي العظيم',
      ur: 'رکوع کی تسبیح - سبحان ربی العظیم',
      fr: 'Ruku (Subhana Rabbiyal-A\'dheem)',
      de: 'Ruku (Subhana Rabbiyal-A\'dheem)',
    },
    sourceReference: 'Sahih Muslim 772, Sunan Abi Dawud 871',
    primaryArabic: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ',
    primaryTransliteration: 'Subḥāna Rabbiyal-‘Aẓīm',
    primaryTranslations: {
      en: 'Glory be to my Lord, the Magnificent. (Repeated 3 times or more)',
      ar: 'تنزيهًا لربي العظيم عن كل نقص.',
      ur: 'پاک ہے میرا پروردگار عظمت والا۔ (3 بار یا زائد)',
      fr: 'Gloire à mon Seigneur, le Très Grand. (Répété 3 fois ou plus)',
      de: 'Gepriesen sei mein Herr, der Erhabene. (3 Mal oder mehr wiederholt)',
    },
    wordBreakdown: [
      {
        arabic: 'سُبْحَانَ',
        transliteration: 'Subḥāna',
        translations: { en: 'Glory be to', ar: 'تنزيه وتقديس', ur: 'پاک ہے', fr: 'Gloire à', de: 'Gepriesen sei' },
      },
      {
        arabic: 'رَبِّيَ',
        transliteration: 'Rabbiya',
        translations: { en: 'my Lord', ar: 'ربي وخالقي', ur: 'میرا پروردگار', fr: 'mon Seigneur', de: 'mein Herr' },
      },
      {
        arabic: 'الْعَظِيمِ',
        transliteration: 'al-‘Aẓīm',
        translations: { en: 'the Magnificent', ar: 'العظيم ذو العظمة', ur: 'عظمت والا', fr: 'le Très Grand', de: 'der Erhabene' },
      },
    ],
    variants: [
      {
        id: 'ruku-variant-subhanaka-allahumma',
        name: {
          en: 'Variant: Subhanaka Allahumma Rabbana (Sahih al-Bukhari 794, Sahih Muslim 484)',
          ar: 'رواية: سبحانك اللهم ربنا وبحمدك اللهم اغفر لي (صحيح البخاري 794)',
          ur: 'روایت: سبحانک اللھم ربنا وبحمدک اللھم اغفر لی (صحیح البخاری 794)',
          fr: 'Variante : Subhanaka Allahumma Rabbana (Sahih al-Bukhari 794)',
          de: 'Variante: Subhanaka Allahumma Rabbana (Sahih al-Bukhari 794)',
        },
        sourceReference: 'Sahih al-Bukhari 794, Sahih Muslim 484',
        arabicText: 'سُبْحَانَكَ اللَّهُمَّ رَبَّنَا وَبِحَمْدِكَ اللَّهُمَّ اغْفِرْ لِي',
        transliteration: 'Subḥānakal-lāhumma Rabbanā wa biḥamdika-llāhummagh-fir lī',
        translations: {
          en: 'Glory be to You, O Allah, our Lord, and praise be to You. O Allah, forgive me.',
          ar: 'تنزيهًا لك يا الله ربنا وبحمدك، اللهم اغفر لي ذنوبي.',
          ur: 'اے اللہ! ہمارے پروردگار، تو پاک ہے اور تیری ہی تعریف ہے۔ اے اللہ! مجھے بخش دے۔',
          fr: 'Gloire à Toi, ô Allah notre Seigneur, et à Toi la louange. Ô Allah, pardonne-moi.',
          de: 'Gepriesen seist Du, o Allah, unser Herr, und Lob sei Dir. O Allah, vergib mir.',
        },
      },
    ],
  },

  // 7. QAWMAH
  {
    id: 'qawmah-1',
    section: 'qawmah',
    order: 11,
    title: {
      en: 'Rising from Ruku (Sami\'Allahu liman hamidah)',
      ar: 'الاعتدال من الركوع - سمع الله لمن حمده',
      ur: 'قومہ - سمع الله لمن حمده',
      fr: 'Redressement du Ruku (Sami\'Allahu liman hamidah)',
      de: 'Aufrichten aus dem Ruku (Sami\'Allahu liman hamidah)',
    },
    sourceReference: 'Sahih al-Bukhari 789, Sahih Muslim 404',
    primaryArabic: 'سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ ۞ رَبَّنَا وَلَكَ الْحَمْدُ',
    primaryTransliteration: 'Sami‘Allāhu liman ḥamidah. Rabbanā wa lakal-ḥamd',
    primaryTranslations: {
      en: 'Allah hears whoever praises Him. Our Lord, and to You belongs all praise.',
      ar: 'استجاب الله وتقبل ممن حمده وأثنى عليه. ربنا ولك الحمد حمداً كثيراً.',
      ur: 'اللہ نے اس کی سن لی جس نے اس کی تعریف کی۔ اے ہمارے پروردگار! تمام تعریفیں تیرے ہی لیے ہیں۔',
      fr: 'Allah écoute celui qui Le loue. Ô notre Seigneur, à Toi la louange.',
      de: 'Allah hört den, der Ihn lobt. Unser Herr, Dir gebührt alles Lob.',
    },
    wordBreakdown: [
      {
        arabic: 'سَمِعَ',
        transliteration: 'Sami‘a',
        translations: { en: 'Hears / Accepts', ar: 'سمع واستجاب', ur: 'سن لیا / قبول فرمایا', fr: 'Écoute / Exauce', de: 'Hört / Erhört' },
      },
      {
        arabic: 'اللَّهُ',
        transliteration: 'Allāhu',
        translations: { en: 'Allah', ar: 'الله', ur: 'اللہ نے', fr: 'Allah', de: 'Allah' },
      },
      {
        arabic: 'لِمَنْ',
        transliteration: 'liman',
        translations: { en: 'for whoever', ar: 'من', ur: 'اس کی جو', fr: 'celui qui', de: 'den, der' },
      },
      {
        arabic: 'حَمِدَهُ',
        transliteration: 'ḥamidah',
        translations: { en: 'praises Him', ar: 'حمده وأثنى عليه', ur: 'اس کی تعریف کرتا ہے', fr: 'Le loue', de: 'Ihn lobt' },
      },
      {
        arabic: 'رَبَّنَا',
        transliteration: 'Rabbanā',
        translations: { en: 'Our Lord', ar: 'ربنا وخالقنا', ur: 'اے ہمارے پروردگار', fr: 'Notre Seigneur', de: 'Unser Herr' },
      },
      {
        arabic: 'وَلَكَ',
        transliteration: 'wa laka',
        translations: { en: 'and to You', ar: 'ولك وحدك', ur: 'اور تیرے ہی لیے', fr: 'et à Toi', de: 'und Dir' },
      },
      {
        arabic: 'الْحَمْدُ',
        transliteration: 'al-ḥamd',
        translations: { en: '[belongs] all praise', ar: 'الحمد والشكر', ur: 'تمام تعریفیں ہیں', fr: 'la louange', de: 'alles Lob' },
      },
    ],
    variants: [
      {
        id: 'qawmah-variant-hamdan-kathiran',
        name: {
          en: 'Extended Variant: Hamdan kathiran tayyiban (Sahih al-Bukhari 799)',
          ar: 'رواية: ربنا ولك الحمد حمداً كثيراً طيباً مباركاً فيه (صحيح البخاري 799)',
          ur: 'روایت: ربنا ولك الحمد حمدا کثیرا طیبا مبارکا فیہ (صحیح البخاری 799)',
          fr: 'Variante étendue : Hamdan kathiran tayyiban (Sahih al-Bukhari 799)',
          de: 'Erweiterte Variante: Hamdan kathiran tayyiban (Sahih al-Bukhari 799)',
        },
        sourceReference: 'Sahih al-Bukhari 799',
        arabicText: 'رَبَّنَا وَلَكَ الْحَمْدُ حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ',
        transliteration: 'Rabbanā wa lakal-ḥamdu ḥamdan kathīran ṭayyiban mubārakan fīh',
        translations: {
          en: 'Our Lord, and to You belongs all praise - abundant, pure, and blessed praise.',
          ar: 'ربنا ولك الحمد حمداً كثيراً طيباً مباركاً فيه.',
          ur: 'اے ہمارے پروردگار! اور تیرے ہی لیے تعریفیں ہیں، ایسی تعریفیں جو بہت زیادہ، پاکیزہ اور با برکت ہوں۔',
          fr: 'Notre Seigneur, à Toi la louange, une louange abondante, pure et bénie.',
          de: 'Unser Herr, Dir gebührt alles Lob - reichliches, reines und gesegnetes Lob.',
        },
      },
    ],
  },

  // 8. SUJOOD
  {
    id: 'sujood-1',
    section: 'sujood',
    order: 12,
    title: {
      en: 'Sujood Recitation (Subhana Rabbiyal-A\'la)',
      ar: 'ذكر السجود - سبحان ربي الأعلى',
      ur: 'سجدہ کی تسبیح - سبحان ربی الاعلیٰ',
      fr: 'Sujood (Subhana Rabbiyal-A\'la)',
      de: 'Sujood (Subhana Rabbiyal-A\'la)',
    },
    sourceReference: 'Sahih Muslim 772, Sunan Abi Dawud 871',
    primaryArabic: 'سُبْحَانَ رَبِّيَ الأَعْلَى',
    primaryTransliteration: 'Subḥāna Rabbiyal-A‘lā',
    primaryTranslations: {
      en: 'Glory be to my Lord, the Most High. (Repeated 3 times or more)',
      ar: 'تنزيهًا لربي الأعلى العلي العظيم.',
      ur: 'پاک ہے میرا پروردگار جو سب سے بلند ہے۔ (3 بار یا زائد)',
      fr: 'Gloire à mon Seigneur, le Très-Haut. (Répété 3 fois ou plus)',
      de: 'Gepriesen sei mein Herr, der Höchste. (3 Mal oder mehr wiederholt)',
    },
    wordBreakdown: [
      {
        arabic: 'سُبْحَانَ',
        transliteration: 'Subḥāna',
        translations: { en: 'Glory be to', ar: 'تنزيه وتقديس', ur: 'پاک ہے', fr: 'Gloire à', de: 'Gepriesen sei' },
      },
      {
        arabic: 'رَبِّيَ',
        transliteration: 'Rabbiya',
        translations: { en: 'my Lord', ar: 'ربي', ur: 'میرا پروردگار', fr: 'mon Seigneur', de: 'mein Herr' },
      },
      {
        arabic: 'الأَعْلَى',
        transliteration: 'al-A‘lā',
        translations: { en: 'the Most High', ar: 'الأعلى سبحانه', ur: 'سب سے بلند', fr: 'le Très-Haut', de: 'der Höchste' },
      },
    ],
  },

  // 9. JALSAH
  {
    id: 'jalsah-1',
    section: 'jalsah',
    order: 13,
    title: {
      en: 'Sitting between two Sujoods (Rabbighfir li)',
      ar: 'الدعاء بين السجدتين - رب اغفر لي',
      ur: 'جلسہ کی دعا - رب اغفر لی',
      fr: 'Assise entre deux prosternations (Rabbighfir li)',
      de: 'Sitzen zwischen zwei Niederwerfungen (Rabbighfir li)',
    },
    sourceReference: 'Sunan Ibn Majah 897, Sunan Abi Dawud 874',
    primaryArabic: 'رَبِّ اغْفِرْ لِي، رَبِّ اغْفِرْ لِي',
    primaryTransliteration: 'Rabbigh-fir lī, Rabbigh-fir lī',
    primaryTranslations: {
      en: 'Lord forgive me, Lord forgive me.',
      ar: 'رب اغفر لي ذنوبي، رب اغفر لي.',
      ur: 'اے میرے پروردگار! مجھے بخش دے، اے میرے پروردگار! مجھے بخش دے۔',
      fr: 'Seigneur pardonne-moi, Seigneur pardonne-moi.',
      de: 'Herr vergib mir, Herr vergib mir.',
    },
    variants: [
      {
        id: 'jalsah-variant-extended',
        name: {
          en: 'Extended Variant: Allahummagh-fir li war-hamni (Sunan Abi Dawud 850, Jami` at-Tirmidhi 284)',
          ar: 'رواية: اللهم اغفر لي وارحمني واهدني وعافني وارزقني (سنن أبي داود 850)',
          ur: 'روایت: اللهم اغفر لي وارحمني واهدني وعافني وارزقني (سنن ابی داؤد 850)',
          fr: 'Variante étendue : Allahummagh-fir li war-hamni (Sunan Abi Dawud 850)',
          de: 'Erweiterte Variante: Allahummagh-fir li war-hamni (Sunan Abi Dawud 850)',
        },
        sourceReference: 'Sunan Abi Dawud 850, Jami` at-Tirmidhi 284',
        arabicText: 'اللَّهُمَّ اغْفِرْ لِي، وَارْحَمْنِي، وَاهْدِنِي، وَعَافِنِي، وَارْزُقْنِي',
        transliteration: 'Allāhummagh-fir lī, war-ḥamnī, wah-dinī, wa ‘āfinī, war-zuqnī',
        translations: {
          en: 'O Allah forgive me, have mercy on me, guide me, grant me health/wellbeing, and grant me sustenance.',
          ar: 'اللهم اغفر لي ذنوبي، وارحمني برحمتك، واهدني للحق، وعافني في بدني، وارزقني من فضلك.',
          ur: 'اے اللہ! مجھے بخش دے، مجھ پر رحم فرما، مجھے ہدایت دے، مجھے عافیت دے اور مجھے رزق عطا فرما۔',
          fr: 'Ô Allah pardonne-moi, fais-moi miséricorde, guide-moi, accorde-moi la santé et accorde-moi ma subsistance.',
          de: 'O Allah vergib mir, erbarme Dich meiner, leite mich, gewähre mir Gesundheit und gib mir Versorgung.',
        },
      },
    ],
  },

  // 10. TASHAHHUD
  {
    id: 'tashahhud-1',
    section: 'tashahhud',
    order: 14,
    title: {
      en: 'Tashahhud (Attahiyyatu lillahi)',
      ar: 'التشهد - التحيات لله',
      ur: 'تشہد - التحیات للہ',
      fr: 'Tashahhud (Attahiyyatu lillahi)',
      de: 'Tashahhud (Attahiyyatu lillahi)',
    },
    sourceReference: 'Sahih al-Bukhari 6265, Sahih Muslim 402 (Ibn Mas‘ud narration)',
    primaryArabic: 'التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلاَمُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ',
    primaryTransliteration: 'At-taḥiyyātu lillāhi waṣ-ṣalawātu waṭ-ṭayyibāt. As-salāmu ‘alayka ayyuhan-Nabiyyu wa raḥmatullāhi wa barakātuh. As-salāmu ‘alaynā wa ‘alā ‘ibādillāhiṣ-ṣāliḥīn. Ash-hadu allā ilāha illallāhu wa ash-hadu anna Muḥammadan ‘abduhū wa rasūluh',
    primaryTranslations: {
      en: 'All compliments, prayers, and pure words are due to Allah. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon the righteous servants of Allah. I bear witness that there is no deity except Allah, and I bear witness that Muhammad is His servant and His Messenger.',
      ar: 'جميع التعظيمات والعبادات القولية والبدنية والطيبات من الأعمال كلها لله تعالى. السلام عليك أيها النبي ورحمة الله وبركاته، السلام علينا وعلى عباد الله الصالحين. أشهد أن لا إله إلا الله وأشهد أن محمداً عبده ورسوله.',
      ur: 'تمام قولی، بدنی اور مالی عبادتیں اللہ ہی کے لیے ہیں۔ اے نبی! آپ پر سلامتی ہو اور اللہ کی رحمت اور اس کی برکتیں ہوں۔ ہم پر اور اللہ کے نیک بندوں پر سلامتی ہو۔ میں گواہی دیتا ہوں کہ اللہ کے سوا کوئی معبود نہیں اور میں گواہی دیتا ہوں کہ محمد (صلی اللہ علیہ وسلم) اس کے بندے اور رسول ہیں۔',
      fr: 'Toutes les salutations, les prières et les bonnes œuvres sont pour Allah. Que la paix soit sur toi, ô Prophète, ainsi que la miséricorde d\'Allah et Ses bénédictions. Que la paix soit sur nous et sur les pieux serviteurs d\'Allah. J\'atteste qu\'il n\'y a pas d\'autre divinité qu\'Allah, et j\'atteste que Muhammad est Son serviteur et Son messager.',
      de: 'Alle Ehrerbietungen, Gebete und guten Taten gebühren Allah. Der Friede sei mit dir, o Prophet, und die Barmherzigkeit Allahs und Seine Segnungen. Der Friede sei mit uns und mit den rechtschaffenen Dienern Allahs. Ich bezeuge, dass es keinen Gott außer Allah gibt, und ich bezeuge, dass Muhammad Sein Diener und Sein Gesandter ist.',
    },
    wordBreakdown: [
      {
        arabic: 'التَّحِيَّاتُ',
        transliteration: 'At-Taḥiyyātu',
        translations: { en: 'All compliments / greetings', ar: 'التحيات والتعظيمات', ur: 'تمام تعظیمات', fr: 'Toutes les salutations', de: 'Alle Ehrerbietungen' },
      },
      {
        arabic: 'لِلَّهِ',
        transliteration: 'lillāhi',
        translations: { en: 'are for Allah', ar: 'لله تعالى', ur: 'اللہ کے لیے ہیں', fr: 'sont pour Allah', de: 'gebühren Allah' },
      },
      {
        arabic: 'وَالصَّلَوَاتُ',
        transliteration: 'waṣ-ṣalawātu',
        translations: { en: 'and prayers', ar: 'والصلوات والعبادات', ur: 'اور تمام نمازیں', fr: 'et les prières', de: 'und Gebete' },
      },
      {
        arabic: 'وَالطَّيِّبَاتُ',
        transliteration: 'waṭ-ṭayyibātu',
        translations: { en: 'and pure deeds', ar: 'والأعمال الطيبة', ur: 'اور پاکیزہ باتیں', fr: 'et les bonnes œuvres', de: 'und guten Taten' },
      },
    ],
    variants: [
      {
        id: 'tashahhud-variant-ibn-abbas',
        name: {
          en: 'Variant: Tashahhud of Ibn \'Abbas (Sahih Muslim 403)',
          ar: 'رواية: تشهد ابن عباس - التحيات المباركات الصلوات الطيبات لله (صحيح مسلم 403)',
          ur: 'روایت: تشہد ابن عباس - التحيات المباركات الصلوات الطيبات لله (صحیح مسلم 403)',
          fr: 'Variante : Tashahhud de Ibn \'Abbas (Sahih Muslim 403)',
          de: 'Variante: Tashahhud von Ibn \'Abbas (Sahih Muslim 403)',
        },
        sourceReference: 'Sahih Muslim 403',
        arabicText: 'التَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ لِلَّهِ، السَّلاَمُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ',
        transliteration: 'At-taḥiyyātul-mubārakātuṣ-ṣalawātuṭ-ṭayyibātu lillāh. As-salāmu ‘alayka ayyuhan-Nabiyyu wa raḥmatullāhi wa barakātuh. As-salāmu ‘alaynā wa ‘alā ‘ibādillāhiṣ-ṣāliḥīn. Ash-hadu allā ilāha illallāhu wa ash-hadu anna Muḥammadan rasūlullāh',
        translations: {
          en: 'All blessed compliments, prayers, and pure deeds are for Allah. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon the righteous servants of Allah. I bear witness that there is no deity except Allah, and I bear witness that Muhammad is the Messenger of Allah.',
          ar: 'التحيات المباركات الصلوات الطيبات لله. السلام عليك أيها النبي ورحمة الله وبركاته، السلام علينا وعلى عباد الله الصالحين. أشهد أن لا إله إلا الله وأشهد أن محمداً رسول الله.',
          ur: 'تمام مبارک تعظیمات، نمازیں اور پاکیزہ باتیں اللہ کے لیے ہیں۔ اے نبی! آپ پر سلامتی ہو اور اللہ کی رحمت اور برکتیں۔ ہم پر اور اللہ کے نیک بندوں پر سلامتی ہو۔ میں گواہی دیتا ہوں کہ اللہ کے سوا کوئی معبود نہیں اور محمد اللہ کے رسول ہیں۔',
          fr: 'Toutes les salutations bénies, les prières et les bonnes œuvres sont pour Allah. Que la paix soit sur toi, ô Prophète, ainsi que la miséricorde d\'Allah et Ses bénédictions. Que la paix soit sur nous et sur les pieux serviteurs d\'Allah. J\'atteste qu\'il n\'y a pas d\'autre divinité qu\'Allah, et j\'atteste que Muhammad est le messager d\'Allah.',
          de: 'Alle gesegneten Ehrerbietungen, Gebete und guten Taten gebühren Allah. Der Friede sei mit dir, o Prophet, und die Barmherzigkeit Allahs und Seine Segnungen. Der Friede sei mit uns und mit den rechtschaffenen Dienern Allahs. Ich bezeuge, dass es keinen Gott außer Allah gibt, und ich bezeuge, dass Muhammad der Gesandte Allahs ist.',
        },
      },
    ],
  },

  // 11. DUROOD IBRAHIM
  {
    id: 'durood-1',
    section: 'durood',
    order: 15,
    title: {
      en: 'Durood Ibrahim (Salawat upon the Prophet)',
      ar: 'الصلاة الإبراهيمية',
      ur: 'درودِ ابراہیمی',
      fr: 'Durood Ibrahim (Salawat sur le Prophète)',
      de: 'Durood Ibrahim (Salawat auf den Propheten)',
    },
    sourceReference: 'Sahih al-Bukhari 3370, Sahih Muslim 406',
    primaryArabic: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ، اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ',
    primaryTransliteration: 'Allāhumma ṣalli ‘alā Muḥammadin wa ‘alā āli Muḥammadin kamā ṣallayta ‘alā Ibrāhīma wa ‘alā āli Ibrāhīm, innaka Ḥamīdun Majīd. Allāhumma bārik ‘alā Muḥammadin wa ‘alā āli Muḥammadin kamā bārakta ‘alā Ibrāhīma wa ‘alā āli Ibrāhīm, innaka Ḥamīdun Majīd',
    primaryTranslations: {
      en: 'O Allah, send peace and blessings upon Muhammad and upon the family of Muhammad, as You sent blessings upon Ibrahim and upon the family of Ibrahim. Indeed, You are Praiseworthy and Glorious. O Allah, bless Muhammad and the family of Muhammad, as You blessed Ibrahim and the family of Ibrahim. Indeed, You are Praiseworthy and Glorious.',
      ar: 'اللهم صل وسلم على محمد وعلى آل محمد كما صليت على إبراهيم وعلى آل إبراهيم إنك حميد مجيد. اللهم بارك على محمد وعلى آل محمد كما باركت على إبراهيم وعلى آل إبراهيم إنك حميد مجيد.',
      ur: 'اے اللہ! رحمت نازل فرما محمد (صلی اللہ علیہ وسلم) پر اور محمد (صلی اللہ علیہ وسلم) کی آل پر، جیسے تو نے رحمت نازل فرمائی ابراہیم علیہ السلام پر اور ابراہیم علیہ السلام کی آل پر، بے شک تو قابلِ تعریف اور بزرگی والا ہے۔ اے اللہ! برکت نازل فرما محمد (صلی اللہ علیہ وسلم) پر اور محمد (صلی اللہ علیہ وسلم) کی آل پر، جیسے تو نے برکت نازل فرمائی ابراہیم علیہ السلام پر اور ابراہیم علیہ السلام کی آل پر، بے شک تو قابلِ تعریف اور بزرگی والا ہے۔',
      fr: 'Ô Allah, répands Tes bénédictions sur Muhammad et sur la famille de Muhammad comme Tu as répandu Tes bénédictions sur Ibrahim et sur la famille d\'Ibrahim. Tu es en vérité Digne de louange et Glorieux. Ô Allah, bénis Muhammad et la famille de Muhammad comme Tu as béni Ibrahim et la famille d\'Ibrahim. Tu es en vérité Digne de louange et Glorieux.',
      de: 'O Allah, segne Muhammad und die Familie Muhammads, wie Du Ibrahim und die Familie Ibrahims gesegnet hast. Gewiss, Du bist Lobenswerter, Ruhmreicher. O Allah, schenke Segen über Muhammad und die Familie Muhammads, wie Du Ibrahim und der Familie Ibrahims Segen geschenkt hast. Gewiss, Du bist Lobenswerter, Ruhmreicher.',
    },
    wordBreakdown: [
      {
        arabic: 'اللَّهُمَّ',
        transliteration: 'Allāhumma',
        translations: { en: 'O Allah', ar: 'يا الله', ur: 'اے اللہ', fr: 'Ô Allah', de: 'O Allah' },
      },
      {
        arabic: 'صَلِّ',
        transliteration: 'Ṣalli',
        translations: { en: 'send blessings / peace', ar: 'صلِّ وأنزل الرحمة', ur: 'رحمت نازل فرما', fr: 'répands Tes bénédictions', de: 'segne' },
      },
      {
        arabic: 'عَلَى',
        transliteration: '‘alā',
        translations: { en: 'upon', ar: 'على', ur: 'پر', fr: 'sur', de: 'auf' },
      },
      {
        arabic: 'مُحَمَّدٍ',
        transliteration: 'Muḥammadin',
        translations: { en: 'Muhammad', ar: 'محمد صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ', ur: 'محمد (صلی اللہ علیہ وسلم)', fr: 'Muhammad', de: 'Muhammad' },
      },
      {
        arabic: 'إِنَّكَ',
        transliteration: 'innaka',
        translations: { en: 'indeed You are', ar: 'إنك سبحانك', ur: 'بے شک تو ہی ہے', fr: 'Tu es en vérité', de: 'Gewiss, Du bist' },
      },
      {
        arabic: 'حَمِيدٌ',
        transliteration: 'Ḥamīdun',
        translations: { en: 'Praiseworthy', ar: 'حميد محمود', ur: 'قابلِ تعریف', fr: 'Digne de louange', de: 'Lobenswerter' },
      },
      {
        arabic: 'مَجِيدٌ',
        transliteration: 'Majīd',
        translations: { en: 'Glorious', ar: 'مجيد ذو المجد', ur: 'بزرگی والا', fr: 'Glorieux', de: 'Ruhmreicher' },
      },
    ],
  },

  // 12. CLOSING DUA
  {
    id: 'closing-dua-1',
    section: 'closing_dua',
    order: 16,
    title: {
      en: 'Dua before Taslim (Seeking Refuge from 4 Trials)',
      ar: 'الدعاء قبل التسليم - الاستعاذة من الأربع',
      ur: 'سلام سے پہلے کی دعا - چار باتوں سے پناہ',
      fr: 'Invocation avant le Taslim (Les 4 épreuves)',
      de: 'Bittgebet vor dem Taslim (Schutz vor 4 Prüfungen)',
    },
    sourceReference: 'Sahih al-Bukhari 1377, Sahih Muslim 588',
    primaryArabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ جَهَنَّمَ، وَمِنْ عَذَابِ الْقَبْرِ، وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ، وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ',
    primaryTransliteration: 'Allāhumma innī a‘ūdhu bika min ‘adhābi jahannama, wa min ‘adhābil-qabri, wa min fitnatil-maḥyā wal-mamāti, wa min sharri fitnatil-masīḥid-dajjāl',
    primaryTranslations: {
      en: 'O Allah, I seek refuge in You from the punishment of Hellfire, from the punishment of the grave, from the trials of life and death, and from the evil trial of the False Messiah (Dajjal).',
      ar: 'اللهم إني أعوذ بك من عذاب جهنم، ومن عذاب القبر، ومن فتنة المحيا والممات، ومن شر فتنة المسيح الدجال.',
      ur: 'اے اللہ! میں تیری پناہ مانگتا ہوں جہنم کے عذاب سے، قبر کے عذاب سے، زندگی اور موت کی آزمائشوں سے، اور مسیح دجال کے فتنے کے شر سے۔',
      fr: 'Ô Allah, je cherche refuge auprès de Toi contre le châtiment de l\'Enfer, contre le châtiment de la tombe, contre les épreuves de la vie et de la mort, et contre le mal de l\'épreuve de l\'Antéchrist.',
      de: 'O Allah, ich suche Zuflucht bei Dir vor der Strafe der Hölle, vor der Strafe des Grabes, vor den Prüfungen des Lebens und des Todes und vor dem Übel der Prüfung des falschen Messias.',
    },
    variants: [
      {
        id: 'closing-dua-rabbana-atina',
        name: {
          en: 'Variant: Rabbana atina fid-dunya hasanah (Surah Al-Baqarah 2:201, Sahih al-Bukhari 6389)',
          ar: 'رواية: ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار (صحيح البخاري 6389)',
          ur: 'روایت: ربنا آتنا فی الدنیا حسنة وفی الآخرة حسنة وقنا عذاب النار (صحیح البخاری 6389)',
          fr: 'Variante : Rabbana atina fid-dunya hasanah (Sahih al-Bukhari 6389)',
          de: 'Variante: Rabbana atina fid-dunya hasanah (Sahih al-Bukhari 6389)',
        },
        sourceReference: 'Surah Al-Baqarah 2:201, Sahih al-Bukhari 6389',
        arabicText: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
        transliteration: 'Rabbanā ātinā fid-dunyā ḥasanatan wa fil-ākhirati ḥasanatan wa qinā ‘adhāban-nār',
        translations: {
          en: 'Our Lord, grant us good in this world and good in the Hereafter and protect us from the punishment of the Fire.',
          ar: 'ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار.',
          ur: 'اے ہمارے پروردگار! ہمیں دنیا میں بھی بھلائی عطا فرما اور آخرت میں بھی بھلائی عطا فرما اور ہمیں آگ کے عذاب سے بچا لے۔',
          fr: 'Notre Seigneur, meubles-nous de bienfaits ici-bas et dans l\'au-delà et protège-nous du châtiment du Feu.',
          de: 'Unser Herr, gib uns im Diesseits Gutes und im Jenseits Gutes und bewahre uns vor der Strafe des Feuers.',
        },
      },
    ],
  },

  // 13. QUNUT
  {
    id: 'qunut-1',
    section: 'qunut',
    order: 17,
    title: {
      en: 'Dua al-Qunut (Witr Supplication)',
      ar: 'دعاء القنوت - اللهم اهدني فيمن هديت',
      ur: 'دعائے قنوت - اللهم اهدنی فيمن هديت',
      fr: 'Dua al-Qunut (Invocation du Witr)',
      de: 'Dua al-Qunut (Witr Bittgebet)',
    },
    sourceReference: 'Sunan Abi Dawud 1425, Jami` at-Tirmidhi 464 (Al-Hasan ibn \'Ali narration)',
    primaryArabic: 'اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ، وَعَافِنِي فِيمَنْ عَافَيْتَ، وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ، وَبَارِكْ لِي فِيمَا أَعْطَيْتَ، وَقِنِي شَرَّ مَا قَضَيْتَ، فَإِنَّكَ تَقْضِي وَلاَ يُقْضَى عَلَيْكَ، إِنَّهُ لاَ يَذِلُّ مَنْ وَالَيْتَ، وَلاَ يَعِزُّ مَنْ عَادَيْتَ، تَبَارَكْتَ رَبَّنَا وَتَعَالَيْتَ',
    primaryTransliteration: 'Allāhummah-dinī fīman hadayt, wa ‘āfinī fīman ‘āfayt, wa tawallanī fīman tawallayt, wa bārik lī fīmā a‘ṭayt, wa qinī sharra mā qaḍayt, fa innaka taqḍī wa lā yuqḍā ‘alayk, innahū lā yadhillu man wālayt, wa lā ya‘izzu man ‘ādayt, tabārakta Rabbanā wa ta‘ālayt',
    primaryTranslations: {
      en: 'O Allah, guide me among those You have guided, grant me wellbeing among those You have granted wellbeing, take me into Your care among those You have taken into Your care, bless for me in what You have given, and save me from the evil of what You have decreed. For indeed You decree and none can decree over You. Indeed, he whom You ally with is never humiliated, and he whom You oppose is never honored. Blessed are You, our Lord, and Exalted.',
      ar: 'اللهم اهدني فيمن هديت، وعافني فيمن عافيت، وتولني فيمن توليت، وبارك لي فيما أعطيت، وقني شر ما قضيت، فإنك تقضي ولا يقضى عليك، إنه لا يذل من واليت، ولا يعز من عاديت، تباركت ربنا وتعاليت.',
      ur: 'اے اللہ! مجھے ہدایت دے ان لوگوں میں جنہیں تو نے ہدایت دی، مجھے عافیت دے ان لوگوں میں جنہیں تو نے عافیت دی، میری سرپرستی فرما ان میں جن کی تو نے سرپرستی کی، مجھے اس چیز میں برکت دے جو تو نے عطا کی، اور مجھے اس برائی سے بچا جو تو نے مقدر کی۔ بے شک تو ہی فیصلہ کرتا ہے اور تیرے خلاف فیصلہ نہیں کیا جا سکتا۔ بے شک وہ شخص کبھی ذلیل نہیں ہوتا جسے تو دوست بنائے، اور وہ شخص کبھی عزت نہیں پاتا جس سے تو دشمنی کرے۔ اے ہمارے پروردگار! تو با برکت اور بلند و برتر ہے۔',
      fr: 'Ô Allah, guide-moi parmi ceux que Tu as guidés, préserve-moi parmi ceux que Tu as préservés, prends-moi en charge parmi ceux que Tu as pris en charge, bénis pour moi ce que Tu m\'as accordé, et protège-moi du mal de ce que Tu as décrété. Car c\'est Toi qui décrètes et nul ne décrète contre Toi. En vérité, ne sera jamais humilié celui que Tu prends pour allié, et ne sera jamais honoré celui que Tu prends pour ennemi. Béni sois-Tu, notre Seigneur, et Exalté.',
      de: 'O Allah, leite mich unter denen, die Du geleitet hast, gewähre mir Gesundheit unter denen, denen Du Gesundheit gewährt hast, nimm mich in Deine Fürsorge unter denen, die Du in Deine Fürsorge genommen hast, segne für mich, was Du gegeben hast, und bewahre mich vor dem Übel dessen, was Du bestimmt hast. Denn Du bestimmst und niemand bestimmt über Dich. Wahrlich, niemals wird der erniedrigt, den Du als Verbündeten annimmst, und niemals wird der geehrt, den Du als Feind nimmst. Segensreich bist Du, unser Herr, und Erhaben.',
    },
    wordBreakdown: [
      {
        arabic: 'اللَّهُمَّ',
        transliteration: 'Allāhumma',
        translations: { en: 'O Allah', ar: 'يا الله', ur: 'اے اللہ', fr: 'Ô Allah', de: 'O Allah' },
      },
      {
        arabic: 'اهْدِنِي',
        transliteration: 'ihdinī',
        translations: { en: 'guide me', ar: 'اهدني للحق', ur: 'مجھے ہدایت دے', fr: 'guide-moi', de: 'leite mich' },
      },
      {
        arabic: 'فِيمَنْ',
        transliteration: 'fīman',
        translations: { en: 'among those', ar: 'فيمن', ur: 'ان لوگوں میں', fr: 'parmi ceux', de: 'unter denen' },
      },
      {
        arabic: 'هَدَيْتَ',
        transliteration: 'hadayt',
        translations: { en: 'You guided', ar: 'هديتهم', ur: 'جنہیں تو نے ہدایت دی', fr: 'que Tu as guidés', de: 'die Du geleitet hast' },
      },
      {
        arabic: 'وَقِنِي',
        transliteration: 'wa qinī',
        translations: { en: 'and save me from', ar: 'وقني واحفظني', ur: 'اور مجھے بچا', fr: 'et protège-moi de', de: 'und bewahre mich vor' },
      },
      {
        arabic: 'شَرَّ',
        transliteration: 'sharra',
        translations: { en: 'the evil of', ar: 'شر', ur: 'برائی سے', fr: 'le mal de', de: 'dem Übel' },
      },
      {
        arabic: 'مَا قَضَيْتَ',
        transliteration: 'mā qaḍayt',
        translations: { en: 'what You decreed', ar: 'ما قضيت وقدرت', ur: 'جو تو نے مقدر کیا', fr: 'ce que Tu as décrété', de: 'dessen, was Du bestimmt hast' },
      },
    ],
    variants: [
      {
        id: 'qunut-variant-allahumma-inna-nastainuka',
        name: {
          en: 'Variant: Allahumma inna nastainuka (Al-Sunan al-Kubra of Al-Bayhaqi 2/211)',
          ar: 'رواية: اللهم إنا نستعينك ونستغفرك ونثني عليك الخير (السنن الكبرى للبيهقي 2/211)',
          ur: 'روایت: اللهم إنا نستعينك ونستغفرك ونثني عليك الخير (السنن الکبریٰ للبیہقی 2/211)',
          fr: 'Variante : Allahumma inna nastainuka (Al-Bayhaqi 2/211)',
          de: 'Variante: Allahumma inna nastainuka (Al-Bayhaqi 2/211)',
        },
        sourceReference: 'Al-Sunan al-Kubra of Al-Bayhaqi 2/211',
        arabicText: 'اللَّهُمَّ إِنَّا نَسْتَعِينُكَ وَنَسْتَغْفِرُكَ وَنُثْنِي عَلَيْكَ الْخَيْرَ وَلاَ نَكْفُرُكَ، وَنَخْلَعُ وَنَتْرُكُ مَنْ يَفْجُرُكَ، اللَّهُمَّ إِيَّاكَ نَعْبُدُ وَلَكَ نُصَلِّي وَنَسْجُدُ وَإِلَيْكَ نَسْعَى وَنَحْفِدُ، نَرْجُو رَحْمَتَكَ وَنَخْشَى عَذَابَكَ إِنَّ عَذَابَكَ بِالْكُفَّارِ مُلْحَقٌ',
        transliteration: 'Allāhumma innā nasta‘īnuka wa nastaghfiruka wa nuthnī ‘alaykal-khayra wa lā nakfuruka, wa nakhla‘u wa natruku man yafjuruk. Allāhumma iyyāka na‘budu wa laka nuṣallī wa nasjudu wa ilayka nas‘ā wa naḥfid, narjū raḥmataka wa nakhshā ‘adhābaka inna ‘adhābaka bil-kuffāri mulḥaq',
        translations: {
          en: 'O Allah, we seek Your help and we seek Your forgiveness, and we praise You for good and are not ungrateful to You, and we disown and leave whoever disobeys You. O Allah, You alone we worship, and to You we pray and prostrate, and to You we strive and serve. We hope for Your mercy and fear Your punishment; indeed, Your punishment will overtake the disbelievers.',
          ar: 'اللهم إنا نستعينك ونستغفرك ونثني عليك الخير ولا نكفرك، ونخلع ونترك من يفجرك، اللهم إياك نعبد ولك نصلي ونسجد وإليك نسعى ونحفد، نرجو رحمتك ونخشى عذابك إن عذابك بالكفار ملحق.',
          ur: 'اے اللہ! ہم تجھ سے مدد مانگتے ہیں اور تجھ سے مغفرت چاہتے ہیں، تیری اچھی تعریف کرتے ہیں اور تیری ناشکری نہیں کرتے، اور جو تیری نافرمانی کرے اسے چھوڑتے اور اس سے علیحدگی اختیار کرتے ہیں۔ اے اللہ! ہم تیری ہی عبادت کرتے ہیں، تیرے ہی لیے نماز پڑھتے اور سجدہ کرتے ہیں، اور تیری ہی طرف دوڑتے اور خدمت کرتے ہیں، تیری رحمت کے امیدوار ہیں اور تیرے عذاب سے ڈرتے ہیں، بے شک تیرا عذاب کافروں کو پہنچنے والا ہے۔',
          fr: 'Ô Allah, nous implorons Ton secours et Ton pardon, nous Te louons pour tout bien et ne sommes pas ingrats envers Toi. Nous désavouons et délaissons quiconque Te désobéit. Ô Allah, c\'est Toi seul que nous adorons, pour Toi que nous prions et nous prosternons, et vers Toi que nous accourons. Nous espérons Ta miséricorde et craignons Ton châtiment ; en vérité, Ton châtiment atteindra les mécréants.',
          de: 'O Allah, wir bitten Dich um Hilfe und Vergebung, wir loben Dich für das Gute und sind Dir nicht undankbar, und wir sagen uns los und verlassen jeden, der Dir ungehorsam ist. O Allah, Dir allein dienen wir, für Dich beten und niederwerfen wir uns, zu Dir eilen und dienen wir. Wir hoffen auf Deine Barmherzigkeit und fürchten Deine Strafe; wahrlich, Deine Strafe wird die Ungläubigen einholen.',
        },
      },
    ],
  },
];
