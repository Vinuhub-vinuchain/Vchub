'use client';

import { useState, useMemo } from 'react';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import NavTabs from '@/components/NavTabs';
import SearchBar from '@/components/SearchBar';
import ProjectCard from '@/components/ProjectCard';

import type { Project, TabKey } from '@/types';

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>('upcoming');
  const [searchTerm, setSearchTerm] = useState('');

  const projects: Record<TabKey, Project[]> = {
    audited: [
      {
        id: 'audited1',
        name: 'Coming Soon',
        desc: 'First audited projects launching Q1 2026.',
        icon: 'lock',
        isLive: false,
        links: [
          {
            label: 'Request Audit',
            url: 'https://t.me/lnF0xbtc',
          },
        ],
      },
    ],

    upcoming: [
      {
        id: 'upcoming1',
        name: 'VinuHub',
        desc:
          'All-in-one: Token Creator, Locker, Staking, Launchpad, DEX, VNS. Presale soon.',
        icon: 'hub',
        isLive: false,
        links: [
          { label: 'Website', url: 'https://vinuhub.xyz' },
          { label: 'Telegram', url: 'https://t.me/Vinuhub' },
        ],
      },
      {
        id: 'upcoming2',
        name: 'VinuRepublic ($VIR)',
        desc:
          'Community-driven utility token on VinuChain. Delegate to #VinuRepublic Node for burns + APR. Presale live!',
        icon: 'republic',
        isLive: false,
        links: [
          { label: 'Website', url: 'http://bio.link/vinurepublic' },
          { label: 'Telegram', url: 'https://t.me/VinuRepublic' },
          { label: 'X', url: 'https://x.com/VinuRepublic' },
          {
            label: 'CA',
            url: '#',
            onclick: () => {
              navigator.clipboard.writeText(
                '0x71B4E99547Ad8b307C1313284b4bAc64988C53BB'
              );
              alert('CA copied to clipboard');
            },
          },
        ],
      },
    ],

    launched: [
      {
        id: 'launched1',
        name: 'Vinu Inu ($VINU)',
        desc: 'OG meme token. Live on VinuSwap.',
        icon: 'dog',
        isLive: true,
        links: [
          { label: 'Website', url: 'https://www.vitainu.org/' },
          { label: 'Telegram', url: 'https://t.me/VitaInu' },
        ],
      },
    ],

    live: [
      {
        id: 'live1',
        name: 'VinuSwap',
        desc: 'Zero-fee DEX for all VinuChain tokens.',
        icon: 'arrows-exchange',
        isLive: true,
        links: [{ label: 'Trade', url: 'https://vinuchain.vinuswap.org/' }],
      },
      {
        id: 'live2',
        name: 'CoinFlip',
        desc: 'Fair 50/50 on-chain game.',
        icon: 'circle-dollar',
        isLive: true,
        links: [{ label: 'Play', url: 'https://coinflip.vinuhub.xyz' }],
      },
      {
        id: 'live3',
        name: 'Token Locker',
        desc: 'Lock LP and tokens for trust.',
        icon: 'lock',
        isLive: true,
        links: [{ label: 'Lock', url: 'https://locker.vinuhub.xyz' }],
      },
      {
        id: 'live4',
        name: 'Multi-Token Sender',
        desc: 'Airdrop to thousands in one tx.',
        icon: 'paper-plane',
        isLive: true,
        links: [{ label: 'Send', url: 'https://multitokenender.vinuhub.xyz' }],
      },
      {
        id: 'live5',
        name: 'Portfolio Tracker',
        desc: 'Track all your assets in one place.',
        icon: 'chart-line',
        isLive: true,
        links: [{ label: 'Track', url: 'https://portfoliotracker.vinuhub.xyz' }],
      },
      {
        id: 'live6',
        name: 'Stake $VIN',
        desc: 'Stake native $VIN for rewards.',
        icon: 'plant',
        isLive: true,
        links: [{ label: 'Stake', url: 'https://stakevin.vinuhub.xyz' }],
      },
      {
        id: 'live7',
        name: 'Staking Pools',
        desc: 'Farm LP and earn $VINU.',
        icon: 'swimming-pool',
        isLive: true,
        links: [{ label: 'Farm', url: 'https://stakingpools.vinuhub.xyz' }],
      },
      {
        id: 'live8',
        name: 'Token Creator',
        desc: 'Create ERC-20 in 60 seconds.',
        icon: 'sparkles',
        isLive: true,
        links: [{ label: 'Create', url: 'https://tokencreator.vinuhub.xyz' }],
      },
      {
        id: 'live9',
        name: 'VNS Naming',
        desc: 'Register yourname.vc',
        icon: 'tag',
        isLive: true,
        links: [{ label: 'Register', url: 'https://vns.vinuhub.xyz' }],
      },
    ],
  };

  const filteredProjects = useMemo(() => {
    return projects[activeTab].filter(
      (p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.desc.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [activeTab, searchTerm]);

  return (
    <>
      <Header />
      <Hero />
      <NavTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="container mx-auto px-4 py-10">
        
        {filteredProjects.length === 0 ? (
          <p className="text-center opacity-60">No projects found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>

{/* <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8">
  {projects.upcoming.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ))}
</div> */}

      <footer className="bg-[var(--border)] py-10 text-center text-sm opacity-75 mt-20">
        <p>
          © 2025{' '}
          <a
            href="https://vinuhub.xyz"
            className="text-[var(--accent)] hover:underline"
          >
            VinuHub
          </a>{' '}
          — All tools live on VinuChain.
          <br />
          <a
            href="https://t.me/Vinuhub"
            className="text-[var(--accent)] hover:underline"
          >
            Join Community
          </a>{' '}
          •{' '}
          <a
            href="https://t.me/lnF0xbtc"
            className="text-[var(--accent)] hover:underline"
          >
            Request Audit
          </a>
        </p>
      </footer>
    </>
  );
}
