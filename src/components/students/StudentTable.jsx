import { useQuery } from "@tanstack/react-query";
import { getStudents } from "../../services/apiStudents";
import Spinner from "../../ui/Spinner";
import styled from "styled-components";
import StudentRow from "./StudentRow";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

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
    <Table role="table">
      <TableHeader role="row">
        <div>Image</div>
        <div>Student Name</div>
        <div>Admission Date</div>
        <div>Class</div>
        <div>Section</div>
      </TableHeader>
      {students.map((student) => (
        <StudentRow student={student} key={student.id} />
      ))}
    </Table>
  );
}
