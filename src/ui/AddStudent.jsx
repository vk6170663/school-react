export default function AddStudent() {
  return (
    <main class="p-2 sm:px-5">
      <form action="">
        <div class="flex sm:flex-row flex-col items-center justify-between mb-6">
          <h3 class="text-xl font-medium text-gray-500">Add Student</h3>
          <button class="sm:mt-0 mt-5 bg-indigo-700 text-slate-50 font-semibold py-2 px-4 rounded-lg uppercase">
            &#x2b; Import Student
          </button>
        </div>
        <div class="flex lg:flex-row flex-col items-center justify-between pb-5 border-b-2 mb-11">
          <ul class="flex items-center gap-5 flex-wrap order-last lg:order-first mt-5">
            <li class="bg-gray-300 rounded-lg uppercase text-xs font-medium text-gray-700 px-4 py-3">
              <a href="#">Personal Info</a>
            </li>
            <li class="text-gray-700 px-4 py-3 uppercase text-xs font-medium">
              <a href="#">PARENTS & GUARDIAN INFO</a>
            </li>
            <li class="text-gray-700 px-4 py-3 uppercase text-xs font-medium">
              <a href="#">DOCUMENT INFO</a>
            </li>
            <li class="text-gray-700 px-4 py-3 uppercase text-xs font-medium">
              <a href="#">PREVIOUS SCHOOL INFORMATION</a>
            </li>

            <li class="text-gray-700 px-4 py-3 uppercase text-xs font-medium">
              <a href="#">OTHER INFO</a>
            </li>
          </ul>

          <button class="bg-indigo-700 text-slate-50 font-semibold py-2 px-4 rounded-lg uppercase">
            Save Student
          </button>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2">
          <div class="px-3 sm:px-8">
            <h3 class="text-sm text-blue-900 font-semibold border-b-2 pb-2">
              ACADEMIC INFORMATION
            </h3>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-8 pt-5">
              <div class="flex flex-col mb-5">
                <label for="" class="text-gray-400 font-medium text-xs pb-3">
                  ACADEMIC YEAR
                </label>
                <select class="border px-5 py-3 text-gray-400 text-sm">
                  <option value="">Acedmic year</option>
                  <option value="">2024 [Jan-Dec]</option>
                </select>
              </div>
              <div class="flex flex-col mb-5">
                <label for="" class="text-gray-400 font-medium text-xs pb-3">
                  CLASS
                </label>
                <select class="border px-5 py-3 text-gray-400 text-sm">
                  <option value="">Class</option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                </select>
              </div>
              <div class="flex flex-col mb-5">
                <label for="" class="text-gray-400 font-medium text-xs pb-3">
                  SECTION
                </label>
                <select class="border px-5 py-3 text-gray-400 text-sm">
                  <option value="">Section</option>
                  <option value="">A</option>
                  <option value="">B</option>
                </select>
              </div>
              <div class="flex flex-col mb-5">
                <label for="" class="text-gray-400 font-medium text-xs pb-3">
                  ADMISSION NUMBER
                </label>
                <input
                  class="border px-5 py-3 text-gray-400 text-sm"
                  type="number"
                  name=""
                  id=""
                />
              </div>
              <div class="flex flex-col mb-5">
                <label for="" class="text-gray-400 font-medium text-xs pb-3">
                  ADMISSION DATE
                </label>
                <input
                  class="border px-5 py-3 text-gray-400 text-sm"
                  type="date"
                  name=""
                  id=""
                />
              </div>
              <div class="flex flex-col mb-5">
                <label for="" class="text-gray-400 font-medium text-xs pb-3">
                  ROLL NUMBER
                </label>
                <input
                  class="border px-5 py-3 text-gray-400 text-sm"
                  type="number"
                  name=""
                  id=""
                />
              </div>
            </div>
          </div>
          <div class="px-3 sm:px-8">
            <h3 class="text-sm text-blue-900 font-semibold border-b-2 pb-2">
              PERSONAL INFO
            </h3>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-8 pt-5">
              <div class="flex flex-col mb-5">
                <label for="" class="text-gray-400 font-medium text-xs pb-3">
                  FIRST NAME
                </label>
                <input
                  class="border px-5 py-3 text-gray-400 text-sm"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div class="flex flex-col mb-5">
                <label for="" class="text-gray-400 font-medium text-xs pb-3">
                  LAST NAME
                </label>
                <input
                  class="border px-5 py-3 text-gray-400 text-sm"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div class="flex flex-col mb-5">
                <label for="" class="text-gray-400 font-medium text-xs pb-3">
                  GENDER
                </label>
                <select class="border px-5 py-3 text-gray-400 text-sm">
                  <option value="">Gender</option>
                  <option value="">Female</option>
                  <option value="">Male</option>
                </select>
              </div>
              <div class="flex flex-col mb-5">
                <label for="" class="text-gray-400 font-medium text-xs pb-3">
                  DATE OF BIRTH
                </label>
                <input
                  class="border px-5 py-3 text-gray-400 text-sm"
                  type="date"
                  name=""
                  id=""
                />
              </div>
              <div class="flex flex-col mb-5">
                <label for="" class="text-gray-400 font-medium text-xs pb-3">
                  RELIGION
                </label>
                <select class="border px-5 py-3 text-gray-400 text-sm">
                  <option value="">Religion</option>
                  <option value="">Hindu</option>
                  <option value="">Christian</option>
                  <option value="">Sikh</option>
                  <option value="">Islam</option>
                </select>
              </div>

              <div class="flex flex-col mb-5">
                <label for="" class="text-gray-400 font-medium text-xs pb-3">
                  CASTE
                </label>
                <input
                  class="border px-5 py-3 text-gray-400 text-sm"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div class="flex flex-col mb-5">
                <label for="" class="text-gray-400 font-medium text-xs pb-3">
                  STUDENT PHOTO
                </label>
                <input
                  class="border px-5 py-3 text-gray-400 text-sm"
                  type="file"
                  name=""
                  id=""
                />
              </div>
            </div>
          </div>
          <div class="px-3 sm:px-8">
            <h3 class="text-sm text-blue-900 font-semibold border-b-2 pb-2">
              CONTACT INFORMATION
            </h3>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-8 pt-5">
              <div class="flex flex-col mb-5">
                <label for="" class="text-gray-400 font-medium text-xs pb-3">
                  EMAIL ADDRESS
                </label>
                <input
                  class="border px-5 py-3 text-gray-400 text-sm"
                  type="email"
                  name=""
                  id=""
                />
              </div>
              <div class="flex flex-col mb-5">
                <label for="" class="text-gray-400 font-medium text-xs pb-3">
                  PHONE NUMBER
                </label>
                <input
                  class="border px-5 py-3 text-gray-400 text-sm"
                  type="tel"
                  name=""
                  id=""
                />
              </div>
              <div class="col-span-full mb-5">
                <h3 class="text-sm text-blue-900 font-semibold border-b-2 pb-2">
                  STUDENT ADDRESS INFO
                </h3>
              </div>
              <div class="flex flex-col mb-5">
                <label for="" class="text-gray-400 font-medium text-xs pb-3">
                  CURRENT ADDRESS
                </label>
                <textarea
                  class="border px-5 py-3 text-gray-400 text-sm"
                  name=""
                  id=""
                  rows="2"
                ></textarea>
              </div>
              <div class="flex flex-col mb-5">
                <label for="" class="text-gray-400 font-medium text-xs pb-3">
                  PERMANENT ADDRESS
                </label>
                <textarea
                  class="border px-5 py-3 text-gray-400 text-sm"
                  name=""
                  id=""
                  rows="2"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="px-3 sm:px-8">
            <h3 class="text-sm text-blue-900 font-semibold border-b-2 pb-2">
              MEDICAL RECORD
            </h3>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-8 pt-5">
              <div class="flex flex-col mb-5">
                <label for="" class="text-gray-400 font-medium text-xs pb-3">
                  BLOOD GROUP
                </label>
                <select class="border px-5 py-3 text-gray-400 text-sm">
                  <option value="">Blood Group</option>
                  <option value="">A+</option>
                  <option value="">B+</option>
                </select>
              </div>
              <div class="flex flex-col mb-5">
                <label for="" class="text-gray-400 font-medium text-xs pb-3">
                  CATEGORY
                </label>
                <select class="border px-5 py-3 text-gray-400 text-sm">
                  <option value="">Category</option>
                  <option value="">Normal</option>
                  <option value="">Anxiety Disorder</option>
                </select>
              </div>
              <div class="flex flex-col mb-5">
                <label for="" class="text-gray-400 font-medium text-xs pb-3">
                  HEIGHT (IN)
                </label>
                <input
                  class="border px-5 py-3 text-gray-400 text-sm"
                  type="number"
                  name=""
                  id=""
                />
              </div>
              <div class="flex flex-col mb-5">
                <label for="" class="text-gray-400 font-medium text-xs pb-3">
                  WEIGHT (KG)
                </label>
                <input
                  class="border px-5 py-3 text-gray-400 text-sm"
                  type="number"
                  name=""
                  id=""
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}
