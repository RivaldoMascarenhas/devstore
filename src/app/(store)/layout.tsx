import Header from "@/components/header";
import { ReactNode } from "react";

export default function LayoutStore({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-[1440px] grid-rows-app p-8 gap-5">
      <Header />
      <div> {children}</div>
    </div>
  );
}
