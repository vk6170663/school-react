import { headingTertiary, labelDiv } from "../../ui/AddStudentStyle";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import GuardianInfo from "./GuardianInfo";

export default function ParentInfo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="px-3 sm:px-8">
        <h3 className={headingTertiary}>Parents Info</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 pt-5">
          <div className={labelDiv}>
            <Label>Father Name</Label>
            <Input type={"text"} placeholder={"Enter Father Name"} />
          </div>
          <div className={labelDiv}>
            <Label>Father Occupation</Label>
            <Input placeholder={"Enter Occupation"} />
          </div>
          <div className={labelDiv}>
            <Label>Father Phone No.</Label>
            <Input type={"tel"} placeholder={"Father Phone No."} />
          </div>
          <div className={labelDiv}>
            <Label>Father Photo</Label>
            <Input type={"file"} />
          </div>
          <div className={labelDiv}>
            <Label>Mother Name</Label>

            <Input type={"text"} placeholder={"Mother Name"} />
          </div>
          <div className={labelDiv}>
            <Label>Occupation</Label>
            <Input type={"text"} placeholder={"Mother Occupation"} />
          </div>
          <div className={labelDiv}>
            <Label>Mother Phone No.</Label>
            <Input type={"tel"} placeholder={"Mother Phone No."} />
          </div>
          <div className={labelDiv}>
            <Label>Mother Photo</Label>
            <Input type={"file"} />
          </div>
        </div>
      </div>
      <GuardianInfo />
    </div>
  );
}
