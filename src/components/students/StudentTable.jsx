import { useQuery } from "@tanstack/react-query";
import { getStudents } from "../../services/apiStudents";
import Spinner from "../../ui/Spinner";
import StudentRow from "./StudentRow";
import StudentSearchForm from "./StudentSearchForm";

export default function StudentTable() {
  const {
    isLoading,
    data: students,
    error,
  } = useQuery({
    queryKey: ["student"],
    queryFn: getStudents,
  });

  if (isLoading) return <Spinner />;

  return (
    <>
      <StudentSearchForm />
      <div role="table">
        <div role="row">
          <div>Image</div>
          <div>Student Name</div>
          <div>Admission Date</div>
          <div>Class</div>
          <div>Section</div>
        </div>
        {students.map((student) => (
          <StudentRow student={student} key={student.id} />
        ))}
      </div>
    </>
  );
}
