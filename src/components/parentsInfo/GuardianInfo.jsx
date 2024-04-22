import { headingTertiary, labelDiv } from "../../ui/AddStudentStyle";
import Input from "../../ui/Input";
import Label from "../../ui/Label";

export default function GuardianInfo() {
  return (
    <div className="px-8">
      <h3 className={headingTertiary}>Guardian Info</h3>
      <div className="grid grid-cols-2 gap-x-8 pt-5">
        <div className={labelDiv}>
          <Label>Guardian Name</Label>
          <Input type={"text"} placeholder={"Guardians Name"} />
        </div>
        <div className={labelDiv}>
          <Label>Relation with Guardian</Label>
          <Input type={"text"} placeholder={"Relation"} />
        </div>
        <div className={labelDiv}>
          <Label>Guardian Email</Label>
          <Input type={"text"} placeholder={"Guardian Email"} />
        </div>
        <div className={labelDiv}>
          <Label>Guardian Photo</Label>
          <Input type={"file"} />
        </div>
        <div className={labelDiv}>
          <Label>Guardian Phone No.</Label>
          <Input type={"tel"} placeholder={"Guardian Phone No."} />
        </div>

        <div className={labelDiv}>
          <Label>Guardian Occupation</Label>
          <Input type={"text"} placeholder={"Guardian Occupation"} />
        </div>
        <div class="flex flex-col col-span-full mb-5">
          <Label>Guardian Address</Label>
          <textarea
            class="border border-gray-400 px-5 py-3 text-gray-400 text-sm"
            name=""
            id=""
            rows="2"
          ></textarea>
        </div>
      </div>
    </div>
  );
}
