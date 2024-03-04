import { data } from "@/data";
import Image from "next/image";
import { GameCtrlBlock, GameListItem, GameTitle } from "./elements";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-zinc-800 pt-12">
      <div className="container ">
        <div className="flex gap-6">
          <aside className="min-h-[calc(100vh-16rem)] min-w-80 space-y-1 overflow-clip rounded bg-zinc-900">
            {data.map((item, key) => {
              return <GameListItem key={key} index={key} item={item} />;
            })}
          </aside>
          <div className="flex-grow p-3">
            <header>
              <GameTitle />
            </header>
            <GameCtrlBlock />
          </div>
        </div>
      </div>
    </main>
  );
}
