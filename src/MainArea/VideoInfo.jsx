import React from 'react';
import { BsHandThumbsUpFill } from 'react-icons/bs';
import { TbThumbDown } from 'react-icons/tb';
import { BsReply } from 'react-icons/bs';
import { TbPlaylistAdd } from 'react-icons/tb';
import './VideoInfo.css';
import { Avatar, Button } from '@mui/material';
import Part from './Parts';

const VideoInfo = ({ title, description, publishedDate, channelTitle, channelImage, viewCount, likeCount, dislikeCount, subs }) => {
    return (
        <div className='videoinfo'>
            <div className='videoinfo__headline'>
                <h1>{title}</h1>
            </div>

            <div className='channelInfo'>

                <div className="videoinfo__channel">

                    <Avatar
                        className='videoinfo__avatar'
                        alt={channelTitle}
                        src={channelImage}
                    />
                    <div className='videoinfo__channelinfo'>
                        <div>{channelTitle}</div>
                        <div className='videoinfo__channelsubs'>{subs} subscribers</div>
                    </div>
                    <div className='videoinfo__subscribe'>
                        <div className='Subscribe' color='secondary' >SUBSCRIBE</div>
                    </div>



                </div>

                <div className='videoinfo__stats'>

                    <div className="videoinfo__likes">
                        <div class='partIcon'><Part class='partIcon' Icon={BsHandThumbsUpFill} title={likeCount} /></div>
                        <div class='partIcon'><Part class='partIcon' Icon={BsReply} title='SHARE' /></div>
                        <div class='partIcon'><Part class='partIcon' Icon={TbPlaylistAdd} title='SAVE' /></div>
                    </div>
                </div>
            </div>

            <div className='videoinfo__channeldesc'>
                <p>{viewCount} views • {publishedDate}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default VideoInfo;