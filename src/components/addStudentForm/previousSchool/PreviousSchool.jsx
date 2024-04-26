import Label from "../../../ui/Label";

export default function PreviousSchool() {
  return (
    <div className="flex flex-col px-3 sm:px-8 ">
      <Label htmlFor={"previousSchoolAddress"}>Previous School Address</Label>
      <textarea
        className="border border-gray-400 px-5 py-3 text-gray-400 text-sm"
        rows="14"
        id={"previousSchoolAddress"}
      />
    </div>
  );
}
