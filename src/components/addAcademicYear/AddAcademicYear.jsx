import { RxCross2 } from "react-icons/rx";

export default function AddAcademicYear({ OnClick }) {
  return (
    <>
      {/* <div className="h-screen w-full fixed top-0 -left-0 blur-sm z-[100]"></div> */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-12 bg-gray-400 z-[999] ">
        <button
          onClick={OnClick}
          className=" rounded-sm  px-1 fixed top-4 right-4 "
        >
          <RxCross2 />
        </button>
        <div className=" flex items-center gap-4">
          <label className="text-gray-500">Add Academic Year</label>
          <input className="p-1" type="text" placeholder="Format: 2024-25" />
        </div>
      </div>
    </>
  );
}
