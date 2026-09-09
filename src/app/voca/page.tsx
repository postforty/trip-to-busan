'use client';

import React, { useState, useEffect } from 'react';
import { SavedWord } from '@/types';
import { speakJapanese } from '@/utils/tts';
import {
  Bookmark,
  Volume2,
  RotateCw,
  CheckCircle2,
  Trash2,
  BookOpen
} from 'lucide-react';

export default function VocaPage() {
  const [words, setWords] = useState<SavedWord[]>([]);
  const [activeTab, setActiveTab] = useState<'all' | 'memorized' | 'learning'>('all');
  const [isFlashcardMode, setIsFlashcardMode] = useState(false);
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // 로컬 스토리지에서 저장된 단어 로드
  useEffect(() => {
    try {
      const saved = localStorage.getItem('saved_words');
      if (saved) {
        const parsed = JSON.parse(saved);
        setTimeout(() => setWords(parsed), 0);
      }
    } catch {
      // 무시
    }
  }, []);

  // 단어장 업데이트 저장
  const updateWords = (newWords: SavedWord[]) => {
    setWords(newWords);
    try {
      localStorage.setItem('saved_words', JSON.stringify(newWords));
    } catch {
      // 무시
    }
  };

  // 암기 여부 토글
  const handleToggleMemorized = (id: string) => {
    const updated = words.map((w) =>
      w.id === id ? { ...w, isMemorized: !w.isMemorized } : w
    );
    updateWords(updated);
  };

  // 단어 삭제
  const handleDeleteWord = (id: string) => {
    const updated = words.filter((w) => w.id !== id);
    updateWords(updated);
    if (flashcardIndex >= updated.length && updated.length > 0) {
      setFlashcardIndex(updated.length - 1);
    }
  };

  // 발음 재생
  const handlePlay = (e: React.MouseEvent, text: string) => {
    e.stopPropagation();
    speakJapanese(text);
  };

  // 필터링된 단어 목록
  const filteredWords = words.filter((w) => {
    if (activeTab === 'memorized') return w.isMemorized;
    if (activeTab === 'learning') return !w.isMemorized;
    return true;
  });

  const currentFlashcard = filteredWords[flashcardIndex];

  return (
    <div className="px-4 pt-4 space-y-5">
      {/* 헤더 인트로 */}
      <section className="bg-gradient-to-br from-[#FAF0E6] to-[#FFF9F2] rounded-3xl p-5 border border-[#F4DDD4]">
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#E07A5F]">
            <Bookmark className="w-4 h-4" />
            <span>나만의 일본어 보카</span>
          </div>

          {filteredWords.length > 0 && (
            <button
              onClick={() => {
                setIsFlashcardMode(!isFlashcardMode);
                setIsFlipped(false);
                setFlashcardIndex(0);
              }}
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#E07A5F] hover:bg-[#D0694E] text-white rounded-xl text-xs font-bold transition-all active:scale-95 shadow-sm"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>{isFlashcardMode ? '목록으로 보기' : '플래시카드 암기'}</span>
            </button>
          )}
        </div>

        <h1 className="text-lg font-black text-[#2D3748] tracking-tight mb-1.5">
          내 단어장 ({words.length}개)
        </h1>
        <p className="text-xs text-[#718096] leading-relaxed">
          데일리 학습에서 저장한 어휘와 표현을 복습하고, 플래시카드로 완벽하게 암기하세요.
        </p>
      </section>

      {/* 탭 필터 (전체 / 학습 중 / 암기 완료) */}
      <div className="flex items-center gap-2 text-xs">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-3 py-1.5 rounded-xl font-medium transition-all ${
            activeTab === 'all'
              ? 'bg-[#2D3748] text-white font-bold'
              : 'bg-white text-gray-500 border border-[#EDE8E1] hover:bg-gray-50'
          }`}
        >
          전체 ({words.length})
        </button>
        <button
          onClick={() => setActiveTab('learning')}
          className={`px-3 py-1.5 rounded-xl font-medium transition-all ${
            activeTab === 'learning'
              ? 'bg-[#2D3748] text-white font-bold'
              : 'bg-white text-gray-500 border border-[#EDE8E1] hover:bg-gray-50'
          }`}
        >
          학습 중 ({words.filter((w) => !w.isMemorized).length})
        </button>
        <button
          onClick={() => setActiveTab('memorized')}
          className={`px-3 py-1.5 rounded-xl font-medium transition-all ${
            activeTab === 'memorized'
              ? 'bg-[#2D3748] text-white font-bold'
              : 'bg-white text-gray-500 border border-[#EDE8E1] hover:bg-gray-50'
          }`}
        >
          암기 완료 ({words.filter((w) => w.isMemorized).length})
        </button>
      </div>

      {/* 단어장이 비어있는 경우 */}
      {filteredWords.length === 0 ? (
        <div className="bg-white rounded-3xl p-10 text-center border border-[#EDE8E1] space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-[#FAF0E6] flex items-center justify-center mx-auto text-[#E07A5F]">
            <BookOpen className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-[#2D3748]">저장된 단어가 없습니다</h3>
            <p className="text-xs text-gray-400">
              데일리 학습 카드에서 북마크 아이콘을 눌러 단어를 추가해보세요.
            </p>
          </div>
        </div>
      ) : isFlashcardMode ? (
        /* 플래시카드 암기 모드 */
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-gray-400 px-1">
            <span>진행률: {flashcardIndex + 1} / {filteredWords.length}</span>
            <span>카드를 터치하면 뒤집힙니다</span>
          </div>

          {currentFlashcard && (
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className="min-h-64 bg-white rounded-3xl p-8 border border-[#EDE8E1] card-shadow cursor-pointer flex flex-col justify-between items-center text-center transition-all hover:border-[#E07A5F]/50 select-none"
            >
              <div className="w-full flex justify-between items-center text-gray-400 text-xs">
                <span className="border border-gray-200 px-2 py-0.5 rounded text-[10px]">
                  {currentFlashcard.partOfSpeech}
                </span>
                <button
                  onClick={(e) => handlePlay(e, currentFlashcard.kanji)}
                  className="p-2 rounded-full hover:bg-gray-100 text-gray-600"
                  title="발음 듣기"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>

              {!isFlipped ? (
                /* 앞면: 일본어 한자 및 요미가나 */
                <div className="space-y-2 my-auto">
                  <p className="text-sm text-gray-400 font-mono">
                    {currentFlashcard.reading}
                  </p>
                  <h2 className="text-3xl font-black text-[#2D3748] tracking-tight">
                    {currentFlashcard.kanji}
                  </h2>
                  <p className="text-[11px] text-[#E07A5F] pt-2">
                    터치하여 뜻 확인하기
                  </p>
                </div>
              ) : (
                /* 뒷면: 한국어 뜻 */
                <div className="space-y-2 my-auto">
                  <h2 className="text-2xl font-black text-[#E07A5F]">
                    {currentFlashcard.meaning}
                  </h2>
                  <p className="text-xs text-gray-400 font-mono">
                    {currentFlashcard.kanji} ({currentFlashcard.reading})
                  </p>
                </div>
              )}

              <div className="w-full flex justify-between items-center pt-4 border-t border-gray-100">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleToggleMemorized(currentFlashcard.id);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                    currentFlashcard.isMemorized
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : 'bg-gray-50 text-gray-500 border border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{currentFlashcard.isMemorized ? '외웠어요' : '아직 외우는 중'}</span>
                </button>

                <div className="flex gap-1.5">
                  <button
                    disabled={flashcardIndex === 0}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsFlipped(false);
                      setFlashcardIndex((prev) => Math.max(0, prev - 1));
                    }}
                    className="px-3 py-1.5 bg-gray-50 disabled:opacity-30 rounded-xl text-xs border border-gray-200 font-medium"
                  >
                    이전
                  </button>
                  <button
                    disabled={flashcardIndex === filteredWords.length - 1}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsFlipped(false);
                      setFlashcardIndex((prev) => Math.min(filteredWords.length - 1, prev + 1));
                    }}
                    className="px-3 py-1.5 bg-[#2D3748] disabled:opacity-30 text-white rounded-xl text-xs font-bold"
                  >
                    다음
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* 일반 리스트 뷰 */
        <div className="space-y-2">
          {filteredWords.map((word) => (
            <div
              key={word.id}
              className="bg-white rounded-2xl p-4 border border-[#EDE8E1] card-shadow flex items-center justify-between gap-3 text-xs"
            >
              <div className="flex items-center gap-2.5">
                <button
                  onClick={(e) => handlePlay(e, word.kanji)}
                  className="p-2 rounded-xl bg-[#FBF9F5] border border-[#EDE8E1] text-gray-500 hover:text-[#E07A5F]"
                  title="발음 듣기"
                >
                  <Volume2 className="w-4 h-4" />
                </button>

                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-sm font-bold text-[#2D3748]">{word.kanji}</span>
                    <span className="text-[11px] text-gray-400 font-mono">({word.reading})</span>
                    <span className="text-[9px] text-gray-400 border border-gray-200 px-1 rounded">
                      {word.partOfSpeech}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mt-0.5">{word.meaning}</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => handleToggleMemorized(word.id)}
                  className={`p-1.5 rounded-lg border transition-all ${
                    word.isMemorized
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                      : 'bg-gray-50 text-gray-400 border-gray-200 hover:bg-gray-100'
                  }`}
                  title={word.isMemorized ? '암기 완료' : '학습 중'}
                >
                  <CheckCircle2 className="w-4 h-4" />
                </button>

                <button
                  onClick={() => handleDeleteWord(word.id)}
                  className="p-1.5 rounded-lg border border-gray-200 text-gray-400 hover:text-red-500 hover:border-red-200 transition-colors"
                  title="삭제"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
