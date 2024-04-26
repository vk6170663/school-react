import {
  headingTertiary,
  labelDiv,
  selectBorder,
} from "../../../ui/AddStudentStyle";
import Input from "../../../ui/Input";
import Label from "../../../ui/Label";

export default function AcademicInfo() {
  return (
    <div className="px-3 sm:px-8">
      <h3 className={headingTertiary}>Academic Information</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 pt-5">
        <div className={labelDiv}>
          <Label htmlFor={"academicYear"}>Academic Year</Label>
          <select className={selectBorder} id={"academicYear"}>
            <option value="">Academic year</option>
            <option value="">2024 [Jan-Dec]</option>
          </select>
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"className"}>Class Name</Label>
          <select className={selectBorder} id={"className"}>
            <option value="">Class Name</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
          </select>
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"section"}>Section</Label>
          <select className={selectBorder} id={"section"}>
            <option value="">Section</option>
            <option value="">A</option>
            <option value="">B</option>
          </select>
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"admissionNo"}>Admission Number</Label>
          <Input
            type={"number"}
            placeholder={"Enter Admission Number"}
            id={"admissionNo"}
          />
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"admissionDate"}>Admission Date</Label>
          <Input type={"date"} id={"admissionDate"} />
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"rollNumber"}>Roll Number</Label>
          <Input
            type={"number"}
            placeholder={"Enter Roll Number"}
            id={"rollNumber"}
          />
        </div>
      </div>
    </div>
  );
}
