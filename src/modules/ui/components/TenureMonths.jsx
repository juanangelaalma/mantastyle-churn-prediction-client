import { useState } from "react";

const TenureMonths = () => {
  const [tenureMonths, setTenureMonths] = useState("");

  const handleTenureMonthsChange = (e) => {
    const inputValue = e.target.value.replace(/\D/g, "");
    setTenureMonths(inputValue);
  };

  return (
    <div className="flex flex-row p-3">
      <div className="bg-gray-400 p-3 rounded-l-md">
        <p className="text-white">Tenure Months :</p>
      </div>
      <input
        type="text"
        value={tenureMonths}
        onChange={handleTenureMonthsChange}
        className="w-[26.8vh] rounded-r-md px-2"
        placeholder="Enter months"
      />
    </div>
  );
};

export default TenureMonths;
