import { headingTertiary, selectBorder } from "../../../ui/AddStudentStyle";
import FormRow from "../FormRow";

export default function OtherInfo({ register }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 pb-24">
      <div className="px-3 sm:px-8">
        <h3 className={headingTertiary}>TRANSPORT</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 pt-5">
          <FormRow label={"Route List"}>
            <select
              className={selectBorder}
              id={"routeList"}
              {...register("routeList")}
            >
              <option value="">Route List</option>
              <option value="">Jalandhar-Nakodar</option>
            </select>
          </FormRow>
          <FormRow label={"Vehicle Number"}>
            <select
              className={selectBorder}
              id={"vehicleNumber"}
              {...register("vehicleNumber")}
            >
              <option value="">Vehicle Number</option>
              <option value="">143643</option>
              <option value="">464362</option>
              <option value="">34765467</option>
              <option value="">44364</option>
              <option value="">543643</option>
            </select>
          </FormRow>
        </div>
      </div>
      <div className="px-3 sm:px-8">
        <h3 className={headingTertiary}>OTHER INFO</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 pt-5">
          <FormRow label={"Dormitory"}>
            <select
              className={selectBorder}
              id={"dormitory"}
              {...register("dormitory")}
            >
              <option value="">Dormitory Name</option>
              <option value="">Sir Isaac Newton Hotel</option>
            </select>
          </FormRow>
          <FormRow label={"Room Number"}>
            <select
              className={selectBorder}
              id={"roomNumber"}
              {...register("roomNumber")}
            >
              <option value="">Room Number</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
          </FormRow>
        </div>
      </div>
    </div>
  );
}
