import { mergeStyleSets } from "@fluentui/react";
import { Colors } from "../utils/constants";
export const styles = mergeStyleSets({
    player:{
        width:"60%",
        height:"90%",
        backgroundColor:Colors.LIGHT_PURPLE,
        borderRadius:"50%",
        ":hover":{
            backgroundColor:Colors.DARK_PURPLE,            
        },
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        gridRow:"1 / span 2",
        gridColumn:"2 / span 1",   
        justifySelf:'end'     
    },
    audio:{
    },
    triangle:{
        'pointer-events':'none',
        height:"0",
        width:"0",
        'border-top':'12px solid transparent',
        'border-bottom':'12px solid transparent',
        'border-left':`12px solid ${Colors.DARK_PURPLE}`,
        ':hover':{
            'border-top':'12px solid transparent',
        'border-bottom':'12px solid transparent',
        'border-left':`12px solid ${Colors.LIGHT_PURPLE}`,
        }

    }
})