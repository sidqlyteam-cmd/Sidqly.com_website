import type { LanguageCode, NamazTranslationPack, NamazItemTranslation } from '../../i18n/namazTypes';
import { getNamazLanguage } from '../namazLanguagesRegistry';

/**
 * Standard authentic localized phrases for core Salah recitations across language families and regions.
 */
interface StandardPhrases {
  takbir: string;
  sana: string;
  taawwudh: string;
  basmalah: string;
  fatihah_v2: string;
  fatihah_v3: string;
  fatihah_v4: string;
  fatihah_v5: string;
  fatihah_v6_7: string;
  ruku: string;
  qawmah: string;
  sujood: string;
  jalsah: string;
  tashahhud: string;
  durood: string;
  closing_dua: string;
  qunut: string;
  sections: {
    takbir: string;
    sana: string;
    taawwudh: string;
    basmalah: string;
    fatihah: string;
    ruku: string;
    qawmah: string;
    sujood: string;
    jalsah: string;
    tashahhud: string;
    durood: string;
    closing_dua: string;
    qunut: string;
  };
}

/**
 * Multi-language dictionaries for major international, regional, and Islamic languages.
 */
const MULTILINGUAL_DICTIONARIES: Record<string, Partial<StandardPhrases>> = {
  // Turkish
  tr: {
    takbir: 'Allah en büyüktür.',
    sana: 'Seni her türlü noksanlıktan tenzih ederim ey Allah\'ım! Seni hamd ile tesbih ederim. Senin adın mübarektir, şanın yücedir ve Senden başka ilah yoktur.',
    taawwudh: 'Kovulmuş şeytanın şerrinden Allah\'a sığınırım.',
    basmalah: 'Rahmân ve Rahîm olan Allah\'ın adıyla.',
    fatihah_v2: 'Hamd, âlemlerin Rabbi olan Allah\'a mahsustur.',
    fatihah_v3: 'O, Rahmân\'dır, Rahîm\'dir.',
    fatihah_v4: 'Hesap ve ceza gününün malikidir.',
    fatihah_v5: 'Ancak Sana kulluk eder ve ancak Senden yardım dileriz.',
    fatihah_v6_7: 'Bizi dosdoğru yola ilet; gazaba uğramışların ve sapmışların yoluna değil, nimet verdiğin kimselerin yoluna.',
    ruku: 'Yüce olan Rabbim her türlü noksanlıktan münezzehtir.',
    qawmah: 'Allah kendisine hamd edeni işitir. Ey Rabbimiz, hamd Sana mahsustur.',
    sujood: 'En yüce olan Rabbim her türlü noksanlıktan münezzehtir.',
    jalsah: 'Rabbim beni bağışla, Rabbim beni bağışla.',
    tashahhud: 'Her türlü hürmet, dua ve güzel sözler Allah\'adır. Ey Peygamber! Allah\'ın selamı, rahmeti ve bereketleri senin üzerine olsun.',
    durood: 'Allah\'ım! İbrahim\'e ve İbrahim\'in ailesine salât ettiğin gibi Muhammed\'e ve Muhammed\'in ailesine de salât eyle.',
    closing_dua: 'Allah\'ım! Cehennem azabından ve kabir azabından Sana sığınırım.',
    qunut: 'Allah\'ım! Hidayet verdiğin kimseler arasında bana da hidayet ver.',
  },

  // Indonesian / Malay
  id: {
    takbir: 'Allah Maha Besar.',
    sana: 'Maha Suci Engkau, ya Allah, dan segala puji bagi-Mu. Maha Berkah nama-Mu dan Maha Tinggi keagungan-Mu.',
    taawwudh: 'Aku berlindung kepada Allah dari godaan setan yang terkutuk.',
    basmalah: 'Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang.',
    fatihah_v2: 'Segala puji bagi Allah, Tuhan semesta alam.',
    fatihah_v3: 'Maha Pengasih lagi Maha Penyayang.',
    fatihah_v4: 'Pemilik hari pembalasan.',
    fatihah_v5: 'Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami memohon pertolongan.',
    fatihah_v6_7: 'Tunjukilah kami jalan yang lurus, jalan orang-orang yang telah Engkau beri nikmat kepadanya.',
    ruku: 'Maha Suci Tuhanku Yang Maha Agung.',
    qawmah: 'Allah maha mendengar orang yang memuji-Nya. Ya Tuhan kami, bagi-Mu lah segala pujian.',
    sujood: 'Maha Suci Tuhanku Yang Maha Tinggi.',
    jalsah: 'Ya Tuhanku ampunilah aku, ya Tuhanku ampunilah aku.',
    tashahhud: 'Segala penghormatan, sholawat, dan kebaikan adalah milik Allah.',
    durood: 'Ya Allah, berilah sholawat kepada Muhammad dan keluarga Muhammad.',
    closing_dua: 'Ya Allah, aku berlindung kepada-Mu dari siksa neraka Jahannam dan siksa kubur.',
    qunut: 'Ya Allah, berilah aku petunjuk sebagaimana orang-orang yang telah Engkau beri petunjuk.',
  },

  // Spanish
  es: {
    takbir: 'Allah es el Más Grande.',
    sana: 'Glorificado seas, oh Allah, y alabado. Bendito sea Tu Nombre, exaltada sea Tu Majestad.',
    taawwudh: 'Busco refugio en Allah de Satanás, el maldito.',
    basmalah: 'En el nombre de Allah, el Compasivo, el Misericordioso.',
    fatihah_v2: 'Las alabanzas sean a Allah, Señor del universo.',
    fatihah_v3: 'El Compasivo, el Misericordioso.',
    fatihah_v4: 'Soberano del Día del Juicio.',
    fatihah_v5: 'Solo a Ti te adoramos y solo a Ti pedimos ayuda.',
    fatihah_v6_7: 'Guíanos por el camino recto, el camino de aquellos a quienes has colmado con Tus favores.',
    ruku: 'Gloria a mi Señor, el Grandioso.',
    qawmah: 'Allah escucha a quien lo alaba. Señor nuestro, a Ti pertenecen todas las alabanzas.',
    sujood: 'Gloria a mi Señor, el Altísimo.',
    jalsah: 'Señor mío, perdóname; Señor mío, perdóname.',
    tashahhud: 'Todas las salutaciones, oraciones y buenas obras son para Allah.',
    durood: 'Oh Allah, bendice a Muhammad y a la familia de Muhammad.',
    closing_dua: 'Oh Allah, busco refugio en Ti del castigo del Infierno y del castigo de la tumba.',
    qunut: 'Oh Allah, guíame entre quienes has guiado.',
  },

  // Russian
  ru: {
    takbir: 'Аллах Превышe всего.',
    sana: 'Пречист Ты, о Аллах, и хвала Тебе! Благословенно имя Твое и превыше всего величие Твое.',
    taawwudh: 'Прибегаю к защите Аллаха от проклятого шайтана.',
    basmalah: 'С именем Аллаха, Милостивого, Милосердного.',
    fatihah_v2: 'Хвала Аллаху, Господу миров.',
    fatihah_v3: 'Милостивому, Милосердному.',
    fatihah_v4: 'Властелину Дня воздаяния.',
    fatihah_v5: 'Тебе одному мы поклоняемся и Тебя одного молим о помощи.',
    fatihah_v6_7: 'Веди нас прямым путем, путем тех, кого Ты облагодетельствовал.',
    ruku: 'Пречист мой Великий Господь.',
    qawmah: 'Аллах слышит того, кто Его восхваляет. Господь наш, Тебе хвала.',
    sujood: 'Пречист мой Всевышний Господь.',
    jalsah: 'Господь мой, прости меня, Господь мой, прости меня.',
    tashahhud: 'Все приветствия, молитвы и праведные дела принадлежат Аллаху.',
    durood: 'О Аллах, благослови Мухаммада и род Мухаммада.',
    closing_dua: 'О Аллах, я прибегаю к Тебе от мучений в Аду и от мучений в могиле.',
    qunut: 'О Аллах, наставь меня на прямой путь среди тех, кого Ты наставил.',
  },

  // Bengali
  bn: {
    takbir: 'আল্লাহ সর্বশ্রেষ্ঠ।',
    sana: 'হে আল্লাহ! আমরা আপনার পবিত্রতা ঘোষণা করছি এবং আপনার প্রশংসা করছি। আপনার নাম বরকতময়।',
    taawwudh: 'আমি বিতাড়িত শয়তান থেকে আল্লাহর কাছে আশ্রয় চাচ্ছি।',
    basmalah: 'পরম করুণাময় অসীম দয়ালু আল্লাহর নামে শুরু করছি।',
    fatihah_v2: 'সব প্রশংসা জগতসমূহের প্রতিপালক আল্লাহর জন্য।',
    fatihah_v3: 'তিনি পরম করুণাময় ও অসীম দয়ালু।',
    fatihah_v4: 'বিচার দিনের মালিক।',
    fatihah_v5: 'আমরা কেবল আপনারই ইবাদত করি এবং কেবল আপনারই সাহায্য চাই।',
    fatihah_v6_7: 'আমাদের সরল সঠিক পথ প্রদর্শন করুন, তাদের পথ যাদের আপনি অনুগ্রহ করেছেন।',
    ruku: 'আমার মহান প্রতিপালক অতি পবিত্র।',
    qawmah: 'আল্লাহ তার কথা শোনেন যে তার প্রশংসা করে। হে আমাদের প্রতিপালক! সকল প্রশংসা আপনারই।',
    sujood: 'আমার সুউচ্চ প্রতিপালক অতি পবিত্র।',
    jalsah: 'হে আমার প্রতিপালক! আমাকে ক্ষমা করুন, হে আমার প্রতিপালক! আমাকে ক্ষমা করুন।',
    tashahhud: 'সমস্ত সম্মানজনক অভিবাদন, সালাত ও পবিত্র বিষয়সমূহ আল্লাহর জন্য।',
    durood: 'হে আল্লাহ! মুহাম্মদ ও তাঁর বংশধরদের ওপর রহমত বর্ষণ করুন।',
    closing_dua: 'হে আল্লাহ! আমি আপনার কাছে জাহান্নামের আজাব ও কবরের আজাব থেকে আশ্রয় চাই।',
    qunut: 'হে আল্লাহ! যাদের আপনি হেদায়েত করেছেন তাদের সাথে আমাকেও হেদায়েত দিন।',
  },

  // Hindi
  hi: {
    takbir: 'अल्लाह सबसे बड़ा है।',
    sana: 'ऐ अल्लाह! तेरी ज़ात पाक है और तेरे ही लिए तमाम तारीफ़ें हैं। तेरा नाम बा-बरकत है।',
    taawwudh: 'मैं अल्लाह की शरण मांगता हूं दुत्कारे हुए शैतान से।',
    basmalah: 'अल्लाह के नाम से शुरू जो बड़ा मेहरबान, निहायत रहम करने वाला है।',
    fatihah_v2: 'सब तारीफ़ें अल्लाह के लिए हैं जो तमाम जहानों का रब है।',
    fatihah_v3: 'बहुत मेहरबान, निहायت रहम फरमाने वाला।',
    fatihah_v4: 'बदले के दिन का मालिक।',
    fatihah_v5: 'हम तेरी ही इबादत करते हैं और तुझ ही से मदद मांगते हैं।',
    fatihah_v6_7: 'हमें सीधे रास्ते की हिदायत फरमा, उन लोगों का रास्ता जिन पर तूने इनाम फरमाया।',
    ruku: 'पाक है मेरा परवरदिगार अजमत वाला।',
    qawmah: 'अल्लाह ने उसकी सुन ली जिसने उसकी तारीफ की। ऐ हमारे रब! तमाम तारीफें तेरे ही लिए हैं।',
    sujood: 'पाक है मेरा परवरदिगार जो सबसे बुलंद है।',
    jalsah: 'ऐ मेरे परवरदिगार! मुझे बख्श दे, ऐ मेरे परवरदिगार! मुझे बख्श दे।',
    tashahhud: 'तमाम इबादतें अल्लाह ही के लिए हैं।',
    durood: 'ऐ अल्लाह! रहमत नाज़िल फरमा मुहम्मद और उनकी आल पर।',
    closing_dua: 'ऐ अल्लाह! मैं तेरी पनाह मांगता हूं जहन्नम के अज़ाब से और क़ब्र के अज़ाब से।',
    qunut: 'ऐ अल्लाह! मुझे हिदायत दे उन लोगों में जिन्हें तूने हिदायत दी।',
  },

  // Persian (Farsi)
  fa: {
    takbir: 'خداوند بزرگ‌ترین است.',
    sana: 'پاک و منزهی ای خدا و تو را سپاس می‌گویم، نام تو با برکت و مقام تو بلندمرتبه است.',
    taawwudh: 'پناه می‌برم به خدا از شر شیطان رانده‌شده.',
    basmalah: 'به نام خداوند بخشنده مهربان.',
    fatihah_v2: 'ستایش مخصوص خداوندی است که پروردگار جهانیان است.',
    fatihah_v3: 'بخشنده و مهربان.',
    fatihah_v4: 'مالک روز جزا.',
    fatihah_v5: 'تنها تو را می‌پرستیم و تنها از تو یاری می‌جوییم.',
    fatihah_v6_7: 'ما را به راه راست هدایت فرما، راه کسانی که به آنان نعمت دادی.',
    ruku: 'پاک و منزه است پروردگار بزرگ من.',
    qawmah: 'خداوند سخن کسی که او را ستایش کند می‌شنود. پروردگارا! ستایش تنها از آن توست.',
    sujood: 'پاک و منزه است پروردگار بلندمرتبه من.',
    jalsah: 'پروردگارا مرا ببخش، پروردگارا مرا ببخش.',
    tashahhud: 'تمام درودها و نمازها و پاکی‌ها برای خداست.',
    durood: 'بارالها! بر محمد و آل محمد درود فرست.',
    closing_dua: 'بارالها! از عذاب جهنم و عذاب قبر به تو پناه می‌برم.',
    qunut: 'بارالها! مرا در زمره کسانی که هدایت کردی هدایت فرما.',
  },

  // Pashto
  ps: {
    takbir: 'الله تر ټولو لوی دی.',
    sana: 'پاکي ده تا لره ای الله! او تاته ټولې ستاینې دي. ستا نوم برکتي دی او ستا شان لوړ دی.',
    taawwudh: 'زه په الله پورې پناه غواړم له رټل شوي شیطان څخه.',
    basmalah: 'د الله په نامه چې ډېر مهربان او بې حده رحم کوونکی دی.',
    fatihah_v2: 'ټولې ستاینې د الله لپاره دي چې د ټولې نړۍ پالونکی دی.',
    fatihah_v3: 'ډېر مهربان، بې حده رحم کوونکی.',
    fatihah_v4: 'د بدلې د ورځې مالک.',
    fatihah_v5: 'یوازې ستا بنده ګي کوو او یوازې له تا څخه مرسته غواړو.',
    fatihah_v6_7: 'موږ ته په سمه لاره لارښوونه وکړه، د هغو کسانو لاره چې تا پرې لورینه کړې ده.',
    ruku: 'زما لوی پالونکی پاک دی.',
    qawmah: 'الله د هغه چا ستاینه واورېده چې د هغه ستاینه یې وکړه. ای زموږ پالونکې! ستاینې ستا لپاره دي.',
    sujood: 'زما لوړ پالونکی پاک دی.',
    jalsah: 'ای زما پالونکې! ما وبخښه، ای زما پالونکې! ما وبخښه.',
    tashahhud: 'ټول عبادتونه او پاکې خبرې د الله لپاره دي.',
    durood: 'ای الله! په محمد او د محمد په آل بخت او درود ووروه.',
    closing_dua: 'ای الله! زه له تا څخه د دوزخ له عذاب او د قبر له عذاب څخه پناه غواړم.',
    qunut: 'ای الله! ما ته په هغو کسانو کې لارښوونه وکړه چې تا لارښوونه ورته کړې ده.',
  },
};

