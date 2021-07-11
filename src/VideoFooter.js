import React from 'react';
import "./VideoFooter.css";
import MusiNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

function VideoFooter({channel, description, song}) {
    return (
      <div className="footer">
        <div className="footer_text">
          <h3>@{channel}</h3>
          <p>{description}</p>

          <div className="footer_ticker">
            <MusiNoteIcon className="footer_icon" />
            <Ticker mode="smooth">
              {({ index }) => (
                <>
                  <p>{song}</p>
                </>
              )}
            </Ticker>
          </div>
        </div>
        <img
          className="footer_record"
          src="https://static.thenounproject.com/png/934821-200.png"
          alt="record"
        />
      </div>
    );
}

export default VideoFooter
