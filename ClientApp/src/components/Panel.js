import * as React from 'react';

export const Panel = (props) =>{
    const {option,optionClass} = props;
    // console.log(option);
    // console.log(optionClass);
    return <div className={optionClass}>{option.text}</div>
}