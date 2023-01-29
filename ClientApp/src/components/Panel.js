import * as React from 'react';

export const Panel = (props) =>{
    const {option,optionClass,onOptionSelected} = props;
    const optionSelectedHandler = (_event) =>{
        onOptionSelected(option);
    }
    return <div onClick={optionSelectedHandler} className={optionClass}>{option.text}</div>
}