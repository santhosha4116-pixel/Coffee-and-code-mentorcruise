import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Home", "/"],
    ["Course", "/courses"],
    ["Signup", "/signup"],
    ["Contact Us", "/contact"],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#052017]/95 backdrop-blur">
      <div className="container-main flex min-h-[78px] items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/assets/logo.png" alt="MentorCruise logo" className="h-12 w-12 object-contain" />
          <span className="text-xl font-bold sm:text-2xl">MentorCruise</span>
        </Link>

        <nav className="hidden items-center gap-8 font-semibold md:flex">
          {links.map(([label, to]) => (
            <NavLink key={to} to={to} className={({isActive}) => `nav-link ${isActive ? "active" : ""}`}>
              {label}
            </NavLink>
          ))}
        </nav>

        <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="rounded-lg p-2 hover:bg-white/10 md:hidden">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-[#17483f] md:hidden">
          <div className="container-main flex flex-col gap-2 py-4">
            {links.map(([label, to]) => (
              <NavLink key={to} to={to} onClick={() => setOpen(false)} className="rounded-lg px-4 py-3 font-semibold hover:bg-white/10">{label}</NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
