import {
  headingTertiary,
  labelDiv,
  selectBorder,
} from "../../ui/AddStudentStyle";
import Input from "../../ui/Input";
import Label from "../../ui/Label";

export default function PersonalInfo() {
  return (
    <div>
      <h3 className={headingTertiary}>PERSONAL INFO</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 pt-5">
        <div className={labelDiv}>
          <Label labelText={"First Name"} />
          <Input type={"text"} placeholder={"Enter First Name"} />
        </div>
        <div className={labelDiv}>
          <Label labelText={"Last Name"} />
          <Input type={"text"} placeholder={"Enter Last Name"} />
        </div>
        <div className={labelDiv}>
          <Label labelText={"Gender"} />
          <select className={selectBorder}>
            <option value="">Gender</option>
            <option value="">Female</option>
            <option value="">Male</option>
          </select>
        </div>
        <div className={labelDiv}>
          <Label labelText={"DOB"} />
          <Input type={"date"} />
        </div>
        <div className={labelDiv}>
          <Label labelText={"Religion"} />
          <select className={selectBorder}>
            <option value="">Religion</option>
            <option value="">Hindu</option>
            <option value="">Christian</option>
            <option value="">Sikh</option>
            <option value="">Islam</option>
          </select>
        </div>

        <div className={labelDiv}>
          <Label labelText={"Caste"} />
          <Input type={"text"} placeholder={"Enter Caste"} />
        </div>
        <div className={labelDiv}>
          <Label labelText={"Student Photo"} />
          <Input type={"file"} />
        </div>
      </div>
    </div>
  );
}
