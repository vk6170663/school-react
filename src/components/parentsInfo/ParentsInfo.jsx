import { headingTertiary, labelDiv } from "../../ui/AddStudentStyle";
import Input from "../../ui/Input";
import Label from "../../ui/Label";

export default function ParentInfo() {
  return (
    <div className="grid grid-cols-2">
      <div className="px-8">
        <h3 className={headingTertiary}>Parents Info</h3>
        <div className="grid grid-cols-2 gap-x-8 pt-5">
          <div className={labelDiv}>
            <Label labelText={"Father Name"} />
            <Input type={"text"} placeholder={"Enter Father Name"} />
          </div>
          <div className={labelDiv}>
            <Label labelText={"Father Occupation"} />
            <Input placeholder={"Enter Occupation"} />
          </div>
          <div className={labelDiv}>
            <Label labelText={"Father Phone No."} />
            <Input type={"tel"} placeholder={"Father Phone No."} />
          </div>
          <div className={labelDiv}>
            <Label labelText={"Father Photo"} />
            <Input type={"file"} />
          </div>
          <div className={labelDiv}>
            <label for="" className="text-gray-400 font-medium text-xs pb-3">
              MOTHER NAME
            </label>
            <input
              className="border px-5 py-3 text-gray-400 text-sm"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className={labelDiv}>
            <label for="" className="text-gray-400 font-medium text-xs pb-3">
              OCCUPATION
            </label>
            <input
              className="border px-5 py-3 text-gray-400 text-sm"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className={labelDiv}>
            <label for="" className="text-gray-400 font-medium text-xs pb-3">
              MOTHER PHONE
            </label>
            <input
              className="border px-5 py-3 text-gray-400 text-sm"
              type="tel"
              name=""
              id=""
            />
          </div>
          <div className={labelDiv}>
            <label for="" className="text-gray-400 font-medium text-xs pb-3">
              MOTHERS PHOTO
            </label>
            <input
              className="border px-5 py-3 text-gray-400 text-sm"
              type="file"
              name=""
              id=""
            />
          </div>
        </div>
      </div>
      <div className="px-8">
        <h3 className="text-sm text-blue-900 font-semibold border-b-2 pb-2">
          GUARDIAN INFO
        </h3>
        <div className="grid grid-cols-2 gap-x-8 pt-5">
          <div className="col-span-full mb-8">
            <div className="flex items-center justify-between">
              <h3 className="text-sm text-blue-900 font-semibold">
                RELATION WITH GUARDIAN
              </h3>
              <div className="flex items-center gap-5">
                <input
                  className="border px-5 py-3 text-gray-400 rounded-lg"
                  type="checkbox"
                  name=""
                  id=""
                />
                <label for="" className="text-gray-400 font-medium text-md">
                  Father
                </label>
              </div>
              <div className="flex items-center gap-5">
                <input
                  className="border px-5 py-3 text-gray-400 rounded-lg"
                  type="checkbox"
                />
                <label for="" className="text-gray-400 font-medium text-md">
                  Mother
                </label>
              </div>
              <div className="flex items-center gap-5">
                <input
                  className="border px-5 py-3 text-gray-400 rounded-lg"
                  type="checkbox"
                  name=""
                  id=""
                />
                <label for="" className="text-gray-400 font-medium text-md">
                  Others
                </label>
              </div>
            </div>
          </div>

          <div className={labelDiv}>
            <label for="" className="text-gray-400 font-medium text-xs pb-3">
              DATE OF BIRTH
            </label>
            <input
              className="border px-5 py-3 text-gray-400 text-sm"
              type="date"
              name=""
              id=""
            />
          </div>
          <div className={labelDiv}>
            <label for="" className="text-gray-400 font-medium text-xs pb-3">
              RELIGION
            </label>
            <select className="border px-5 py-3 text-gray-400 text-sm">
              <option value="">Religion</option>
              <option value="">Hindu</option>
              <option value="">Christian</option>
              <option value="">Sikh</option>
              <option value="">Islam</option>
            </select>
          </div>

          <div className={labelDiv}>
            <label for="" className="text-gray-400 font-medium text-xs pb-3">
              CASTE
            </label>
            <input
              className="border px-5 py-3 text-gray-400 text-sm"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className={labelDiv}>
            <label for="" className="text-gray-400 font-medium text-xs pb-3">
              STUDENT PHOTO
            </label>
            <input
              className="border px-5 py-3 text-gray-400 text-sm"
              type="file"
              name=""
              id=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
