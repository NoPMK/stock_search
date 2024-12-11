"use client";

import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="w-full max-w-full h-22 fixed bg-slate-900 z-[1000]">
      <div className="flex justify-between p-4">
        <span className="p-4">Logo</span>
        <div className="flex gap-2">
          <span
            onClick={() => router.push("/")}
            className="flex items-center justify-center cursor-pointer px-4 rounded-md bg-slate-800 hover:bg-slate-700"
          >
            Search
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
