import { FaPlus } from "react-icons/fa";
import {
  headingTertiary,
  labelDiv,
  selectBorder,
} from "../../../ui/AddStudentStyle";
import Input from "../../../ui/Input";

import { useState } from "react";

import AddAcademicYear from "../../addAcademicYear/AddAcademicYear";
import FormRow from "../FormRow";
import Label from "../../../ui/Label";

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
              <option value={"2016-17"}>2016-17</option>
              <option value={"2017-18"}>2017-18</option>
              <option value={"2018-19"}>2018-19</option>
            </select>
          </div>
          <div className={labelDiv}>
            <Label htmlFor={"class_Name"}>Class Name</Label>
            <select
              className={selectBorder}
              id={"class_Name"}
              {...register("class_Name")}
            >
              <option value={""}>Class Name</option>
              {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => (
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
            <Input
              type={"number"}
              placeholder={"Enter Admission Number"}
              id={"admissionNo"}
              {...register("admissionNo")}
            />
          </div>
          <div className={labelDiv}>
            <Label htmlFor={"admissionDate"}>Admission Date</Label>
            <Input
              type={"date"}
              id={"admissionDate"}
              {...register("admissionDate")}
            />
          </div>

          <FormRow label="Roll Number">
            <Input
              type="number"
              placeholder="Enter Roll Number"
              id="rollNumber"
              {...register("rollNumber")}
            />
          </FormRow>
        </div>
      </div>
      {academicFormBox && <AddAcademicYear OnClick={hideAcademicForm} />}
    </>
  );
}
