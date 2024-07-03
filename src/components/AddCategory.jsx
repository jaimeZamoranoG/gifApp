import React, { useState } from 'react'

export const AddCategory = ({setCategories,onNewCategory}) => {

    const [inputValue, setinputValue] = useState('');

    const onInputChange = ({target})=>{
        setinputValue(target.value);
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        const newValue=inputValue.trim();
        if (newValue.length <=1) return;
        onNewCategory(newValue);
        setinputValue("");
    }

    return (
        <form onSubmit={onSubmit}>
            <input
            type='text'
            placeholder='buscar gifs'
            value={inputValue}
            onChange={onInputChange}
            />
        </form>
    )
}
