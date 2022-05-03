import { useState } from "react";
import "./videocard.css"

let VideoCard = () => {
    let [playing, setPlaying] = useState(false);
    return <div className="video-card">
        <video
            onClick={(e) => {
                if (playing) {
                    e.currentTarget.pause();
                    setPlaying(false);
                } else {
                    e.currentTarget.play();
                    setPlaying(true);
                }
            }}
            loop
            src="https://player.vimeo.com/progressive_redirect/playback/672684920/rendition/540p/540p.mp4?loc=external&oauth2_token_id=57447761&signature=32cb6b2e5e97333e35129877a0a35748af0bec5798a5066753d36999a017a31a" className="video-card-video"></video>
    </div>
}
export default VideoCard;