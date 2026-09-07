import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Compass, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="page-bg">
      <section className="container-main grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
        <div>
          <span className="inline-flex rounded-full border border-[#4aa99a] bg-[#153e36] px-4 py-2 text-sm font-semibold text-[#9cebdd]">Find your perfect mentor</span>
          <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">Connect With the World's <span className="text-[#68d9c4]">Greatest Mentors</span></h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">Profit from short response times and guaranteed video calls from top industry mentors. Get the extra support you need to move your career forward.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/courses" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#58bba7] px-6 py-3 font-bold text-[#052017] hover:bg-[#68d9c4]">Explore Courses <ArrowRight size={18}/></Link>
            <Link to="/signup" className="rounded-xl border border-white/20 px-6 py-3 text-center font-bold hover:bg-white/10">Create Account</Link>
          </div>
          <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 text-center">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4"><Users className="mx-auto mb-2 text-[#68d9c4]"/><strong className="block text-xl">20+</strong><span className="text-xs text-white/60">Mentors</span></div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4"><Compass className="mx-auto mb-2 text-[#68d9c4]"/><strong className="block text-xl">5</strong><span className="text-xs text-white/60">Skill areas</span></div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4"><CheckCircle2 className="mx-auto mb-2 text-[#68d9c4]"/><strong className="block text-xl">5.0</strong><span className="text-xs text-white/60">Top rating</span></div>
          </div>
        </div>
        <div className="space-y-5">
          <img src="/assets/home/27.png" alt="Mentor connection" className="w-full rounded-3xl border border-white/10 shadow-2xl" />
          <img src="/assets/home/28.png" alt="Expert mentors" className="ml-auto w-4/5 rounded-3xl border border-white/10 shadow-2xl" />
        </div>
      </section>
    </div>
  );
}
