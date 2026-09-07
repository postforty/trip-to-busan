import { Letter } from '@/types';

export const mockLetters: Letter[] = [
  {
    id: 'soobyeon-gukbap',
    title: '海風を感じながら食べる、私のソウルフード「スビョン最高テジクッパ」',
    date: '2026.09.05',
    category: 'gourmet',
    region: '広安里 (Gwanganri)',
    imageUrl: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=1000&auto=format&fit=crop',
    summary: '釜山っ子の魂、テジクッパ。広安里の端っこにある私の行きつけを紹介します。臭みがなくクリーミーなスープが絶品です！',
    content: [
      'こんにちは！釜山に住んでいる管理人のドンヒョンです。私は今、日本語を一生懸命勉強しています。このブログは、日本語の練習を兼ねて、私の大好きな釜山の街をお届けするために始めました。',
      '記念すべき最初のお便りは、私のソウルフードである「テジクッパ（豚肉スープご飯）」です。釜山には数え切れないほどのクッパ屋さんがありますが、私が友人を連れて行くなら絶対にここ「スビョン最高テジクッパ（水辺最高テジクッパ）」です。',
      '広安里（クァンアンリ）の海辺の端、民楽（ミルラク）水辺公園の近くにあります。ここの「抗生肉（コギモドゥム）クッパ」は、お肉がとても柔らかくてスープが本当に濃厚です。',
      '【ローカルからのアドバイス】：最初から赤いヤンニョム（タテギ）を混ぜるのではなく、まずスープを一口飲んでみてください。そしてアミの塩辛（セウジョッ）で塩加減を調整するのが本場の食べ方です！おひとり様でも全く気兼ねなく入れますよ。'
    ],
    studyPoint: {
      expression: '行きつけ (いきつけ)',
      meaning: '자주 가는 단골집',
      memo: '「単骨（タンゴル）」を日本語で自然に言うと「行きつけの店」になると勉強しました！'
    },
    placeInfo: {
      koreanName: '수변최고돼지국밥 민락본점',
      katakanaName: 'スビョン・チェゴ・テジクッパ ミンラク・ボンジョム',
      address: '부산 수영구 광안해변로370번길 9-32',
      subway: '地下鉄2号線 広安駅または民楽駅からタクシーで約5分',
      hours: '24時間営業 (年中無休)',
      closedDay: 'なし',
      soloFriendly: 'welcome',
      spicyLevel: 1,
      cardOk: true,
      naverMapUrl: 'https://map.naver.com/p/search/%EC%88%98%EB%B3%80%EC%B5%9C%EA%B3%A0%EB%8F%BC%EC%A7%80%EA%B5%AD%EB%B0%A5',
      googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=수변최고돼지국밥'
    },
    likes: 34
  },
  {
    id: 'shinbalwon-mandu',
    title: '釜山駅前のチャイナタウン。70年続く焼き餃子の名店「新発園」',
    date: '2026.09.02',
    category: 'gourmet',
    region: '釜山駅 (Busan Station)',
    imageUrl: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?q=80&w=1000&auto=format&fit=crop',
    summary: 'KTXを降りたらまずここへ直行！パリッとした皮の中から溢れる肉汁がたまらない、歴史ある中華マンドゥです。',
    content: [
      '釜山駅のすぐ目の前には、異国情緒あふれるチャイナタウンがあります。そこに1951年創業の「新発園（シンバルウォン）」という行列の絶えないお店があります。',
      '名物はパリパリの「焼き餃子（クンマンドゥ）」と、小籠包のように肉汁が飛び出す「肉餃子（コギマンドゥ）」です。テイクアウトしてホテルでビールと一緒に食べるのも最高の贅沢です。',
      '私は高校生の頃から試験が終わるたびにここに来ていました。いつも行列ができていますが、テイクアウトなら比較的すぐ受け取れますよ！'
    ],
    studyPoint: {
      expression: '行列の絶えない (ぎょうれつのたえない)',
      meaning: '줄이 끊이지 않는 (인기 있는)',
      memo: '人気がある店を表現するときにぴったりの慣用句だと知りました。'
    },
    placeInfo: {
      koreanName: '신발원',
      katakanaName: 'シンバルウォン',
      address: '부산 동구 대영로243번길 62',
      subway: '地下鉄1号線 釜山駅 1番出口から徒歩2分',
      hours: '11:00 ~ 20:00 (ラストオーダー 19:20)',
      closedDay: '毎週火曜日',
      soloFriendly: 'welcome',
      spicyLevel: 0,
      cardOk: true,
      naverMapUrl: 'https://map.naver.com/p/search/%EC%8B%A0%EB%B0%9C%EC%9B%90',
      googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=신발원'
    },
    likes: 28
  },
  {
    id: 'shingisup-cafe',
    title: '波の音から離れて。影島の静かな竹林カフェ「シンギスプ (신기숲)」',
    date: '2026.08.28',
    category: 'cafe',
    region: '影島 (Yeongdo)',
    imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1000&auto=format&fit=crop',
    summary: '海で有名な影島ですが、山の中腹腹にひっそりと佇むこのカフェは、大きなガラス窓から見える竹林がまるで絵画のようです。',
    content: [
      '釜山といえば海を思い浮かべる方が多いと思いますが、実は山と森の美しさも格別です。',
      '影島（ヨンド）の山道を少し登ったところにある「シンギスプ」は、静けさを楽しむノーキッズ・ノーWi-Fiカフェです。大きな窓の外一面に広がる竹の葉が風に揺れる音を聞きながら、温かいハンドドリップコーヒーを飲む時間は格別です。',
      '旅の途中で少し疲れたとき、静かに本を読んだり日記を書くのにぴったりの隠れ家スポットです。'
    ],
    studyPoint: {
      expression: 'ひっそりと佇む (ひっそりとたたずむ)',
      meaning: '호젓하게 자리잡고 있는',
      memo: '隠れ家のような静かなカフェを説明する日本語として覚えました！'
    },
    placeInfo: {
      koreanName: '신기숲 (신기스튜디오)',
      katakanaName: 'シンギスプ',
      address: '부산 영도구 와치로 65',
      subway: '南浦駅から6番または9番バスに乗り「チョンハクゴゲ」下車、徒歩3分',
      hours: '12:00 ~ 21:00',
      closedDay: '年中無休',
      soloFriendly: 'welcome',
      spicyLevel: 0,
      cardOk: true,
      naverMapUrl: 'https://map.naver.com/p/search/%EC%8B%A0%EA%B8%B0%EC%88%B2',
      googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=신기숲'
    },
    likes: 42
  },
  {
    id: 'blueline-walk',
    title: 'スカイカプセルに乗らなくても歩ける！青い海沿いの「ミポ鉄道散歩」',
    date: '2026.08.20',
    category: 'walk',
    region: '海雲台・青沙浦 (Haeundae)',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop',
    summary: '人気のヘウンデ・スカイカプセルの真下にある「グリーンレールウェイ」木製デッキ。潮風を感じながら歩く最高の散歩道です。',
    content: [
      '海雲台のブルーラインパークは、最近日本の旅行者の方にも大人気ですね！カラフルなスカイカプセルが有名ですが、実はその真下に整備された遊歩道（グリーンレールウェイ）をご存知ですか？',
      '尾浦（ミポ）から青沙浦（チョンサポ）まで、海を見下ろしながら約2.5kmの木製デッキが続いています。平坦で歩きやすく、夕方に歩くと広安大橋の方向に沈む夕日が息をのむほど美しいです。',
      '青沙浦に着いたら、海が見える展望カフェで一休みするのが私の週末の定番コースです。'
    ],
    studyPoint: {
      expression: '息をのむほど (いきをのむほど)',
      meaning: '숨이 멎을 만큼 (아름다운)',
      memo: '夕日の美しさを表現したくて使ってみました。自然な使い方でしょうか？'
    },
    placeInfo: {
      koreanName: '해운대 그린레일웨이 (미포~청사포 구간)',
      katakanaName: 'ヘウンデ・グリーンレールウェイ (ミポ〜チョンサポ)',
      address: '부산 해운대구 중동 947-1',
      subway: '地下鉄2号線 中洞駅7番出口または海雲台駅から徒歩15分',
      hours: '24時間開放 (夜間もライトアップあり)',
      closedDay: 'なし',
      soloFriendly: 'welcome',
      spicyLevel: 0,
      cardOk: true,
      naverMapUrl: 'https://map.naver.com/p/search/%ED%95%B4%EC%9A%B4%EB%8C%80%20%EA%B7%B8%EB%A6%B0%EB%A0%88%EC%9D%BC%EC%9B%A8%EC%9D%B4',
      googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=해운대그린레일웨이'
    },
    likes: 51
  },
  {
    id: 'kkangtong-market',
    title: '夜風と屋台の熱気。富平カントン夜市場で食べるピビンタンミョン',
    date: '2026.08.12',
    category: 'daily',
    region: '南浦洞 (Nampodong)',
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop',
    summary: '釜山の夜は市場から！活気あふれる屋台通りと、釜山でしか食べられない不思議な麺料理「ピビンタンミョン」の魅力。',
    content: [
      '夜の南浦洞（ナンポドン）に来たら、富平（プピョン）カントン市場の夜市は外せません。夜7時半になると、通りの真ん中にずらりと屋台が現れます。',
      'ここでぜひ試してほしいのが「ピビンタンミョン（混ぜ春雨）」です。茹でた春雨の上に、細切りの練り物（オムク）、たくあん、ニラがのり、甘辛いタレを豪快に混ぜて食べます。素朴ですが、どこか懐かしい釜山の味です。',
      '屋台では現金またはWOWPASS、口座振込が主流なので、千円札（1,000ウォン札や5,000ウォン札）を用意しておくとスムーズですよ！'
    ],
    studyPoint: {
      expression: '豪快に (ごうかいに)',
      meaning: '화끈하게, 거침없이',
      memo: 'タレを勢いよく混ぜる様子を「豪快に混ぜる」と書いてみました！'
    },
    placeInfo: {
      koreanName: '부평깡통야시장',
      katakanaName: 'プピョン・カントン・ヤシジャン',
      address: '부산 중구 부평1길 40',
      subway: '地下鉄1号線 チャガルチ駅3番出口または南浦駅から徒歩8分',
      hours: '夜市 19:30 ~ 23:30 (一般市場は昼から営業)',
      closedDay: '年中無休',
      soloFriendly: 'welcome',
      spicyLevel: 2,
      cardOk: false,
      naverMapUrl: 'https://map.naver.com/p/search/%EB%B6%80%ED%8F%89%EA%B9%A1%ED%86%B5%EC%95%BC%EC%8B%9C%EC%9E%A5',
      googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=부평깡통야시장'
    },
    likes: 39
  }
];
