import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { createFee, deleteFee, getFeesType } from "../services/apiFees";

import Spinner from "../ui/Spinner";
import Input from "../ui/Input";

import { FaCheck } from "react-icons/fa";

import { headingTertiary } from "../ui/AddStudentStyle";
import FormRow from "../components/addStudentForm/FormRow";

function FeesType() {
  const { register, handleSubmit, reset } = useForm();
  const queryClient = useQueryClient();

  // getting or displaying all fee type
  const {
    isLoading,
    data: fees,
    error,
  } = useQuery({
    queryKey: ["fees"],
    queryFn: getFeesType,
  });

  // creating fee type
  const { mutate: mutateCreateFee, isLoading: isCreating } = useMutation({
    mutationFn: createFee,
    onSuccess: () => {
      toast.success("New fee type successfully created");
      queryClient.invalidateQueries({ queryKey: ["fees"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  // deleting fee type
  const { isLoading: isDeleting, mutate: mutateDeleteFee } = useMutation({
    mutationFn: deleteFee,
    onSuccess: () => {
      toast.success("Fee type successfully deleted");
      queryClient.invalidateQueries({ queryKey: ["fees"] });
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(feesList) {
    mutateCreateFee(feesList);
    console.log(feesList);
  }

  if (isLoading) return <Spinner />;

  return (
    <div className="p-2 sm:px-5 pb-40">
      <div className={headingTertiary}>Add Fees Type</div>
      <div className="grid grid-cols-[1fr_3fr] p-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col items-start gap-3 ">
            <FormRow label={"Name"}>
              <input
                required
                className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
                id={"fee_name"}
                type={"text"}
                placeholder={"Enter Fees Type Name"}
                {...register("fee_name")}
              />
            </FormRow>
            <FormRow label={"Description"}>
              <input
                className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
                id={"fee_description"}
                type={"text"}
                placeholder={"Enter Fees Description"}
                {...register("fee_description")}
              />
            </FormRow>
            <button
              disabled={isCreating}
              className="sm:mt-0 mt-5 bg-indigo-700 text-slate-50 font-semibold py-2 px-4 rounded-lg flex gap-2 items-center"
            >
              <FaCheck /> Submit
            </button>
          </div>
        </form>

        <div>
          <div className="grid grid-cols-3 border-b-2 pb-2 mb-4">
            <div className="text-sm text-gray-700 font-bold">Fee Name</div>
            <div className="text-sm text-gray-700 font-bold">
              Fee Description
            </div>
            <div className="text-sm text-gray-700 font-bold">Actions</div>
          </div>
          {fees.map((fee) => (
            <div
              key={fee.id}
              className="grid grid-cols-3 justify-center items-center border-b-2 pb-4 mb-4"
            >
              <div>{fee.fee_name}</div>
              <div>{fee.fee_description}</div>
              <div>
                <button
                  onClick={() => mutateDeleteFee(fee.id)}
                  disabled={isDeleting}
                  className="border px-3 py-1"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeesType;
