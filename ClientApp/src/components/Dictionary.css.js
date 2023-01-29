import { mergeStyleSets } from "@fluentui/react";
import { Colors } from "../utils/constants";

export const styles = mergeStyleSets({
  dictionaryContentMono: {
    fontFamily: "Aliquam,monospace",
  },
  dictionaryContentSans: {
    fontFamily: "Aliquam,sans-serif",
  },
  dictionaryContentSerif: {
    fontFamily: "Aliquam,serif",
  },
  definition: {
      "padding-left": "1.6rem",
    
},
definitionItem: {
    'padding-inline-start':'0px',
    listStyle:'none',
    textAlign:'left',
    fontSize:"1.2rem",
    "@media screen and (max-width:750px)":{
      fontSize:"1rem"
    }
  },
  example: {
    color: Colors.SILVER,
    paddingTop: "8px",
  },
  headerContent: {
    display: "grid",
    gridTemplate: "1fr .2fr / 3fr 1fr",
    alignSelf: "bottom",
    position: "relative",
    margin: "5% auto",
    fontSize:"1.5rem"
  },
  subheader: {
    color: Colors.SILVER,
    fontSize: "1.2rem",
    margin: "0",
  },
  word: {
    gridRow: "1 / span 1",
    gridColumn: "1 / span 1",
    margin: "0",
  },
  phonetic: {
    gridRow: "2 / span 1",
    gridColumn: "1 / span 1",
    margin: "0",
    color: Colors.DARK_PURPLE,
    fontStyle: "italic",
    fontSize: "1.1rem",
    paddingTop: "2%",
  },
  audioButton: {},
  source: {
    color: Colors.CHARCOAL_GREY_DARK,
  },
  footer: {
    lineHeight: "2rem",
    fontSize: "1.1rem",
  },
  synonyms: {
    display: "flex",
    gap: "25px",
    justifyContent: "start",
    alignItems: "center",
  },
  synonymItem: {
    display: "flex",
    gap: "10px",
    color: Colors.DARK_PURPLE,
    fontWeight: "900",
  },
  synonym: {},
  divider: {
    border: `1px solid ${Colors.LIGHT_GREY}`,
    margin: "1rem auto",
  },
 
});
