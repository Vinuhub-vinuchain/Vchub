import { Project } from '@/types';

interface Props {
  project: Project;
  style?: React.CSSProperties;
}

export default function ProjectCard({ project, style }: Props) {
  const handleCaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (project.name.includes('$VIR')) {
      e.preventDefault();
      navigator.clipboard.writeText('0x71B4E99547Ad8b307C1313284b4bAc64988C53BB');
      alert('CA copied: 0x71B4E99547Ad8b307C1313284b4bAc64988C53BB');
    }
  };

  return (
    <div
      className="relative bg-[var(--card)] rounded-xl p-6 border border-[var(--border)] transition-all hover:-translate-y-2 hover:shadow-[var(--shadow)] hover:border-[var(--accent)] overflow-hidden"
      style={style}
    >
      {project.isLive && (
        <span className="absolute top-4 left-4 bg-cyan-400 text-black px-3 py-1 font-semibold rounded-full text-xs">
          LIVE
        </span>
      )}
      {/* Render icon based on string name - add SVG mapping */}
      <svg className="w-12 h-12 mx-auto mb-4 opacity-85 fill-current text-[var(--fg)]" viewBox="0 0 24 24">
        <path d="M12 2L2 7v10c0 5.55 4.48 10.04 10 10.04S22 22.55 22 17V7l-10-5z" /> {/* Default; customize per project */}
      </svg>
      <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
      <p className="text-[var(--fg)] opacity-80 mb-4">{project.desc}</p>
      <div className="flex flex-wrap gap-2 justify-center">
        {project.links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border-2 border-[var(--accent)] text-[var(--fg)] rounded-full font-semibold text-sm transition-all hover:bg-[var(--fg)] hover:text-[var(--bg)]"
            onClick={link.label === 'CA' ? handleCaClick : undefined}
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-transparent to-[var(--accent)]" />
    </div>
  );
}
