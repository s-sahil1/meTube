import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { Alert } from '@mui/material';
import { CircularProgress } from '@mui/material';
import RecommendedVideos from './HomePage/HomePage';
import BigVideo from './BigVideo';
import VideoInfo from './VideoInfo';
import './VideoPlayer.css'



const VideoPlayer = () => {
    const { videoId } = useParams();
    const [info, setInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setInfo([]);
        setIsLoading(true);
        axios
          .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
          .then(response => {
              console.log(response.data)
              createVideoInfo(response.data['items'][0]);
              setIsError(false);
          })
          .catch(error => {
              console.log(error);
              setIsError(true);
          })
    }, [videoId])

    async function createVideoInfo(video) {

        const snippet = video.snippet;
        const stats = video.statistics;
        const channelId = snippet.channelId;
        const response = await axios
            .get(`https://www.googleapis.com/youtube/v3/channels?part=snippet%2C%20statistics&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);

        const channelImage = response.data.items[0].snippet.thumbnails.medium.url;
        const subs = response.data.items[0].statistics.subscriberCount;
        const publishedDate = new Date(snippet.publishedAt).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
        const title = snippet.title;
        const description = snippet.description;
        const channelTitle = snippet.channelTitle;
        const viewCount = stats.viewCount;
        const likeCount = stats.likeCount;
        const dislikeCount = stats.dislikeCount;
        console.log('hello');
        console.log(title);

        setInfo({
            title,
            description,
            publishedDate,
            channelTitle,
            channelImage,
            viewCount,
            likeCount,
            dislikeCount,
            subs
        });
        setIsLoading(false);
        if (isError) {
            return <Alert severity="error" className='loading'>No Results found!</Alert>
        }


    }

    return (

        <div className='videoplayer'>
            <div className='videoplayer__videodetails'>
                <div className='videoplayer__video'>
                    {isLoading ? <CircularProgress className='loading' color='secondary' /> : <BigVideo videoId={videoId} />}
                </div>
                <div className='videoplayer__videoinfo'>
                    {!isLoading ? <VideoInfo
                        title={info.snippet}
                        description={info.description}
                        publishedDate={info.publishedDate}
                        channelTitle={info.channelTitle}
                        channelImage={info.channelImage}
                        viewCount={info.viewCount}
                        likeCount={info.likeCount}
                        dislikeCount={info.dislikeCount}
                        subs={info.subs}
                    /> : null
                    }
                </div>
            </div>
            <div className='videoplayer__suggested'>
                <RecommendedVideos />
            </div>
        </div>
    );


}

export default VideoPlayer;