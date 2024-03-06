// "use client";

// import { useState } from "react";
// import Header from "./Header";
// import AddItems from "./AddItems";
// import IncomeExpress from "./IncomeExpress";
// import DoughnutChart from "./DoughnutChart";
// import { useSession } from "next-auth/react";
// import { useEffect } from "react";
// import { useRouter } from "next/router";
// import { getSession } from "next-auth/react";
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   const [year, setYear] = useState(new Date().getFullYear());
//   const [month, setMonth] = useState(new Date().getMonth() + 1);
//   const [incomeItems, setIncomeItems] = useState([]);
//   const [expenceItems, setExpenceItems] = useState([]);
//   const { data: session } = useSession({ required: true }); 





//   return (
//     <>
//       {/* セッションがある場合は、プロファイルを表示する */}
//       {session && (
//         <div className="bg-gray-100 min-h-screen">
//           <Header year={year} month={month} setYear={setYear} setMonth={setMonth} />
//           <div className="container mx-auto md:px-4 py-8">
//             <IncomeExpress
//               incomeItems={incomeItems}
//               expenceItems={expenceItems}
//               year={year}
//               month={month}
//             />
//             <AddItems
//               incomeItems={incomeItems}
//               setIncomeItems={setIncomeItems}
//               expenceItems={expenceItems}
//               setExpenceItems={setExpenceItems}
//               year={year}
//               month={month}
//             />
//             <DoughnutChart year={year} month={month} expenceItems={expenceItems} />
//           </div>
//           {
//         // セッションがない場合は、ログインページに遷移する
//         !session && (
//           <div>
//             <p>You are not signed in.</p>
//           </div>
//         )
//       }
//         </div>
//       )}
//     </>
//   );




 



//   // return (
//   //  <div className="bg-gray-100 min-h-screen">
//   //     <Header year={year} month={month} setYear={setYear} setMonth={setMonth} />
//   //     <div className="container mx-auto md:px-4 py-8">
//   //       <IncomeExpress
//   //         incomeItems={incomeItems}
//   //         expenceItems={expenceItems}
//   //         year={year}
//   //         month={month}
//   //       />
//   //       <AddItems
//   //         incomeItems={incomeItems}
//   //         setIncomeItems={setIncomeItems}
//   //         expenceItems={expenceItems}
//   //         setExpenceItems={setExpenceItems}
//   //         year={year}
//   //         month={month}
//   //       />

//   //       <DoughnutChart year={year} month={month} expenceItems={expenceItems} />
//   //     </div>
//   //   </div>
//   // );
// };

// export default Home;

import { useState } from "react";
import Header from "./Header";
import AddItems from "./AddItems";
import IncomeExpress from "./IncomeExpress";
import DoughnutChart from "./DoughnutChart";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [incomeItems, setIncomeItems] = useState([]);
  const [expenceItems, setExpenceItems] = useState([]);
  const { data: session } = useSession();
  const router = useRouter();


  return (
    <>
      {/* セッションがある場合は、プロファイルを表示する */}
      {session && (
        <div className="bg-gray-100 min-h-screen">
          <Header year={year} month={month} setYear={setYear} setMonth={setMonth} />
          <div className="container mx-auto md:px-4 py-8">
            <IncomeExpress
              incomeItems={incomeItems}
              expenceItems={expenceItems}
              year={year}
              month={month}
            />
            <AddItems
              incomeItems={incomeItems}
              setIncomeItems={setIncomeItems}
              expenceItems={expenceItems}
              setExpenceItems={setExpenceItems}
              year={year}
              month={month}
            />
            <DoughnutChart year={year} month={month} expenceItems={expenceItems} />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;