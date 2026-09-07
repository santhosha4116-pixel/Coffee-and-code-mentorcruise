import { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({firstName:"", lastName:"", email:"", phone:""});
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  function validate(values=form) {
    const e={};
    if (!values.firstName.trim()) e.firstName="Name is required."; else if(values.firstName.trim().length<2) e.firstName="Name must be at least 2 characters."; else if(values.firstName.trim().length>30) e.firstName="Name must be under 30 characters.";
    if (!values.lastName.trim()) e.lastName="Last name is required."; else if(values.lastName.trim().length<2) e.lastName="Last name must be at least 2 characters."; else if(values.lastName.trim().length>30) e.lastName="Last name must be under 30 characters.";
    if (!values.email.trim()) e.email="Email is required."; else if(!/^[^\s@]+@gmail\.com$/i.test(values.email.trim())) e.email="Please enter a Gmail address (@gmail.com).";
    if (!/^\d{10}$/.test(values.phone.trim())) e.phone="Phone number must be exactly 10 digits.";
    return e;
  }
  function handleChange(e){ const next={...form,[e.target.name]:e.target.value}; setForm(next); setErrors(validate(next)); setSuccess(false); }
  function submit(e){ e.preventDefault(); const e2=validate(); setErrors(e2); if(Object.keys(e2).length===0){setSuccess(true); setForm({firstName:"",lastName:"",email:"",phone:""});} }
  const valid=Object.keys(validate()).length===0 && Object.values(form).every(v=>v.trim());
  return <div className="page-bg px-4 py-14"><div className="mx-auto max-w-xl"><h1 className="text-center text-3xl font-black sm:text-4xl">Welcome To MentorCruise</h1><form onSubmit={submit} className="mt-8 rounded-3xl border border-[#38bdb0] bg-[#0f3530] p-6 shadow-2xl sm:p-9">{[["firstName","Name","Enter your first name"],["lastName","Last Name","Enter your last name"],["email","Gmail","you@gmail.com"],["phone","Phone Number","Enter 10-digit number"]].map(([name,label,placeholder])=><div key={name} className="mb-5"><label className="mb-2 block font-semibold">{label}:</label><input name={name} value={form[name]} onChange={handleChange} placeholder={placeholder} className={`w-full rounded-xl bg-[#f0dfc4] px-4 py-3 text-[#374151] outline-none ring-2 ${errors[name]?"ring-red-400":"ring-transparent focus:ring-[#38bdb0]"}`} />{errors[name]&&<p className="mt-1 text-sm text-red-300">{errors[name]}</p>}</div>)}<button disabled={!valid} className="w-full rounded-xl bg-[#38bdb0] px-5 py-3 font-bold disabled:cursor-not-allowed disabled:opacity-40">Signup</button>{success&&<p className="mt-5 text-center font-semibold text-[#68d9c4]">✅ Signup successful! Welcome to MentorCruise.</p>}</form></div></div>;
}
