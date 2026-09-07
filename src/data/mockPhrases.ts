import { Phrase } from '@/types';

export const mockPhrases: Phrase[] = [
  {
    id: 'p1',
    category: 'order',
    japanese: '1人ですが、食事できますか？',
    korean: '1명인데 식사 되나요?',
    pronunciation: 'ハンミョンインデ シクサ テナヨ？',
    tip: 'ピークタイム（12:00〜13:00）を避けると快く案内してもらえることが多いです。'
  },
  {
    id: 'p2',
    category: 'order',
    japanese: 'おすすめのメニューは何ですか？',
    korean: '추천 메뉴가 뭐예요?',
    pronunciation: 'チュチョン メニュガ ムォエヨ？',
    tip: '迷ったときはこれを店員さんに見せるのが一番確実です！'
  },
  {
    id: 'p3',
    category: 'order',
    japanese: 'これを1つください（メニューを指して）',
    korean: '이거 하나 주세요.',
    pronunciation: 'イゴ ハナ ジュセヨ',
    tip: '2つなら「이거 두 개 주세요（イゴ トゥゲ ジュセヨ）」と言います。'
  },
  {
    id: 'p4',
    category: 'spicy',
    japanese: '辛くしないでください（控えめに）',
    korean: '덜 맵게 해 주세요.',
    pronunciation: 'トル メプケ ヘ ジュセヨ',
    tip: '全く辛くできない料理もあるので、注文前に見せると安心です。'
  },
  {
    id: 'p5',
    category: 'spicy',
    japanese: '赤いタレ（ヤンニョム）を別にして別皿でください',
    korean: '양념 따로 주세요.',
    pronunciation: 'ヤンニョム タロ ジュセヨ',
    tip: 'クッパやミルミョンを食べるとき、自分で辛さを調整したい時に重宝します！'
  },
  {
    id: 'p6',
    category: 'pay',
    japanese: '別々にお会計できますか？',
    korean: '따로따로 계산해 주세요.',
    pronunciation: 'タロタロ ケサネ ジュセヨ',
    tip: '混雑している市場や個人食堂では断られる場合もあります。'
  },
  {
    id: 'p7',
    category: 'pay',
    japanese: '海外のクレジットカードは使えますか？',
    korean: '해외 카드 결제 되나요?',
    pronunciation: 'ヘウェ カドゥ キョルチェ テナヨ？',
    tip: 'VISA, Master, JCBなど主要ブランドはほとんどの店舗で使用可能です。'
  },
  {
    id: 'p8',
    category: 'order',
    japanese: 'お水とおかずをおかわりください',
    korean: '물하고 반찬 좀 더 주세요.',
    pronunciation: 'ムラゴ パンチャン チョム ト ジュセヨ',
    tip: '韓国の食堂は基本キムチやお水のおかわり無料（セルフの店も多い）です。'
  },
  {
    id: 'p9',
    category: 'taxi',
    japanese: 'この住所まで行ってください',
    korean: '이 주소로 가 주세요.',
    pronunciation: 'イ ジュソロ カ ジュセヨ',
    tip: 'スマホの地図や住所画面を運転手さんに直接見せるのがベストです。'
  },
  {
    id: 'p10',
    category: 'taxi',
    japanese: 'ここで降ろしてください',
    korean: '여기서 내려 주세요.',
    pronunciation: 'ヨギソ ネリョ ジュセヨ',
    tip: '目的地の近くが見えたら早めに伝えるとスムーズに停車してくれます。'
  },
  {
    id: 'p11',
    category: 'order',
    japanese: 'テイクアウト（持ち帰り）でお願いします',
    korean: '포장해 주세요.',
    pronunciation: 'ポジャンヘ ジュセヨ',
    tip: 'カフェや餃子屋さんで持ち帰りたい時に必須の表現です。'
  },
  {
    id: 'p12',
    category: 'convenience',
    japanese: '袋を1枚ください',
    korean: '봉투 한 장 주세요.',
    pronunciation: 'ポントゥ ハン ジャン ジュセヨ',
    tip: 'コンビニやマートではレジ袋が有料（約100〜200ウォン）です。'
  }
];
