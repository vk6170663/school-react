import { useQuery } from "@tanstack/react-query";
import { getFeesType } from "../services/apiFees";
import Spinner from "../ui/Spinner";
import Input from "../ui/Input";
import { headingTertiary } from "../ui/AddStudentStyle";
import { FaCheck } from "react-icons/fa";
import FormRow from "../components/addStudentForm/FormRow";

function FeesType() {
  const {
    isLoading,
    data: fees,
    error,
  } = useQuery({
    queryKey: ["feeType"],
    queryFn: getFeesType,
  });

  console.log(fees);

  if (isLoading) return <Spinner />;

  return (
    <div className="p-2 sm:px-5">
      <div className={headingTertiary}>Add Fees Type</div>
      <div className="grid grid-cols-2 p-5">
        <form action="">
          <div className="flex flex-col items-start gap-3 ">
            <FormRow label={"Name"}>
              <Input type="text" placeholder="Enter Fees Type Name" />
            </FormRow>
            <FormRow label={"Description"}>
              <Input type="text" placeholder="Enter Fees Description" />
            </FormRow>
            <button className="sm:mt-0 mt-5 bg-indigo-700 text-slate-50 font-semibold py-2 px-4 rounded-lg ">
              <FaCheck /> Submit
            </button>
          </div>
        </form>
        <div className="grid grid-cols-2">
          {fees.map((fee) => (
            <div key={fee.id}>
              <div>{fee.fee_name}</div>
              <div>{fee.fee_description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeesType;
