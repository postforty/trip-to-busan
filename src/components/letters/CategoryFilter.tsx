'use client';

import React from 'react';
import { Category } from '@/types';
import { Utensils, Coffee, Compass, Sun, LayoutGrid, Check } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
  soloFilter: boolean;
  onToggleSoloFilter: () => void;
  nonSpicyFilter: boolean;
  onToggleNonSpicyFilter: () => void;
}

export default function CategoryFilter({
  selectedCategory,
  onSelectCategory,
  soloFilter,
  onToggleSoloFilter,
  nonSpicyFilter,
  onToggleNonSpicyFilter
}: CategoryFilterProps) {
  const categories = [
    { id: 'all' as Category, label: 'すべて', icon: LayoutGrid },
    { id: 'gourmet' as Category, label: 'グルメ', icon: Utensils },
    { id: 'cafe' as Category, label: 'カフェ', icon: Coffee },
    { id: 'walk' as Category, label: '散歩', icon: Compass },
    { id: 'daily' as Category, label: '日常', icon: Sun }
  ];

  return (
    <div className="space-y-3 mb-5">
      {/* 메인 카테고리 탭 */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl whitespace-nowrap transition-all font-medium ${
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

      {/* 실전 퀵 필터 토글 */}
      <div className="flex items-center gap-2 text-xs">
        <span className="text-[11px] text-[#A0AEC0] font-medium">絞り込み:</span>
        <button
          onClick={onToggleSoloFilter}
          className={`px-2.5 py-1 rounded-lg border text-[11px] font-medium flex items-center gap-1 transition-colors ${
            soloFilter
              ? 'bg-[#E8F5E9] text-[#2E7D32] border-[#A5D6A7]'
              : 'bg-white text-[#718096] border-[#EDE8E1] hover:bg-gray-50'
          }`}
        >
          {soloFilter && <Check className="w-3 h-3" />}
          <span>おひとり様OK</span>
        </button>

        <button
          onClick={onToggleNonSpicyFilter}
          className={`px-2.5 py-1 rounded-lg border text-[11px] font-medium flex items-center gap-1 transition-colors ${
            nonSpicyFilter
              ? 'bg-[#FFF3E0] text-[#E65100] border-[#FFCC80]'
              : 'bg-white text-[#718096] border-[#EDE8E1] hover:bg-gray-50'
          }`}
        >
          {nonSpicyFilter && <Check className="w-3 h-3" />}
          <span>辛くない (辛さ0〜1)</span>
        </button>
      </div>
    </div>
  );
}
