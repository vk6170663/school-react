import { headingTertiary } from "../../../ui/AddStudentStyle";
import FormRow from "../FormRow";

export default function DocumentInfo({ register, children }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="px-3 sm:px-8">
        <h3 className={headingTertiary}>Document Info</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 pt-5">
          <FormRow label={"National ID Card"}>
            <input
              className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
              type="text"
              placeholder={"National Id Card "}
              id={"nationalIdCard"}
              {...register("nationalIdCard")}
            />
          </FormRow>
          <FormRow label={"Birth Certificate No."}>
            <input
              className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
              type="text"
              placeholder={"Birth Certificate No."}
              id={"birthCertificateNo"}
              {...register("birthCertificateNo")}
            />
          </FormRow>
          <FormRow label={"Additional Notes"}>
            <textarea
              className="border border-gray-400 px-5 py-3 text-gray-400 text-sm"
              rows="2"
              id={"additionalNotes"}
              {...register("additionalNotes")}
            />
          </FormRow>
        </div>
      </div>
      {children}
    </div>
  );
}
