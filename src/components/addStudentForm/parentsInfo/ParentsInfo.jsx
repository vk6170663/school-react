import { headingTertiary, labelDiv } from "../../../ui/AddStudentStyle";
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
            <input
              className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
              type={"text"}
              placeholder={"Enter Father Name"}
              id={"fatherName"}
              {...register("fatherName")}
            />
          </div>
          <div className={labelDiv}>
            <Label htmlFor={"fatherOccupation"}>Father Occupation</Label>
            <input
              className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
              type={"text"}
              placeholder={"Enter Occupation"}
              id={"fatherOccupation"}
              {...register("fatherOccupation")}
            />
          </div>
          <div className={labelDiv}>
            <Label htmlFor={"fatherPhoneNo"}>Father Phone No.</Label>
            <input
              className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
              type={"tel"}
              placeholder={"Father Phone No."}
              id={"fatherPhoneNo"}
              {...register("fatherPhoneNo")}
            />
          </div>
          <div className={labelDiv}>
            <Label htmlFor={"fatherPhoto"}>Father Photo</Label>
            <input
              className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
              type={"file"}
              id={"fatherPhoto"}
              {...register("fatherPhoto")}
            />
          </div>
          <div className={labelDiv}>
            <Label htmlFor={"motherName"}>Mother Name</Label>
            <input
              className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
              type={"text"}
              placeholder={"Mother Name"}
              id={"motherName"}
              {...register("motherName")}
            />
          </div>
          <div className={labelDiv}>
            <Label htmlFor={"motherOccupation"}>Mother Occupation</Label>
            <input
              className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
              type={"text"}
              placeholder={"Mother Occupation"}
              id={"motherOccupation"}
              {...register("motherOccupation")}
            />
          </div>
          <div className={labelDiv}>
            <Label htmlFor={"motherPhone"}>Mother Phone No.</Label>
            <input
              className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
              type={"tel"}
              placeholder={"Mother Phone No."}
              id={"motherPhone"}
              {...register("motherPhone")}
            />
          </div>
          <div className={labelDiv}>
            <Label htmlFor={"motherPhoto"}>Mother Photo</Label>
            <input
              className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
              type={"file"}
              id={"motherPhoto"}
              {...register("motherPhoto")}
            />
          </div>
        </div>
      </div>
      <GuardianInfo register={register} />
    </div>
  );
}
