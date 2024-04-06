import { useState, useEffect } from "react";
import Link from "next/link";
import EditItem from "../EditItem";

const AddItems = ({
  incomeItems,
  setIncomeItems,
  expenceItems,
  setExpenceItems,
  year,
  month,
}) => {
  const [type, setType] = useState("inc");
  const [amount, setAmount] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  // 収支の種類を選択するためのイベントハンドラー
  const typeHandler = (e) => {
    setType(e.target.value);
  };

  // 入力値の変更を処理するイベントハンドラー
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // 金額の変更を処理するイベントハンドラー
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  // フォームの提出を処理するイベントハンドラー
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(incomeItems);

    // 選択されたタイプに基づいて収入または支出アイテムを更新
    const newItem = { text: inputValue, amount: parseInt(amount), month, year };
    if (type === "inc") {
      setIncomeItems((prevIncomeItems) => [...prevIncomeItems, newItem]);
      // ローカルストレージに保存
      localStorage.setItem(
        "incomeItems",
        JSON.stringify([...incomeItems, newItem])
      );
    } else if (type === "exp") {
      setExpenceItems((prevExpenseItems) => [...prevExpenseItems, newItem]);
      // ローカルストレージに保存
      localStorage.setItem(
        "expenceItems",
        JSON.stringify([...expenceItems, newItem])
      );
    }

    // 入力値と編集状態をリセット
    setInputValue("");
    setAmount("");
    setIsEditing(false);
    setEditingIndex(null);
  };

  useEffect(() => {
    // ローカルストレージからデータを読み込んで state を更新
    const storedIncomeItem =
      JSON.parse(localStorage.getItem("incomeItems")) || [];
    setIncomeItems(storedIncomeItem);

    const storedExpenseItems =
      JSON.parse(localStorage.getItem("expenceItems")) || [];
    setExpenceItems(storedExpenseItems);
  }, []);

  // 現在の月と年に基づいて収入アイテムをフィルタリング
  const filteredIncomeItems = (incomeItems || []).filter(
    (item) => item.year === year && item.month === month
  );

  // 現在の月と年に基づいて支出アイテムをフィルタリング
  const filteredExpenseItems = (expenceItems || []).filter(
    (item) => item.year === year && item.month === month
  );

  return (
    <>
      {/* 収入または支出を追加するフォーム */}
      <div className="flex flex-col p-10 md:flex-row items-center md:justify-center md:p-5 md:bg-gray-200">
        <form
          onSubmit={onSubmit}
          className="md:flex-row w-full items-center space-y-2 md:space-x-2 md:w-auto max-w-screen-md"
        >
          <select
            className="p-2 w-full md:w-20 border rounded-xl"
            value={type}
            onChange={typeHandler}
          >
            <option value="inc">+</option>
            <option value="exp">-</option>
          </select>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            className="border p-2 rounded-xl w-full md:w-64"
            placeholder="内容"
          />
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            className="border p-2 rounded-xl w-full md:w-32"
            placeholder="金額"
          />
          <div className="flex items-center justify-center">
            <button
              className="py-2 px-12 bg-gradient-to-l from-blue-400 to-sky-400 rounded text-white hover:bg-blue-500 focus:outline-none focus:ring focus:border-blue-300"
              type="submit"
            >
              追加
            </button>
          </div>
        </form>
      </div>
      {/* 収入と支出のリストを表示 */}
      <div className="flex flex-col md:flex-row justify-center py-10 px-5 mt-10 space-y-4 md:space-y-0 md:space-x-10">
        <div>
          {/* 収入一覧 */}
          <h1 className="font-semibold text-lg mb-2">収入一覧</h1>
          <ul className="list-inside space-y-2">
            {filteredIncomeItems.map((item, index) => (
              <Link
                href={{
                  pathname: "/EditItem",
                  query: {
                    itemType: "inc",
                    item: JSON.stringify(item),
                    selectedItem: JSON.stringify(item),
                  },
                }}
                key={index}
                passHref
              >
                <li className="flex items-center space-x-2 bg-green-100 p-2 rounded cursor-pointer mb-2">
                  <div className="flex-grow">
                    <span> {item.text}</span>
                  </div>
                  <div className="flex-shrink-0">
                    <span> +{item.amount}円</span>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>

        {/* 支出一覧 */}
        <div>
          <h1 className="font-semibold text-lg mb-2">支出一覧</h1>
          <ul className="list-inside space-y-2">
            {filteredExpenseItems.map((item, index) => (
              <Link
                href={{
                  pathname: "/EditItem",
                  query: {
                    itemType: "exp",
                    item: JSON.stringify(item),
                    selectedItem: JSON.stringify(item),
                  },
                }}
                key={index}
                passHref
              >
                <li className="flex items-center space-x-2 bg-red-100 p-2 rounded cursor-pointer mb-2">
                  <div className="flex-grow">
                    <span>{item.text}</span>
                  </div>
                  <div className="flex-shrink-0">
                    <span> -{item.amount}円</span>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AddItems;
