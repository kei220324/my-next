// import { useState, useEffect } from "react";
// import { useRouter } from "next/router";

// const EditItem = () => {
//   const [inputValue, setInputValue] = useState("");
//   const [amount, setAmount] = useState("");
//   const router = useRouter();
//   // selectedItemはAddItemから遷移するときに表示されてる内容と金額の値を取得
//   const { selectedItem } = router.query;


//   // テキストと金額の変更ハンドラー
//   const handleTextChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleAmountChange = (e) => {
//     setAmount(e.target.value);
//   };

//   // パラメータを文字列からオブジェクトに変換
//   const parsedSelectedItem = selectedItem ? JSON.parse(selectedItem) : {};


//   // 編集対象のアイテムが選択された場合、そのアイテムの情報をセット
//   useEffect(() => {
//     if (parsedSelectedItem) {
//       setInputValue(parsedSelectedItem.text || "");
//       setAmount(parsedSelectedItem.amount || "");
//     }
//   }, []);

//   const handleUpdate = () => {
//     // 更新処理
//     // 変更した内容を格納している値(updatedValue)
//     const updatedValue = {
//       text: inputValue,
//       amount: parseInt(amount),
//     };



//     // ローカルストレージに格納されているincomeItemsの値を取得
//     const storedIncomeItems =
//       JSON.parse(localStorage.getItem("incomeItems")) || [];
//     // ローカルストレージに格納されているexpenceItemsの値を取得
//     const storedExpenceItems =
//       JSON.parse(localStorage.getItem("expenceItems")) || [];

 

//     // 編集中のアイテムに一致するものを探す
//     const updatedIncomeItems = storedIncomeItems.map((item) =>
//       item.text === parsedSelectedItem.text
//         ? { ...item, ...updatedValue }
        
//         : item
//     );


//     const updatedExpenceItems = storedExpenceItems.map((item) =>
//       item.text === parsedSelectedItem.text
//         ? { ...item, ...updatedValue }
//         : item
//     );

//     // ローカルストレージに更新されたデータを保存
//     localStorage.setItem("incomeItems", JSON.stringify(updatedIncomeItems));
//     localStorage.setItem("expenceItems", JSON.stringify(updatedExpenceItems));
//     router.push("http://localhost:3000/components/Home");
//   };

//   const handleDelete = () => {
//     // ローカルストレージからアイテムを削除する処理

//     // 収入アイテムを削除する場合
//     const storedIncomeItems =
//       JSON.parse(localStorage.getItem("incomeItems")) || [];
//     const updatedIncomeItems = storedIncomeItems.filter(
//       (item) => item.text !== parsedSelectedItem.text
//     );

//     localStorage.setItem("incomeItems", JSON.stringify(updatedIncomeItems));

//     // 支出アイテムを削除する場合
//     const storedExpenseItems =
//       JSON.parse(localStorage.getItem("expenceItems")) || [];
//     const updatedExpenseItems = storedExpenseItems.filter(
//       (item) => item.text !== parsedSelectedItem.text
//     );
//     localStorage.setItem("expenceItems", JSON.stringify(updatedExpenseItems));

//     // 削除後にリダイレクト
//     router.push("http://localhost:3000/components/Home");
//   };

//   return (
//     <div>
//       <h1 className="text-2xl  mb-10 p-2 border-b-2	font-bold text-center border-black">
//         編集
//       </h1>
//       <div className="w-3/4  mx-auto">
//         <form className="mb-5">
//           <label className="block mb-2">
//             Text:
//             <input
//               type="text"
//               value={inputValue}
//               onChange={handleTextChange}
//               className="border-2 p-2 w-full"
//             />
//           </label>
//           <label className="block mb-2 m-0">
//             Amount:
//             <input
//               type="number"
//               value={amount}
//               onChange={handleAmountChange}
//               className="border-2  p-2 w-full"
//             />
//           </label>
//         </form>
//         <div className="mx-auto md:flex justify-between">
//           <div className="pl-6 mb-5 md:pl-20">
//             <button
//               onClick={handleUpdate}
//               className=" bg-blue-500 w-64 text-white  p-2 rounded-full mx-auto"
//             >
//               更新
//             </button>
//           </div>
//           <div className="pl-6 md:pr-20">
//             <button
//               onClick={handleDelete}
//               className=" bg-red-500 w-64 text-white p-2 rounded-full mx-auto"
//             >
//               削除
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditItem;

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const EditItem = () => {
  const [inputValue, setInputValue] = useState("");
  const [amount, setAmount] = useState("");
  const router = useRouter();
  const { selectedItem } = router.query;

  const handleTextChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const parsedSelectedItem = selectedItem ? JSON.parse(selectedItem) : {};

  useEffect(() => {
    if (parsedSelectedItem) {
      setInputValue(parsedSelectedItem.text || "");
      setAmount(parsedSelectedItem.amount || "");
    }
  }, []);

  

  const handleUpdate = () => {
    const updatedValue = {
      text: inputValue,
      amount: parseInt(amount),
    };

    const storedIncomeItems =
      JSON.parse(localStorage.getItem("incomeItems")) || [];
    const storedExpenseItems =
      JSON.parse(localStorage.getItem("expenceItems")) || [];

    const updatedIncomeItems = storedIncomeItems.map((item) =>
      item.text === parsedSelectedItem.text
        ? { ...item, ...updatedValue }
        : item
    );

    const updatedExpenseItems = storedExpenseItems.map((item) =>
      item.text === parsedSelectedItem.text
        ? { ...item, ...updatedValue }
        : item
    );

    localStorage.setItem("incomeItems", JSON.stringify(updatedIncomeItems));
    localStorage.setItem("expenceItems", JSON.stringify(updatedExpenseItems));
    router.push("/components/Home");
  };

  const handleDelete = () => {
    const storedIncomeItems =
      JSON.parse(localStorage.getItem("incomeItems")) || [];
    const updatedIncomeItems = storedIncomeItems.filter(
      (item) => item.text !== parsedSelectedItem.text
    );
    localStorage.setItem("incomeItems", JSON.stringify(updatedIncomeItems));

    const storedExpenseItems =
      JSON.parse(localStorage.getItem("expenceItems")) || [];
    const updatedExpenseItems = storedExpenseItems.filter(
      (item) => item.text !== parsedSelectedItem.text
    );
    localStorage.setItem("expenceItems", JSON.stringify(updatedExpenseItems));

    router.push("/components/Home");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-center mb-6">編集</h1>
        <form className="mb-4">
          <label className="block mb-4">
            Text:
            <input
              type="text"
              value={inputValue}
              onChange={handleTextChange}
              className="border p-2 w-full rounded focus:outline-none focus:border-blue-500 transition duration-300"
            />
          </label>
          <label className="block mb-4">
            Amount:
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              className="border p-2 w-full rounded focus:outline-none focus:border-blue-500 transition duration-300"
            />
          </label>
        </form>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleUpdate}
            className="bg-blue-500 text-white p-2 rounded-full w-32 hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring focus:border-blue-400"
          >
            更新
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white p-2 rounded-full w-32 hover:bg-red-600 transition duration-300 focus:outline-none focus:ring focus:border-red-400"
          >
            削除
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditItem;
