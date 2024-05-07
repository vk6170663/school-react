import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import styled from "styled-components";
import { deleteStudent } from "../../services/apiStudents";
import AddStudent from "../../pages/AddStudent";

import { useState } from "react";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
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

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
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
        <Cabin>{firstName}</Cabin>
        <div>{admissionDate}</div>
        <Price>{className}</Price>
        <Discount>{section}</Discount>
        <button onClick={() => setShowForm((show) => !show)}>Edit</button>
        <button onClick={() => mutate(studentId)} disabled={isDeleting}>
          Delete
        </button>
      </TableRow>

      {showForm && <AddStudent studentToEdit={student} />}
    </>
  );
}