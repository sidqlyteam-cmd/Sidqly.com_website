import type { NamazTranslationPack } from '../../i18n/namazTypes';

export const trPack: NamazTranslationPack = {
  languageCode: 'tr',
  isMachineGenerated: true,
  disclaimer: 'Bu çeviri bilgilendirme amaçlı üretilmiştir. Lütfen yetkili dini kaynaklara ve Arapça aslına başvurunuz.',
  sections: {
    takbir: 'Tekbir-i İhram',
    sana: 'Sühaneke (Açılış Duası)',
    taawwudh: 'Eûzü Çekmek (Eûzü Billahi...)',
    basmalah: 'Besmele',
    fatihah: 'Fâtiha Sûresi',
    ruku: 'Rükû Zikirleri',
    qawmah: 'Kavme (Rükûdan Doğrulma)',
    sujood: 'Secde Zikirleri',
    jalsah: 'Celse (İki Secde Arası Oturuş)',
    tashahhud: 'Ettehiyyâtü (Teşehhüd)',
    durood: 'Salli-Barik Duaları',
    closing_dua: 'Selam Öncesi Dualar',
    qunut: 'Kunut Duası',
  },
  items: {
    'takbir-1': {
      title: 'Tekbir-i İhram',
      primaryTranslation: 'Allah en büyüktür.',
      wordBreakdown: [
        { arabic: 'اللَّهُ', translation: 'Allah' },
        { arabic: 'أَكْبَرُ', translation: 'En büyüktür' },
      ],
    },
    'sana-1': {
      title: 'Sühaneke Duası',
      primaryTranslation: 'Seni her türlü noksanlıktan tenzih ederim ey Allah\'ım! Seni hamd ile tesbih ederim. Senin adın mübarektir, şanın yücedir ve Senden başka ilah yoktur.',
    },
    'taawwudh-1': {
      title: 'Eûzü Billahi...',
      primaryTranslation: 'Kovulmuş şeytanın şerrinden Allah\'a sığınırım.',
    },
    'basmalah-1': {
      title: 'Besmele',
      primaryTranslation: 'Rahmân ve Rahîm olan Allah\'ın adıyla.',
    },
    'fatihah-v2': {
      title: 'Fâtiha Sûresi - Âyet 2',
      primaryTranslation: 'Hamd, âlemlerin Rabbi olan Allah\'a mahsustur.',
    },
  },
};

export default trPack;
