import {
  headingTertiary,
  labelDiv,
  selectBorder,
} from "../../../ui/AddStudentStyle";
import Input from "../../../ui/Input";
import Label from "../../../ui/Label";

export default function PersonalInfo() {
  return (
    <div className="px-3 sm:px-8">
      <h3 className={headingTertiary}>Personal Info</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 pt-5">
        <div className={labelDiv}>
          <Label htmlFor={"firstName"}>First Name</Label>
          <Input
            type={"text"}
            placeholder={"Enter First Name"}
            id={"firstName"}
          />
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"lastName"}>Last Name</Label>
          <Input
            type={"text"}
            placeholder={"Enter Last Name"}
            id={"lastName"}
          />
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"gender"}>Gender</Label>
          <select className={selectBorder} id={"gender"}>
            <option value="">Gender</option>
            <option value="">Female</option>
            <option value="">Male</option>
          </select>
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"dob"}>DOB</Label>
          <Input type={"date"} id={"dob"} />
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"religion"}>Religion</Label>
          <select className={selectBorder} id={"religion"}>
            <option value="">Religion</option>
            <option value="">Hindu</option>
            <option value="">Christian</option>
            <option value="">Sikh</option>
            <option value="">Islam</option>
          </select>
        </div>

        <div className={labelDiv}>
          <Label htmlFor={"caste"}>Caste</Label>
          <Input type={"text"} placeholder={"Enter Caste"} id={"caste"} />
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"studentPhoto"}>Student Photo</Label>
          <Input type={"file"} id={"studentPhoto"} />
        </div>
      </div>
    </div>
  );
}
