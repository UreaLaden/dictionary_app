import React, { Component } from "react";
import { If, Then } from "react-if";
import { AudioPlayer } from "./AudioPlayer";
import { styles } from "./Dictionary.css";
import { PartOfSpeech } from "./PartOfSpeech";
import { Icon } from "@fluentui/react";

export class Dictionary extends Component {
  static displayName = Dictionary.name;

  constructor(props) {
    super(props);
    this.state = {
      details: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.queryWord("intelligent");
  }

  static RenderDetails(details) {
    const audioUrl = details.phonetics.filter(
      (value, idx) => value.audio !== ""
    )[0].audio;
    return (
      <div className={styles.dictionaryContentMono}>
        <div className={styles.headerContent}>
          <h1 className={styles.word}>{details.word}</h1>
          <h4 className={styles.phonetic}>{details.phonetic}</h4>
          <AudioPlayer className={styles.audioButton} audioSrc={audioUrl} />
        </div>
        {details.meanings.map((meaning, idx) => {
          return (
            <div>
              <PartOfSpeech partOfSpeech={meaning.partOfSpeech} />
              <div key={idx}>
                <If condition={meaning.definitions.length > 0}>
                  <Then>
                    <h5 className={styles.subheader}>Meaning</h5>
                  </Then>
                </If>
                {meaning.definitions.map((definition, idx) => {
                  return (
                    <ul className={styles.definition} key={idx}>
                      <li className={styles.definitionItem}>{definition.definition}</li>
                      <If condition={definition.example}>
                        <Then>
                          <div className={styles.example}>"{definition.example}"</div>
                        </Then>
                      </If>
                    </ul>
                  );
                })}
                <div className={styles.synonyms}>
                  <If condition={meaning.synonyms.length > 0}>
                    <Then>
                      <h5 className={styles.subheader}>Synonyms</h5>
                    </Then>
                  </If>
                  <div className={styles.synonymItem}>
                    {meaning.synonyms.map((synonym, idx) => {
                      return (
                        <div>
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
          <div className={styles.divider}/>
          <h5 className={styles.subheader}>
            <u>Source</u>
          </h5>
          <>
            <a className={styles.source} href={details.sourceUrls}>
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
    let contents = this.state.loading ? (
      <div>...Loading</div>
    ) : (
      Dictionary.RenderDetails(this.state.details)
    );
    return <div>{contents}</div>;
  }

  async queryWord(word) {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await response.json();
    this.setState({ details: data[0], loading: false });
  }
}
