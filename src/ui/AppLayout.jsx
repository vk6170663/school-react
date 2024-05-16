import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const gridStyle = "grid grid-cols-[14rem_1fr] h-screen";

export default function AppLayout() {
  return (
    <div className={gridStyle}>
      <Sidebar />
      <Header />
      <main className="h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
