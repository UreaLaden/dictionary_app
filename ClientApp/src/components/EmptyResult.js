import { FontContext } from "../store/dictionary-context";
import { styles } from "./EmptyResult.css";
import * as React from "react";

export const EmptyResult = (props) => {
  const context = React.useContext(FontContext);
  const contextError =
    context.errorDetails.message + context.errorDetails.resolution;
  return (
    <div className={styles.resultContainer}>
      <div className={styles.emoji}>&#x1F641;</div>
      <h2 className={styles.title} style={{ fontFamily: context.currentFont }}>
        {context.errorDetails.title}
      </h2>
      <div
        className={styles.message}
        style={{ fontFamily: context.currentFont }}
      >
        {contextError}
      </div>
    </div>
  );
};

export default EmptyResult;
