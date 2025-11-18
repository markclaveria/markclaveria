import { Link } from "react-router-dom";
import Header from "@/components/Header";
import groupImage from './Group 20.svg';

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="relative pt-20 sm:pt-16 pb-12 px-4 sm:px-8 lg:px-0 max-w-[1440px] mx-auto">
        <div className="flex justify-center items-center w-full min-h-[570px] px-5">
          <img
            src={groupImage}
            alt="Group 20"
              draggable="false"
            className="w-full max-w-[70%] h-auto object-contain mx-auto mt-[-7%]"
            loading="lazy"
          />
        </div>
      </main>
    </div>
  );
}
