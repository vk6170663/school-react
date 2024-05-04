import { headingTertiary, labelDiv } from "../../../ui/AddStudentStyle";

import Label from "../../../ui/Label";

export default function GuardianInfo({ register }) {
  return (
    <div className="px-8">
      <h3 className={headingTertiary}>Guardian Info</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 pt-5">
        <div className={labelDiv}>
          <Label htmlFor={"guardianName"}>Guardian Name</Label>
          <input
            className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
            type="text"
            placeholder={"Guardians Name"}
            id={"guardianName"}
            {...register("")}
          />
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"guardianRelation"}>Relation with Guardian</Label>
          <input
            className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
            type="text"
            placeholder={"Relation"}
            id={"guardianRelation"}
            {...register("guardianRelation")}
          />
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"guardianEmail"}>Guardian Email</Label>
          <input
            className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
            type="text"
            placeholder={"Guardian Email"}
            id={"guardianEmail"}
            {...register("guardianEmail")}
          />
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"guardianPhoto"}>Guardian Photo</Label>
          <input
            className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
            type="file"
            id={"guardianPhoto"}
            {...register("guardianPhoto")}
          />
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"guardianPhoneNo"}>Guardian Phone No.</Label>
          <input
            className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
            type={"tel"}
            placeholder={"Guardian Phone No."}
            id={"guardianPhoneNo"}
            {...register("guardianPhoneNo")}
          />
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"guardianOccupation"}>Guardian Occupation</Label>
          <input
            className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
            type="text"
            placeholder={"Guardian Occupation"}
            id={"guardianOccupation"}
            {...register("guardianOccupation")}
          />
        </div>
        <div className="flex flex-col col-span-full mb-5">
          <Label htmlFor={"guardianAddress"}>Guardian Address</Label>
          <textarea
            className="border border-gray-400 px-5 py-3 text-gray-400 text-sm"
            id={"guardianAddress"}
            {...register("guardianAddress")}
            rows="2"
          />
        </div>
      </div>
    </div>
  );
}
