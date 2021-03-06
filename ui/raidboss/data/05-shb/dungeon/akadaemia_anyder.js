'use strict';

[{
  zoneRegex: {
    en: /^Akadaemia Anyder$/,
    ko: /^애나이더 아카데미아$/,
  },
  timelineFile: 'akadaemia_anyder.txt',
  timelineTriggers: [
    {
      id: 'Anyder Lash',
      regex: /Lash/,
      beforeSeconds: 5,
      suppressSeconds: 10,
      condition: function(data) {
        return data.role == 'tank' || data.role == 'healer';
      },
      infoText: {
        en: 'Mini Buster',
        de: 'Kleiner Tankbuster',
        ko: '미니 버스터',
      },
    },
    {
      id: 'Anyder Putrid Breath',
      regex: /Putrid Breath/,
      beforeSeconds: 5,
      infoText: {
        en: 'Out of Front',
        de: 'Weg von Vorne',
        fr: 'Ne restez pas devant',
        ko: '정면 회피',
      },
    },
  ],
  triggers: [
    {
      id: 'Anyder Aquatic Lance',
      regex: Regexes.headMarker({ id: '0087' }),
      condition: function(data, matches) {
        return data.me == matches.target;
      },
      infoText: {
        en: 'puddle on you',
        de: 'Fläche auf DIR',
        fr: 'Flaque sur VOUS',
        ko: '징 대상자',
      },
    },
    {
      id: 'Anyder Puncture',
      regex: Regexes.startsUsing({ id: '3E04', source: ['Cladoselache', 'Doliodus'] }),
      regexDe: Regexes.startsUsing({ id: '3E04', source: ['Cladoselache', 'Doliodus'] }),
      regexFr: Regexes.startsUsing({ id: '3E04', source: ['Cladoselache', 'Doliodus'] }),
      regexJa: Regexes.startsUsing({ id: '3E04', source: ['クラドセラケ', 'ドリオドゥス'] }),
      regexCn: Regexes.startsUsing({ id: '3E04', source: ['裂口鲨', '原祖鲨'] }),
      regexKo: Regexes.startsUsing({ id: '3E04', source: ['클라도셀라케', '돌리오두스'] }),
      alertText: function(data, matches) {
        if (matches.target == data.me) {
          return {
            en: 'Tank Buster on YOU',
            de: 'Tankbuster auf DIR',
            fr: 'Tankbuster sur VOUS',
            ko: '탱버 대상자',
          };
        }
        if (data.role == 'healer') {
          return {
            en: 'Buster on ' + data.ShortName(matches.target),
            de: 'Tankbuster auf ' + data.ShortName(matches.target),
            fr: 'Tankbuster sur ' + data.ShortName(matches.target),
            ko: '"' + data.ShortName(matches.target) + '"탱버',
          };
        }
      },
    },
    {
      id: 'Anyder Tidal Guillotine',
      regex: Regexes.startsUsing({ id: '3E0A', source: 'Cladoselache', capture: false }),
      regexDe: Regexes.startsUsing({ id: '3E0A', source: 'Cladoselache', capture: false }),
      regexFr: Regexes.startsUsing({ id: '3E0A', source: 'Cladoselache', capture: false }),
      regexJa: Regexes.startsUsing({ id: '3E0A', source: 'クラドセラケ', capture: false }),
      regexCn: Regexes.startsUsing({ id: '3E0A', source: '裂口鲨', capture: false }),
      regexKo: Regexes.startsUsing({ id: '3E0A', source: '클라도셀라케', capture: false }),
      infoText: {
        en: 'Away From Swimming Shark',
        de: 'Weg vom schwimmenden Hai',
        fr: 'Ecartez-vous requin dans l\'eau',
        ko: '물 속 상어 멀리 떨어지기',
      },
    },
    {
      id: 'Anyder Pelagic Cleaver',
      regex: Regexes.startsUsing({ id: '3E0B', source: 'Doliodus', capture: false }),
      regexDe: Regexes.startsUsing({ id: '3E0B', source: 'Doliodus', capture: false }),
      regexFr: Regexes.startsUsing({ id: '3E0B', source: 'Doliodus', capture: false }),
      regexJa: Regexes.startsUsing({ id: '3E0B', source: 'ドリオドゥス', capture: false }),
      regexCn: Regexes.startsUsing({ id: '3E0B', source: '原祖鲨', capture: false }),
      regexKo: Regexes.startsUsing({ id: '3E0B', source: '돌리오두스', capture: false }),
      infoText: {
        en: 'Sides of Swimming Shark',
        de: 'Zu den Seiten vom schwimmenden Hai',
        fr: 'Allez sur les côtés',
        ko: '물 속 상어 측면으로 피하기',
      },
    },
    {
      id: 'Anyder Marine Mayhem',
      regex: Regexes.startsUsing({ id: '3E06', source: ['Cladoselache', 'Doliodus'], capture: false }),
      regexDe: Regexes.startsUsing({ id: '3E06', source: ['Cladoselache', 'Doliodus'], capture: false }),
      regexFr: Regexes.startsUsing({ id: '3E06', source: ['Cladoselache', 'Doliodus'], capture: false }),
      regexJa: Regexes.startsUsing({ id: '3E06', source: ['クラドセラケ', 'ドリオドゥス'], capture: false }),
      regexCn: Regexes.startsUsing({ id: '3E06', source: ['裂口鲨', '原祖鲨'], capture: false }),
      regexKo: Regexes.startsUsing({ id: '3E06', source: ['클라도셀라케', '돌리오두스'], capture: false }),
      condition: function(data) {
        return data.role == 'healer' || data.role == 'tank' || data.CanAddle();
      },
      infoText: {
        en: 'aoe',
        de: 'AoE',
        fr: 'Dégâts de zone',
        ko: '전체 공격',
      },
    },
    {
      id: 'Anyder Sap Shower',
      regex: Regexes.headMarker({ id: '0078' }),
      condition: function(data, matches) {
        return data.me == matches.target;
      },
      infoText: {
        en: 'Spread',
        de: 'Verteilen',
        fr: 'Dispersez vous',
        ko: '산개',
      },
    },
    {
      id: 'Anyder Arbor Storm',
      regex: Regexes.startsUsing({ id: '3E17', source: 'Marquis Morbol', capture: false }),
      regexDe: Regexes.startsUsing({ id: '3E17', source: 'Marquis-Morbol', capture: false }),
      regexFr: Regexes.startsUsing({ id: '3E17', source: 'Marquis Morbol', capture: false }),
      regexJa: Regexes.startsUsing({ id: '3E17', source: 'マーカス・モルボル', capture: false }),
      regexCn: Regexes.startsUsing({ id: '3E17', source: '侯爵魔界花', capture: false }),
      regexKo: Regexes.startsUsing({ id: '3E17', source: '몰볼 후작', capture: false }),
      condition: function(data) {
        return data.role == 'healer' || data.role == 'tank' || data.CanAddle();
      },
      infoText: {
        en: 'aoe',
        de: 'AoE',
        fr: 'Dégâts de zone',
        ko: '전체 공격',
      },
    },
    {
      id: 'Anyder Noahionto',
      regex: Regexes.startsUsing({ id: '430C', source: 'Evil Armor', capture: false }),
      regexDe: Regexes.startsUsing({ id: '430C', source: 'Bös(?:e|er|es|en) Kampfmaschine', capture: false }),
      regexFr: Regexes.startsUsing({ id: '430C', source: 'Armure Maléfique', capture: false }),
      regexJa: Regexes.startsUsing({ id: '430C', source: 'イビルアーマー', capture: false }),
      regexCn: Regexes.startsUsing({ id: '430C', source: '恶魔装甲', capture: false }),
      regexKo: Regexes.startsUsing({ id: '430C', source: '사악한 갑옷', capture: false }),
      condition: function(data) {
        return data.CanStun() || data.CanSilence();
      },
      alertText: {
        en: 'Interrupt Evil Armor',
        de: 'Unterbreche Böse Kampfmaschine',
        fr: 'Interrompez l\'armure maléfique',
        ko: '사악한 갑옷 기술 시전 끊기',
      },
    },
    {
      id: 'Anyder Shockbolt',
      regex: Regexes.startsUsing({ id: '3E23', source: 'Quetzalcoatl' }),
      regexDe: Regexes.startsUsing({ id: '3E23', source: 'Quetzalcoatl' }),
      regexFr: Regexes.startsUsing({ id: '3E23', source: 'Quetzalcóatl' }),
      regexJa: Regexes.startsUsing({ id: '3E23', source: 'ケツァクウァトル' }),
      regexCn: Regexes.startsUsing({ id: '3E23', source: '克察尔科亚特尔' }),
      regexKo: Regexes.startsUsing({ id: '3E23', source: '케찰코아틀' }),
      alertText: function(data, matches) {
        if (matches.target == data.me) {
          return {
            en: 'Tank Buster on YOU',
            de: 'Tankbuster auf DIR',
            fr: 'Tankbuster sur VOUS',
            ko: '탱버 대상자',
          };
        }
        if (data.role == 'healer') {
          return {
            en: 'Buster on ' + data.ShortName(matches.target),
            de: 'Tankbuster auf ' + data.ShortName(matches.target),
            fr: 'Tankbuster sur ' + data.ShortName(matches.target),
            ko: '"' + data.ShortName(matches.target) + '"탱버',
          };
        }
      },
    },
    {
      id: 'Anyder Thunderbolt',
      regex: Regexes.startsUsing({ id: '3E24', source: 'Quetzalcoatl', capture: false }),
      regexDe: Regexes.startsUsing({ id: '3E24', source: 'Quetzalcoatl', capture: false }),
      regexFr: Regexes.startsUsing({ id: '3E24', source: 'Quetzalcóatl', capture: false }),
      regexJa: Regexes.startsUsing({ id: '3E24', source: 'ケツァクウァトル', capture: false }),
      regexCn: Regexes.startsUsing({ id: '3E24', source: '克察尔科亚特尔', capture: false }),
      regexKo: Regexes.startsUsing({ id: '3E24', source: '케찰코아틀', capture: false }),
      condition: function(data) {
        return data.role == 'healer' || data.role == 'tank' || data.CanAddle();
      },
      infoText: {
        en: 'aoe',
        de: 'AoE',
        fr: 'Dégâts de zone',
        ko: '전체 공격',
      },
    },
    {
      id: 'Anyder Thunderstorm',
      regex: Regexes.startsUsing({ id: '3E1A', source: 'Quetzalcoatl', capture: false }),
      regexDe: Regexes.startsUsing({ id: '3E1A', source: 'Quetzalcoatl', capture: false }),
      regexFr: Regexes.startsUsing({ id: '3E1A', source: 'Quetzalcóatl', capture: false }),
      regexJa: Regexes.startsUsing({ id: '3E1A', source: 'ケツァクウァトル', capture: false }),
      regexCn: Regexes.startsUsing({ id: '3E1A', source: '克察尔科亚特尔', capture: false }),
      regexKo: Regexes.startsUsing({ id: '3E1A', source: '케찰코아틀', capture: false }),
      delaySeconds: 4.7,
      infoText: {
        en: 'grab orbs',
        de: 'Orbs nehmen',
        fr: 'Prenez les orbes',
        ko: '구슬 줍기',
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Marquis Morbol': 'Marquis-Morbol',
        'laboratory tomato': 'Labortomate',
        'laboratory queen': 'Laborkönigin',
        'laboratory onion': 'Laborzwiebel',
        'laboratory garlic': 'Laborknoblauch',
        'laboratory eggplant': 'Laboraubergine',
        'evil armor': 'böse Kampfmaschine',
        'engendered soma': 'erzeugter Soma',
        'engendered snapweed': 'erzeugtes Springkraut',
        'engendered shark': 'erzeugter Hai',
        'engendered pteraketos': 'erzeugter Cetus',
        'engendered pegasus': 'erzeugter Pegasus',
        'engendered monk': 'erzeugter Mönch',
        'engendered lycopersicum': 'erzeugter Lycopersicum',
        'engendered danbania': 'erzeugter Danbania',
        'engendered clionid': 'erzeugter Clionid',
        'engendered cactuar giant': 'erzeugter Riesenkaktor',
        'engendered bombfish': 'erzeugter Igelbomber',
        'engendered bomb': 'erzeugter Bomber',
        'engendered bandersnatch': 'erzeugter Bandersnatch',
        'engendered anemone': 'erzeugte Anemone',
        'Voidwalker': 'Voidwalker',
        'Titan': 'Titan',
        'Quetzalcoatl': 'Quetzalcoatl',
        'Leviathan': 'Leviathan',
        'Engage!': 'Start!',
        'Eden Prime': 'Eden Prime',
        'Doliodus': 'Doliodus',
        'Cladoselache': 'Cladoselache',
        'Ichthyology': 'Ichthyologie',
        'Phytobiology': 'Phytobiologie',
        'Phantomology': 'Phantomologie',
      },
      'replaceText': {
        'attack': 'Attacke',
        'Worse Breath': 'Schlimmer Atem ',
        'Winding Current': 'Spulenstrom',
        'Waterspout': 'Wasserrinne',
        'Tidal Guillotine': 'Gezeitenguillotine',
        'Thunderstorm': 'Gewitter',
        'Thunderbolt': 'Donnerkeil',
        'Syrup Spout': 'Sirupstrahl',
        'Shocking Plumage': 'Elektrisierendes Gefieder',
        'Shockbolt': 'Blitzbogen',
        'Sap Shower': 'Pflanzensaftregen',
        'Reverse Current': 'Gegenstrom',
        'Raging Waters': 'Wütende Gewässer',
        'Quasar': 'Quasar',
        'Putrid Breath': 'Fauliger Atem',
        'Protolithic Puncture': 'Paläolithische Punktion',
        'Pelagic Cleaver': 'Pelagische Pein',
        'Noahionto': 'Noahionto',
        'Needle Storm': 'Nadelsturm',
        'Marine Mayhem': 'Meereschaos',
        'Lash': 'Peitschenschlag',
        'Frumious Jaws': 'Mampfes Maul',
        'Extensible Tendrils': 'Streckende Ranken',
        'Enrage': 'Finalangriff',
        'Dominion Slash': 'Fleischerhaken des Dominion',
        'Detonator': 'Detonation',
        'Dark Arrivisme': 'Dunkles Emporkommen',
        'Blossom': 'Blüte',
        'Arbor Storm': 'Dornensturm',
        'Aquatic Lance': 'Aquaspeer',
        'Aqua Spear': 'Wasserspeer',
        'Acrid Stream': 'Ätzende Strömung',
        '--untargetable--': '--nich anvisierbar--',
        'targetable--': 'anvisierbar--',
        'Carcharian Verve': 'Haifischschwung',
      },
      '~effectNames': {
        'Stun': 'Betäubung',
        'Damage Up': 'Schaden +',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Marquis Morbol': 'Marquis morbol',
        'laboratory tomato': 'Spécimen de tomate',
        'laboratory queen': 'Spécimen de reine mandragore',
        'laboratory onion': 'Spécimen d\'oignon',
        'laboratory garlic': 'Spécimen d\'ail',
        'laboratory eggplant': 'Spécimen d\'aubergine',
        'evil armor': 'Armure maléfique',
        'engendered soma': 'Soma artificiel',
        'engendered snapweed': 'Balsamine artificielle',
        'engendered shark': 'Requin artificiel',
        'engendered pteraketos': 'Cetus artificiel',
        'engendered pegasus': 'Pégase artificiel',
        'engendered monk': 'Poulpe-moine artificiel',
        'engendered lycopersicum': 'Lycopersicum artificiel',
        'engendered danbania': 'Dambanha artificiel',
        'engendered clionid': 'Clionide artificielle',
        'engendered cactuar giant': 'Gigapampa artificiel',
        'engendered bombfish': 'Poisson-bombo artificiel',
        'engendered bomb': 'Bombo artificiel',
        'engendered bandersnatch': 'Bandersnatch artificiel',
        'engendered anemone': 'Anémone artificielle',
        'Quetzalcoatl': 'Quetzalcóatl',
        'Engage!': 'À l\'attaque',
        'Doliodus': 'Doliodus',
        'Cladoselache': 'Cladoselache',
        'Ichthyology will be sealed off': 'Fermeture du département d\'ichtyogénie!',
        'Phytobiology will be sealed off': 'Fermeture du département de phytogénie!',
        'Phantomology will be sealed off': 'Fermeture du département de phantasmagénie!',
        'is no longer sealed': 'Ouverture',
      },
      'replaceText': {
        'attack': 'Attaque',
        'Worse Breath': 'Haleine pestilentielle',
        'Winding Current': 'Volte-courant',
        'Waterspout': 'Jet d\'eau',
        'Tidal Guillotine': 'Marée-guillotine',
        'Thunderstorm': 'Feu purificateur',
        'Thunderbolt': 'Éclair',
        'Syrup Spout': 'Projection de sirop',
        'Shocking Plumage': 'Plumage voltaïque',
        'Shockbolt': 'Arc d\'éclair',
        'Sap Shower': 'Averse de sève',
        'Reverse Current': 'Contre-courant',
        'Raging Waters': 'Courant fracassant',
        'Quasar': 'Quasar',
        'Putrid Breath': 'Haleine putride',
        'Protolithic Puncture': 'Ponction paléolithique',
        'Pelagic Cleaver': 'Fendoir pélagique',
        'Noahionto': 'Noahionto',
        'Needle Storm': 'Tempête d\'épines',
        'Marine Mayhem': 'Mutilation marine',
        'Lash': 'Coup de fouet',
        'Frumious Jaws': 'Mâchoires furieuses',
        'Extensible Tendrils': 'Cep extensible',
        'Enrage': 'Enrage',
        'Dominion Slash': 'Entaille de domination',
        'Detonator': 'Détonation violente',
        'Dark Arrivisme': 'Sombre ambition',
        'Blossom': 'Floraison',
        'Arbor Storm': 'Tempête de charmilles',
        'Aquatic Lance': 'Lance aquatique',
        'Aqua Spear': 'Épieu aquatique',
        'Acrid Stream': 'Projection âcre',
        '--untargetable--': '--Impossible à cibler--',
        'targetable--': 'Ciblable--',
        '--sync--': '--Synchronisation--',
        '--Reset--': '--Réinitialisation--',
        'Carcharian Verve': 'Verve carcharienne',
      },
      '~effectNames': {
        'Stun': 'Étourdissement',
        'Damage Up': 'Bonus De Dégâts',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'marquis morbol': 'マーカス・モルボル',
        'laboratory tomato': 'ラボラトリー・トマト',
        'laboratory queen': 'ラボラトリー・クイーン',
        'laboratory onion': 'ラボラトリー・オニオン',
        'laboratory garlic': 'ラボラトリー・ガーリック',
        'laboratory eggplant': 'ラボラトリー・エッグ',
        'evil armor': 'イビルアーマー',
        'engendered soma': 'エンジェンダード・ソーマ',
        'engendered snapweed': 'エンジェンダード・スナップウィード',
        'engendered shark': 'エンジェンダード・シャーク',
        'engendered pteraketos': 'エンジェンダード・ケートス',
        'engendered pegasus': 'エンジェンダード・ペガサス',
        'engendered monk': 'エンジェンダード・モンク',
        'engendered lycopersicum': 'エンジェンダード・リコペルシクム',
        'engendered danbania': 'エンジェンダード・ダンバニア',
        'engendered clionid': 'エンジェンダード・クリオニッド',
        'engendered cactuar giant': 'エンジェンダード・ギガテンダー',
        'engendered bombfish': 'エンジェンダード・ボムフィッシュ',
        'engendered bomb': 'エンジェンダード・ボム',
        'engendered bandersnatch': 'エンジェンダード・バンダースナッチ',
        'engendered anemone': 'エンジェンダード・アネモネ',
        'Voidwalker': 'Voidwalker',
        'Titan': 'タイタン',
        'Quetzalcoatl': 'ケツァクウァトル',
        'Leviathan': 'リヴァイアサン',
        'Engage!': '戦闘開始！',
        'Eden Prime': 'Eden Prime',
        'Doliodus': 'ドリオドゥス',
        'Cladoselache': 'クラドセラケ',
        'Ichthyology': '水棲生物創造場',
        'Phytobiology': '草木生物創造場',
        'Phantomology': '幻想生物創造場',
      },
      'replaceText': {
        'attack': '攻撃',
        'Worse Breath': '悪臭い息',
        'Winding Current': 'ループカレント',
        'Waterspout': 'ウォータースパウト',
        'Tidal Guillotine': 'タイダルギロチン',
        'Thunderstorm': 'サンダーストーム',
        'Thunderbolt': 'サンダーボルト',
        'Syrup Spout': 'シロップスパウト',
        'Shocking Plumage': 'ショッキング・プルーミッジ',
        'Shockbolt': 'ショックボルト',
        'Sap Shower': 'サップシャワー',
        'Reverse Current': 'リバースカレント',
        'Raging Waters': '激水',
        'Quasar': 'クェーサー',
        'Putrid Breath': '忌まわしい嘆息',
        'Protolithic Puncture': 'プロトリシックパンクチャー',
        'Pelagic Cleaver': 'ペラジッククリーヴ',
        'Noahionto': 'ノアヒオント',
        'Needle Storm': 'ニードルストーム',
        'Marine Mayhem': 'マリーンメイヘム',
        'Lash': 'ムチ打ち',
        'Frumious Jaws': 'フリューミアスジョーズ',
        'Extensible Tendrils': 'つるのムチ',
        'Dominion Slash': 'ドミニオンスラッシュ',
        'Detonator': '大爆発',
        'Dark Arrivisme': 'ダークエアリビズメ',
        'Blossom': 'ブロッサム',
        'Arbor Storm': 'アーバーストーム',
        'Aquatic Lance': 'アクアランス',
        'Aqua Spear': 'アクアスピア',
        'Acrid Stream': 'アクリッドストリーム',
        'Carcharian Verve': 'カルカリアンヴァーヴ',
      },
      '~effectNames': {
        'Stun': 'スタン',
        'Damage Up': 'ダメージ上昇',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Voidwalker': 'Voidwalker',
        'Titan': '泰坦',
        'Leviathan': '利维亚桑',
        'Engage!': '战斗开始！',
        'Eden Prime': 'Eden Prime',
      },
      'replaceText': {
        'attack': '攻击',
      },
      '~effectNames': {
        'Stun': '眩晕',
        'Damage Up': '伤害提高',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        'Marquis Morbol': '몰볼 후작',
        'laboratory tomato': '연구실 토마토',
        'laboratory queen': '연구실 왕비',
        'laboratory onion': '연구실 양파',
        'laboratory garlic': '연구실 마늘',
        'laboratory eggplant': '연구실 가지',
        'evil armor': '사악한 갑옷',
        'engendered soma': '창조된 소마',
        'engendered snapweed': '창조된 물봉선화',
        'engendered shark': '창조된 상어',
        'engendered pteraketos': '창조된 케투스',
        'engendered pegasus': '창조된 페가수스',
        'engendered monk': '물귀신 탄약수',
        'engendered lycopersicum': '창조된 리코페르시쿰',
        'engendered danbania': '창조된 단바니아',
        'engendered clionid': '창조된 클리오니드',
        'engendered cactuar giant': '창조된 기가텐더',
        'engendered bombfish': '창조된 가시봄',
        'engendered bomb': '창조된 봄',
        'engendered bandersnatch': '창조된 밴더스내치',
        'engendered anemone': '창조된 아네모네',
        'Quetzalcoatl': '케찰코아틀',
        'Engage!': '전투 시작!',
        'Doliodus': '돌리오두스',
        'Cladoselache': '클라도셀라케',
        'Ichthyology': '수생 생물 창조장',
        'Phytobiology': '초목 생물 창조장',
        'Phantomology': '환상 생물 창조장',
      },
      'replaceText': {
        'attack': '공격',
        'Worse Breath': '악취 숨결',
        'Winding Current': '원형전류',
        'Waterspout': '물 분출',
        'Tidal Guillotine': '해일 단두대',
        'Thunderstorm': '번개 폭풍',
        'Thunderbolt': '낙뢰',
        'Syrup Spout': '단물 튀기기',
        'Shocking Plumage': '충격 깃털',
        'Shockbolt': '충격 전류',
        'Sap Shower': '수액 세례',
        'Reverse Current': '역전류',
        'Raging Waters': '성난 물',
        'Quasar': '퀘이사',
        'Putrid Breath': '불길한 탄식',
        'Protolithic Puncture': '원시 찌르기',
        'Pelagic Cleaver': '대양의 도끼날',
        'Noahionto': '노아히온토',
        'Needle Storm': '바늘 폭풍',
        'Marine Mayhem': '바다의 파괴력',
        'Lash': '채찍',
        'Frumious Jaws': '격노한 턱',
        'Extensible Tendrils': '덩굴 채찍',
        'Enrage': '전멸기',
        'Dominion Slash': '지배의 참격',
        'Detonator': '대폭발',
        'Dark Arrivisme': '음습한 야심',
        'Blossom': '개화',
        'Arbor Storm': '나무 폭풍',
        'Aquatic Lance': '수창',
        'Aqua Spear': '물의 창',
        'Acrid Stream': '매캐한 냇물',
        '--untargetable--': '--타겟 불가능--',
        '--targetable--': '--타겟 가능--',
        'Carcharian Verve': '상어의 기백',
      },
      '~effectNames': {
        'Stun': '기절',
        'Damage Up': '주는 피해량 증가',
      },
    },
  ],
}];
