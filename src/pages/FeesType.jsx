import { useState } from "react";

function FeesType() {
  const [feesName, setFeesName] = useState("");
  const [feeList, setFeeList] = useState([]);

  function feeSubmit(e) {
    e.preventDefault();

    addFeeList(feesName);
  }

  function addFeeList(fee) {
    setFeeList((fees) => [...fees, fee]);
  }

  return (
    <div className="grid grid-cols-2">
      <form action="" onSubmit={feeSubmit}>
        <div className=" flex">
          <input
            type="text"
            placeholder="Enter Fees Type Name"
            value={feesName}
            onChange={(e) => setFeesName(e.target.value)}
          />
          <input type="text" placeholder="Enter Fees Description" />
          <button>Submit</button>
        </div>
      </form>
      <div className="grid grid-cols-2">
        <div>{feeList}</div>
      </div>
    </div>
  );
}

export default FeesType;
