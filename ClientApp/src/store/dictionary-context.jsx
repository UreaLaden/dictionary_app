import * as React from "react";

export const FontContext = React.createContext({
  currentFont: "",
  fontOptions: [],
  searchTerm: "",
  details:{},
  setFont: (font) => {},
  addFontOption: (option) => {},
  setSearchTerm: (word) => {},
  updateWordDetails: (data) => {},
  setIsLoading:() => {}
});

export const FontContextProvider = (props) => {
  const [fontOptions, setFontOptions] = React.useState([]);
  const [selectedFont, setSelectedFont] = React.useState({});
  const [searchWord, setSearchWord] = React.useState("");
  const [wordDetails,setWordDetails] = React.useState({});
  const [loading,setLoading] = React.useState(true);

  const setSelectedFontHandler = (family) => {
    setSelectedFont(family);
  };

  const addFontOptionsHandler = (option) => {
    setFontOptions((fontOptions) => {
      const updatedOptions = fontOptions.concat(option);
      return updatedOptions;
    });
  };

  const setSearchWordHandler = (word) => {
    setSearchWord(word);
  };

  const updateDetailsHandler = (newDetails) => {
    setWordDetails(newDetails);
  }

  const setIsLoadingHandler = (isLoading) =>{
    setLoading(isLoading);
  }

  const context = {
    currentFont: selectedFont,
    fontOptions: fontOptions,
    searchTerm:searchWord,
    details:wordDetails,
    isLoading:loading,
    setFont: setSelectedFontHandler,
    addFontOption: addFontOptionsHandler,
    setSearchTerm:setSearchWordHandler,
    updateWordDetails:updateDetailsHandler,
    setIsLoading:setIsLoadingHandler
  };

  return (
    <FontContext.Provider value={context}>
      {props.children}
    </FontContext.Provider>
  );
};
