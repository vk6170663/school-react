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
    </>
    // <Table role="table">
    //   <TableHeader role="row">
    //     <div>Image</div>
    //     <div>Student Name</div>
    //     <div>Admission Date</div>
    //     <div>Class</div>
    //     <div>Section</div>
    //   </TableHeader>
    //   {students.map((student) => (
    //     <StudentRow student={student} key={student.id} />
    //   ))}
    // </Table>
  );
}
