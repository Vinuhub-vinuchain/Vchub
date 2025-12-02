'use client';

import { TabKey } from '@/types';

interface Props {
  activeTab: TabKey;
  setActiveTab: (tab: TabKey) => void;
}

export default function NavTabs({ activeTab, setActiveTab }: Props) {
  const tabs: TabKey[] = ['audited', 'upcoming', 'launched', 'live'];

  return (
    <nav className="bg-[var(--border)] p-5 flex justify-center flex-wrap gap-4 rounded-xl mx-4 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-6 py-3 border-2 border-[var(--accent)] text-[var(--fg)] rounded-full font-semibold transition-all ${
            activeTab === tab
              ? 'bg-[var(--fg)] text-[var(--bg)] shadow-lg'
              : 'hover:border-[var(--accent)] hover:shadow-md'
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </nav>
  );
}
