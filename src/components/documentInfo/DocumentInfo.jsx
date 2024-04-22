import { headingTertiary } from "../../ui/AddStudentStyle";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import BankInfo from "./BankInfo";
import DocAttachment from "./DocAttachment";

export default function () {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="px-3 sm:px-8">
        <h3 className={headingTertiary}>Document Info</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 pt-5">
          <div className="flex flex-col mb-5">
            <Label>National Id Card</Label>
            <Input type={"text"} placeholder={"National Id Card "} />
          </div>
          <div className="flex flex-col mb-5">
            <Label>Birth Certificate No.</Label>
            <Input type={"text"} placeholder={"Birth Certificate No."} />
          </div>
          <div className="flex flex-col mb-5 col-span-full">
            <Label>Additional Notes</Label>
            <textarea
              className="border border-gray-400 px-5 py-3 text-gray-400 text-sm"
              name=""
              id=""
              rows="2"
            ></textarea>
          </div>
        </div>
      </div>
      <BankInfo />
      <DocAttachment />
    </div>
  );
}
