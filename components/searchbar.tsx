import { AiOutlineSearch } from "react-icons/ai";

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
        <button
          className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-900 rounded-full
        hover:bg-slate-700"
        >
          <AiOutlineSearch />
        </button>
      </div>
    </form>
  );
}
