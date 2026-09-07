import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CalendarDays, Clock3, MapPin, MessageCircle, Star } from "lucide-react";
import { technicalMentors, softMentors } from "../data/mentors";

export default function Profile() {
  const { id } = useParams();
  const mentor = [...technicalMentors, ...softMentors].find(m => m.id === id);

  if (!mentor) return <div className="page-bg px-6 py-20 text-center"><h1 className="text-3xl font-bold">Mentor not found</h1><Link to="/courses" className="mt-5 inline-block text-[#68d9c4]">Back to courses</Link></div>;

  const soft = softMentors.some(m => m.id === id);
  return (
    <div className="page-bg py-10">
      <div className="container-main">
        <Link to={soft ? "/soft" : "/technical"} className="inline-flex items-center gap-2 text-sm font-semibold text-[#68d9c4]"><ArrowLeft size={17}/> Back to mentors</Link>
        <section className="mt-6 overflow-hidden rounded-3xl border border-[#2f776c] bg-[#0d312b] shadow-2xl">
          <div className="grid gap-8 p-6 sm:p-9 lg:grid-cols-[280px_1fr]">
            <div><img src={mentor.image} alt={mentor.name} className="mx-auto aspect-square w-full max-w-[280px] rounded-3xl object-cover" /></div>
            <div>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div><p className="text-sm font-semibold uppercase tracking-wide text-[#68d9c4]">{mentor.course}</p><h1 className="mt-2 text-4xl font-black">{mentor.name}</h1><p className="mt-2 text-xl text-white/65">{mentor.role}</p></div>
                <span className="inline-flex items-center gap-1 rounded-lg bg-[#1f8a70] px-3 py-2 font-bold"><Star size={16} fill="currentColor"/>5.0</span>
              </div>
              <div className="mt-6 grid gap-3 text-sm text-white/70 sm:grid-cols-2">
                {mentor.experience && <p>💼 {mentor.experience}</p>}
                {mentor.location && <p className="inline-flex items-center gap-2"><MapPin size={16}/> {mentor.location.replace("📍 ", "")}</p>}
                {mentor.languages && <p className="inline-flex items-center gap-2"><MessageCircle size={16}/> {mentor.languages.replace("💬 ", "")}</p>}
                <p>🕒 Active Today</p>
              </div>
              <p className="mt-7 text-lg leading-8 text-white/75">{mentor.about || mentor.description}</p>
              <div className="mt-7 flex flex-wrap gap-2"><span className="rounded-full bg-white/10 px-4 py-2 text-sm">{mentor.level}</span><span className="rounded-full bg-white/10 px-4 py-2 text-sm">{mentor.language}</span></div>
            </div>
          </div>
          <div className="grid gap-6 border-t border-white/10 p-6 sm:p-9 lg:grid-cols-3">
            {[
              ["Lite", soft ? "$90 / session" : "$39 / session", "Essential mentorship and a focused learning plan."],
              ["Standard", soft ? "$180 / session" : "$79 / session", "Personalised guidance, project reviews, and chat support."],
              ["Pro", soft ? "$360 / session" : "$149 / session", "Deep-dive sessions with priority guidance and roadmap support."],
            ].map(([plan,price,desc]) => <div key={plan} className="rounded-2xl border border-white/10 bg-white/5 p-6"><p className="font-bold text-[#68d9c4]">{plan}</p><h2 className="mt-2 text-3xl font-black">{price}</h2><p className="mt-3 text-sm leading-6 text-white/60">{desc}</p><button className="mt-5 w-full rounded-xl bg-[#58bba7] px-4 py-3 font-bold text-[#052017] hover:bg-[#68d9c4]">Choose Plan</button></div>)}
          </div>
        </section>

        <section className="mt-7 grid gap-7 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7"><h2 className="text-2xl font-bold">About the mentor</h2><p className="mt-4 leading-7 text-white/65">{mentor.about || mentor.description}</p></div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7"><h2 className="text-2xl font-bold">What mentees say</h2>{(mentor.reviews || []).map((review,i)=><div key={i} className="mt-5 border-b border-white/10 pb-5 last:border-0"><p className="text-[#68d9c4]">★★★★★</p><p className="mt-2 leading-7 text-white/70">{review}</p></div>)}</div>
        </section>

        <section className="mt-7 rounded-3xl border border-white/10 bg-[#0d312b] p-7 text-center"><CalendarDays className="mx-auto text-[#68d9c4]"/><h2 className="mt-3 text-2xl font-bold">Ready to learn with {mentor.name}?</h2><p className="mx-auto mt-2 max-w-xl text-white/60">Send a message or choose a mentorship plan to get started.</p><Link to="/contact" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#58bba7] px-6 py-3 font-bold text-[#052017]">Contact Us <Clock3 size={17}/></Link></section>
      </div>
    </div>
  );
}
