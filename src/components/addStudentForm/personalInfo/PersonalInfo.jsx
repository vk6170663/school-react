import {
  headingTertiary,
  labelDiv,
  selectBorder,
} from "../../../ui/AddStudentStyle";
import Input from "../../../ui/Input";
import Label from "../../../ui/Label";
import FormRow from "../FormRow";

export default function PersonalInfo({ register }) {
  return (
    <div className="px-3 sm:px-8">
      <h3 className={headingTertiary}>Personal Info</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 pt-5">
        <FormRow label={"First Name"}>
          <Input
            type={"text"}
            placeholder={"Enter First Name"}
            id={"firstName"}
            {...register("firstName")}
          />
        </FormRow>
        <FormRow label={"Last Name"}>
          <Input
            type={"text"}
            placeholder={"Enter Last Name"}
            id={"lastName"}
            {...register("lastName")}
          />
        </FormRow>
        <FormRow label={"Gender"}>
          <select
            className={selectBorder}
            id={"gender"}
            {...register("gender")}
          >
            <option value="">Gender</option>
            <option value={"female"}>Female</option>
            <option value={"male"}>Male</option>
          </select>
        </FormRow>
        <FormRow label={"DOB"}>
          <Input type={"date"} id={"dob"} {...register("dob")} />
        </FormRow>
        <FormRow label={"Religion"}>
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
        </FormRow>

        <FormRow label={"Caste"}>
          <Input
            type={"text"}
            placeholder={"Enter Caste"}
            id={"caste"}
            {...register("caste")}
          />
        </FormRow>
        <FormRow label={"Student Photo"}>
          <Input
            type="file"
            id={"studentPhoto"}
            {...register("studentPhoto")}
          />
        </FormRow>
      </div>
    </div>
  );
}
