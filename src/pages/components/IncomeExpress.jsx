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
    <div className="mb-8">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-semibold">残高</h2>
        <span className="text-3xl font-bold">¥{balance.toLocaleString()}</span>
      </div>
      <div className="flex justify-center space-x-4">
        <div className="flex items-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
          <h2 className="text-xl font-semibold">収入</h2>
          <span className="text-lg ml-2">¥{incomeTotal.toLocaleString()}</span>
        </div>
        <div className="flex items-center bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded">
          <h2 className="text-xl font-semibold">支出</h2>
          <span className="text-lg ml-2">¥{expenceTotal.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpress;
