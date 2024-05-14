import { HiOutlineHome, HiOutlinePlus } from "react-icons/hi2";
import { PiStudentFill } from "react-icons/pi";
import { IoIosPeople } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Nav() {
  const navUL = "flex flex-col gap-3";
  const flexLink = "flex items-center gap-3 text-gray-400 font-bold";
  const dropLink = "text-sm flex flex-col gap-2 ps-4";

  return (
    <nav>
      <ul className={navUL}>
        <li>
          <Link to="/" className={flexLink}>
            <HiOutlineHome />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link className={`${flexLink} mb-2`}>
            <PiStudentFill />
            <span>Student</span>
          </Link>
          <ul className={dropLink}>
            <li>
              <Link to="/add-student" className={flexLink}>
                <HiOutlinePlus />
                Add Student
              </Link>
            </li>
            <li>
              <Link to="/all-student" className={flexLink}>
                <IoIosPeople />
                <span>All Student</span>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/registration-form" className={flexLink}>
            <span>Registration</span>
          </Link>
        </li>
        <li>
          <Link className={flexLink}>
            <span>Fees Registration</span>
          </Link>
        </li>
        <li>
          <Link className={flexLink}>
            <span>Notices</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
