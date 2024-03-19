import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoGrids } from "@/components/VideoGrids";
import { AppBar } from "@/components/AppBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <AppBar />
      <div className="grid  grid-cols-12">
        <div className="col-span-2 flex justify-center">
          sidebar
        </div>
        <div className="col-span-10 pt-5">
          <VideoGrids />
        </div>
      </div>
    </main>
  );
}
