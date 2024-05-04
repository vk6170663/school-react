import {
  headingTertiary,
  labelDiv,
  selectBorder,
} from "../../../ui/AddStudentStyle";

import Label from "../../../ui/Label";

export default function AcademicInfo({ register }) {
  return (
    <div className="px-3 sm:px-8">
      <h3 className={headingTertiary}>Academic Information</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 pt-5">
        <div className={labelDiv}>
          <Label htmlFor={"academicYear"}>Academic Year</Label>
          <select
            className={selectBorder}
            id={"academicYear"}
            {...register("academicYear")}
          >
            <option value="">Academic year</option>
            <option value={"18-Mar-2024"}>2024 [Jan-Dec]</option>
            <option value={"18-Mar-2023"}>2023 [Jan-Dec]</option>
          </select>
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"class_Name"}>Class Name</Label>
          <select
            className={selectBorder}
            id={"class_Name"}
            {...register("class_Name")}
          >
            <option value="">Class Name</option>
            <option value={"1"}>1</option>
            <option value={"2"}>2</option>
            <option value={"3"}>3</option>
            <option value={"4"}>4</option>
            <option value={"5"}>5</option>
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
  );
}
