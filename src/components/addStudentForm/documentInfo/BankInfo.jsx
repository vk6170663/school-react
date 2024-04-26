import { headingTertiary, labelDiv } from "../../../ui/AddStudentStyle";
import Input from "../../../ui/Input";
import Label from "../../../ui/Label";

export default function BankInfo() {
  return (
    <div className="px-3 sm:px-8">
      <h3 className={headingTertiary}>Bank Information</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 pt-5">
        <div className={labelDiv}>
          <Label htmlFor={"bankName"}>Bank Name</Label>
          <Input type={"text"} placeholder={"Bank Name"} id={"bankName"} />
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"bankAccNo"}>Bank Account Number</Label>
          <Input type={"number"} placeholder={"Account No."} id={"bankAccNo"} />
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"ifsc"}> Ifsc Code</Label>
          <Input type={"text"} placeholder={"Ifsc Code"} id={"ifsc"} />
        </div>
      </div>
    </div>
  );
}
