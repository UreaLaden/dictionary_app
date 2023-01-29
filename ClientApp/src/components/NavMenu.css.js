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
        color: Colors.LIGHT_GREY_TWO,
        fontWeight:"900px"
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
    gridTemplate: "1fr / repeat(3,1fr) .5fr repeat(3,1fr)",
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
    justifyContent:'center',
    'button':{
        background:Colors.CHARCOAL_GREY_MEDIUM,
        'span':{
            background:Colors.WHITE
        }
    },
    ':hover':{
        'button':{
            background:Colors.LIGHT_PURPLE
        }
    }
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
    // all:'unset',
    border:'none',
    appearance:'none',
    fontFamily:'inherit',
    textAlign:"right",
    '::active':{
        border:'none'
    },
    '::before':{
        backgroundColor:'red'
    },
    '::after':{
        border:"2px solid green"
    }
},
mainDropDown:{
    
},
familySelector:{
    display:'flex',
    justifyContent:'space-between'
},
fontFamily:{
    gridColumn:" 1 / 4",
    alignSelf:'center',
    justifySelf:'start',
    width:'100%',
  }
});
