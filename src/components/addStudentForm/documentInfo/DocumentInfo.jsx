import { headingTertiary, labelDiv } from "../../../ui/AddStudentStyle";

import Label from "../../../ui/Label";
import BankInfo from "./BankInfo";
import DocAttachment from "./DocAttachment";

export default function DocumentInfo({ register }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="px-3 sm:px-8">
        <h3 className={headingTertiary}>Document Info</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 pt-5">
          <div className={labelDiv}>
            <Label htmlFor={"nationalIdCard"}>National Id Card</Label>
            <input
              className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
              type="text"
              placeholder={"National Id Card "}
              id={"nationalIdCard"}
              {...register("nationalIdCard")}
            />
          </div>
          <div className={labelDiv}>
            <Label htmlFor={"birthCertificateNo"}>Birth Certificate No.</Label>
            <input
              className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
              type="text"
              placeholder={"Birth Certificate No."}
              id={"birthCertificateNo"}
              {...register("birthCertificateNo")}
            />
          </div>
          <div className={`${labelDiv} col-span-full`}>
            <Label htmlFor={"additionalNotes"}>Additional Notes</Label>
            <textarea
              className="border border-gray-400 px-5 py-3 text-gray-400 text-sm"
              rows="2"
              id={"additionalNotes"}
              {...register("additionalNotes")}
            />
          </div>
        </div>
      </div>
      <BankInfo register={register} />
      <DocAttachment register={register} />
    </div>
  );
}
