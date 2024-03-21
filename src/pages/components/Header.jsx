import React from "react";

import { useRouter } from "next/router";

const Header = ({ year, month, setYear, setMonth }) => {
  const router = useRouter();

  const handlePrevMonth = () => {
    if (month === 1) {
      setMonth(12);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 12) {
      setMonth(1);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  return (
    <div className="bg-teal-500 py-4 text-white text-center mb-8 relative">
      {/* <button onClick={handleSignOut}>Sign Out</button> */}

      <div className="flex items-center justify-center">
        <button
          className="px-2 py-1 text-base bg-teal-700 hover:bg-teal-600 rounded"
          onClick={handlePrevMonth}
        >
          ← 先月
        </button>
        <h1 className="text-2xl mx-8">
          {year} 年 {month} 月
        </h1>
        <button
          className="px-2 py-1 text-base bg-teal-700 hover:bg-teal-600 rounded"
          onClick={handleNextMonth}
        >
          次月 →
        </button>
      </div>
    </div>
  );
};

export default Header;
