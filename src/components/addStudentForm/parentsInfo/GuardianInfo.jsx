import { headingTertiary, labelDiv } from "../../../ui/AddStudentStyle";
import Input from "../../../ui/Input";
import Label from "../../../ui/Label";

export default function GuardianInfo() {
  return (
    <div className="px-8">
      <h3 className={headingTertiary}>Guardian Info</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 pt-5">
        <div className={labelDiv}>
          <Label htmlFor={"guardianName"}>Guardian Name</Label>
          <Input
            type={"text"}
            placeholder={"Guardians Name"}
            id={"guardianName"}
          />
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"guardianRelation"}>Relation with Guardian</Label>
          <Input
            type={"text"}
            placeholder={"Relation"}
            id={"guardianRelation"}
          />
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"guardianEmail"}>Guardian Email</Label>
          <Input
            type={"text"}
            placeholder={"Guardian Email"}
            id={"guardianEmail"}
          />
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"guardianPhoto"}>Guardian Photo</Label>
          <Input type={"file"} id={"guardianPhoto"} />
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"guardianPhoneNo"}>Guardian Phone No.</Label>
          <Input
            type={"tel"}
            placeholder={"Guardian Phone No."}
            id={"guardianPhoneNo"}
          />
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"guardianOccupation"}>Guardian Occupation</Label>
          <Input
            type={"text"}
            placeholder={"Guardian Occupation"}
            id={"guardianOccupation"}
          />
        </div>
        <div className="flex flex-col col-span-full mb-5">
          <Label htmlFor={"guardianAddress"}>Guardian Address</Label>
          <textarea
            className="border border-gray-400 px-5 py-3 text-gray-400 text-sm"
            id={"guardianAddress"}
            rows="2"
          />
        </div>
      </div>
    </div>
  );
}
