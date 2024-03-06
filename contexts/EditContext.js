import { createContext, useContext, useReducer } from "react";

const EditContext = createContext();

export const useEditContext = () => {
  return useContext(EditContext);
};

export const EditContextProvider = ({ children }) => {
  const initialState = {
    incomeItems: [], // Add your initial income items
    expenseItems: [], // Add your initial expense items
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_INCOME_ITEMS":
        return { ...state, incomeItems: action.payload };
      case "SET_EXPENSE_ITEMS":
        return { ...state, expenseItems: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const setIncomeItems = (incomeItems) => {
    dispatch({ type: "SET_INCOME_ITEMS", payload: incomeItems });
  };

  const setExpenseItems = (expenseItems) => {
    dispatch({ type: "SET_EXPENSE_ITEMS", payload: expenseItems });
  };

  return (
    <EditContext.Provider value={{ ...state, setIncomeItems, setExpenseItems }}>
      {children}
    </EditContext.Provider>
  );
};
