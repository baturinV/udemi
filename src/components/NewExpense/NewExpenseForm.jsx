import React, { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
    const { onSetExpenses, setModalState } = props;
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [eneteredDate, setEnteredDate] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();

        if (!enteredTitle || !enteredAmount || !eneteredDate) return;

        const formData = {
            id: Math.random().toString(),
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(eneteredDate),
        };

        onSetExpenses((prevState) => {
            return [formData, ...prevState];
        });

        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
        setModalState(false);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={enteredTitle}
                        onChange={(event) =>
                            setEnteredTitle(event.target.value)
                        }
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        value={enteredAmount}
                        min="0.01"
                        step="0.01"
                        onChange={(event) =>
                            setEnteredAmount(event.target.value)
                        }
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        value={eneteredDate}
                        min="2019-01-01"
                        max="2023-12-31"
                        onChange={(event) => setEnteredDate(event.target.value)}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={() => setModalState(false)}>
                    Cancel
                </button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default NewExpenseForm;
