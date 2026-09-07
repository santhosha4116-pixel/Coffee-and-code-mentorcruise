import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import MentorCard from "../components/MentorCard";
import FilterSidebar from "../components/FilterSidebar";

export default function MentorListing({ mentors, title }) {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({ course: [], level: [], language: [] });
  const [page, setPage] = useState(1);
  const limit = 6;

  const options = useMemo(() => {
    const courses = [...new Set(mentors.map(m => m.course))];
    const levels = ["Beginner", "Intermediate", "Advanced"];
    const languages = ["Tamil", "English"];
    return [
      { title: "Course", key: "course", values: courses },
      { title: "Level", key: "level", values: levels },
      { title: "Language", key: "language", values: languages },
    ];
  }, [mentors]);

  const filtered = useMemo(() => {
    const text = search.toLowerCase().trim();
    return mentors.filter(m => {
      const searchMatch = !text || [m.name, m.role, m.course, m.description].join(" ").toLowerCase().includes(text);
      const courseMatch = filters.course.length === 0 || filters.course.includes(m.course);
      const levelMatch = filters.level.length === 0 || filters.level.some(level => m.level.includes(level));
      const languageMatch = filters.language.length === 0 || filters.language.some(lang => m.language.toLowerCase().includes(lang.toLowerCase()));
      return searchMatch && courseMatch && levelMatch && languageMatch;
    });
  }, [mentors, search, filters]);

  const pages = Math.max(1, Math.ceil(filtered.length / limit));
  const visible = filtered.slice((page - 1) * limit, page * limit);
  function changeSearch(value) { setSearch(value); setPage(1); }
  function changeFilters(value) { setFilters(value); setPage(1); }

  return (
    <div className="page-bg py-10">
      <div className="container-main grid gap-7 lg:grid-cols-[280px_1fr]">
        <FilterSidebar filters={filters} onFiltersChange={changeFilters} options={options} />
        <section>
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60" size={20}/>
            <input value={search} onChange={e => changeSearch(e.target.value)} placeholder="Search mentors..." className="w-full rounded-full border border-white/20 bg-[#1f4d3f] py-3 pl-12 pr-5 outline-none focus:border-[#68d9c4]" />
          </div>
          <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="text-sm font-semibold text-[#68d9c4]">MENTORS</p><h1 className="text-3xl font-black sm:text-4xl">{title}</h1></div>
            <p className="text-sm text-white/60">{filtered.length} mentor{filtered.length === 1 ? "" : "s"} found</p>
          </div>
          {visible.length > 0 ? <div className="space-y-7">{visible.map(m => <MentorCard key={m.id} mentor={m}/>)}</div> : <div className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center text-white/65">No mentors match your search or filters.</div>}
          <div className="mt-8 flex items-center justify-center gap-3">
            <button disabled={page === 1} onClick={() => setPage(page - 1)} className="rounded-lg border border-white/15 px-4 py-2 disabled:cursor-not-allowed disabled:opacity-40">Previous</button>
            <span className="rounded-lg bg-[#1f4d3f] px-4 py-2 text-sm">Page {page} of {pages}</span>
            <button disabled={page === pages} onClick={() => setPage(page + 1)} className="rounded-lg border border-white/15 px-4 py-2 disabled:cursor-not-allowed disabled:opacity-40">Next</button>
          </div>
        </section>
      </div>
    </div>
  );
}
