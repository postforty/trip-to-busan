'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mail, MessageSquareText, BookOpen, HelpCircle } from 'lucide-react';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    {
      label: 'お便り',
      sublabel: 'Letters',
      href: '/',
      icon: Mail,
      active: pathname === '/' || pathname.startsWith('/letters')
    },
    {
      label: '指差し会話',
      sublabel: 'Phrases',
      href: '/phrases',
      icon: MessageSquareText,
      active: pathname.startsWith('/phrases')
    },
    {
      label: '方言ノート',
      sublabel: 'Dialect',
      href: '/dialects',
      icon: BookOpen,
      active: pathname.startsWith('/dialects')
    },
    {
      label: '質問箱',
      sublabel: 'Q&A',
      href: '/qa',
      icon: HelpCircle,
      active: pathname.startsWith('/qa')
    }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#EDE8E1] py-1.5 px-4">
      <div className="max-w-xl mx-auto flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.active;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
                isActive
                  ? 'text-[#E07A5F] font-bold'
                  : 'text-[#718096] hover:text-[#2D3748]'
              }`}
            >
              <div
                className={`p-1 rounded-full transition-transform ${
                  isActive ? 'scale-110 bg-[#FAF0E6]' : ''
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-[10px] mt-0.5 tracking-tight">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
