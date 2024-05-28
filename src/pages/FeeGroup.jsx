import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getFeesType } from "../services/apiFeesType";

import { headingTertiary, selectBorder } from "../ui/AddStudentStyle";
import FormRow from "../components/addStudentForm/FormRow";
import { FaCheck } from "react-icons/fa";
import toast from "react-hot-toast";
import Spinner from "../ui/Spinner";
import { createFeeGroup } from "../services/apiFeesGroup";

function FeeGroup() {
  const { register, handleSubmit, reset } = useForm();
  const queryClient = useQueryClient();

  // getting or displaying all fee type for fee group
  const {
    isLoading,
    data: feeGroups,
    error,
  } = useQuery({
    queryKey: ["feeGroup"],
    queryFn: getFeesType,
  });

  // creating fee type
  const { mutate: mutateCreateFeeGroup, isLoading: isCreating } = useMutation({
    mutationFn: createFeeGroup,
    onSuccess: () => {
      toast.success("New fee type successfully created");
      queryClient.invalidateQueries({ queryKey: ["feeGroup"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  // deleting fee type
  const { isLoading: isDeleting, mutate: mutateDeleteFee } = useMutation({
    // mutationFn: deleteFee,
    onSuccess: () => {
      toast.success("Fee type successfully deleted");
      queryClient.invalidateQueries({ queryKey: ["feeGroup"] });
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    console.log(data);
    mutateCreateFeeGroup(data);
  }

  if (isLoading) return <Spinner />;

  return (
    <div className="p-2 sm:px-5 pb-40">
      <div className={headingTertiary}>Add Fees Type</div>
      <div className="grid grid-cols-[1fr_3fr] p-5 gap-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-3 ">
            <FormRow label={"Name"}>
              <input
                required
                className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
                id={"feeGroup"}
                type={"text"}
                placeholder={"Enter Fee Group Name"}
                {...register("feeGroup")}
              />
            </FormRow>
            <FormRow label={"Fee Type"}>
              <select className={selectBorder} {...register("feeType")}>
                {feeGroups.map((fee) => (
                  <option key={fee.id}>{fee.feeName}</option>
                ))}
              </select>
            </FormRow>
            <FormRow label={"Fee Description"}>
              <textarea
                className="border border-gray-400 px-5 py-3 text-gray-700  text-sm"
                id={"feeGroupDescription"}
                {...register("feeGroupDescription")}
              />
            </FormRow>
            <div>
              <button
                disabled={isCreating}
                className="sm:mt-0 mt-5 bg-indigo-700 text-slate-50 font-semibold py-2 px-4 rounded-lg flex gap-2 items-center"
              >
                <FaCheck /> Submit
              </button>
            </div>
          </div>
        </form>

        <div>
          <div className="grid grid-cols-4 border-b-2 pb-2 mb-4">
            <div className="text-sm text-gray-700 font-bold">Fee Name</div>
            <div className="text-sm text-gray-700 font-bold">Fee Type</div>
            <div className="text-sm text-gray-700 font-bold">
              Fee Description
            </div>
            <div className="text-sm text-gray-700 font-bold">Actions</div>
          </div>
          {feeGroups.map((fee) => (
            <div
              key={fee.id}
              className="grid grid-cols-3 justify-center items-center border-b-2 pb-4 mb-4"
            >
              <div>{fee.feeGroupName}</div>
              <div>{fee.feeTypeName}</div>
              <div>{fee.feeGroupDescription}</div>
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

export default FeeGroup;
