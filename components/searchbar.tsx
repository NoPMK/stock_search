interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function Searchbar({ onSearch }: SearchBarProps) {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value.toLowerCase().trim());
  };

  return (
    <form className="w-full max-w-[500px] relative mt-20">
      <div className="relative">
        <input
          type="search"
          placeholder="Type Here..."
          className="w-full p-4 pr-12 rounded-full bg-slate-800"
          onChange={(e) => handleSearch(e)}
        />
      </div>
    </form>
  );
}
