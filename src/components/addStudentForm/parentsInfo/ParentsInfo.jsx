import { headingTertiary } from "../../../ui/AddStudentStyle";
import FormRow from "../FormRow";

export default function ParentInfo({ register, children }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="px-3 sm:px-8">
        <h3 className={headingTertiary}>Parents Info</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 pt-5">
          <FormRow label={"Father Name"}>
            <input
              className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
              type={"text"}
              placeholder={"Enter Father Name"}
              id={"fatherName"}
              {...register("fatherName")}
            />
          </FormRow>
          <FormRow label={"Father Occupation"}>
            <input
              className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
              type={"text"}
              placeholder={"Enter Occupation"}
              id={"fatherOccupation"}
              {...register("fatherOccupation")}
            />
          </FormRow>
          <FormRow label={"Father Phone No."}>
            <input
              className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
              type={"tel"}
              placeholder={"Father Phone No."}
              id={"fatherPhoneNo"}
              {...register("fatherPhoneNo")}
            />
          </FormRow>
          <FormRow label={"Father Photo"}>
            <input
              className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
              type={"file"}
              id={"fatherPhoto"}
              {...register("fatherPhoto")}
            />
          </FormRow>
          <FormRow label={"Mother Name"}>
            <input
              className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
              type={"text"}
              placeholder={"Mother Name"}
              id={"motherName"}
              {...register("motherName")}
            />
          </FormRow>
          <FormRow label={"Mother Occupation"}>
            <input
              className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
              type={"text"}
              placeholder={"Mother Occupation"}
              id={"motherOccupation"}
              {...register("motherOccupation")}
            />
          </FormRow>
          <FormRow label={"Mother Phone No."}>
            <input
              className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
              type={"tel"}
              placeholder={"Mother Phone No."}
              id={"motherPhone"}
              {...register("motherPhone")}
            />
          </FormRow>
          <FormRow label={"Mother Photo"}>
            <input
              className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
              type={"file"}
              id={"motherPhoto"}
              {...register("motherPhoto")}
            />
          </FormRow>
        </div>
      </div>
      {children}
    </div>
  );
}
