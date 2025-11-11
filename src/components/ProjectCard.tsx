import { Project } from '@/types';
import { useEffect } from 'react';

interface Props {
  project: Project;
  style?: React.CSSProperties;
}

export default function ProjectCard({ project, style }: Props) {
  useEffect(() => {
    // Trigger animation
  }, []);

  const isLive = project.isLive;
  const caOnClick = (e: React.MouseEvent) => {
    if (project.name.includes('$VIR')) {
      e.preventDefault();
      navigator.clipboard.writeText('0x71B4E99547Ad8b307C1313284b4bAc64988C53BB');
      alert('CA copied: 0x71B4E99547Ad8b307C1313284b4bAc64988C53BB');
    }
  };

  return (
    <div
      className="relative bg-card rounded-xl p-6 border border-border transition-all hover:-translate-y-2 hover:shadow-lg hover:border-accent overflow-hidden"
      style={style}
    >
      {isLive && (
        <span className="absolute top-4 left-4 bg-cyan-400 text-black px-3 py-1 font-semibold rounded-full text-xs">
          LIVE
        </span>
      )}
      {/* Icon placeholder - use SVG */}
      <svg className="w-12 h-12 mx-auto mb-4 opacity-85" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7v10c0 5.55 4.48 10.04 10 10.04S22 22.55 22 17V7l-10-5z" />
      </svg>
      <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
      <p className="text-gray-400 mb-4 opacity-80">{project.desc}</p>
      <div className="flex flex-wrap gap-2 justify-center">
        {project.links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border-2 border-accent text-fg rounded-full font-semibold text-sm transition-all hover:bg-fg hover:text-bg"
            onClick={link.label === 'CA' ? caOnClick : undefined}
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-accent h-1 top-0" />
    </div>
  );
}
