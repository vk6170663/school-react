import { useState } from "react";
import PersonalInfo from "../components/addStudentForm/personalInfo/PersonalInfoTab";
import { headingTertiary, labelDiv } from "../ui/AddStudentStyle";
import ParentInfo from "../components/addStudentForm/parentsInfo/ParentsInfo";
import DocumentInfo from "../components/addStudentForm/documentInfo/DocumentInfo";
import PreviousSchool from "../components/addStudentForm/previousSchool/PreviousSchool";
import OtherInfo from "../components/addStudentForm/otherInfo/OtherInfo";
import { useForm } from "react-hook-form";
import PersonalInfoTab from "../components/addStudentForm/personalInfo/PersonalInfoTab";

const studentTabs = [
  "Personal Info",
  "Parents & Guardian Info",
  "Document Info",
  "Previous School Information",
  "Other Info",
];

const activetab = "bg-gray-300 rounded-lg";

export default function AddStudent() {
  const [activeTab, setActiveTab] = useState(studentTabs[0]);
  const { register, handleSubmit } = useForm();

  function handleClick(tab) {
    setActiveTab(tab);
  }

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <main className="p-2 sm:px-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex sm:flex-row flex-col items-center justify-between mb-6">
          <h3 className={headingTertiary}>Add Student</h3>
          <button className="sm:mt-0 mt-5 bg-indigo-700 text-slate-50 font-semibold py-2 px-4 rounded-lg ">
            &#x2b; Import Student
          </button>
        </div>
        <div className="flex lg:flex-row flex-col items-center justify-between pb-5 border-b-2 mb-11">
          <ul className="flex items-center gap-5 flex-wrap order-last lg:order-first mt-5">
            {studentTabs.map((tab, i) => (
              <li
                onClick={() => handleClick(tab)}
                key={tab}
                className={
                  activeTab === studentTabs[i]
                    ? "bg-gray-300 rounded-lg text-gray-700 px-4 py-3"
                    : "text-gray-700 px-4 py-3"
                }
              >
                {tab}
              </li>
            ))}
          </ul>

          <button className="bg-indigo-700 text-slate-50 font-semibold py-2 px-4 rounded-lg ">
            Save Student
          </button>
        </div>
        {activeTab === studentTabs[0] && (
          <PersonalInfoTab register={register} />
        )}
        {activeTab === studentTabs[1] && <ParentInfo register={register} />}
        {activeTab === studentTabs[2] && <DocumentInfo register={register} />}
        {activeTab === studentTabs[3] && <PreviousSchool register={register} />}
        {activeTab === studentTabs[4] && <OtherInfo register={register} />}
      </form>
    </main>
  );
}
