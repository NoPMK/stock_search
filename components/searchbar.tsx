import { AiOutlineSearch } from "react-icons/ai";

export default function Searchbar() {
  return (
    <form className="w-full max-w-[500px] relative">
      <div className="relative">
        <input
          type="search"
          placeholder="Type Here..."
          className="w-full p-4 pr-12 rounded-full bg-slate-800"
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
