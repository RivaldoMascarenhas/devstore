import { Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href={"/"} className="text-2xl font-extrabold text-white">
          devstore
        </Link>
        <form className="flex items-center bg-zinc-900 px-5 py-3 rounded-full gap-3 w-[20rem] ring-zinc-700">
          <Search className=" w-5 h-5 text-zinc-500" />
          <input
            type="text"
            placeholder="Buscar produtos..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
          />
        </form>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <ShoppingBag className=" h-4 w-4" />
          <span className="text-sm">Cart (0)</span>
        </div>
        <div className="h-4 w-px bg-zinc-700" />
        <Link href={"/"} className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            className="w-6 h-6 rounded-full"
            alt=""
            width={24}
            height={24}
            src={"https:/github.com/rivaldomascarenhas.png"}
          />
        </Link>
      </div>
    </header>
  );
}
