import { styles } from "./PartOfSpeech.css";

export const PartOfSpeech = (props) =>{
    const {partOfSpeech} = props;

    return (
        <div className={styles.container}>
            <h3 className={styles.type}>{partOfSpeech}</h3>
            <div className={styles.line}></div>
        </div>
        )
}