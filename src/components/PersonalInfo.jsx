import Input from "../ui/Input";
import Label from "../ui/Label";

export default function PersonalInfo() {
  return (
    <div>
      <h3 className="text-sm text-blue-900 font-semibold border-b-2 pb-2">
        PERSONAL INFO
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 pt-5">
        <div className="flex flex-col mb-5">
          <label className="text-gray-400 font-medium text-xs pb-3">
            FIRST NAME
          </label>
          <input
            className="border px-5 py-3 text-gray-400 text-sm"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-gray-400 font-medium text-xs pb-3">
            LAST NAME
          </label>
          <input
            className="border px-5 py-3 text-gray-400 text-sm"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-gray-400 font-medium text-xs pb-3">
            GENDER
          </label>
          <select className="border px-5 py-3 text-gray-400 text-sm">
            <option value="">Gender</option>
            <option value="">Female</option>
            <option value="">Male</option>
          </select>
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-gray-400 font-medium text-xs pb-3">
            DATE OF BIRTH
          </label>
          <input
            className="border px-5 py-3 text-gray-400 text-sm"
            type="date"
            name=""
            id=""
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-gray-400 font-medium text-xs pb-3">
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

        <div className="flex flex-col mb-5">
          <label className="text-gray-400 font-medium text-xs pb-3">
            CASTE
          </label>
          <input
            className="border px-5 py-3 text-gray-400 text-sm"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-gray-400 font-medium text-xs pb-3">
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
  );
}
