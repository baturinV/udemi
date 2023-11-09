import React from "react";
import ExpenselItem from "./ExpenselItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
    const expenses = props.data;

    return (
        <Card className="expenses">
            {expenses.map((el, index) => (
                <ExpenselItem
                    key={index}
                    title={el.tilte}
                    amount={el.amount}
                    date={el.date}
                />
            ))}
        </Card>
    );
};

export default Expenses;
