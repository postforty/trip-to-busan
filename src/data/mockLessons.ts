import { DailyLesson } from '@/types';

export const mockLessons: DailyLesson[] = [
  {
    id: 'lesson-day-1',
    dayNumber: 1,
    seriesTitle: '식당 실전 일본어 편',
    themeTitle: '식당에서 자연스럽게 주문하기',
    keyExpression: {
      japanese: '〜でお願いできますか',
      reading: '〜でおねがいできますか',
      korean: '〜로 부탁드려도 될까요?'
    },
    dialogue: [
      {
        speaker: '손님 (나)',
        japanese: 'すみません、テジクッパ一つ、タテギ抜きでお願いできますか？',
        korean: '저기요, 돼지국밥 하나, 다대기 빼고 부탁드려도 될까요?'
      },
      {
        speaker: '점원',
        japanese: 'はい、かしこまりました。タテギは別添えにいたしますね。',
        korean: '네, 잘 알겠습니다. 다대기는 따로 담아 드릴게요.'
      },
      {
        speaker: '손님 (나)',
        japanese: '助かります。ありがとうございます！',
        korean: '감사합니다. 고맙습니다!'
      }
    ],
    grammar: {
      title: '명사 + で + お願いできますか',
      structure: '명사 + で + お願いできますか (또는 가능형 動詞て形 + いただけますか)',
      explanation: '단순히 "〜をください(〜를 주세요)"라고 명령조에 가깝게 요구하기보다, "〜로 부탁드려도 될까요?"라며 상대방의 상황을 배려하는 매우 공손하고 자연스러운 의뢰 표현입니다.',
      comparison: '〜をください는 직설적이고 조금 사무적일 수 있으나, 〜でお願いできますか는 음식점 및 카페에서 원어민들이 가장 애용하는 정중한 표현입니다.'
    },
    vocabulary: [
      {
        id: 'v1',
        kanji: '別添え',
        reading: 'べつぞえ',
        meaning: '따로 곁들임, 따로 담음',
        partOfSpeech: '명사'
      },
      {
        id: 'v2',
        kanji: '抜き',
        reading: 'ぬき',
        meaning: '뺌, 제외함',
        partOfSpeech: '명사'
      },
      {
        id: 'v3',
        kanji: '助かる',
        reading: 'たすかる',
        meaning: '도움이 되다, 다행이다',
        partOfSpeech: '동사'
      }
    ],
    nuanceTip: '식당에서 특정 양념을 빼달라고 할 때는 단어 뒤에 "抜きで(누키데)"를 붙이면 됩니다. 예: 와사비 빼고(わさび抜きで), 파 빼고(ネギ抜きで).',
    relatedLetterId: 'soobyeon-gukbap'
  },
  {
    id: 'lesson-day-2',
    dayNumber: 2,
    seriesTitle: '식당 실전 일본어 편',
    themeTitle: '맛과 식감의 미묘한 차이 표현하기',
    keyExpression: {
      japanese: 'さっぱりしていてコクがある',
      reading: 'さっぱりしていてこくがある',
      korean: '깔끔하면서도 깊은 감칠맛이 있다'
    },
    dialogue: [
      {
        speaker: '친구',
        japanese: 'スープの味はどう？脂っこくない？',
        korean: '국물 맛 어때? 기름지지 않아?'
      },
      {
        speaker: '나',
        japanese: '全然！さっぱりしているのに、豚骨のコクがしっかりあるよ。',
        korean: '전혀! 담백하고 깔끔한데, 돼지 뼈의 깊은 맛이 제대로 살아있어.'
      },
      {
        speaker: '친구',
        japanese: '評判通りだね。箸が止まらないよ。',
        korean: '소문대로네. 젓가락을 멈출 수가 없어.'
      }
    ],
    grammar: {
      title: '형용사 て형 + て + 형용사/구',
      structure: '형용사 어간 + くて / 형용동사 어간 + で + 후속 절',
      explanation: '두 가지 이상의 감각이나 성질을 나열할 때 사용합니다. 특히 맛을 묘사할 때 상반되는 긍정적 뉘앙스(깔끔함과 진한 깊은 맛)를 조화롭게 연결할 때 자주 쓰입니다.',
      comparison: '単に "おいしい"라고만 하기보다는 구체적인 식감(さっぱり, こってり, もちもち)을 덧붙이면 훨씬 풍부한 일본어가 됩니다.'
    },
    vocabulary: [
      {
        id: 'v4',
        kanji: '脂っこい',
        reading: 'あぶらっこい',
        meaning: '기름지다, 느끼하다',
        partOfSpeech: '형용사'
      },
      {
        id: 'v5',
        kanji: 'コク',
        reading: 'こく',
        meaning: '깊은 맛, 감칠맛, 풍미',
        partOfSpeech: '명사'
      },
      {
        id: 'v6',
        kanji: '評判通り',
        reading: 'ひょうばんどおり',
        meaning: '소문대로, 명성 그대로',
        partOfSpeech: '부사/명사'
      }
    ],
    nuanceTip: 'さっぱり는 뒷맛이 개운하고 산뜻할 때, こってり는 양념이나 국물이 진하고 걸쭉할 때 씁니다.',
    relatedLetterId: 'soobyeon-gukbap'
  },
  {
    id: 'lesson-day-3',
    dayNumber: 3,
    seriesTitle: '식당 실전 일본어 편',
    themeTitle: '식사 계산과 분할 결제 요청하기',
    keyExpression: {
      japanese: 'お会計、別々でお願いできますか',
      reading: 'おかいけい、べつべつでおねがいできますか',
      korean: '계산, 각자 따로 부탁드려도 될까요?'
    },
    dialogue: [
      {
        speaker: '손님 (나)',
        japanese: 'ごちそうさまでした。お会計、別々でお願いできますか？',
        korean: '잘 먹었습니다. 계산 각자 따로 부탁드려도 될까요?'
      },
      {
        speaker: '점원',
        japanese: '申し訳ありません、混雑時はまとめてのお支払いをお願いしております。',
        korean: '죄송합니다, 혼잡 시간대에는 일괄 결제를 부탁드리고 있습니다.'
      },
      {
        speaker: '손님 (나)',
        japanese: 'あ、分かりました。じゃあカードでまとめて払いますね。',
        korean: '아, 알겠습니다. 그럼 카드로 한꺼번에 결제할게요.'
      }
    ],
    grammar: {
      title: '명사 + で (상태나 수단의 で)',
      structure: '別々(각자) + で / まとめて(모아서) + お支払い',
      explanation: '지불 방식이나 인원 구분을 나타낼 때 조사 で를 사용합니다. 각자 계산할 때는 "別々で", 일괄 계산할 때는 "まとめて"를 씁니다.',
      comparison: '割り勘(わりかん)은 친구들끼리 "더치페이하자"고 할 때 쓰고, 가게 점원에게 결제를 요청할 때는 "別々で"라고 말합니다.'
    },
    vocabulary: [
      {
        id: 'v7',
        kanji: '会計',
        reading: 'かいけい',
        meaning: '계산, 지불',
        partOfSpeech: '명사'
      },
      {
        id: 'v8',
        kanji: '混雑時',
        reading: 'こんざつじ',
        meaning: '혼잡할 때, 붐비는 시간',
        partOfSpeech: '명사'
      },
      {
        id: 'v9',
        kanji: 'まとめて',
        reading: 'まとめて',
        meaning: '한꺼번에, 모아서',
        partOfSpeech: '부사'
      }
    ],
    nuanceTip: '일본의 소규모 식당이나 피크 타임에는 각자 결제가 어려운 경우가 있으므로, 먼저 가능 여부를 공손히 묻는 것이 좋습니다.',
    relatedLetterId: 'shinbalwon-mandu'
  }
];
