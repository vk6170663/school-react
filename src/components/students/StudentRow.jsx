import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import styled from "styled-components";
import { deleteStudent } from "../../services/apiStudents";
import AddStudent from "../../pages/AddStudent";

import { useState } from "react";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: repeat(13, 140px);
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
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
    admissionNumber,
    admissionDate,
    firstName,
    class_Name,
    section,
    fatherName,
    fatherPhoneNo,
    motherName,
    motherPhoneNo,
    address,
    feeDue,
    lastFeePaid,
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
        <Fields>{admissionNumber}</Fields>
        <Fields>{admissionDate}</Fields>
        <Fields>{firstName}</Fields>
        <Fields>{class_Name}</Fields>
        <Fields>{section}</Fields>
        <Fields>{section}</Fields>
        <Fields>{section}</Fields>
        <Fields>{section}</Fields>
        <Fields>{section}</Fields>
        <Fields>{section}</Fields>
        <Fields>{section}</Fields>
        <Fields>{section}</Fields>
        {/* <Fields>{fatherName}</Fields>
        <Fields>{fatherPhoneNo}</Fields>
        <Fields>{motherName}</Fields>
        <Fields>{motherPhoneNo}</Fields>
        <Fields>{address}</Fields>
        <Fields>{feeDue}</Fields>
        <Fields>{lastFeePaid}</Fields> */}
        <div>
          <button
            className="border pe-4 me-8"
            onClick={() => setShowForm((show) => !show)}
          >
            Edit
          </button>
          <button
            className="border"
            onClick={() => mutate(studentId)}
            disabled={isDeleting}
          >
            Delete
          </button>
        </div>
      </TableRow>

      {showForm && <AddStudent studentToEdit={student} />}
    </>
  );
}
