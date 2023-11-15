import React, { useState } from "react";
import ExpensesList from "./ExpensesLits";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
    const expenses = props.data;

    const [filterValue, setFilterValue] = useState("all");

    const returnYear = (date) => {
        return date.toLocaleString("en-US", {
            year: "numeric",
        });
    };

    const filteredExpenses =
        filterValue !== "all"
            ? expenses.filter((el) => returnYear(el.date) === filterValue)
            : expenses;

    return (
        <Card className="expenses">
            <ExpensesFilter
                onFilterChange={setFilterValue}
                filterValue={filterValue}
            />
            <ExpensesList data={filteredExpenses} year={filterValue} />
        </Card>
    );
};

export default Expenses;
