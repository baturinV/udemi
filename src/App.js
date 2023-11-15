import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
    const [expenses, setExpenses] = useState([
        {
            id: Math.random().toString(),
            title: "Play Station",
            amount: 500.99,
            date: new Date(2023, 11, 25),
        },
        {
            id: Math.random().toString(),
            title: "Car Insurance",
            amount: 294.67,
            date: new Date(2020, 2, 28),
        },
        {
            id: Math.random().toString(),
            title: "Bike parts",
            amount: 54.12,
            date: new Date(2022, 1, 16),
        },
        {
            id: Math.random().toString(),
            title: "House Rent",
            amount: 202,
            date: new Date(2021, 3, 1),
        },
        {
            id: Math.random().toString(),
            title: "Regular payment",
            amount: 21.57,
            date: new Date(2020, 10, 28),
        },
    ]);

    return (
        <div>
            <NewExpense onSetExpenses={setExpenses} />
            <Expenses data={expenses} />
        </div>
    );
};

export default App;
