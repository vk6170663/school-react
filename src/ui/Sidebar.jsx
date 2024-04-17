import Logo from "./Logo";
import Nav from "./Nav";

export default function Sidebar() {
  return (
    <aside className="row-span-12">
      <div className="flex flex-col px-6 pt-3 bg-gray-700 h-full">
        <Logo />
        <Nav />
      </div>
    </aside>
  );
}
