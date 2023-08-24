import { useState } from "react";

const Header = ({ year, month, setYear, setMonth }) => {
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
    <div className="flex justify-center">
      <div className="flex">
      <button className="mr-5 p-1  bg-slate-600 text-white"  onClick={handlePrevMonth}>← 先月</button>
         <h1 className="text-lg" >
         {year} 年 {month} 月
        </h1>
        <button className="ml-5 p-1  bg-slate-600 text-white" onClick={handleNextMonth}>次月 →</button>

      </div>
    </div>
  );
};

export default Header;
