import * as React from 'react';
import { Colors } from '../utils/constants';

export const Panel = (props) =>{
    const {option,optionClass,onOptionSelected,theme} = props;
    const optionSelectedHandler = (_event) =>{
        onOptionSelected(option);
    }
    return <div 
                onClick={optionSelectedHandler} 
                className={optionClass}
                style={{color:theme === true ? Colors.WHITE :Colors.JET_BLACK,
                fontFamily:option.family}}
                >{option.text}</div>
}