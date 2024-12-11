"use client";

import { useRouter } from "next/navigation";

const routes = [
  {
    name: "Search",
    path: "/",
  },
  {
    name: "Favorites",
    path: "/favorites",
  },
];

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="w-full max-w-full h-16">
      <div className="flex justify-between p-4">
        <span className="p-4">Logo</span>
        <div className="flex gap-2">
          {routes.map((route) => (
            <span
              key={route.name}
              onClick={() => router.push(route.path)}
              className="flex items-center justify-center cursor-pointer px-4 rounded-md bg-slate-800 hover:bg-slate-700"
            >
              {route.name}
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
