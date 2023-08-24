const IncomeExpress = ({ incomeItems, expenceItems, year, month }) => {
  const totalIncomeItems = incomeItems.filter(
    (item) => item.year === year && item.month === month
  );

  const totalExpenceItems = expenceItems.filter(
    (item) => item.year === year && item.month === month
  );

  const incomeImounts = totalIncomeItems.map((incomeItem) => incomeItem.amount);
  const incomeTotal = incomeImounts.reduce((acc, cur) => (acc += cur), 0);

  const expenceImounts = totalExpenceItems.map(
    (expenceItems) => expenceItems.amount
  );
  const expenceTotal = expenceImounts.reduce((acc, cur) => (acc += cur), 0);

  const balance = incomeTotal - expenceTotal;


return (
  <div>
    <div className="text-center mb-4">
      <h2 className="text-xl font-semibold">残高</h2>
      <span className="text-2xl">{balance}</span>
    </div>
    <div className="flex justify-center space-x-2">
      <div className="text-center flex bg-green-400 hover:bg-green-300 text-white font-bold py-2  px-20 rounded  ">
        <h2 className="text-xl font-semibold">収入</h2>
        <span className="text-lg">{incomeTotal}</span>
      </div>
      <div className="text-center flex bg-red-600 hover:bg-red-500  text-white font-bold py-2 px-20 rounded ">
        <h2 className="text-xl font-semibold">支出</h2>
        <span className="text-lg">{expenceTotal}</span>
      </div>
    </div>
  </div>

);
}

export default IncomeExpress;