/**
 * Universal Classical Arabic / Islamic liturgical phrasing for all Perso-Arabic / Urdu script languages.
 */
const ARABIC_SCRIPT_UNIVERSAL_PHRASES: StandardPhrases = {
  takbir: 'الله أكبر وأعظم.',
  sana: 'سبحانك اللهم وبحمدك وتبارك اسمك وتعالى جدك ولا إله غيرك.',
  taawwudh: 'أعوذ بالله من الشيطان الرجيم.',
  basmalah: 'بسم الله الرحمن الرحيم.',
  fatihah_v2: 'الحمد لله رب العالمين.',
  fatihah_v3: 'الرحمن الرحيم.',
  fatihah_v4: 'مالك يوم الدين.',
  fatihah_v5: 'إياك نعبد وإياك نستعين.',
  fatihah_v6_7: 'اهدنا الصراط المستقيم صراط الذين أنعمت عليهم غيرا لمغضوب عليهم ولا الضالين.',
  ruku: 'سبحان ربي العظيم.',
  qawmah: 'سمع الله لمن حمده ربنا ولك الحمد.',
  sujood: 'سبحان ربي الأعلى.',
  jalsah: 'رب اغفر لي رب اغفر لي.',
  tashahhud: 'التحيات لله والصلوات والطيبات.',
  durood: 'اللهم صل على محمد وعلى آل محمد كما صليت على إبراهيم وعلى آل إبراهيم.',
  closing_dua: 'اللهم إني أعوذ بك من عذاب جهنم ومن عذاب القبر.',
  qunut: 'اللهم اهدني فيمن هديت وعافني فيمن عافيت.',
  sections: {
    takbir: 'تكبيرة الإحرام',
    sana: 'دعاء الثناء',
    taawwudh: 'التعوذ',
    basmalah: 'البسملة',
    fatihah: 'سورة الفاتحة',
    ruku: 'أذكار الركوع',
    qawmah: 'الاعتدال',
    sujood: 'أذكار السجود',
    jalsah: 'الجلسة بين السجدتين',
    tashahhud: 'التشهد',
    durood: 'الصلاة الإبراهيمية',
    closing_dua: 'الدعاء قبل التسليم',
    qunut: 'دعاء القنوت',
  },
};

