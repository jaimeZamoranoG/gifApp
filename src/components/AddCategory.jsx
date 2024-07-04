import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({onNewCategory}) => {

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
        <form onSubmit={onSubmit} aria-label='form'>
            <input
            type='text'
            placeholder='buscar gifs'
            value={inputValue}
            onChange={onInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}