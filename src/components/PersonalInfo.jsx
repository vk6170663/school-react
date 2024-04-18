export default function PersonalInfo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="px-3 sm:px-8">
        <h3 className="text-sm text-blue-900 font-semibold border-b-2 pb-2">
          ACADEMIC INFORMATION
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 pt-5">
          <div className="flex flex-col mb-5">
            <label className="text-gray-400 font-medium text-xs pb-3">
              ACADEMIC YEAR
            </label>
            <select className="border px-5 py-3 text-gray-400 text-sm">
              <option value="">Acedmic year</option>
              <option value="">2024 [Jan-Dec]</option>
            </select>
          </div>
          <div className="flex flex-col mb-5">
            <label className="text-gray-400 font-medium text-xs pb-3">
              className
            </label>
            <select className="border px-5 py-3 text-gray-400 text-sm">
              <option value="">className</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
            </select>
          </div>
          <div className="flex flex-col mb-5">
            <label className="text-gray-400 font-medium text-xs pb-3">
              SECTION
            </label>
            <select className="border px-5 py-3 text-gray-400 text-sm">
              <option value="">Section</option>
              <option value="">A</option>
              <option value="">B</option>
            </select>
          </div>
          <div className="flex flex-col mb-5">
            <label className="text-gray-400 font-medium text-xs pb-3">
              ADMISSION NUMBER
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
              ADMISSION DATE
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
              ROLL NUMBER
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
      <div className="px-3 sm:px-8">
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
