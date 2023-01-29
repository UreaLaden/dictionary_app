import React, { Component } from "react";
import { styles } from "./AudioPlayer.css";
import { FontContext } from "../store/dictionary-context";

export class AudioPlayer extends Component {
  static contextType = FontContext;

  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
    this.state = {
      isPlaying: false,
    };
    this.Play = this.Play.bind(this);
  }

  componentDidMount() {
    this.audioRef.current.addEventListener("click", this.Play);
  }
  componentWillUnmount() {
    this.audioRef.current.removeEventListener("click", this.Play);
  }

  Play() {
    console.log(this.audioRef);
    this.audioRef.current.play();
  }

  render() {
    return (
      <div className={styles.player} onClick={this.Play}>
        <div className={styles.triangle} id={"triangle"}>
          <audio
            className={styles.audio}
            src={this.props.audioSrc}
            ref={this.audioRef}
          />
        </div>
      </div>
    );
  }
}
