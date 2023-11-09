import React from "react";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
    const expenses = [
        {
            id: "e1",
            tilte: "Car Insursnce",
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: "e2",
            tilte: "Bike parts",
            amount: 54.12,
            date: new Date(2021, 1, 16),
        },
        {
            id: "e3",
            tilte: "House Rent",
            amount: 202,
            date: new Date(2021, 2, 1),
        },
        {
            id: "e4",
            tilte: "Regular payment",
            amount: 21.57,
            date: new Date(2021, 12, 28),
        },
    ];

    return (
        <div>
            <Expenses data={expenses} />
        </div>
    );
};

export default App;