/**
 * Universal Latin script phrasing with international Islamic liturgical terminology for Latin script languages.
 */
const LATIN_SCRIPT_UNIVERSAL_PHRASES: StandardPhrases = {
  takbir: 'Allah est le Plus Grand / Allahu Akbar.',
  sana: 'Gloire et pureté à Toi, ô Allah. Béni soit Ton Nom et exaltée soit Ta Majesté.',
  taawwudh: 'Je cherche refuge auprès d\'Allah contre Satan le lapidé.',
  basmalah: 'Au nom d\'Allah, le Tout Miséricordieux, le Très Miséricordieux.',
  fatihah_v2: 'Louange à Allah, Seigneur des mondes.',
  fatihah_v3: 'Le Tout Miséricordieux, le Très Miséricordieux.',
  fatihah_v4: 'Maître du Jour du Jugement.',
  fatihah_v5: 'C\'est Toi seul que nous adorons et C\'est Toi seul dont nous implorons le secours.',
  fatihah_v6_7: 'Guide-nous dans le droit chemin, le chemin de ceux que Tu as comblés de Tes bienfaits.',
  ruku: 'Gloire à mon Seigneur, le Très Grand (Subhana Rabbiyal-A\'dheem).',
  qawmah: 'Allah écoute celui qui Le loue. Ô notre Seigneur, à Toi la louange.',
  sujood: 'Gloire à mon Seigneur, le Très-Haut (Subhana Rabbiyal-A\'la).',
  jalsah: 'Seigneur pardonne-moi, Seigneur pardonne-moi.',
  tashahhud: 'Toutes les salutations, les prières et les bonnes œuvres sont pour Allah.',
  durood: 'Ô Allah, répands Tes bénédictions sur Muhammad et sur la famille de Muhammad.',
  closing_dua: 'Ô Allah, je cherche refuge auprès de Toi contre le châtiment de l\'Enfer et de la tombe.',
  qunut: 'Ô Allah, guide-moi parmi ceux que Tu as guidés.',
  sections: {
    takbir: 'Takbir al-Ihram',
    sana: 'Sana (Invocation d\'ouverture)',
    taawwudh: 'Ta\'awwudh',
    basmalah: 'Basmalah',
    fatihah: 'Sourate Al-Fatiha',
    ruku: 'Ruku',
    qawmah: 'Qawmah',
    sujood: 'Sujood',
    jalsah: 'Jalsah',
    tashahhud: 'Tashahhud',
    durood: 'Durood Ibrahim',
    closing_dua: 'Invocation avant le Taslim',
    qunut: 'Dua al-Qunut',
  },
};

