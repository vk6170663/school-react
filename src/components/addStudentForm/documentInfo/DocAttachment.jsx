import { headingTertiary, labelDiv } from "../../../ui/AddStudentStyle";
import Input from "../../../ui/Input";
import Label from "../../../ui/Label";

export default function DocAttachment() {
  return (
    <div className="px-3 sm:px-8 col-span-full">
      <h3 className={headingTertiary}>Document Attachment</h3>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 pt-5">
        <div className={labelDiv}>
          <Label htmlFor={"doc01"}>Document 01 Title</Label>
          <Input id={"doc01"} type={"text"} />
          <Input id={"doc01"} type={"file"} />
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"doc02"}>Document 02 Title</Label>
          <Input id={"doc02"} type={"text"} />
          <Input id={"doc02"} type={"file"} />
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"doc03"}>Document 03 Title</Label>
          <Input id={"doc03"} type={"text"} />
          <Input id={"doc03"} type={"file"} />
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"doc04"}>Document 04 Title</Label>
          <Input id={"doc04"} type={"text"} />
          <Input id={"doc04"} type={"file"} />
        </div>
      </div>
    </div>
  );
}
