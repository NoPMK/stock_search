import Searchbar from "@/components/searchbar";

export default function Home() {
  return (
    <div className="flex min-w-full justify-center min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      {" "}
      <main className="flex w-full justify-center">
        <Searchbar />
      </main>
    </div>
  );
}
