import { headingTertiary, labelDiv } from "../../../ui/AddStudentStyle";
import Input from "../../../ui/Input";
import Label from "../../../ui/Label";
import GuardianInfo from "./GuardianInfo";

export default function ParentInfo({ register }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="px-3 sm:px-8">
        <h3 className={headingTertiary}>Parents Info</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 pt-5">
          <div className={labelDiv}>
            <Label htmlFor={"fatherName"}>Father Name</Label>
            <Input
              type={"text"}
              placeholder={"Enter Father Name"}
              id={"fatherName"}
              {...register("fatherName")}
            />
          </div>
          <div className={labelDiv}>
            <Label htmlFor={"fatherOccupation"}>Father Occupation</Label>
            <Input
              type={"text"}
              placeholder={"Enter Occupation"}
              id={"fatherOccupation"}
            />
          </div>
          <div className={labelDiv}>
            <Label htmlFor={"fatherPhoneNo"}>Father Phone No.</Label>
            <Input
              type={"tel"}
              placeholder={"Father Phone No."}
              id={"fatherPhoneNo"}
            />
          </div>
          <div className={labelDiv}>
            <Label htmlFor={"fatherPhoto"}>Father Photo</Label>
            <Input type={"file"} id={"fatherPhoto"} />
          </div>
          <div className={labelDiv}>
            <Label htmlFor={"motherName"}>Mother Name</Label>
            <Input
              type={"text"}
              placeholder={"Mother Name"}
              id={"motherName"}
            />
          </div>
          <div className={labelDiv}>
            <Label htmlFor={"motherOccupation"}>Mother Occupation</Label>
            <Input
              type={"text"}
              placeholder={"Mother Occupation"}
              id={"motherOccupation"}
            />
          </div>
          <div className={labelDiv}>
            <Label htmlFor={"motherPhone"}>Mother Phone No.</Label>
            <Input
              type={"tel"}
              placeholder={"Mother Phone No."}
              id={"motherPhone"}
            />
          </div>
          <div className={labelDiv}>
            <Label htmlFor={"motherPhoto"}>Mother Photo</Label>
            <Input type={"file"} id={"motherPhoto"} />
          </div>
        </div>
      </div>
      <GuardianInfo />
    </div>
  );
}
