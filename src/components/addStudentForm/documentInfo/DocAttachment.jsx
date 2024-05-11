import { headingTertiary } from "../../../ui/AddStudentStyle";
import Input from "../../../ui/Input";
import FormRow from "../FormRow";

export default function DocAttachment({ register }) {
  return (
    <div className="px-3 sm:px-8 col-span-full">
      <h3 className={headingTertiary}>Document Attachment</h3>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 pt-5">
        <FormRow label={"Document 01 Title"}>
          <Input id="doc01" type="text" {...register("doc01")} />
          {/* <Input id={"doc02"} type={"file"} /> */}
        </FormRow>
      </div>
    </div>
  );
}
