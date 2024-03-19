import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoGrids } from '@/components/VideoGrids'
import { AppBar } from '@/components/AppBar'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
     <AppBar/>
        <VideoGrids  />
    </>
       
  );
}
