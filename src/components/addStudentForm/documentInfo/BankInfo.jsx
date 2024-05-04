import { headingTertiary, labelDiv } from "../../../ui/AddStudentStyle";

import Label from "../../../ui/Label";

export default function BankInfo({ register }) {
  return (
    <div className="px-3 sm:px-8">
      <h3 className={headingTertiary}>Bank Information</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 pt-5">
        <div className={labelDiv}>
          <Label htmlFor={"bankName"}>Bank Name</Label>
          <input
            className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
            type="text"
            placeholder={"Bank Name"}
            id={"bankName"}
            {...register("bankName")}
          />
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"bankAccNo"}>Bank Account Number</Label>
          <input
            className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
            type="number"
            placeholder={"Account No."}
            id={"bankAccNo"}
            {...register("bankAccNo")}
          />
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"ifsc"}> Ifsc Code</Label>
          <input
            className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
            type="text"
            placeholder={"Ifsc Code"}
            id={"ifsc"}
            {...register("ifsc")}
          />
        </div>
      </div>
    </div>
  );
}
