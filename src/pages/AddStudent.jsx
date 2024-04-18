import PersonalInfo from "../components/PersonalInfo";

export default function AddStudent() {
  return (
    <main className="p-2 sm:px-5">
      <form action="">
        <div className="flex sm:flex-row flex-col items-center justify-between mb-6">
          <h3 className="text-xl font-medium text-gray-500">Add Student</h3>
          <button className="sm:mt-0 mt-5 bg-indigo-700 text-slate-50 font-semibold py-2 px-4 rounded-lg uppercase">
            &#x2b; Import Student
          </button>
        </div>
        <div className="flex lg:flex-row flex-col items-center justify-between pb-5 border-b-2 mb-11">
          <ul className="flex items-center gap-5 flex-wrap order-last lg:order-first mt-5">
            <li className="bg-gray-300 rounded-lg uppercase text-xs font-medium text-gray-700 px-4 py-3">
              <a href="#">Personal Info</a>
            </li>
            <li className="text-gray-700 px-4 py-3 uppercase text-xs font-medium">
              <a href="#">PARENTS & GUARDIAN INFO</a>
            </li>
            <li className="text-gray-700 px-4 py-3 uppercase text-xs font-medium">
              <a href="#">DOCUMENT INFO</a>
            </li>
            <li className="text-gray-700 px-4 py-3 uppercase text-xs font-medium">
              <a href="#">PREVIOUS SCHOOL INFORMATION</a>
            </li>

            <li className="text-gray-700 px-4 py-3 uppercase text-xs font-medium">
              <a href="#">OTHER INFO</a>
            </li>
          </ul>

          <button className="bg-indigo-700 text-slate-50 font-semibold py-2 px-4 rounded-lg uppercase">
            Save Student
          </button>
        </div>
        <PersonalInfo />
      </form>
    </main>
  );
}
