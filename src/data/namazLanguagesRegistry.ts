import type { NamazLanguage, LanguageCode } from '../i18n/namazTypes';

/**
 * Registry of 140+ languages supported by Sidqly Namaz Translator.
 * Tier 1 languages (en, ar, ur, fr, de) are statically verified.
 * Extended Tier 2 languages load translation resources dynamically on demand.
 */
export const NAMAZ_LANGUAGES_REGISTRY: NamazLanguage[] = [
  // Tier 1 — Verified Static Core Languages
  { code: 'en', name: 'English', nativeName: 'English', direction: 'ltr', script: 'Latin', verified: true, isDynamic: false, region: 'Global' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', direction: 'rtl', script: 'Arabic', verified: true, isDynamic: false, region: 'Middle East & North Africa' },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو', direction: 'rtl', script: 'Nastaliq / Arabic', verified: true, isDynamic: false, region: 'South Asia' },
  { code: 'fr', name: 'French', nativeName: 'Français', direction: 'ltr', script: 'Latin', verified: true, isDynamic: false, region: 'Europe & Africa' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', direction: 'ltr', script: 'Latin', verified: true, isDynamic: false, region: 'Europe' },

  // Tier 2 — Extended Dynamic Languages (135+ entries)
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Middle East & Europe' },
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Southeast Asia' },
  { code: 'ms', name: 'Malay', nativeName: 'Bahasa Melayu', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Southeast Asia' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Americas & Europe' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Americas & Europe' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Europe' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', direction: 'ltr', script: 'Cyrillic', verified: false, isDynamic: true, region: 'Eurasia' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', direction: 'ltr', script: 'Bengali', verified: false, isDynamic: true, region: 'South Asia' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', direction: 'ltr', script: 'Devanagari', verified: false, isDynamic: true, region: 'South Asia' },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ / پنجابی', direction: 'ltr', script: 'Gurmukhi / Shahmukhi', verified: false, isDynamic: true, region: 'South Asia' },
  { code: 'fa', name: 'Persian (Farsi)', nativeName: 'فارسی', direction: 'rtl', script: 'Perso-Arabic', verified: false, isDynamic: true, region: 'Middle East' },
  { code: 'ps', name: 'Pashto', nativeName: 'پښتو', direction: 'rtl', script: 'Pashto-Arabic', verified: false, isDynamic: true, region: 'South Asia & Middle East' },
  { code: 'sd', name: 'Sindhi', nativeName: 'سنڌي', direction: 'rtl', script: 'Sindhi-Arabic', verified: false, isDynamic: true, region: 'South Asia' },
  { code: 'ku', name: 'Kurdish (Kurmanji)', nativeName: 'Kurdî', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Middle East' },
  { code: 'ckb', name: 'Kurdish (Sorani)', nativeName: 'کوردیی ناوەندی', direction: 'rtl', script: 'Arabic', verified: false, isDynamic: true, region: 'Middle East' },
  { code: 'ug', name: 'Uyghur', nativeName: 'ئۇيغۇرچە', direction: 'rtl', script: 'Uyghur-Arabic', verified: false, isDynamic: true, region: 'Central Asia' },
  { code: 'he', name: 'Hebrew', nativeName: 'עבריت', direction: 'rtl', script: 'Hebrew', verified: false, isDynamic: true, region: 'Middle East' },
  { code: 'so', name: 'Somali', nativeName: 'Soomaali', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'East Africa' },
  { code: 'sw', name: 'Swahili', nativeName: 'Kiswahili', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'East Africa' },
  { code: 'ha', name: 'Hausa', nativeName: 'Hausa', direction: 'ltr', script: 'Latin / Ajami', verified: false, isDynamic: true, region: 'West Africa' },
  { code: 'yo', name: 'Yoruba', nativeName: 'Èdè Yorùbá', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'West Africa' },
  { code: 'ig', name: 'Igbo', nativeName: 'Asụsụ Igbo', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'West Africa' },
  { code: 'om', name: 'Oromo', nativeName: 'Afaan Oromoo', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'East Africa' },
  { code: 'am', name: 'Amharic', nativeName: 'አማርኛ', direction: 'ltr', script: 'Ge\'ez', verified: false, isDynamic: true, region: 'East Africa' },
  { code: 'ti', name: 'Tigrinya', nativeName: 'ትግርኛ', direction: 'ltr', script: 'Ge\'ez', verified: false, isDynamic: true, region: 'East Africa' },
  { code: 'uz', name: 'Uzbek', nativeName: 'O‘zbekcha / Ўзбекча', direction: 'ltr', script: 'Latin / Cyrillic', verified: false, isDynamic: true, region: 'Central Asia' },
  { code: 'kk', name: 'Kazakh', nativeName: 'Қазақ тілі', direction: 'ltr', script: 'Cyrillic', verified: false, isDynamic: true, region: 'Central Asia' },
  { code: 'ky', name: 'Kyrgyz', nativeName: 'Кыргызча', direction: 'ltr', script: 'Cyrillic', verified: false, isDynamic: true, region: 'Central Asia' },
  { code: 'tg', name: 'Tajik', nativeName: 'Тоҷикӣ', direction: 'ltr', script: 'Cyrillic', verified: false, isDynamic: true, region: 'Central Asia' },
  { code: 'tk', name: 'Turkmen', nativeName: 'Türkmen dili', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Central Asia' },
  { code: 'az', name: 'Azerbaijani', nativeName: 'Azərbaycan dili', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Caucasus & Middle East' },
  { code: 'tt', name: 'Tatar', nativeName: 'Татар теле', direction: 'ltr', script: 'Cyrillic', verified: false, isDynamic: true, region: 'Eurasia' },
  { code: 'ce', name: 'Chechen', nativeName: 'Нохчийн мотт', direction: 'ltr', script: 'Cyrillic', verified: false, isDynamic: true, region: 'Caucasus' },
  { code: 'ba', name: 'Bashkir', nativeName: 'Башҡорт теле', direction: 'ltr', script: 'Cyrillic', verified: false, isDynamic: true, region: 'Eurasia' },
  { code: 'sq', name: 'Albanian', nativeName: 'Shqip', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Europe' },
  { code: 'bs', name: 'Bosnian', nativeName: 'Bosanski', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Europe' },
  { code: 'hr', name: 'Croatian', nativeName: 'Hrvatski', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Europe' },
  { code: 'sr', name: 'Serbian', nativeName: 'Српски / Srpski', direction: 'ltr', script: 'Cyrillic / Latin', verified: false, isDynamic: true, region: 'Europe' },
  { code: 'sl', name: 'Slovenian', nativeName: 'Slovenščina', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Europe' },
  { code: 'mk', name: 'Macedonian', nativeName: 'Македонски', direction: 'ltr', script: 'Cyrillic', verified: false, isDynamic: true, region: 'Europe' },
  { code: 'bg', name: 'Bulgarian', nativeName: 'Български', direction: 'ltr', script: 'Cyrillic', verified: false, isDynamic: true, region: 'Europe' },
  { code: 'ro', name: 'Romanian', nativeName: 'Română', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Europe' },
  { code: 'hu', name: 'Hungarian', nativeName: 'Magyar', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Europe' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Europe' },
  { code: 'cs', name: 'Czech', nativeName: 'Čeština', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Europe' },
  { code: 'sk', name: 'Slovak', nativeName: 'Slovenčina', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Europe' },
  { code: 'uk', name: 'Ukrainian', nativeName: 'Українська', direction: 'ltr', script: 'Cyrillic', verified: false, isDynamic: true, region: 'Europe' },
  { code: 'be', name: 'Belarusian', nativeName: 'Беларуская', direction: 'ltr', script: 'Cyrillic', verified: false, isDynamic: true, region: 'Europe' },
  { code: 'lt', name: 'Lithuanian', nativeName: 'Lietuvių', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Europe' },
  { code: 'lv', name: 'Latvian', nativeName: 'Latviešu', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Europe' },
  { code: 'et', name: 'Estonian', nativeName: 'Eesti', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Europe' },
  { code: 'fi', name: 'Finnish', nativeName: 'Suomi', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Europe' },
  { code: 'sv', name: 'Swedish', nativeName: 'Svenska', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Europe' },
  { code: 'no', name: 'Norwegian', nativeName: 'Norsk', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Europe' },
  { code: 'da', name: 'Danish', nativeName: 'Dansk', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Europe' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Europe' },
  { code: 'el', name: 'Greek', nativeName: 'Ελληνικά', direction: 'ltr', script: 'Greek', verified: false, isDynamic: true, region: 'Europe' },
  { code: 'ka', name: 'Georgian', nativeName: 'ქართული', direction: 'ltr', script: 'Georgian', verified: false, isDynamic: true, region: 'Caucasus' },
  { code: 'hy', name: 'Armenian', nativeName: 'Հայերեն', direction: 'ltr', script: 'Armenian', verified: false, isDynamic: true, region: 'Caucasus' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', direction: 'ltr', script: 'Tamil', verified: false, isDynamic: true, region: 'South Asia' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', direction: 'ltr', script: 'Telugu', verified: false, isDynamic: true, region: 'South Asia' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', direction: 'ltr', script: 'Kannada', verified: false, isDynamic: true, region: 'South Asia' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', direction: 'ltr', script: 'Malayalam', verified: false, isDynamic: true, region: 'South Asia' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', direction: 'ltr', script: 'Devanagari', verified: false, isDynamic: true, region: 'South Asia' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', direction: 'ltr', script: 'Gujarati', verified: false, isDynamic: true, region: 'South Asia' },
  { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ', direction: 'ltr', script: 'Odia', verified: false, isDynamic: true, region: 'South Asia' },
  { code: 'as', name: 'Assamese', nativeName: 'অসমীয়া', direction: 'ltr', script: 'Bengali-Assamese', verified: false, isDynamic: true, region: 'South Asia' },
  { code: 'ne', name: 'Nepali', nativeName: 'नेपाली', direction: 'ltr', script: 'Devanagari', verified: false, isDynamic: true, region: 'South Asia' },
  { code: 'si', name: 'Sinhala', nativeName: 'සිංහල', direction: 'ltr', script: 'Sinhala', verified: false, isDynamic: true, region: 'South Asia' },
  { code: 'my', name: 'Burmese', nativeName: 'မြန်မာဘာသာ', direction: 'ltr', script: 'Myanmar', verified: false, isDynamic: true, region: 'Southeast Asia' },
  { code: 'th', name: 'Thai', nativeName: 'ไทย', direction: 'ltr', script: 'Thai', verified: false, isDynamic: true, region: 'Southeast Asia' },
  { code: 'lo', name: 'Lao', nativeName: 'ລາວ', direction: 'ltr', script: 'Lao', verified: false, isDynamic: true, region: 'Southeast Asia' },
  { code: 'km', name: 'Khmer', nativeName: 'ភាសាខ្មែរ', direction: 'ltr', script: 'Khmer', verified: false, isDynamic: true, region: 'Southeast Asia' },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Southeast Asia' },
  { code: 'tl', name: 'Filipino / Tagalog', nativeName: 'Wikang Tagalog', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Southeast Asia' },
  { code: 'jv', name: 'Javanese', nativeName: 'Basa Jawa', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Southeast Asia' },
  { code: 'su', name: 'Sundanese', nativeName: 'Basa Sunda', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Southeast Asia' },
  { code: 'ace', name: 'Acehnese', nativeName: 'Bahasa Acèh', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Southeast Asia' },
  { code: 'min', name: 'Minangkabau', nativeName: 'Baso Minangkabau', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Southeast Asia' },
  { code: 'bjn', name: 'Banjar', nativeName: 'Bahasa Banjar', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Southeast Asia' },
  { code: 'bug', name: 'Buginese', nativeName: 'Basa Ugi', direction: 'ltr', script: 'Lontara', verified: false, isDynamic: true, region: 'Southeast Asia' },
  { code: 'mg', name: 'Malagasy', nativeName: 'Malagasy', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Africa' },
  { code: 'dv', name: 'Dhivehi (Maldivian)', nativeName: 'ދިވެހި', direction: 'rtl', script: 'Thaana', verified: false, isDynamic: true, region: 'South Asia' },
  { code: 'bal', name: 'Balochi', nativeName: 'بلوچی', direction: 'rtl', script: 'Arabic', verified: false, isDynamic: true, region: 'South Asia & Middle East' },
  { code: 'brh', name: 'Brahui', nativeName: 'براہوئی', direction: 'rtl', script: 'Arabic', verified: false, isDynamic: true, region: 'South Asia' },
  { code: 'ks', name: 'Kashmiri', nativeName: 'کٲشُر', direction: 'rtl', script: 'Arabic', verified: false, isDynamic: true, region: 'South Asia' },
  { code: 'skr', name: 'Saraiki', nativeName: 'سرائیکی', direction: 'rtl', script: 'Arabic', verified: false, isDynamic: true, region: 'South Asia' },
  { code: 'hno', name: 'Hindko', nativeName: 'ہندکو', direction: 'rtl', script: 'Arabic', verified: false, isDynamic: true, region: 'South Asia' },
  { code: 'khw', name: 'Khowar', nativeName: 'کھوار', direction: 'rtl', script: 'Arabic', verified: false, isDynamic: true, region: 'South Asia' },
  { code: 'bft', name: 'Balti', nativeName: 'بلتی', direction: 'rtl', script: 'Arabic', verified: false, isDynamic: true, region: 'South Asia' },
  { code: 'mwr', name: 'Marwari', nativeName: 'मारवाड़ी', direction: 'ltr', script: 'Devanagari', verified: false, isDynamic: true, region: 'South Asia' },
  { code: 'raj', name: 'Rajasthani', nativeName: 'राजस्थानी', direction: 'ltr', script: 'Devanagari', verified: false, isDynamic: true, region: 'South Asia' },
  { code: 'bho', name: 'Bhojpuri', nativeName: 'भोजपुरी', direction: 'ltr', script: 'Devanagari', verified: false, isDynamic: true, region: 'South Asia' },
  { code: 'mai', name: 'Maithili', nativeName: 'मैथिली', direction: 'ltr', script: 'Devanagari', verified: false, isDynamic: true, region: 'South Asia' },
  { code: 'mag', name: 'Magahi', nativeName: 'मगही', direction: 'ltr', script: 'Devanagari', verified: false, isDynamic: true, region: 'South Asia' },
  { code: 'doi', name: 'Dogri', nativeName: 'डोगरी', direction: 'ltr', script: 'Devanagari', verified: false, isDynamic: true, region: 'South Asia' },
  { code: 'sat', name: 'Santali', nativeName: 'ᱥᱟᱱᱛᱟᱲᱤ', direction: 'ltr', script: 'Ol Chiki', verified: false, isDynamic: true, region: 'South Asia' },
  { code: 'kok', name: 'Konkani', nativeName: 'கொங்கணி / कोंकणी', direction: 'ltr', script: 'Devanagari', verified: false, isDynamic: true, region: 'South Asia' },
  { code: 'wo', name: 'Wolof', nativeName: 'Wolof', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'West Africa' },
  { code: 'bm', name: 'Bambara', nativeName: 'Bamanankan', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'West Africa' },
  { code: 'ff', name: 'Fulah / Pulaar', nativeName: 'Fulfulde', direction: 'ltr', script: 'Latin / Adlam', verified: false, isDynamic: true, region: 'West Africa' },
  { code: 'mnk', name: 'Mandinka', nativeName: 'Mandingo', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'West Africa' },
  { code: 'sus', name: 'Susu', nativeName: 'Sosoxui', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'West Africa' },
  { code: 'tem', name: 'Temne', nativeName: 'Kthemne', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'West Africa' },
  { code: 'men', name: 'Mende', nativeName: 'Mendē yia', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'West Africa' },
  { code: 'son', name: 'Songhay', nativeName: 'Soŋay', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'West Africa' },
  { code: 'dje', name: 'Zarma', nativeName: 'Zarmaciine', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'West Africa' },
  { code: 'ln', name: 'Lingala', nativeName: 'Lingála', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Central Africa' },
  { code: 'kg', name: 'Kikongo', nativeName: 'Kikongo', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Central Africa' },
  { code: 'lua', name: 'Tshiluba', nativeName: 'Tshiluba', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Central Africa' },
  { code: 'rn', name: 'Kirundi', nativeName: 'Ikirundi', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'East Africa' },
  { code: 'rw', name: 'Kinyarwanda', nativeName: 'Ikinyarwanda', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'East Africa' },
  { code: 'sg', name: 'Sango', nativeName: 'Yângâ tî sängö', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Central Africa' },
  { code: 'st', name: 'Sesotho', nativeName: 'Sesotho', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Southern Africa' },
  { code: 'tn', name: 'Setswana', nativeName: 'Setswana', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Southern Africa' },
  { code: 'nso', name: 'Northern Sotho', nativeName: 'Sesotho sa Leboa', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Southern Africa' },
  { code: 'ts', name: 'Tsonga', nativeName: 'Xitsonga', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Southern Africa' },
  { code: 'ss', name: 'Swati', nativeName: 'SiSwati', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Southern Africa' },
  { code: 've', name: 'Venda', nativeName: 'Tshivenḓa', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Southern Africa' },
  { code: 'zu', name: 'Zulu', nativeName: 'isiZulu', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Southern Africa' },
  { code: 'xh', name: 'Xhosa', nativeName: 'isiXhosa', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Southern Africa' },
  { code: 'af', name: 'Afrikaans', nativeName: 'Afrikaans', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Southern Africa' },
  { code: 'mos', name: 'Mooré', nativeName: 'Mooré', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'West Africa' },
  { code: 'kab', name: 'Kabyle', nativeName: 'Taqbaylit', direction: 'ltr', script: 'Latin / Berber', verified: false, isDynamic: true, region: 'North Africa' },
  { code: 'zgh', name: 'Standard Moroccan Tamazight', nativeName: 'ⵜⴰⵎⴰⵣⵉⵖⵜ', direction: 'ltr', script: 'Tifinagh', verified: false, isDynamic: true, region: 'North Africa' },
  { code: 'rif', name: 'Riffian', nativeName: 'Tarifit', direction: 'ltr', script: 'Latin / Tifinagh', verified: false, isDynamic: true, region: 'North Africa' },
  { code: 'tmh', name: 'Tamasheq (Tuareg)', nativeName: 'تَـمَـشֶ meq', direction: 'rtl', script: 'Tifinagh / Arabic', verified: false, isDynamic: true, region: 'North & West Africa' },
  { code: 'din', name: 'Dinka', nativeName: 'Thuɔŋjäŋ', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'East Africa' },
  { code: 'nus', name: 'Nuer', nativeName: 'Thok Naath', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'East Africa' },
  { code: 'aa', name: 'Afar', nativeName: 'Qafaraf', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'East Africa' },
  { code: 'cja', name: 'Western Cham', nativeName: 'Cham', direction: 'ltr', script: 'Arabic / Cham', verified: false, isDynamic: true, region: 'Southeast Asia' },
  { code: 'rhg', name: 'Rohingya', nativeName: 'Ruáinga', direction: 'rtl', script: 'Hanifi / Arabic', verified: false, isDynamic: true, region: 'South & Southeast Asia' },
  { code: 'haw', name: 'Hawaiian', nativeName: 'ʻŌlelo Hawaiʻi', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Pacific' },
  { code: 'mi', name: 'Maori', nativeName: 'Te Reo Māori', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Pacific' },
  { code: 'sm', name: 'Samoan', nativeName: 'Gagana Samoa', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Pacific' },
  { code: 'to', name: 'Tongan', nativeName: 'Lea Fakatonga', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Pacific' },
  { code: 'fj', name: 'Fijian', nativeName: 'Na Vosa Vakaviti', direction: 'ltr', script: 'Latin', verified: false, isDynamic: true, region: 'Pacific' },
  { code: 'bsk', name: 'Burushaski', nativeName: 'بروشسکی', direction: 'rtl', script: 'Arabic', verified: false, isDynamic: true, region: 'South Asia' },
  { code: 'wbl', name: 'Wakhi', nativeName: 'وخی', direction: 'rtl', script: 'Arabic', verified: false, isDynamic: true, region: 'Central & South Asia' },
  { code: 'scl', name: 'Shina', nativeName: 'شینا', direction: 'rtl', script: 'Arabic', verified: false, isDynamic: true, region: 'South Asia' },
];

/**
 * Quick map lookup for O(1) language retrieval by BCP-47 code.
 */
export const NAMAZ_LANGUAGES_MAP = new Map<LanguageCode, NamazLanguage>(
  NAMAZ_LANGUAGES_REGISTRY.map((lang) => [lang.code, lang])
);

/**
 * Retrieve language metadata by language code.
 */
export function getNamazLanguage(code: LanguageCode): NamazLanguage {
  const normalizedCode = (code || '').toLowerCase().trim();
  const lang = NAMAZ_LANGUAGES_MAP.get(normalizedCode);
  if (lang) return lang;

  // Partial match if subtag exists (e.g., 'fr-FR' -> 'fr')
  const baseCode = normalizedCode.split('-')[0];
  const baseLang = NAMAZ_LANGUAGES_MAP.get(baseCode);
  if (baseLang) return baseLang;

  // Fallback to English
  return NAMAZ_LANGUAGES_MAP.get('en')!;
}

/**
 * Check if a language code uses RTL text direction.
 */
export function isRtlLanguage(code: LanguageCode): boolean {
  const lang = getNamazLanguage(code);
  return lang.direction === 'rtl';
}

/**
 * Filter language registry by search query (matching English name, native name, code, or region).
 */
export function searchNamazLanguages(query: string): NamazLanguage[] {
  const q = query.trim().toLowerCase();
  if (!q) return NAMAZ_LANGUAGES_REGISTRY;

  return NAMAZ_LANGUAGES_REGISTRY.filter(
    (lang) =>
      lang.name.toLowerCase().includes(q) ||
      lang.nativeName.toLowerCase().includes(q) ||
      lang.code.toLowerCase().includes(q) ||
      (lang.region && lang.region.toLowerCase().includes(q)) ||
      (lang.script && lang.script.toLowerCase().includes(q))
  );
}
