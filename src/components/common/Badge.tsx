import React from 'react';
import { SoloFriendly, SpicyLevel } from '@/types';
import { User, Flame, CreditCard, Banknote } from 'lucide-react';

interface BadgeProps {
  type: 'solo' | 'spicy' | 'card';
  soloValue?: SoloFriendly;
  spicyValue?: SpicyLevel;
  cardValue?: boolean;
}

export default function Badge({ type, soloValue, spicyValue, cardValue }: BadgeProps) {
  if (type === 'solo' && soloValue) {
    if (soloValue === 'welcome') {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#E8F5E9] text-[#2E7D32] border border-[#C8E6C9]">
          <User className="w-3 h-3" />
          おひとり様大歓迎
        </span>
      );
    }
    if (soloValue === 'possible') {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#FFF8E1] text-[#F57F17] border border-[#FFE082]">
          <User className="w-3 h-3" />
          1人でもOK (混雑時除く)
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#FFEBEE] text-[#C62828] border border-[#FFCDD2]">
        <User className="w-3 h-3" />
        2人以上推奨
      </span>
    );
  }

  if (type === 'spicy' && spicyValue !== undefined) {
    const config = {
      0: { label: '辛さなし', bg: 'bg-[#F5F5F5]', text: 'text-[#616161]', border: 'border-[#E0E0E0]' },
      1: { label: 'ピリ辛', bg: 'bg-[#FFF3E0]', text: 'text-[#E65100]', border: 'border-[#FFE0B2]' },
      2: { label: '辛ラーメン程度', bg: 'bg-[#FBE9E7]', text: 'text-[#D84315]', border: 'border-[#FFCCBC]' },
      3: { label: '激辛注意', bg: 'bg-[#FFEBEE]', text: 'text-[#B71C1C]', border: 'border-[#FFCDD2]' },
    }[spicyValue];

    return (
      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium ${config.bg} ${config.text} border ${config.border}`}>
        <Flame className="w-3 h-3" />
        {config.label}
      </span>
    );
  }

  if (type === 'card' && cardValue !== undefined) {
    if (cardValue) {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#E3F2FD] text-[#1565C0] border border-[#BBDEFB]">
          <CreditCard className="w-3 h-3" />
          カードOK
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#FFF3E0] text-[#E65100] border border-[#FFE0B2]">
        <Banknote className="w-3 h-3" />
        現金推奨
      </span>
    );
  }

  return null;
}
