import {mergeStyleSets} from "@fluentui/react";
import { Colors } from "../utils/constants";

export const styles = mergeStyleSets({
    container:{
        display:"grid",
        gridTemplate:"repeat(2,1fr) / .5fr 3fr"
    },
    type:{
        gridRow:"1 / span 2",
        gridColumn:"1 / span 1",
        fontStyle:"italic",
        fontSize:"1.1rem"
    },
    line:{
        height:"0",
        border:`.5px solid ${Colors.LIGHT_GREY}`,
        gridRow:"2 / span 1",
        gridColumn:"2 /span 1"
    }
})