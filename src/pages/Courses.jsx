import { Link } from "react-router-dom";
import { ArrowRight, Brain, Code2, Palette, Cloud, BriefcaseBusiness } from "lucide-react";

const cards = [
  { title: "Technical Skills", icon: Code2, text: "Build job-ready technical skills with mentors in Full Stack, AI & ML, Python, UI/UX, and AWS Cloud.", to: "/technical" },
  { title: "Soft Skills", icon: BriefcaseBusiness, text: "Improve communication, leadership, collaboration, personal development, and productivity skills.", to: "/soft" },
];

export default function Courses() {
  return (
    <div className="page-bg py-14">
      <section className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-semibold text-[#68d9c4]">COURSES</p>
          <h1 className="mt-2 text-4xl font-black sm:text-5xl">Choose Your Learning Path</h1>
          <p className="mt-4 text-white/65">Select a skill area and find a mentor who matches your level and preferred language.</p>
        </div>
        <div className="mt-12 grid gap-7 md:grid-cols-2">
          {cards.map(({title,icon:Icon,text,to}) => (
            <Link key={to} to={to} className="card-hover rounded-3xl border border-[#2f776c] bg-[#0d312b] p-8 shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#58bba7] text-[#052017]"><Icon/></div>
              <h2 className="mt-6 text-2xl font-bold">{title}</h2>
              <p className="mt-3 leading-7 text-white/65">{text}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-bold text-[#68d9c4]">Explore mentors <ArrowRight size={18}/></span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
