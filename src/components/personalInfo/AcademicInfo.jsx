import {
  headingTertiary,
  labelDiv,
  selectBorder,
} from "../../ui/AddStudentStyle";
import Input from "../../ui/Input";
import Label from "../../ui/Label";

export default function AcademicInfo() {
  return (
    <div className="px-3 sm:px-8">
      <h3 className={headingTertiary}>ACADEMIC INFORMATION</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 pt-5">
        <div className={labelDiv}>
          <Label labelText={"Acedmic Year"} />
          <select className={selectBorder}>
            <option value="">Acedmic year</option>
            <option value="">2024 [Jan-Dec]</option>
          </select>
        </div>
        <div className={labelDiv}>
          <Label labelText={"Class Name"} />
          <select className={selectBorder}>
            <option value="">className</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
          </select>
        </div>
        <div className={labelDiv}>
          <Label labelText={"Section"} />
          <select className={selectBorder}>
            <option value="">Section</option>
            <option value="">A</option>
            <option value="">B</option>
          </select>
        </div>
        <div className={labelDiv}>
          <Label labelText={"Admission Number"} />
          <Input type={"number"} placeholder={"Enter Admission Number"} />
        </div>
        <div className={labelDiv}>
          <Label labelText={"Admission Date"} />
          <Input type={"date"} />
        </div>
        <div className={labelDiv}>
          <Label labelText={"Roll Number"} />
          <Input type={"number"} placeholder={"Enter Roll Number"} />
        </div>
      </div>
    </div>
  );
}