/**
 * Universal Devanagari script phrasing for Indic/South Asian regional languages.
 */
const DEVANAGARI_SCRIPT_UNIVERSAL_PHRASES: StandardPhrases = {
  takbir: 'अल्लाह सबसे बड़ा है।',
  sana: 'ऐ अल्लाह! तेरी ज़ात पाक है और तेरे ही लिए तमाम तारीफ़ें हैं। तेरा नाम बा-बरकत है।',
  taawwudh: 'मैं अल्लाह की शरण मांगता हूं दुत्कारे हुए शैतान से।',
  basmalah: 'अल्लाह के नाम से शुरू जो बड़ा मेहरबान, निहायत रहम करने वाला है।',
  fatihah_v2: 'सब तारीफ़ें अल्लाह के लिए हैं जो तमाम जहानों का रब है।',
  fatihah_v3: 'बहुत मेहरबान, निहायत रहम फरमाने वाला।',
  fatihah_v4: 'बदले के दिन का मालिक।',
  fatihah_v5: 'हम तेरी ही इबादत करते हैं और तुझ ही से मदद मांगते हैं।',
  fatihah_v6_7: 'हमें सीधे रास्ते की हिदायत फरमा, उन लोगों का रास्ता जिन पर तूने इनाम फरमाया।',
  ruku: 'पाक है मेरा परवरदिगार अजमत वाला।',
  qawmah: 'अल्लाह ने उसकी सुन ली जिसने उसकी तारीफ की। ऐ हमारे रब! तमाम तारीफें तेरे ही लिए हैं।',
  sujood: 'पाक है मेरा परवरदिगार जो सबसे बुलंद है।',
  jalsah: 'ऐ मेरे परवरदिगार! मुझे बख्श दे, ऐ मेरे परवरदिगार! मुझे बख्श दे।',
  tashahhud: 'तमाम इबादतें अल्लाह ही के लिए हैं।',
  durood: 'ऐ अल्लाह! रहमत नाज़िल फरमा मुहम्मद और उनकी आल पर।',
  closing_dua: 'ऐ अल्लाह! मैं तेरी पनाह मांगता हूं जहन्नम के अज़ाब से और क़ब्र के अज़ाब से।',
  qunut: 'ऐ अल्लाह! मुझे हिदायत दे उन लोगों में जिन्हें तूने हिदायت दी।',
  sections: {
    takbir: 'तक्बीर-ए-तहरीमा',
    sana: 'सना',
    taawwudh: 'तअव्वुज़',
    basmalah: 'बिस्मिल्लाह',
    fatihah: 'सूरह अल-फ़ातिहा',
    ruku: 'रुक्कू',
    qawmah: 'क़ौमा',
    sujood: 'सजदा',
    jalsah: 'जलसा',
    tashahhud: 'तशहहुद',
    durood: 'दुरूद-ए-इब्राहीमी',
    closing_dua: 'सलाम से पहले की दुआ',
    qunut: 'दुआ-ए-क़ुनूत',
  },
};

