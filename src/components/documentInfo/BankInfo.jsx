import { headingTertiary } from "../../ui/AddStudentStyle";
import Input from "../../ui/Input";
import Label from "../../ui/Label";

export default function BankInfo() {
  return (
    <div className="px-3 sm:px-8">
      <h3 className={headingTertiary}>Bank Information</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 pt-5">
        <div className="flex flex-col mb-5">
          <Label>Bank Name</Label>
          <Input type={"text"} placeholder={"Bank Name"} />
        </div>
        <div className="flex flex-col mb-5">
          <Label>Bank Account Number</Label>
          <Input type={"number"} placeholder={"Account No."} />
        </div>
        <div className="flex flex-col mb-5">
          <Label> Ifsc Code</Label>
          <Input type={"text"} placeholder={"Ifsc Code"} />
        </div>
      </div>
    </div>
  );
}
