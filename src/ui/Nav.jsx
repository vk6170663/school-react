import { HiOutlineHome, HiOutlinePlus } from "react-icons/hi2";
import { PiStudentFill } from "react-icons/pi";
import { IoIosPeople } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="">
      <ul className="flex flex-col gap-3">
        <li className="">
          <a
            href="#"
            className="flex items-center gap-3 text-gray-400 font-bold"
          >
            <HiOutlineHome />
            <span>Dashboard</span>
          </a>
        </li>
        <li className="">
          <a
            href="#"
            className="flex items-center gap-3 text-gray-400 font-bold mb-2"
          >
            <PiStudentFill />

            <span>Student</span>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </a>
          <ul className="text-sm flex flex-col gap-2 ps-4">
            <li>
              <HiOutlinePlus />
              <Link
                className="flex items-center gap-3 text-slate-200 font-semibold"
                to="/add-student"
              >
                Add Student
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 text-slate-200 font-semibold"
              >
                <IoIosPeople />
                <span>All Student</span>
              </a>
            </li>
          </ul>
        </li>
        <li className="">
          <a
            href="#"
            className="flex items-center gap-3 text-gray-400 font-bold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>

            <span>Teachers</span>
          </a>
        </li>
        <li className="">
          <a
            href="#"
            className="flex items-center gap-3 text-gray-400 font-bold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <span>Fees Registration</span>
          </a>
        </li>
        <li className="">
          <a
            href="#"
            className="flex items-center gap-3 text-gray-400 font-bold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>

            <span>Notices</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
