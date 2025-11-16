import { Link } from "react-router-dom";
import Header from "@/components/Header";
import groupImage from './Group 26.svg';


export default function Attachments() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="relative pb-12 max-w-[1440px] mx-auto" style={{ padding: "96px 48px 48px" }}>
        <div className="flex justify-center items-center w-full min-h-[570px] px-5">
          <img
            src={groupImage}
            alt="Group 20"
              draggable="false"
            className="w-full max-w-[85%] h-auto object-contain mx-auto mt-[-8%]"
            loading="lazy"
          />
        </div>
      </main>
    </div>
  );
}
