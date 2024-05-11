import { headingTertiary, labelDiv } from "../../../ui/AddStudentStyle";
import Input from "../../../ui/Input";

import Label from "../../../ui/Label";
import FormRow from "../FormRow";

export default function ContactInfo({ register }) {
  return (
    <div className="px-3 sm:px-8">
      <h3 className={headingTertiary}>Contact Information</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 pt-5">
        <FormRow label={"Email Address"}>
          <Input
            type={"email"}
            placeholder={"Enter Email"}
            id={"emailAddress"}
            {...register("emailAddress")}
          />
        </FormRow>
        <FormRow label={"Phone Number"}>
          <Input
            type={"tel"}
            placeholder={"Enter Phone Number"}
            id={"phoneNo"}
            {...register("phoneNo")}
          />
        </FormRow>
        <div className="col-span-full mb-5">
          <h3 className={headingTertiary}>Student Address Info</h3>
        </div>
        <FormRow label={"Current Address"}>
          <textarea
            className="border border-gray-400 px-5 py-3 text-gray-400 text-sm"
            id={"currentAddress"}
            rows="2"
            {...register("currentAddress")}
          />
        </FormRow>
        <FormRow label={"Permanent Address"}>
          <textarea
            className="border border-gray-400 px-5 py-3 text-gray-400 text-sm"
            id={"permanentAddress"}
            rows="2"
            {...register("permanentAddress")}
          />
        </FormRow>
      </div>
    </div>
  );
}
