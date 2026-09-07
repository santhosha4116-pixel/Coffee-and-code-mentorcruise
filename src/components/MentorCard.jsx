import { Link } from "react-router-dom";
import { MapPin, MessageCircle, Star } from "lucide-react";

export default function MentorCard({ mentor }) {
  return (
    <article className="card-hover rounded-2xl border border-[#2f776c] bg-[#eee3d2] p-5 text-[#17352f] shadow-xl sm:p-7">
      <div className="flex flex-col gap-6 sm:flex-row">
        <img src={mentor.image} alt={mentor.name} className="mx-auto h-48 w-48 rounded-2xl border-2 border-[#234b43] object-cover sm:mx-0" />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold text-[#70462c] sm:text-3xl">{mentor.name}</h2>
              <p className="mt-1 text-lg font-medium text-[#8b5e3c]">{mentor.role}</p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-lg bg-[#1f8a70] px-3 py-1 text-sm font-bold text-white"><Star size={15} fill="currentColor" />5.0</span>
          </div>
          <p className="mt-4 text-sm leading-6 text-[#263d38]">{mentor.description}</p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
            <span className="rounded-full bg-[#e8cda6] px-3 py-1">{mentor.course}</span>
            <span className="rounded-full bg-[#e8cda6] px-3 py-1">{mentor.level}</span>
            <span className="rounded-full bg-[#e8cda6] px-3 py-1">{mentor.language}</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-[#36564f]">
            {mentor.location && <span className="inline-flex items-center gap-1"><MapPin size={15}/> {mentor.location.replace("📍 ", "")}</span>}
            {mentor.languages && <span className="inline-flex items-center gap-1"><MessageCircle size={15}/> {mentor.languages.replace("💬 ", "")}</span>}
          </div>
        </div>
      </div>
      <div className="mt-7 flex flex-col gap-4 border-t border-[#c5b9a7] pt-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold">Starting From</p>
          <p className="text-3xl font-light">{mentor.price}</p>
        </div>
        <Link to={`/mentor/${mentor.id}`} className="rounded-xl bg-[#184f46] px-8 py-3 text-center font-semibold text-white transition hover:bg-[#123c36]">View Profile</Link>
      </div>
    </article>
  );
}
