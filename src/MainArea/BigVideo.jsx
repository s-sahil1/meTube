import React from "react";
import YouTube from 'react-youtube';


const BigVideo = ({videoId}) => {
    console.log(videoId);
    const opts = {
        height: '600',
        width: '100%',
        }
    return (
        <div className='Video'>
          <YouTube
            videoId={videoId}
            opts={opts}
          />
        </div>
    )
}

export default BigVideo;