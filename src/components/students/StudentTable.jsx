import { useQuery } from "@tanstack/react-query";
import { getStudents } from "../../services/apiStudents";
import Spinner from "../../ui/Spinner";
import StudentRow from "./StudentRow";
import StudentSearchForm from "./StudentSearchForm";
import styled from "styled-components";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);
  font-size: 1rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow-x: scroll;
`;

const TableHeader = styled.header`
  // display: flex;
  display: grid;
  grid-template-columns: repeat(13, 140px);
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
    <div className="p-2 sm:px-5 max-w-[1140px] overflow-x-hidden">
      <StudentSearchForm />
      <Table role="table">
        <TableHeader role="row">
          <div>Admission No.</div>
          <div>Admission Date</div>
          <div>Student Name</div>
          <div>Class</div>
          <div>Section</div>
          <div>Father Name</div>
          <div>Father Phone No.</div>
          <div>Mother Name</div>
          <div>Mother Phone No.</div>
          <div>Address</div>
          <div>fee due</div>
          <div>Last Fee Paid</div>
        </TableHeader>
        {students.map((student) => (
          <StudentRow student={student} key={student.id} />
        ))}
      </Table>
    </div>
  );
}
