'use client';

import React, { useState } from 'react';
import { mockPhrases } from '@/data/mockPhrases';
import { Phrase } from '@/types';
import {
  Volume2,
  Maximize2,
  X,
  Sparkles,
  Utensils,
  Flame,
  CreditCard,
  Car,
  ShoppingBag
} from 'lucide-react';

export default function PhrasesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [fullscreenPhrase, setFullscreenPhrase] = useState<Phrase | null>(null);
  const [isPlaying, setIsPlaying] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'すべて', icon: Sparkles },
    { id: 'order', label: '注文', icon: Utensils },
    { id: 'spicy', label: '辛さ調整', icon: Flame },
    { id: 'pay', label: '会計', icon: CreditCard },
    { id: 'taxi', label: 'タクシー', icon: Car },
    { id: 'convenience', label: 'マート・その他', icon: ShoppingBag }
  ];

  const filteredPhrases = selectedCategory === 'all'
    ? mockPhrases
    : mockPhrases.filter((p) => p.category === selectedCategory);

  // 한국어 음성 읽어주기 (Web Speech API)
  const handleSpeak = (koreanText: string, id: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // 기존 재생 중지
      const utterance = new SpeechSynthesisUtterance(koreanText);
      utterance.lang = 'ko-KR';
      utterance.rate = 0.9; // 살짝 천천히

      utterance.onstart = () => setIsPlaying(id);
      utterance.onend = () => setIsPlaying(null);
      utterance.onerror = () => setIsPlaying(null);

      window.speechSynthesis.speak(utterance);
    } else {
      alert('お使いのブラウザは音声読み上げに対応していません。');
    }
  };

  return (
    <div className="px-4 pt-4 space-y-5">
      {/* 헤더 인트로 */}
      <section className="bg-[#FAF0E6] rounded-3xl p-5 border border-[#F4DDD4]">
        <div className="flex items-center gap-1.5 text-xs font-bold text-[#E07A5F] mb-1">
          <Sparkles className="w-4 h-4" />
          <span>店員さんに見せるだけ！</span>
        </div>
        <h1 className="text-lg font-black text-[#2D3748] tracking-tight mb-1.5">
          指差し韓国語会話 💬
        </h1>
        <p className="text-xs text-[#718096] leading-relaxed">
          食堂やカフェで困ったときは、この画面をそのまま店員さんに見せてください！右上のスピーカーボタンを押すと韓国語の音声も流れます。
        </p>
      </section>

      {/* 카테고리 탭 */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl whitespace-nowrap font-medium transition-all ${
                isSelected
                  ? 'bg-[#2D3748] text-white shadow-sm'
                  : 'bg-white text-[#718096] border border-[#EDE8E1] hover:bg-gray-50'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#E07A5F]' : ''}`} />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* 회화 카드 리스트 */}
      <div className="space-y-3">
        {filteredPhrases.map((phrase) => (
          <div
            key={phrase.id}
            className="bg-white rounded-2xl p-4 border border-[#EDE8E1] card-shadow flex flex-col justify-between"
          >
            <div>
              {/* 일본어 뜻 */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="text-xs font-bold text-gray-500">
                  {phrase.japanese}
                </span>
                <div className="flex items-center gap-1">
                  {/* TTS 버튼 */}
                  <button
                    onClick={() => handleSpeak(phrase.korean, phrase.id)}
                    className={`p-1.5 rounded-lg border text-xs flex items-center gap-1 transition-colors ${
                      isPlaying === phrase.id
                        ? 'bg-[#FAF0E6] text-[#E07A5F] border-[#E07A5F]'
                        : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
                    }`}
                    title="音声を聞く"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>

                  {/* 확대 버튼 */}
                  <button
                    onClick={() => setFullscreenPhrase(phrase)}
                    className="p-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors"
                    title="拡大して見せる"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* 한글 본문 */}
              <div
                onClick={() => setFullscreenPhrase(phrase)}
                className="cursor-pointer bg-[#FBF9F5] p-3 rounded-xl border border-[#EDE8E1] hover:border-[#E07A5F]/40 transition-colors"
              >
                <p className="text-lg font-black text-[#2D3748] tracking-tight">
                  {phrase.korean}
                </p>
                <p className="text-xs text-[#E07A5F] font-medium mt-0.5">
                  {phrase.pronunciation}
                </p>
              </div>
            </div>

            {/* 실전 팁 */}
            {phrase.tip && (
              <p className="mt-2.5 text-[11px] text-gray-500 leading-relaxed bg-gray-50 p-2 rounded-lg">
                💡 <strong>ワンポイント</strong>：{phrase.tip}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* 화면 확대 모달 (식당 직원에게 스마트폰을 직접 보여줄 때) */}
      {fullscreenPhrase && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col justify-between p-6 animate-in fade-in duration-200">
          <div className="flex items-center justify-between text-white">
            <span className="text-xs opacity-75">店員さんにお見せください</span>
            <button
              onClick={() => setFullscreenPhrase(null)}
              className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="my-auto text-center space-y-6">
            <span className="text-sm font-semibold text-gray-300">
              {fullscreenPhrase.japanese}
            </span>

            <div className="bg-white rounded-3xl p-8 shadow-2xl space-y-3">
              <p className="text-3xl font-black text-[#2D3748] tracking-tight leading-tight">
                {fullscreenPhrase.korean}
              </p>
              <p className="text-sm text-[#E07A5F] font-bold">
                {fullscreenPhrase.pronunciation}
              </p>
            </div>

            <button
              onClick={() => handleSpeak(fullscreenPhrase.korean, fullscreenPhrase.id)}
              className="mx-auto py-3 px-6 bg-[#E07A5F] text-white rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-[#E07A5F]/40 active:scale-95"
            >
              <Volume2 className="w-5 h-5" />
              <span>音声を再生する</span>
            </button>
          </div>

          <div className="text-center text-xs text-gray-400">
            画面のどこかをタップするか、右上の × で閉じます
          </div>
        </div>
      )}
    </div>
  );
}
