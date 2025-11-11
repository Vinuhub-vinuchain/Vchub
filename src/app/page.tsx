import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import NavTabs from '@/components/NavTabs';
import SearchBar from '@/components/SearchBar';
import ProjectCard from '@/components/ProjectCard';
import { Project, TabKey } from '@/types';

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>('upcoming');
  const [searchTerm, setSearchTerm] = useState('');

  const projects: Record<TabKey, Project[]> = {
    audited: [
      {
        id: 1,
        name: 'Coming Soon',
        desc: 'First audited projects launching Q1 2026.',
        isLive: false,
        links: [{ label: 'Request Audit', url: 'https://t.me/lnF0xbtc' }],
      },
    ],
    upcoming: [
      {
        id: 2,
        name: 'VinuHub',
        desc: 'All-in-one: Token Creator, Locker, Staking, Launchpad, DEX, VNS. Presale soon.',
        isLive: false,
        links: [
          { label: 'Website', url: 'https://vinuhub.xyz' },
          { label: 'Telegram', url: 'https://t.me/Vinuhub' },
        ],
      },
      {
        id: 3,
        name: 'VinuRepublic ($VIR)',
        desc: 'Community-driven utility token on VinuChain. Delegate to #VinuRepublic Node for $VINU/$VC burns + good APR. 21M supply | Renounced | No tax. Presale live!',
        isLive: false,
        links: [
          { label: 'Website', url: 'http://bio.link/vinurepublic' },
          { label: 'Telegram', url: 'https://t.me/VinuRepublic' },
          { label: 'X', url: 'https://x.com/VinuRepublic' },
          { label: 'CA', url: '#' }, // Handle in onclick for copy
        ],
      },
    ],
    launched: [
      {
        id: 4,
        name: 'Vinu Inu ($VINU)',
        desc: 'OG meme token. Live on VinuSwap.',
        isLive: true,
        links: [
          { label: 'Website', url: 'https://www.vitainu.org/' },
          { label: 'Telegram', url: 'https://t.me/VitaInu' },
        ],
      },
    ],
    live: [
      { id: 5, name: 'VinuSwap', desc: 'Zero-fee DEX for all VinuChain tokens.', isLive: true, links: [{ label: 'Trade', url: 'https://vinuchain.vinuswap.org/' }] },
      { id: 6, name: 'CoinFlip', desc: 'Fair 50/50 on-chain game.', isLive: true, links: [{ label: 'Play', url: 'https://coinflip.vinuhub.xyz' }] },
      { id: 7, name: 'Token Locker', desc: 'Lock LP and tokens for trust.', isLive: true, links: [{ label: 'Lock', url: 'https://locker.vinuhub.xyz' }] },
      { id: 8, name: 'Multi-Token Sender', desc: 'Airdrop to thousands in one tx.', isLive: true, links: [{ label: 'Send', url: 'https://multitokenender.vinuhub.xyz' }] },
      { id: 9, name: 'Portfolio Tracker', desc: 'Track all your assets in one place.', isLive: true, links: [{ label: 'Track', url: 'https://portfoliotracker.vinuhub.xyz' }] },
      { id: 10, name: 'Stake $VIN', desc: 'Stake native $VIN for rewards.', isLive: true, links: [{ label: 'Stake', url: 'https://stakevin.vinuhub.xyz' }] },
      { id: 11, name: 'Staking Pools', desc: 'Farm LP and earn $VINU.', isLive: true, links: [{ label: 'Farm', url: 'https://stakingpools.vinuhub.xyz' }] },
      { id: 12, name: 'Token Creator', desc: 'Create ERC-20 in 60 seconds.', isLive: true, links: [{ label: 'Create', url: 'https://tokencreator.vinuhub.xyz' }] },
      { id: 13, name: 'VNS Naming', desc: 'Register yourname.vc', isLive: true, links: [{ label: 'Register', url: 'https://vns.vinuhub.xyz' }] },
    ],
  };

  const filteredProjects = projects[activeTab].filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <Hero />
      <NavTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>
      <footer className="bg-border py-10 text-center text-sm opacity-75 mt-20">
        <p>
          © 2025{' '}
          <a href="https://vinuhub.xyz" className="text-accent hover:underline">
            VinuHub
          </a>{' '}
          — All tools live on VinuChain.
          <br />
          <a href="https://t.me/Vinuhub" className="text-accent hover:underline">
            Join Community
          </a>{' '}
          •{' '}
          <a href="https://t.me/lnF0xbtc" className="text-accent hover:underline">
            Request Audit
          </a>
        </p>
      </footer>
    </>
  );
}
