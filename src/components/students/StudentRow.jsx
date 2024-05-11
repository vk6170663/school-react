import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import styled from "styled-components";
import { deleteStudent } from "../../services/apiStudents";
import AddStudent from "../../pages/AddStudent";

import { useState } from "react";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Fields = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

export default function StudentRow({ student }) {
  const [showForm, setShowForm] = useState(false);

  const {
    id: studentId,
    firstName,
    className,
    section,
    studentImage,
    admissionDate,
    fatherName,
  } = student;

  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteStudent,
    onSuccess: () => {
      toast.success("Student successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["student"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return (
    <>
      <TableRow role="row">
        <Img src={studentImage} />
        <Fields>{firstName}</Fields>
        <Fields>{admissionDate}</Fields>
        <Fields>{className}</Fields>
        <Fields>{section}</Fields>
        <Fields>{fatherName}</Fields>
        <div>
          <button onClick={() => setShowForm((show) => !show)}>Edit</button>
          <button onClick={() => mutate(studentId)} disabled={isDeleting}>
            Delete
          </button>
        </div>
      </TableRow>

      {showForm && <AddStudent studentToEdit={student} />}
    </>
  );
}
