import { headingTertiary, labelDiv } from "../../../ui/AddStudentStyle";
import Input from "../../../ui/Input";
import Label from "../../../ui/Label";

export default function ContactInfo() {
  return (
    <div className="px-3 sm:px-8">
      <h3 className={headingTertiary}>Contact Information</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 pt-5">
        <div className={labelDiv}>
          <Label htmlFor={"emailAddress"}>Email Address</Label>
          <Input
            type={"email"}
            placeholder={"Enter Email"}
            id={"emailAddress"}
          />
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"phoneNo"}>Phone Number</Label>
          <Input
            type={"tel"}
            placeholder={"Enter Phone Number"}
            id={"phoneNo"}
          />
        </div>
        <div className="col-span-full mb-5">
          <h3 className={headingTertiary}>Student Address Info</h3>
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"currentAddress"}>Current Address</Label>
          <textarea
            className="border border-gray-400 px-5 py-3 text-gray-400 text-sm"
            id={"currentAddress"}
            rows="2"
          />
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"permanentAddress"}>Permanent Address</Label>
          <textarea
            className="border border-gray-400 px-5 py-3 text-gray-400 text-sm"
            id={"permanentAddress"}
            rows="2"
          />
        </div>
      </div>
    </div>
  );
}
