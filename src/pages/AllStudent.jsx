import StudentTable from "../components/students/StudentTable";

export default function AllStudent() {
  return (
    <>
      {/* <div className="flex items-center justify-between"></div> */}
      <div className="flex flex-col gap-6 overflow-hidden">
        <StudentTable />
      </div>
    </>
  );
}
