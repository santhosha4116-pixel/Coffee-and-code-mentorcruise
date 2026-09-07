import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import MentorListing from "./pages/MentorListing";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import { technicalMentors, softMentors } from "./data/mentors";

export default function App(){
 return <Routes><Route element={<Layout/>}><Route path="/" element={<Home/>}/><Route path="/courses" element={<Courses/>}/><Route path="/technical" element={<MentorListing mentors={technicalMentors} title="Choose Your Technical Mentor"/>}/><Route path="/soft" element={<MentorListing mentors={softMentors} title="Choose Your Soft Skills Mentor"/>}/><Route path="/mentor/:id" element={<Profile/>}/><Route path="/signup" element={<Signup/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<Home/>}/></Route></Routes>;
}
