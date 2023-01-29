import {mergeStyleSets} from "@fluentui/react";

export const styles = mergeStyleSets({
    resultContainer:{
        height:"70vh",
        display:'grid',
        gridTemplate:"1fr .5fr repeat(2,.25fr) repeat(2,1fr) / repeat(7,1fr)"
    },
    emoji:{
        fontSize:'4rem',
        gridColumn:"2 / 7",
        gridRow:"2 / 3",
        alignSelf:"center",
        justifySelf:"center"
    },
    title:{
        gridColumn:"2 / 7",
        gridRow:"3 / 4 ",
        alignSelf:"center",
        justifySelf:"center",
    },
    message:{
        gridColumn:"3 / 6",
        gridRow:"4 / 5",
        alignSelf:"center",
        justifySelf:"center",
        fontSize:"1.2rem",
        textAlign:"center"
    }
})