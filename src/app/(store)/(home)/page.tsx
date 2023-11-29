import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href={"/"}
        className="group col-span-6 row-span-6 flex justify-center items-end  bg-zinc-900 rounded-lg overflow-hidden"
      >
        <Image
          className="group-hover:scale-105 transition-all duration-500 "
          alt=""
          width={800}
          height={800}
          src={"/moletom-ai-side.png"}
          quality={100}
        />
      </Link>
      <Link
        href={"/"}
        className="group col-span-3 row-span-3 flex justify-center items-end  bg-zinc-900 rounded-lg overflow-hidden"
      >
        <Image
          className="group-hover:scale-105 transition-all duration-500 "
          alt=""
          width={800}
          height={800}
          quality={100}
          src={"/camiseta-dowhile-2022.png"}
        />
      </Link>
      <Link
        href={"/"}
        className="group col-span-3 row-span-3 flex justify-center items-end  bg-zinc-900 rounded-lg overflow-hidden"
      >
        <Image
          className="group-hover:scale-105 transition-all duration-500 "
          alt=""
          width={800}
          height={800}
          quality={100}
          src={"/moletom-java.png"}
        />
      </Link>
    </div>
  );
}
