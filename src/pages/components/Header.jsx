import React from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const Header = ({ year, month, setYear, setMonth }) => {
  const router = useRouter();
  const { data: session } = useSession();

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

  const handleSignOut = async () => {
    const result = await signOut({
      callbackUrl: "http://localhost:3000",
    }); // サインアウトを実行
    console.log(session);
  };

  return (
    <div className="bg-teal-500 py-4 text-white text-center mb-8 relative">
      {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded absolute top-2 right-6 p-3 "
        onClick={() => signOut({ callbackUrl: "http://localhost:3000" })}
  
      >
        Sign out
      </button> */}
      <button onClick={handleSignOut}>Sign Out</button>

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
