import { styles } from "./DropDown.css";
import { Icon } from "@fluentui/react";
import * as React from "react";
import { Panel } from "./Panel";

const dropdownOptions = [
  { key: "C", text: "Sans Serif", data: { class: styles["placeholderC"] } },
  { key: "B", text: "Serif", data: { class: styles["placeholderB"] } },
  { key: "A", text: "Mono", data: { class: styles["placeholderA"] } },
];

export const DropDown = (props) => {
  const [currentOption, setCurrentOption] = React.useState(dropdownOptions[0]);
  const { iconName } = props;
  return (
    <>
      <div className={styles.dropDownContainer}>
        <div className={currentOption.data.class}>{currentOption.text}</div>
        <Icon className={styles.dropdownIcon} iconName={iconName} />
      </div>
      <div className={styles.panel}>
        {dropdownOptions.map((element, i) => {
          return (
            <Panel key={i} optionClass={element.data.class} option={element} />
          );
        })}
      </div>
    </>
  );
};

export default DropDown;
