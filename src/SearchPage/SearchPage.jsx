import React, {useEffect, useState} from 'react';
import VideoRow from './VideoRow';
import './SearchPage.css';
import axios from 'axios';
import {DateTime} from 'luxon';
import {CircularProgress,Alert} from '@mui/material';
import {useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';


const SearchPage = () => {
    const { searchQuery } = useParams();
    console.log(searchQuery);

    const [videoRows, setVideoRows] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setVideoRows([]);
        axios
        .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&type=video&q=${searchQuery}&safeSearch=none&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
        .then(response => {
          createVideoRows(response.data['items']);
          setIsError(false);
        })
        .catch(error => {
          console.log(error);
          setIsError(true);
          setIsLoading(false);
        })
    }, [searchQuery])

    async function createVideoRows(videos) {
        let newVideoRows = [];
        for (const video of videos) {
          const videoId = video.id.videoId;
          const response = await axios
                                  .get(`https://www.googleapis.com/youtube/v3/videos?part=statistics%2C%20snippet&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
          const views = response.data.items[0].statistics.viewCount;
          const snippet = video.snippet;
          const title = snippet.title;
          const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
          const channel = snippet.channelTitle;
          const description = snippet.description;
          const image = snippet.thumbnails.medium.url;
      
          newVideoRows.push({
            videoId,
            title,
            image,
            views,
            timestamp,
            channel, 
            description
          });
        };
        setVideoRows(newVideoRows);
        setIsLoading(false);
      }

    if(isError) {
      return <Alert severity="error" className='loading'>No Results found!</Alert>
    }
    return (
        
        <div className='searchvideos'>
            { isLoading ? <CircularProgress className='loading' color='secondary' /> : null }
            <div className="searchvideos__videos">
                {
                  videoRows.map(item => {
                    return (
                      <Link key={item.videoId} to={`/video/${item.videoId}`}>
                        <VideoRow key={item.videoId}
                            title={item.title}
                            image={item.image}
                            views={item.views}
                            timestamp={item.timestamp}
                            channel={item.channel}
                            channelImage={item.channelImage}
                        />
                        </Link>
                    )
                  })
                }
            </div>
        </div>
    )
}

export default SearchPage;
