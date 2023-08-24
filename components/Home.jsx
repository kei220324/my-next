// "use client";
// import { useState } from "react";
// import Header from "./Header";
// import AddItems from "./AddItems"
// import IncomeExpress from "./IncomeExpress";
// import DoughnutChart from "./DoughnutChart"

"use client";
import React from "react";
import { useState } from "react";
import Header from "./Header";
import AddItems from "./AddItems";
import IncomeExpress from "./IncomeExpress";
import DoughnutChart from "./DoughnutChart";

const Home = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [incomeItems, setIncomeItems] = useState([]);
  const [expenceItems, setExpenceItems] = useState([
    { text: "支出1", amount: 1000 },
    { text: "支出2", amount: 2000 },
  ]);

  return (
    <>
    <div className="bg-gradient-to-r from-blue-500 via-green-500 p-10">
    <Header
          year={year}
          month={month}
          setYear={setYear}
          setMonth={setMonth}
        />

        <IncomeExpress
          incomeItems={incomeItems}
          expenceItems={expenceItems}
          year={year}
          month={month}
        />

    </div>
 
     
      <AddItems
        incomeItems={incomeItems}
        setIncomeItems={setIncomeItems}
        expenceItems={expenceItems}
        setExpenceItems={setExpenceItems}
        year={year}
        month={month}
      />


      {/* DoughnutChartコンポーネントを表示 */}
      <DoughnutChart expenceItems={expenceItems} />
    </>
  );
};

export default Home;
