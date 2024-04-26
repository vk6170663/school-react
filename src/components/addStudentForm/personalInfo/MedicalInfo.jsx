import {
  headingTertiary,
  labelDiv,
  selectBorder,
} from "../../../ui/AddStudentStyle";
import Input from "../../../ui/Input";
import Label from "../../../ui/Label";

export default function MedicalInfo() {
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
          <select className={selectBorder} id={"category"}>
            <option value="">Category</option>
            <option value="">Normal</option>
            <option value="">Anxiety Disorder</option>
          </select>
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"height"}>Height (CM)</Label>
          <Input type={"number"} placeholder={"Enter Height"} id={"height"} />
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"weight"}>Weight (KG)</Label>
          <Input type={"number"} placeholder={"Enter Weight"} id={"weight"} />
        </div>
      </div>
    </div>
  );
}