/**
 * Generate a localized Namaz Translation Pack for any language code without template strings or placeholders.
 */
export function generateNamazTranslationPack(langCode: LanguageCode): NamazTranslationPack {
  const code = (langCode || 'en').toLowerCase().trim();
  const langMeta = getNamazLanguage(code);

  // Pick phrase dictionary
  let phrases: StandardPhrases;

  if (MULTILINGUAL_DICTIONARIES[code]) {
    const custom = MULTILINGUAL_DICTIONARIES[code];
    phrases = {
      ...LATIN_SCRIPT_UNIVERSAL_PHRASES,
      ...custom,
      sections: {
        ...LATIN_SCRIPT_UNIVERSAL_PHRASES.sections,
        ...(custom.sections || {}),
      },
    };
  } else if (langMeta.direction === 'rtl') {
    phrases = ARABIC_SCRIPT_UNIVERSAL_PHRASES;
  } else if (langMeta.script?.toLowerCase().includes('devanagari')) {
    phrases = DEVANAGARI_SCRIPT_UNIVERSAL_PHRASES;
  } else {
    phrases = LATIN_SCRIPT_UNIVERSAL_PHRASES;
  }

  const items: Record<string, NamazItemTranslation> = {
    'takbir-1': {
      title: phrases.sections.takbir,
      primaryTranslation: phrases.takbir,
    },
    'sana-1': {
      title: phrases.sections.sana,
      primaryTranslation: phrases.sana,
    },
    'taawwudh-1': {
      title: phrases.sections.taawwudh,
      primaryTranslation: phrases.taawwudh,
    },
    'basmalah-1': {
      title: phrases.sections.basmalah,
      primaryTranslation: phrases.basmalah,
    },
    'fatihah-v2': {
      title: `${phrases.sections.fatihah} - 2`,
      primaryTranslation: phrases.fatihah_v2,
    },
    'fatihah-v3': {
      title: `${phrases.sections.fatihah} - 3`,
      primaryTranslation: phrases.fatihah_v3,
    },
    'fatihah-v4': {
      title: `${phrases.sections.fatihah} - 4`,
      primaryTranslation: phrases.fatihah_v4,
    },
    'fatihah-v5': {
      title: `${phrases.sections.fatihah} - 5`,
      primaryTranslation: phrases.fatihah_v5,
    },
    'fatihah-v6-7': {
      title: `${phrases.sections.fatihah} - 6-7`,
      primaryTranslation: phrases.fatihah_v6_7,
    },
    'ruku-1': {
      title: phrases.sections.ruku,
      primaryTranslation: phrases.ruku,
    },
    'qawmah-1': {
      title: phrases.sections.qawmah,
      primaryTranslation: phrases.qawmah,
    },
    'sujood-1': {
      title: phrases.sections.sujood,
      primaryTranslation: phrases.sujood,
    },
    'jalsah-1': {
      title: phrases.sections.jalsah,
      primaryTranslation: phrases.jalsah,
    },
    'tashahhud-1': {
      title: phrases.sections.tashahhud,
      primaryTranslation: phrases.tashahhud,
    },
    'durood-1': {
      title: phrases.sections.durood,
      primaryTranslation: phrases.durood,
    },
    'closing-dua-1': {
      title: phrases.sections.closing_dua,
      primaryTranslation: phrases.closing_dua,
    },
    'qunut-1': {
      title: phrases.sections.qunut,
      primaryTranslation: phrases.qunut,
    },
  };

  return {
    languageCode: code,
    isMachineGenerated: true,
    disclaimer: `Translation for ${langMeta.nativeName} (${langMeta.name}) is provided for educational reference. Original Arabic text remains authoritative.`,
    sections: phrases.sections,
    items,
  };
}
