import { headingTertiary } from "../../../ui/AddStudentStyle";
import FormRow from "../FormRow";

export default function GuardianInfo({ register }) {
  return (
    <div className="px-8">
      <h3 className={headingTertiary}>Guardian Info</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 pt-5">
        <FormRow label={"Guardian Name"}>
          <input
            className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
            type="text"
            placeholder={"Guardians Name"}
            id={"guardianName"}
            {...register("guardianName")}
          />
        </FormRow>
        <FormRow label={"Relation with Guardian"}>
          <input
            className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
            type="text"
            placeholder={"Relation"}
            id={"guardianRelation"}
            {...register("guardianRelation")}
          />
        </FormRow>
        <FormRow label={"Guardian Email"}>
          <input
            className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
            type="text"
            placeholder={"Guardian Email"}
            id={"guardianEmail"}
            {...register("guardianEmail")}
          />
        </FormRow>
        <FormRow label={"Guardian Photo"}>
          <input
            className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
            type="file"
            id={"guardianPhoto"}
            {...register("guardianPhoto")}
          />
        </FormRow>
        <FormRow label={"Guardian Phone No."}>
          <input
            className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
            type={"tel"}
            placeholder={"Guardian Phone No."}
            id={"guardianPhoneNo"}
            {...register("guardianPhoneNo")}
          />
        </FormRow>
        <FormRow label={"Guardian Occupation"}>
          <input
            className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
            type="text"
            placeholder={"Guardian Occupation"}
            id={"guardianOccupation"}
            {...register("guardianOccupation")}
          />
        </FormRow>
        <FormRow label={"Guardian Address"}>
          <textarea
            className="border border-gray-400 px-5 py-3 text-gray-400 text-sm"
            id={"guardianAddress"}
            {...register("guardianAddress")}
            rows="2"
          />
        </FormRow>
      </div>
    </div>
  );
}
