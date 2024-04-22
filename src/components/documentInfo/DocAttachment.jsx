import { headingTertiary } from "../../ui/AddStudentStyle";
import Input from "../../ui/Input";
import Label from "../../ui/Label";

export default function DocAttachment() {
  return (
    <div className="px-3 sm:px-8 col-span-full">
      <h3 className={headingTertiary}>DOCUMENT ATTACHMENT</h3>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 pt-5">
        <div className="flex flex-col gap-5 mb-5">
          <label for="" className="text-gray-400 font-medium text-xs">
            <Label>Document 01 Title</Label>
          </label>
          <Input type={"text"} />
          <Input type={"file"} />
        </div>
        <div className="flex flex-col gap-5 mb-5">
          <label for="" className="text-gray-400 font-medium text-xs">
            <Label>Document 02 Title</Label>
          </label>
          <Input type={"text"} />
          <Input type={"file"} />
        </div>
        <div className="flex flex-col gap-5 mb-5">
          <label for="" className="text-gray-400 font-medium text-xs">
            <Label>Document 03 Title</Label>
          </label>
          <Input type={"text"} />
          <Input type={"file"} />
        </div>
        <div className="flex flex-col gap-5 mb-5">
          <label for="" className="text-gray-400 font-medium text-xs">
            <Label>Document 04 Title</Label>
          </label>
          <Input type={"text"} />
          <Input type={"file"} />
        </div>
      </div>
    </div>
  );
}
