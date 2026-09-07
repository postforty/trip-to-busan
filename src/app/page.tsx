'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { mockLetters } from '@/data/mockLetters';
import { Category } from '@/types';
import LetterCard from '@/components/letters/LetterCard';
import CategoryFilter from '@/components/letters/CategoryFilter';
import { Search, MessageSquareText, BookOpen, HelpCircle, Heart, Sparkles } from 'lucide-react';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [soloFilter, setSoloFilter] = useState(false);
  const [nonSpicyFilter, setNonSpicyFilter] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // 필터링 로직
  const filteredLetters = useMemo(() => {
    return mockLetters.filter((letter) => {
      // 카테고리
      if (selectedCategory !== 'all' && letter.category !== selectedCategory) {
        return false;
      }
      // 혼밥 필터
      if (soloFilter && letter.placeInfo?.soloFriendly !== 'welcome') {
        return false;
      }
      // 안 매운 음식 필터 (0 또는 1)
      if (nonSpicyFilter && (letter.placeInfo?.spicyLevel ?? 0) > 1) {
        return false;
      }
      // 검색어
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchTitle = letter.title.toLowerCase().includes(query);
        const matchSummary = letter.summary.toLowerCase().includes(query);
        const matchRegion = letter.region.toLowerCase().includes(query);
        const matchKorean = letter.placeInfo?.koreanName.toLowerCase().includes(query) ?? false;
        const matchKatakana = letter.placeInfo?.katakanaName.toLowerCase().includes(query) ?? false;
        if (!matchTitle && !matchSummary && !matchRegion && !matchKorean && !matchKatakana) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, soloFilter, nonSpicyFilter, searchQuery]);

  return (
    <div className="px-4 pt-4 space-y-6">
      {/* 웰컴 인트로 배너 */}
      <section className="bg-gradient-to-br from-[#FAF0E6] to-[#FFF9F2] rounded-3xl p-5 border border-[#F4DDD4] relative overflow-hidden">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/80 backdrop-blur-sm rounded-full text-[10px] font-bold text-[#E07A5F] mb-2.5 border border-[#F4DDD4]">
            <Sparkles className="w-3 h-3 text-[#D97706]" />
            <span>부산 토박이의 일본어 학습 & 로컬 편지</span>
          </div>

          <h1 className="text-lg font-black text-[#2D3748] tracking-tight leading-snug mb-1.5">
            釜山在住の私が届ける、<br />
            ローカル旅のお便り 📮
          </h1>
          <p className="text-xs text-[#718096] leading-relaxed">
            日本語を勉強中の釜山っ子が、本当におすすめしたい行きつけのお店や散歩道を日本語で綴っています。不自然な表現があればぜひ教えてください！
          </p>
        </div>
      </section>

      {/* 검색창 */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="料理名、エリア（広安里、海雲台など）で検索..."
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#EDE8E1] rounded-2xl text-xs focus:outline-none focus:ring-2 focus:ring-[#E07A5F]/20 focus:border-[#E07A5F] card-shadow"
        />
      </div>

      {/* 카테고리 및 필터 */}
      <CategoryFilter
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        soloFilter={soloFilter}
        onToggleSoloFilter={() => setSoloFilter(!soloFilter)}
        nonSpicyFilter={nonSpicyFilter}
        onToggleNonSpicyFilter={() => setNonSpicyFilter(!nonSpicyFilter)}
      />

      {/* 편지 아티클 목록 */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-[#2D3748]">
            届いたお便り ({filteredLetters.length}件)
          </h2>
          {(selectedCategory !== 'all' || soloFilter || nonSpicyFilter || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSoloFilter(false);
                setNonSpicyFilter(false);
                setSearchQuery('');
              }}
              className="text-[11px] text-[#E07A5F] hover:underline"
            >
              条件をクリア
            </button>
          )}
        </div>

        {filteredLetters.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 text-center border border-[#EDE8E1] space-y-2">
            <p className="text-sm text-gray-500">条件に合うお便りが見つかりませんでした。</p>
            <p className="text-xs text-gray-400">検索語や絞り込み条件を変えてみてください。</p>
          </div>
        ) : (
          filteredLetters.map((letter) => (
            <LetterCard key={letter.id} letter={letter} />
          ))
        )}
      </section>

      {/* 실전 여행 도우미 바로가기 카드 배너 */}
      <section className="pt-4 border-t border-[#EDE8E1] space-y-2.5">
        <h3 className="text-xs font-bold text-[#718096] uppercase tracking-wider">
          旅のお役立ちコーナー
        </h3>

        <div className="grid grid-cols-2 gap-2.5">
          <Link
            href="/phrases"
            className="p-3.5 bg-white rounded-2xl border border-[#EDE8E1] card-shadow card-hover flex flex-col justify-between"
          >
            <div>
              <div className="w-8 h-8 rounded-xl bg-[#FAF0E6] flex items-center justify-center text-[#E07A5F] mb-2">
                <MessageSquareText className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-[#2D3748] mb-0.5">
                指差し会話カード
              </h4>
              <p className="text-[10px] text-[#718096]">
                食堂で画面を見せるだけ！音声発音つき
              </p>
            </div>
            <span className="text-[10px] font-bold text-[#E07A5F] mt-2 block">
              使ってみる →
            </span>
          </Link>

          <Link
            href="/dialects"
            className="p-3.5 bg-white rounded-2xl border border-[#EDE8E1] card-shadow card-hover flex flex-col justify-between"
          >
            <div>
              <div className="w-8 h-8 rounded-xl bg-[#E8F5E9] flex items-center justify-center text-[#2E7D32] mb-2">
                <BookOpen className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-[#2D3748] mb-0.5">
                釜山方言ノート
              </h4>
              <p className="text-[10px] text-[#718096]">
                「단디 해라」「밥 뭇나」現地のリアル言葉
              </p>
            </div>
            <span className="text-[10px] font-bold text-[#2E7D32] mt-2 block">
              見てみる →
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
