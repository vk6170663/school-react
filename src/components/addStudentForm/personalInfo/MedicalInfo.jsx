import { headingTertiary, selectBorder } from "../../../ui/AddStudentStyle";

import FormRow from "../FormRow";

export default function MedicalInfo({ register }) {
  return (
    <div className="px-3 sm:px-8">
      <h3 className={headingTertiary}>Medical Info</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 pt-5">
        <FormRow label={"Blood Group"}>
          <select className={selectBorder} id={"bloodGroup"}>
            <option value="">Blood Group</option>
            <option value="">A+</option>
            <option value="">B+</option>
          </select>
        </FormRow>
        <FormRow label={"Category"}>
          <select
            className={selectBorder}
            id={"category"}
            {...register("category")}
          >
            <option value="">Category</option>
            <option value="">Normal</option>
            <option value="">Anxiety Disorder</option>
          </select>
        </FormRow>
        <FormRow label={"Height (CM)"}>
          <input
            className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
            type="number"
            placeholder={"Enter Height"}
            id={"height"}
            {...register("height")}
          />
        </FormRow>
        <FormRow label={"Weight (KG)"}>
          <input
            className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
            type="number"
            placeholder={"Enter Weight"}
            id={"weight"}
            {...register("weight")}
          />
        </FormRow>
      </div>
    </div>
  );
}
