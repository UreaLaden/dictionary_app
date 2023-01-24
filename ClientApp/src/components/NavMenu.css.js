import { mergeStyleSets } from "@fluentui/react";
import { Colors } from "../utils/constants";

export const styles = mergeStyleSets({
  searchBox: {
    borderRadius: "15px",
    display: "flex",
    flexDirection: "row-reverse",
    border: "none",
    backgroundColor: Colors.LIGHT_GREY,
    height: "100%",
    padding: "2.5%",
    fontSize: "1.2rem",
    color: Colors.JET_BLACK,
    fontStyle: "bold",
    input: {
      "::placeholder": {
        color: Colors.JET_BLACK,
        fontStyle: "bold",
      },
    },
  },
  uiControls: {
    width: "100%",
    height: "25%",
    display: "grid",
    gridTemplate: "1fr / repeat(7,1fr)",
    marginBottom: "5%",
  },
  icon: {},
  themes: {
    gridColumn: "3 / span 5",
    display: "grid",
    gridTemplate: "1fr / repeat(7,1fr)",
    textAlign: "middle",
  },
  navHeader: {},
  navBarContainer: {},
  moonIcon: {
    margin:'0'
  },
  toggle: {
    gridColumn: "5 / -1",
    margin: "0",
    alignItems:'center',
    justifyContent:'center'
  },
  verticalDivider: {
    gridColumn:"4 / 5",
    height:"100%",
    borderRight:`1.5px solid ${Colors.LIGHT_GREY}`,
    width:"50%",
  },
  downArrow:{
    gridColumn:"3 / 4",
    alignSelf:'center',
    justifySelf:'end'
  },
  fontOptions:{
    all:'unset',
    textAlign:"right",
},
familySelector:{
},
fontFamily:{
    gridColumn:" 1 / 3",
    alignSelf:'center',
    justifySelf:'start',
    width:'50%'
  }
});
