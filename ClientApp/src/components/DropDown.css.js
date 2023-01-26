import {mergeStyleSets} from "@fluentui/react";
import { Colors } from "../utils/constants";

export const styles = mergeStyleSets({
    dropDownContainer:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        position:'relative',
        ':hover':{
            cursor:'pointer'
        }
    },
    placeholderA:{
        fontSize:"1.2rem",
        fontFamily:"Aliquam,monospace",
        fontWeight:"bold",
        ':hover':{
            color:Colors.DARK_PURPLE,
            cursor:'pointer'
        }
    },
    placeholderB:{
        fontSize:"1.2rem",
        fontFamily:"Aliquam,serif",
        fontWeight:"bold",
        ':hover':{
            color:Colors.DARK_PURPLE,
            cursor:'pointer'
        }
    },
    placeholderC:{
        fontSize:"1.2rem",
        fontFamily:"Aliquam,sans-serif",
        fontWeight:"bold",
        ':hover':{
            color:Colors.DARK_PURPLE,
            cursor:'pointer'
        }
    },
    dropdownIcon:{
        transform:'scale(1.2)'
    },
    panel:{
        display:'flex',
        flexDirection:'column',
        jusfityItems:"center",
        position:'absolute',
        maxWidth:"30vw",
        width:'30vw',
        height:'12vh',
        backgroundColor:Colors.WHITE,
        padding:'5%',
        borderRadius:"15%",
        boxShadow:"0px 0px 25px rgba(0,0,0,.21)"
    }
})