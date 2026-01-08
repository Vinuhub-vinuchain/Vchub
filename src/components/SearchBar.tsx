interface Props {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export default function SearchBar({ searchTerm, setSearchTerm }: Props) {
  return (
    <input
      type="text"
      placeholder="Search projects & tools..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full max-w-md mx-auto block p-4 border-2 border-border bg-bg text-fg text-lg rounded-full text-center focus:border-accent transition-colors"
    />
  );
}
