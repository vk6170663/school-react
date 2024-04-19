import Input from "../ui/Input";
import Label from "../ui/Label";
import AcademicInformation from "./AcademicInformation";

export default function PersonalInfo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <AcademicInformation />
      <PersonalInfo />
      <div className="px-3 sm:px-8">
        <h3 className="text-sm text-blue-900 font-semibold border-b-2 pb-2">
          CONTACT INFORMATION
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 pt-5">
          <div className="flex flex-col mb-5">
            <label className="text-gray-400 font-medium text-xs pb-3">
              EMAIL ADDRESS
            </label>
            <input
              className="border px-5 py-3 text-gray-400 text-sm"
              type="email"
              name=""
              id=""
            />
          </div>
          <div className="flex flex-col mb-5">
            <label className="text-gray-400 font-medium text-xs pb-3">
              PHONE NUMBER
            </label>
            <input
              className="border px-5 py-3 text-gray-400 text-sm"
              type="tel"
              name=""
              id=""
            />
          </div>
          <div className="col-span-full mb-5">
            <h3 className="text-sm text-blue-900 font-semibold border-b-2 pb-2">
              STUDENT ADDRESS INFO
            </h3>
          </div>
          <div className="flex flex-col mb-5">
            <label className="text-gray-400 font-medium text-xs pb-3">
              CURRENT ADDRESS
            </label>
            <textarea
              className="border px-5 py-3 text-gray-400 text-sm"
              name=""
              id=""
              rows="2"
            ></textarea>
          </div>
          <div className="flex flex-col mb-5">
            <label className="text-gray-400 font-medium text-xs pb-3">
              PERMANENT ADDRESS
            </label>
            <textarea
              className="border px-5 py-3 text-gray-400 text-sm"
              name=""
              id=""
              rows="2"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="px-3 sm:px-8">
        <h3 className="text-sm text-blue-900 font-semibold border-b-2 pb-2">
          MEDICAL RECORD
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 pt-5">
          <div className="flex flex-col mb-5">
            <label className="text-gray-400 font-medium text-xs pb-3">
              BLOOD GROUP
            </label>
            <select className="border px-5 py-3 text-gray-400 text-sm">
              <option value="">Blood Group</option>
              <option value="">A+</option>
              <option value="">B+</option>
            </select>
          </div>
          <div className="flex flex-col mb-5">
            <label className="text-gray-400 font-medium text-xs pb-3">
              CATEGORY
            </label>
            <select className="border px-5 py-3 text-gray-400 text-sm">
              <option value="">Category</option>
              <option value="">Normal</option>
              <option value="">Anxiety Disorder</option>
            </select>
          </div>
          <div className="flex flex-col mb-5">
            <label className="text-gray-400 font-medium text-xs pb-3">
              HEIGHT (IN)
            </label>
            <input
              className="border px-5 py-3 text-gray-400 text-sm"
              type="number"
              name=""
              id=""
            />
          </div>
          <div className="flex flex-col mb-5">
            <label className="text-gray-400 font-medium text-xs pb-3">
              WEIGHT (KG)
            </label>
            <input
              className="border px-5 py-3 text-gray-400 text-sm"
              type="number"
              name=""
              id=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
