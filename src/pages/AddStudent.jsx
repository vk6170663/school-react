import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { headingTertiary } from "../ui/AddStudentStyle";

import ParentInfo from "../components/addStudentForm/parentsInfo/ParentsInfo";
import DocumentInfo from "../components/addStudentForm/documentInfo/DocumentInfo";
import PreviousSchool from "../components/addStudentForm/previousSchool/PreviousSchool";
import OtherInfo from "../components/addStudentForm/otherInfo/OtherInfo";
import PersonalInfo from "../components/addStudentForm/personalInfo/PersonalInfo";
import ContactInfo from "../components/addStudentForm/personalInfo/ContactInfo";
import MedicalInfo from "../components/addStudentForm/personalInfo/MedicalInfo";

import { createEditStudent } from "../services/apiStudents";

import { useState } from "react";
import AcademicInfo from "../components/addStudentForm/personalInfo/AcademicInfo";
import GuardianInfo from "../components/addStudentForm/parentsInfo/GuardianInfo";
import BankInfo from "../components/addStudentForm/documentInfo/BankInfo";
import DocAttachment from "../components/addStudentForm/documentInfo/DocAttachment";

const studentTabs = [
  "Personal Info",
  "Parents & Guardian Info",
  "Document Info",
  "Previous School Information",
  "Other Info",
];

export default function AddStudent({ studentToEdit = {} }) {
  const { id: editId, ...editValues } = studentToEdit;
  const isEditSession = Boolean(editId);

  const [activeTab, setActiveTab] = useState(studentTabs[0]);
  const { register, handleSubmit } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const queryClient = useQueryClient();

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createEditStudent,
    onSuccess: () => {
      toast.success("New student successfully created");
      queryClient.invalidateQueries({
        queryKey: ["student"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  function handleClick(tab) {
    setActiveTab(tab);
  }

  function onSubmit(data, e) {
    e.preventDefault();

    console.log(data);

    // mutate({...data, image: data.studentPhoto[0]})
  }

  // function onError(errors) {
  //   console.log(errors);
  // }

  return (
    <div className="p-2 sm:px-5">
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
                    ? "bg-gray-300 rounded-lg text-gray-700 px-4 py-3 cursor-pointer"
                    : "text-gray-700 px-4 py-3 cursor-pointer"
                }
              >
                {tab}
              </li>
            ))}
          </ul>

          <button
            type="submit"
            disabled={isCreating}
            className="bg-indigo-700 text-slate-50 font-semibold py-2 px-4 rounded-lg "
          >
            {isEditSession ? "Edit Student" : "Save Student"}
          </button>
        </div>
        {activeTab === studentTabs[0] && (
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <AcademicInfo register={register} />
            <PersonalInfo register={register} />
            <ContactInfo register={register} />
            <MedicalInfo register={register} />
          </div>
        )}
        {activeTab === studentTabs[1] && (
          <ParentInfo register={register}>
            <GuardianInfo register={register} />
          </ParentInfo>
        )}
        {activeTab === studentTabs[2] && (
          <DocumentInfo register={register}>
            <BankInfo register={register} />
            <DocAttachment register={register} />
          </DocumentInfo>
        )}
        {activeTab === studentTabs[3] && <PreviousSchool register={register} />}
        {activeTab === studentTabs[4] && <OtherInfo register={register} />}
      </form>
    </div>
  );
}
