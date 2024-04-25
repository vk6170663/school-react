import {
  headingTertiary,
  labelDiv,
  selectBorder,
} from "../../ui/AddStudentStyle";
import Input from "../../ui/Input";
import Label from "../../ui/Label";

export default function OtherInfo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 pb-24">
      <div className="px-3 sm:px-8">
        <h3 className={headingTertiary}>TRANSPORT</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 pt-5">
          <div className={labelDiv}>
            <Label>Route List</Label>
            <select className="border px-5 py-3 text-gray-400 text-sm">
              <option value="">Route List</option>
              <option value="">Jalandhar-Nakodar</option>
            </select>
          </div>
          <div className={labelDiv}>
            <Label>Vehicle Number</Label>
            <select className="border px-5 py-3 text-gray-400 text-sm">
              <option value="">Vehicle Number</option>
              <option value="">143643</option>
              <option value="">464362</option>
              <option value="">34765467</option>
              <option value="">44364</option>
              <option value="">543643</option>
            </select>
          </div>
        </div>
      </div>
      <div className="px-3 sm:px-8">
        <h3 className={headingTertiary}>OTHER INFO</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 pt-5">
          <div className={labelDiv}>
            <Label>Dormitory</Label>
            <select className={selectBorder}>
              <option value="">Dormitory Name</option>
              <option value="">Sir Isaac Newton Hotel</option>
            </select>
          </div>
          <div className={labelDiv}>
            <Label>Room Number</Label>
            <select className={selectBorder}>
              <option value="">Room Number</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
          </div>

          <div className={labelDiv}>
            <Label>Caste</Label>
            <Input type={"text"} placeholder={"Caste"} />
          </div>
          <div className={labelDiv}>
            <Label>Student Photo</Label>
            <Input type={"file"} />
          </div>
        </div>
      </div>
    </div>
  );
}
