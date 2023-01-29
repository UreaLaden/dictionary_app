import { mergeStyleSets } from "@fluentui/react";
import { Colors } from "../utils/constants";
export const styles = mergeStyleSets({
  player: {
    width: "60%",
    height: "90%",
    backgroundColor: Colors.LIGHT_PURPLE,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gridRow: "1 / span 2",
    gridColumn: "2 / span 1",
    justifySelf: "end",
    "#triangle": {
      "pointer-events": "none",
      height: "0",
      width: "0",
      "border-top": "12px solid transparent",
      "border-bottom": "12px solid transparent",
      "border-left": `12px solid ${Colors.DARK_PURPLE}`,
    },
    ":hover": {
      backgroundColor: Colors.DARK_PURPLE,
      "#triangle": {
        "border-left": `12px solid ${Colors.WHITE}`,
      },
    },
    "@media screen and (min-width:1440px)":{
      height:"150%",
      width:"50%",
      transform:"translateY(-12%)"
    },
    "@media screen and (max-width:1440px)":{
      height:"100%",
      width:"50%",
      transform:"translateY(-12%)"
    }
  },
  audio: {},
  triangle: {},
  triangleActive: {
    "pointer-events": "none",
    height: "0",
    width: "0",
    "border-top": "12px solid transparent",
    "border-bottom": "12px solid transparent",
    "border-left": `12px solid ${Colors.DARK_PURPLE}`,
    ":hover": {
      "border-top": "12px solid transparent",
      "border-bottom": "12px solid transparent",
      "border-left": `12px solid ${Colors.WHITE}`,
    },
  },
});
