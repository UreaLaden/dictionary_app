import {mergeStyleSets} from "@fluentui/react";

export const styles = mergeStyleSets({
    container:{
        margin:"auto",
        fontSize:"1em",
        height:"100%",
        width:"100%",
        maxWidth:"90%",
        "@media screen and (min-width:1440px)":{
            maxWidth:"70%"
        },
        "@media screen and (max-width:1440px)":{
            maxWidth:"80%"
        }
    },
    main:{
        padding:'5%',
        height:"100%"
    },
})