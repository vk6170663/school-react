import {
  headingTertiary,
  labelDiv,
  selectBorder,
} from "../../../ui/AddStudentStyle";

import Label from "../../../ui/Label";

export default function PersonalInfo({ register }) {
  return (
    <div className="px-3 sm:px-8">
      <h3 className={headingTertiary}>Personal Info</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 pt-5">
        <div className={labelDiv}>
          <Label htmlFor={"firstName"}>First Name</Label>
          <input
            className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
            type={"text"}
            placeholder={"Enter First Name"}
            id={"firstName"}
            {...register("firstName")}
          />
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"lastName"}>Last Name</Label>
          <input
            className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
            type={"text"}
            placeholder={"Enter Last Name"}
            id={"lastName"}
            {...register("lastName")}
          />
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"gender"}>Gender</Label>
          <select
            className={selectBorder}
            id={"gender"}
            {...register("gender")}
          >
            <option value="">Gender</option>
            <option value={"female"}>Female</option>
            <option value={"male"}>Male</option>
          </select>
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"dob"}>DOB</Label>
          <input
            className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
            type={"date"}
            id={"dob"}
            {...register("dob")}
          />
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"religion"}>Religion</Label>
          <select
            className={selectBorder}
            id={"religion"}
            {...register("religion")}
          >
            <option value="">Religion</option>
            <option value={"hindu"}>Hindu</option>
            <option value={"christian"}>Christian</option>
            <option value={"sikh"}>Sikh</option>
            <option value={"islam"}>Islam</option>
          </select>
        </div>

        <div className={labelDiv}>
          <Label htmlFor={"caste"}>Caste</Label>
          <input
            className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
            type={"text"}
            placeholder={"Enter Caste"}
            id={"caste"}
            {...register("caste")}
          />
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"studentPhoto"}>Student Photo</Label>
          <input
            className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
            type="file"
            id={"studentPhoto"}
            {...register("studentPhoto")}
          />
        </div>
      </div>
    </div>
  );
}
