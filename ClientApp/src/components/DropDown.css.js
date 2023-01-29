import {mergeStyleSets} from "@fluentui/react";
import { Colors } from "../utils/constants";

export const styles = mergeStyleSets({
    dropDownContainer:{
        position:'relative',
        ':hover':{
            cursor:'pointer'
        },
    },
    placeholder:{
        fontSize:"1.2rem",
        fontWeight:"bold",
        ':hover':{
            color:Colors.DARK_PURPLE,
            cursor:'pointer',
        }
    },  
    dropdownPlaceholder:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        pointerEvents:'none'
    },
    dropdownIcon:{
        transform:'scale(1.2)'
    },
    dropdownMenu:{
        position:'absolute',
        left:'0',
        top:'calc(100% + .25rem)',
        backgroundColor:Colors.WHITE,
        padding:".75rem",
        borderRadius:'.25rem',
        boxShadow:"0 2px 5px 0 rgba(0,0,0,.2)",
        opacity:'0',
        transition:'opacity 125ms ease-in-out, transform 125ms ease-in-out',
        transform:'translateY(-10px)',
        ":hover":{
            boxShadow:"0px 2px 5px rgba(164,69,237,.9)",
        },
        pointerEvents:'none'
    },
    dropdownMenuActive:{
        position:'absolute',
        pointerEvents:'auto',
        left:'0',
        top:'calc(100% + .25rem)',
        backgroundColor:Colors.WHITE,
        padding:".75rem",
        borderRadius:'.25rem',
        boxShadow:"0 2px 5px 0 rgba(0,0,0,.2)",
        opacity:'1',
        transition:'opacity 125ms ease-in-out, transform 125ms ease-in-out',
        transform:'translateY(0)',
        ":hover":{
            boxShadow:"0px 2px 5px rgba(164,69,237,.9)",
        }

    },
    panel:{
        display:'flex',
        flexDirection:'column',
        jusfityContent:"space-evenly",
        position:'absolute',
        "z-index":1000,
        "@media screen and (max-width:750px)":{
            maxWidth:"32vw",
            width:'30vw',
            height:'10vh',
            padding:'5%',
            borderRadius:"25px",

        },
        backgroundColor:Colors.WHITE,
        boxShadow:"0px 0px 25px rgba(0,0,0,.21)",
        ":hover":{
            boxShadow:"0px 0px 25px rgba(164,69,237,.9)",
        }
        }
})