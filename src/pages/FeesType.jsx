import { useMutation, useQuery } from "@tanstack/react-query";
import { createFee, getFeesType } from "../services/apiFees";
import Spinner from "../ui/Spinner";
import Input from "../ui/Input";
import { headingTertiary } from "../ui/AddStudentStyle";
import { FaCheck } from "react-icons/fa";
import FormRow from "../components/addStudentForm/FormRow";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function FeesType() {
  const { mutate, isLoading: isLoading2 } = useMutation({
    mutationFn: createFee,
    onSuccess: () => {
      toast.success("New fee type succefully created");
    },
  });

  const { register, setRegister } = useForm();

  const {
    isLoading,
    data: fees,
    error,
  } = useQuery({
    queryKey: ["feeType"],
    queryFn: getFeesType,
  });

  function handleFeeTypeSubmit() {
    console.log(fees);
  }

  if (isLoading) return <Spinner />;

  return (
    <div className="p-2 sm:px-5">
      <div className={headingTertiary}>Add Fees Type</div>
      <div className="grid grid-cols-2 p-5">
        <form action="" onSubmit={handleFeeTypeSubmit}>
          <div className="flex flex-col items-start gap-3 ">
            <FormRow label={"Name"}>
              <Input
                id="fee_name"
                type="text"
                placeholder="Enter Fees Type Name"
                {...register("fee_name")}
              />
            </FormRow>
            <FormRow label={"Description"}>
              <Input
                id="fee_description"
                type="text"
                placeholder="Enter Fees Description"
                {...register("fee_description")}
              />
            </FormRow>
            <button className="sm:mt-0 mt-5 bg-indigo-700 text-slate-50 font-semibold py-2 px-4 rounded-lg flex gap-2 items-center">
              <FaCheck /> Submit
            </button>
          </div>
        </form>
        <div>
          <div className="grid grid-cols-3 border-b-2 pb-2 mb-4">
            <div className="text-xl font-bold">Fee Name</div>
            <div className="text-xl font-bold">Fee Description</div>
            <div className="text-xl font-bold">Actions</div>
          </div>
          {fees.map((fee) => (
            <div
              key={fee.id}
              className="grid grid-cols-3 justify-center items-center border-b-2 pb-4"
            >
              <div>{fee.fee_name}</div>
              <div>{fee.fee_description}</div>
              <div>
                <button className="border px-3 py-1">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeesType;
