import { Outlet } from "react-router-dom";
import Header from "./ui/Header";
import Sidebar from "./ui/Sidebar";

export default function AppLayout() {
  return (
    <div className="grid grid-cols-[14rem_1fr] h-screen">
      <Sidebar />
      <Outlet />
      <Header />
    </div>
  );
}
