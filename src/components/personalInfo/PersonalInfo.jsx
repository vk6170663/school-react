import {
  headingTertiary,
  labelDiv,
  selectBorder,
} from "../../ui/AddStudentStyle";
import Input from "../../ui/Input";
import Label from "../../ui/Label";

export default function PersonalInfo() {
  return (
    <div className="px-3 sm:px-8">
      <h3 className={headingTertiary}>Personal Info</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 pt-5">
        <div className={labelDiv}>
          <Label>First Name</Label>
          <Input type={"text"} placeholder={"Enter First Name"} />
        </div>
        <div className={labelDiv}>
          <Label>Last Name</Label>
          <Input type={"text"} placeholder={"Enter Last Name"} />
        </div>
        <div className={labelDiv}>
          <Label>Gender</Label>
          <select className={selectBorder}>
            <option value="">Gender</option>
            <option value="">Female</option>
            <option value="">Male</option>
          </select>
        </div>
        <div className={labelDiv}>
          <Label>DOB</Label>
          <Input type={"date"} />
        </div>
        <div className={labelDiv}>
          <Label>Religion</Label>
          <select className={selectBorder}>
            <option value="">Religion</option>
            <option value="">Hindu</option>
            <option value="">Christian</option>
            <option value="">Sikh</option>
            <option value="">Islam</option>
          </select>
        </div>

        <div className={labelDiv}>
          <Label>Caste</Label>
          <Input type={"text"} placeholder={"Enter Caste"} />
        </div>
        <div className={labelDiv}>
          <Label>Student Photo</Label>
          <Input type={"file"} />
        </div>
      </div>
    </div>
  );
}
