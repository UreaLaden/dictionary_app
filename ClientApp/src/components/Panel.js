import * as React from 'react';
import { Colors } from '../utils/constants';

export const Panel = (props) =>{
    const {option,optionClass,onOptionSelected} = props;
    const optionSelectedHandler = (_event) =>{
        onOptionSelected(option);
    }
    return <div 
                onClick={optionSelectedHandler} 
                className={optionClass}
                style={{color:Colors.JET_BLACK}}
                >{option.text}</div>
}