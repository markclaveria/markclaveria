import { Link } from "react-router-dom";
import Header from "@/components/Header";
import groupImage from './Group 25.svg';
import { Group } from "lucide-react";


export default function Education() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="relative pb-12 max-w-[1440px] mx-auto" style={{ padding: "96px 48px 48px" }}>
        <div className="flex justify-center items-center w-full min-h-[570px] px-5">
          <img
            src={groupImage}
            alt="Group 25"
            draggable="false"
            className="w-full max-w-[85%] h-auto object-contain mx-auto mt-[-10%]"
            loading="lazy"
          />
        </div>
      </main>
    </div>
  );
}
