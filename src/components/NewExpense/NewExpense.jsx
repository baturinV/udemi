import React, { useState } from "react";
import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const onSetExpenses = props.onSetExpenses;

    const [modalState, setModalState] = useState(false);

    return (
        <div className="new-expense">
            {!modalState ? (
                <button onClick={() => setModalState(true)}>
                    Add New Expense
                </button>
            ) : (
                <NewExpenseForm
                    onSetExpenses={onSetExpenses}
                    setModalState={setModalState}
                />
            )}
        </div>
    );
};

export default NewExpense;
