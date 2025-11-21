import Navigation from "@/components/Navigation";
import AboutBg from "./About1.svg";

export default function Index() {
  return (
    <div className="h-screen overflow-hidden relative">
    <img
    src={AboutBg}
    alt=""
    className="fixed inset-0 w-screen h-screen object-cover object-top z-0 pointer-events-none"
    />
      <div className="relative z-10">
        <Navigation />
        <main className="pt-14" />
      </div>
    </div>
  );
}