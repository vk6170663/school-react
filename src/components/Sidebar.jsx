import Logo from "../ui/Logo";
import Nav from "./Nav";

export default function Sidebar() {
  const rowSpan = "row-span-12";

  const sideNav = "flex flex-col px-6 pt-3 bg-gray-700 h-full";

  return (
    <aside className={rowSpan}>
      <div className={sideNav}>
        <Logo />
        <Nav />
      </div>
    </aside>
  );
}
