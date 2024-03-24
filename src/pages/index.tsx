import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoGrids } from "@/components/VideoGrids";
import { AppBar } from "@/components/AppBar";
import { Sidebar } from "@/components/Sidebar";
import {  Tags } from '@/components/Tags'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="font-sans">
      <AppBar />
      <div className="grid  grid-cols-12 px-2">
        <div className="col-span-2 pr-10">
          <Sidebar/>
        </div>
        <div className="col-span-10">
          <Tags/>
          <VideoGrids />
        </div>
      </div>
    </main>
  );
}
