import Navigation from "@/components/Navigation";
import Achi from "./Achievements.svg";

export default function Achievements() {
  return (
// Unscrollable page + layering context
    <div className="h-screen overflow-hidden relative bg-white">
      {/* Full-viewport SVG background at the very back */}
      <img
        src={Achi}
        alt=""
        className="fixed inset-0 w-screen h-screen object-contain z-0 pointer-events-none bg-white"
      />

      {/* Foreground content above the background */}
      <div className="relative z-10">
        <Navigation />
        <main className="pt-14">
          {/* About section content goes here */}
        </main>
      </div>
    </div>
  );
}