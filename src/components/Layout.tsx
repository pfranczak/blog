import { ReactNode } from "react";
import { Header } from "@/components/Header/Header";
import { Tags } from "@/components/Tags/Tags";
import { Footer } from "@/components/Footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="text-slate-700 relative overflow-x-hidden max-h-screen overflow-y-auto">
      <Header />
      <Tags />
      <main className="content mx-[10vw]">{children}</main>
      <Footer />
    </div>
  )
}