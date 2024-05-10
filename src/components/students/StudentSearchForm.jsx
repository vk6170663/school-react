import { labelDiv, selectBorder } from "../../ui/AddStudentStyle";
import Label from "../../ui/Label";

function StudentSearchForm() {
  return (
    <div className="p-2 sm:px-5">
      <form action="">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 pt-5">
          <div className={labelDiv}>
            <Label htmlFor={"academicYear"}>Academic Year</Label>
            <select className={selectBorder} id={"academicYear"}>
              <option value="">Academic year</option>
              <option value={"2016-17"}>2016-17</option>
              <option value={"2017-18"}>2016-17</option>
              <option value={"2018-19"}>2016-17</option>
            </select>
          </div>
          <div className={labelDiv}>
            <Label htmlFor={"class_Name"}>Class Name</Label>
            <select className={selectBorder} id={"class_Name"}>
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
            <select className={selectBorder} id={"section"}>
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
            />
          </div>
          <div className={labelDiv}>
            <Label htmlFor={"admissionDate"}>Admission Date</Label>
            <input
              className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
              type={"date"}
              id={"admissionDate"}
            />
          </div>
          <div className={labelDiv}>
            <Label htmlFor={"rollNumber"}>Roll Number</Label>
            <input
              className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
              type={"number"}
              placeholder={"Enter Roll Number"}
              id={"rollNumber"}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default StudentSearchForm;
