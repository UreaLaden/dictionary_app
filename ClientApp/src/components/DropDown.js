import { styles } from "./DropDown.css";
import { Icon } from "@fluentui/react";
import * as React from "react";
import { Panel } from "./Panel";
import { FontContext } from "../store/dictionary-context";
import { Colors } from "../utils/constants";

export const DropDown = (props) => {
  const { dropdownOptions } = props;
  const [currentOption, setCurrentOption] = React.useState({});
  const [dropdownActive, setDropdownActive] = React.useState(false);
  const dropdownRef = React.useRef(null);
  const context = React.useContext(FontContext);

  React.useEffect(() => {
    setCurrentOption(dropdownOptions[0]);
  }, [dropdownOptions]);

  const dropdownMenuClickedHandler = React.useCallback(() => {
    setDropdownActive(true);
  }, []);

  const handleClick = (event) => {
    if (event.target !== dropdownRef.current) {
      setDropdownActive(false);
    }
  };

  const optionSelectedHandler = (option) => {
    setCurrentOption(option);
    props.selectOption(option);
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [dropdownActive]);
  const content = currentOption ? (
    <>
      <div
        ref={dropdownRef}
        className={styles.dropDownContainer}
        onClick={dropdownMenuClickedHandler}
      >
        <div className={styles.dropdownPlaceholder}>
          <div className={styles.placeholder}>{currentOption.text}</div>
          <Icon className={styles.dropdownIcon} iconName={props.iconName} />
        </div>
        <div
          className={
            dropdownActive ? styles.dropdownMenuActive : styles.dropdownMenu
          }
          style={{
            backgroundColor:context.darkmodeEnabled 
            ? Colors.CHARCOAL_GREY : Colors.WHITE            
          }}
        >
          <div>
            {dropdownOptions.map((element, i) => {
              return (
                <Panel
                  key={i}
                  optionClass={styles.placeholder}
                  theme={context.darkmodeEnabled}
                  option={element}
                  onOptionSelected={optionSelectedHandler}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  ) : (
    <>Nothin to see here</>
  );
  return content;
};

export default DropDown;
