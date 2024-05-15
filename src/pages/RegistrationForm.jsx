import FormRow from "../components/addStudentForm/FormRow";

export default function RegistrationForm() {
  return (
    <div className="flex flex-col gap-6 overflow-hidden">
      {" "}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 p-5">
        <FormRow label={"Student Name"}>
          <input
            className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
            type={"text"}
            placeholder={"Enter Student Name"}
            id={"fatherName"}
          />
        </FormRow>
        <FormRow label={"Father Occupation"}>
          <input
            className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
            type={"text"}
            placeholder={"Enter Occupation"}
            id={"fatherOccupation"}
          />
        </FormRow>
        <FormRow label={"Father Phone No."}>
          <input
            className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
            type={"tel"}
            placeholder={"Father Phone No."}
            id={"fatherPhoneNo"}
          />
        </FormRow>
        <FormRow label={"Father Photo"}>
          <input
            className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
            type={"file"}
            id={"fatherPhoto"}
          />
        </FormRow>
        <FormRow label={"Mother Name"}>
          <input
            className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
            type={"text"}
            placeholder={"Mother Name"}
            id={"motherName"}
          />
        </FormRow>
        <FormRow label={"Mother Occupation"}>
          <input
            className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
            type={"text"}
            placeholder={"Mother Occupation"}
            id={"motherOccupation"}
          />
        </FormRow>
        <FormRow label={"Mother Phone No."}>
          <input
            className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
            type={"tel"}
            placeholder={"Mother Phone No."}
            id={"motherPhone"}
          />
        </FormRow>
        <FormRow label={"Mother Photo"}>
          <input
            className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
            type={"file"}
            id={"motherPhoto"}
          />
        </FormRow>
      </div>
    </div>
  );
}
