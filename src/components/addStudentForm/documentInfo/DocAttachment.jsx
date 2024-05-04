import { headingTertiary, labelDiv } from "../../../ui/AddStudentStyle";

import Label from "../../../ui/Label";

export default function DocAttachment({ register }) {
  return (
    <div className="px-3 sm:px-8 col-span-full">
      <h3 className={headingTertiary}>Document Attachment</h3>

      <p>Test</p>
      {/* <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 pt-5">
        <div className={labelDiv}>
          <Label htmlFor={"doc01"}>Document 01 Title</Label>
          <input
            className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
            id={"doc01"}
            type={"text"}
            {...register("doc01")}
          />
          <input
            className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
            id={"doc01"}
            type={"file"}
            {...register("doc01")}
          />
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"doc02"}>Document 02 Title</Label>
          <input
            className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
            id={"doc02"}
            type={"text"}
            {...register("")}
          />
          <input
            className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
            id={"doc02"}
            type={"file"}
            {...register("")}
          />
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"doc03"}>Document 03 Title</Label>
          <input
            className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
            id={"doc03"}
            type={"text"}
            {...register("")}
          />
          <input
            className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
            id={"doc03"}
            type={"file"}
            {...register("")}
          />
        </div>
        <div className={labelDiv}>
          <Label htmlFor={"doc04"}>Document 04 Title</Label>
          <input
            className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
            id={"doc04"}
            type={"text"}
            {...register("")}
          />
          <input
            className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
            id={"doc04"}
            type={"file"}
            {...register("")}
          />
        </div>
      </div> */}
    </div>
  );
}
