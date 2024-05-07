import {
  headingTertiary,
  labelDiv,
  selectBorder,
} from "../../../ui/AddStudentStyle";

import Label from "../../../ui/Label";

export default function MedicalInfo({ register }) {
  return (
    <div className="px-3 sm:px-8">
      <h3 className={headingTertiary}>Medical Info</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 pt-5">
        <div className={labelDiv}>
          <Label htmlFor={"bloodGroup"}>Blood Group</Label>
          <select className={selectBorder} id={"bloodGroup"}>
            <option value="">Blood Group</option>
            <option value="">A+</option>
            <option value="">B+</option>
          </select>
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"category"}>Category</Label>
          <select
            className={selectBorder}
            id={"category"}
            {...register("category")}
          >
            <option value="">Category</option>
            <option value="">Normal</option>
            <option value="">Anxiety Disorder</option>
          </select>
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"height"}>Height (CM)</Label>
          <input
            className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
            type="number"
            placeholder={"Enter Height"}
            id={"height"}
            {...register("height")}
          />
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"weight"}>Weight (KG)</Label>
          <input
            className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
            type="number"
            placeholder={"Enter Weight"}
            id={"weight"}
            {...register("weight")}
          />
        </div>
      </div>
    </div>
  );
}
