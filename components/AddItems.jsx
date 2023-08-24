import { useState } from "react";

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

  const typeHandler = (e) => {
    setType(e.target.value);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(parseInt(e.target.value));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (type === "inc") {
      setIncomeItems([
        ...incomeItems,
        { text: inputValue, amount: amount, month: month, year: year },
      ]);
    } else if (type === "exp") {
      setExpenceItems([
        ...expenceItems,
        { text: inputValue, amount: amount, month: month, year: year },
      ]);
    }

    setInputValue("");
    setAmount("");
  };

  // 選択した年と月に基づいて収入と支出のデータをフィルタリング
  const filteredIncomeItems = incomeItems.filter(
    (item) => item.year === year && item.month === month
  );

  const filteredExpenceItems = expenceItems.filter(
    (item) => item.year === year && item.month === month
  );

  const handleDelete = (itemType, index) => {
    if (itemType === "inc") {
      const updatedIncomeItems = [...incomeItems];
      updatedIncomeItems.splice(index, 1);
      setIncomeItems(updatedIncomeItems);
    } else if (itemType === "exp") {
      const updatedExpenceItems = [...expenceItems];
      updatedExpenceItems.splice(index, 1);
      setExpenceItems(updatedExpenceItems);
    }
  };

  return (
    <>
      <div className="flex justify-center mt-10">
        <form onSubmit={onSubmit}>
          <select value={type} onChange={typeHandler}>
            <option value="inc">+</option>
            <option value="exp">-</option>
          </select>

          <label className="mr-10">
            内容
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              className="border p-1 "
            />
          </label>

          <label>
            金額
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              className="border p-1"
            />
          </label>

          <button type="submit">追加</button>
        </form>
      </div>

      {/* <div className="grid grid-rows-2">
        <div  >
          <h1>収入一覧</h1>
          {filteredIncomeItems.map((item, index) => (
            <div key={index}>
              <p>内容 {item.text}</p> <p>金額 +{item.amount}</p>
              <button onClick={() => handleDelete("inc", index)}>削除</button>
            </div>
          ))}
        </div>
        <div>
          <h1>支出一覧</h1>
          {filteredExpenceItems.map((item, index) => (
            <div key={index}>
              <p>内容 {item.text}</p>
              <p>金額 -{item.amount}</p>
              <button onClick={() => handleDelete("exp", index)}>削除</button>
            </div>
          ))}
        </div>
      </div> */}
<div className="flex justify-center py-50 px-10 mt-10">
  <div className="mr-40">
    <h1 className="font-semibold">収入一覧</h1>
    {filteredIncomeItems.map((item, index) => (
      <div key={index} className="flex items-center">
        <p className="mr-2">内容 {item.text}</p>
        <p className="mr-2">金額 +{item.amount}</p>
        <button
          onClick={() => handleDelete("inc", index)}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          削除
        </button>
      </div>
    ))}
  </div>

  <div>
    <h1  className="font-semibold">支出一覧</h1>
    {filteredExpenceItems.map((item, index) => (
      <div key={index} className="flex items-center">
        <p className="mr-2">内容 {item.text}</p>
        <p className="mr-2">金額 -{item.amount}</p>
        <button
          onClick={() => handleDelete("exp", index)}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          削除
        </button>
      </div>
    ))}
  </div>
</div>
    </>
  );
};

export default AddItems;
