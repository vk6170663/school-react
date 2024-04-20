import {
  headingTertiary,
  labelDiv,
  selectBorder,
} from "../../ui/AddStudentStyle";
import Input from "../../ui/Input";
import Label from "../../ui/Label";

export default function MedicalInfo() {
  return (
    <div className="px-3 sm:px-8">
      <h3 className={headingTertiary}>MEDICAL RECORD</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 pt-5">
        <div className={labelDiv}>
          <Label labelText={"Blood Group"} />
          <select className={selectBorder}>
            <option value="">Blood Group</option>
            <option value="">A+</option>
            <option value="">B+</option>
          </select>
        </div>
        <div className={labelDiv}>
          <Label labelText={"CATEGORY"} />

          <select className={selectBorder}>
            <option value="">Category</option>
            <option value="">Normal</option>
            <option value="">Anxiety Disorder</option>
          </select>
        </div>
        <div className={labelDiv}>
          <Label labelText={"Height (CM)"} />
          <Input type={"number"} placeholder={"Enter Height"} />
        </div>
        <div className={labelDiv}>
          <Label labelText={"Weight (KG)"} />
          <Input type={"number"} placeholder={"Enter Weight"} />
        </div>
      </div>
    </div>
  );
}