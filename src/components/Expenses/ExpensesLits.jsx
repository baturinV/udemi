import React from "react";
import ExpenselItem from "./ExpenselItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
    const { data, year } = props;

    if (!data.length) {
        return (
            <p className="expenses__warning">
                You haven't expenses at <b>{year}</b>.
            </p>
        );
    }

    return (
        <ul className="expenses-list">
            {data
                .sort((a, b) => Number(b.date) - Number(a.date))
                .map((el) => (
                    <ExpenselItem
                        key={el.id}
                        title={el.title}
                        amount={el.amount}
                        date={el.date}
                    />
                ))}
        </ul>
    );
};

export default ExpensesList;
