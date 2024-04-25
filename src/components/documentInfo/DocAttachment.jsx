import { headingTertiary, labelDiv } from "../../ui/AddStudentStyle";
import Input from "../../ui/Input";
import Label from "../../ui/Label";

export default function DocAttachment() {
  return (
    <div className="px-3 sm:px-8 col-span-full">
      <h3 className={headingTertiary}>Document Attachment</h3>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 pt-5">
        <div className={labelDiv}>
          <Label>Document 01 Title</Label>
          <Input type={"text"} />
          <Input type={"file"} />
        </div>
        <div className={labelDiv}>
          <Label>Document 02 Title</Label>
          <Input type={"text"} />
          <Input type={"file"} />
        </div>
        <div className={labelDiv}>
          <Label>Document 03 Title</Label>
          <Input type={"text"} />
          <Input type={"file"} />
        </div>
        <div className={labelDiv}>
          <Label>Document 04 Title</Label>
          <Input type={"text"} />
          <Input type={"file"} />
        </div>
      </div>
    </div>
  );
}
