import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#031c18] text-white">
      <Navbar />
      <main><Outlet /></main>
      <Footer />
    </div>
  );
}
