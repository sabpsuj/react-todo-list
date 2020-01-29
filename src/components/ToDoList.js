import React, { useState } from 'react';

const useInputValue = initialValue => {
    const [value, setValue] = useState(initialValue);

    return {
        value,
        onChange: e => setValue(e.target.value),
        resetValue: () => setValue('')
    };
};

function ToDoForm({onSubmit}) {
    const {resetValue, ...inputText} = useInputValue('');

    return (
            <form className="td-form"
                onSubmit={e => {
                    e.preventDefault();
                    onSubmit(inputText.value);
                    resetValue();
                }}
            >
                <input className="td-form__input" {...inputText} />
                <button className="td-form__button">+</button>
            </form>
    )
};

export default ToDoForm;