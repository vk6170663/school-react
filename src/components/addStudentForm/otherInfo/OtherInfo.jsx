import {
  headingTertiary,
  labelDiv,
  selectBorder,
} from "../../../ui/AddStudentStyle";

import Label from "../../../ui/Label";

export default function OtherInfo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 pb-24">
      <div className="px-3 sm:px-8">
        <h3 className={headingTertiary}>TRANSPORT</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 pt-5">
          <div className={labelDiv}>
            <Label htmlFor={"routeList"}>Route List</Label>
            <select className={selectBorder} id={"routeList"}>
              <option value="">Route List</option>
              <option value="">Jalandhar-Nakodar</option>
            </select>
          </div>
          <div className={labelDiv}>
            <Label htmlFor={"vehicleNumber"}>Vehicle Number</Label>
            <select className={selectBorder} id={"vehicleNumber"}>
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
            <Label htmlFor={"dormitory"}>Dormitory</Label>
            <select className={selectBorder} id={"dormitory"}>
              <option value="">Dormitory Name</option>
              <option value="">Sir Isaac Newton Hotel</option>
            </select>
          </div>
          <div className={labelDiv}>
            <Label htmlFor={"roomNumber"}>Room Number</Label>
            <select className={selectBorder} id={"roomNumber"}>
              <option value="">Room Number</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
