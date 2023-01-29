import React, { Component } from "react";
import { If, Then } from "react-if";
import { AudioPlayer } from "./AudioPlayer";
import { styles } from "./Dictionary.css";
import { PartOfSpeech } from "./PartOfSpeech";
import { Icon } from "@fluentui/react";
import { FontContext } from "../store/dictionary-context";
import { Colors } from "../utils/constants";

export class Dictionary extends Component {
  static displayName = Dictionary.name;
  static contextType = FontContext;

  constructor(props) {
    super(props);
    this.state = {
      currentFont: "",
      loading: true,
      searchWord: "",
    };
  }

  componentDidMount(){
    this.setState(()=>{
      return {currentFont:this.props.currentFont,loading:true,searchWord:''}
    })
  }

  RenderDetails(details) {
    if(details === undefined){
      return <div>Nothing to See Here</div>
    }
    const audioUrl = details.phonetics.filter(
      (value, idx) => value?.audio !== ""
    )[0];
    return (
      <div className={styles.dictionaryContentMono}>
        <div className={styles.headerContent}>
          <h1 
            className={styles.word}   
            style={{fontFamily:this.props.currentFont}} >{details.word}</h1>
          <h4 
            className={styles.phonetic}
            style={{fontFamily:this.props.currentFont}}>{details.phonetic}</h4>
          {audioUrl && (
            <AudioPlayer
              className={styles.audioButton}
              audioSrc={audioUrl.audio}
            />
          )}
        </div>
        {details.meanings.map((meaning, idx) => {
          return (
            <div key={meaning + idx}>
              <PartOfSpeech font={this.props.currentFont} partOfSpeech={meaning.partOfSpeech} />
              <div key={meaning.partOfSpeech + idx}>
                <If condition={meaning.definitions.length > 0}>
                  <Then>
                    <h5 
                      className={styles.subheader}
                      style={{fontFamily:this.props.currentFont}}
                      >Meaning</h5>
                  </Then>
                </If>
                {meaning.definitions.map((definition, idx) => {
                  return (
                    <ul
                      className={styles.definition}
                      key={styles.definition + idx}
                    >
                      <li 
                        className={styles.definitionItem}
                        style={{fontFamily:this.props.currentFont}}>
                        {definition.definition}
                      </li>
                      <If condition={definition.example}>
                        <Then>
                          <div 
                          className={styles.example}
                          style={{fontFamily:this.props.currentFont}}>
                            "{definition.example}"
                          </div>
                        </Then>
                      </If>
                    </ul>
                  );
                })}
                <div 
                  className={styles.synonyms}
                  style={{fontFamily:this.props.currentFont}}>
                  <If condition={meaning.synonyms.length > 0}>
                    <Then>
                      <h5 
                        className={styles.subheader}
                        >Synonyms</h5>
                    </Then>
                  </If>
                  <div 
                    className={styles.synonymItem}
                    style={{fontFamily:this.props.currentFont}}>
                    {meaning.synonyms.map((synonym, idx) => {
                      return (
                        <div key={synonym + idx}>
                          <div className={styles.synonym} key={idx}>
                            {synonym}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className={styles.footer}>
          <div className={styles.divider} />
          <h5 className={styles.subheader}>
            <u style={{fontFamily:this.props.currentFont}}>Source</u>
          </h5>
          <>
            <a 
              style={
                {fontFamily:this.props.currentFont,
                  color:this.context.darkmodeEnabled ? Colors.WHITE : Colors.JET_BLACK}} 
              className={styles.source} href={details.sourceUrls}>
              {details.sourceUrls}
            </a>
            &nbsp;
            <Icon iconName={"new-window"} />
          </>
        </div>
      </div>
    );
  }

  render() {
    let contents = this.context.isLoading ? (
      <div></div>
    ) : (
      this.RenderDetails(this.context.details)
    );
    return <div>{contents}</div>;
  }
}
