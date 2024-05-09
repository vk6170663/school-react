import { FaPlus } from "react-icons/fa";
import {
  headingTertiary,
  labelDiv,
  selectBorder,
} from "../../../ui/AddStudentStyle";

import Label from "../../../ui/Label";
import { useState } from "react";

import AddAcademicYear from "../../addAcademicYear/AddAcademicYear";

export default function AcademicInfo({ register }) {
  const [academicFormBox, setAcademicFormBox] = useState(false);

  function showAcademicForm(e) {
    e.preventDefault();
    setAcademicFormBox((show) => (show = true));
  }

  function hideAcademicForm(e) {
    e.preventDefault();
    setAcademicFormBox((show) => (show = false));
  }

  return (
    <>
      <div className="px-3 sm:px-8">
        <h3 className={headingTertiary}>Academic Information</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 pt-5">
          <div className={labelDiv}>
            <div className="flex items-center justify-between pb-3">
              <Label type={"addField"} htmlFor={"academicYear"}>
                Academic Year
              </Label>
              <button className="cursor-pointer" onClick={showAcademicForm}>
                <FaPlus />
              </button>
            </div>
            <select
              className={selectBorder}
              id={"academicYear"}
              {...register("academicYear")}
            >
              <option value="">Academic year</option>
              <option value={"18-Mar-2024"}>2024 [Jan-Dec]</option>
              <option value={"13-Jun-2023"}>2023 [Jan-Dec]</option>
              <option value={"28-Apr-2023"}>2023 [Jan-Dec]</option>
            </select>
          </div>
          <div className={labelDiv}>
            <Label htmlFor={"class_Name"}>Class Name</Label>
            <select
              className={selectBorder}
              id={"class_Name"}
              {...register("class_Name")}
            >
              <option>Class Name</option>
              {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                <option value={num} key={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
          <div className={labelDiv}>
            <Label htmlFor={"section"}>Section</Label>
            <select
              className={selectBorder}
              id={"section"}
              {...register("section")}
            >
              <option value="">Section</option>
              <option value={"A"}>A</option>
              <option value={"B"}>B</option>
              <option value={"C"}>B</option>
            </select>
          </div>
          <div className={labelDiv}>
            <Label htmlFor={"admissionNo"}>Admission Number</Label>
            <input
              className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
              type={"number"}
              placeholder={"Enter Admission Number"}
              id={"admissionNo"}
              {...register("admissionNo")}
            />
          </div>
          <div className={labelDiv}>
            <Label htmlFor={"admissionDate"}>Admission Date</Label>
            <input
              className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
              type={"date"}
              id={"admissionDate"}
              {...register("admissionDate")}
            />
          </div>
          <div className={labelDiv}>
            <Label htmlFor={"rollNumber"}>Roll Number</Label>
            <input
              className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
              type={"number"}
              placeholder={"Enter Roll Number"}
              id={"rollNumber"}
              {...register("rollNumber")}
            />
          </div>
        </div>
      </div>
      {academicFormBox && <AddAcademicYear OnClick={hideAcademicForm} />}
    </>
  );
}
