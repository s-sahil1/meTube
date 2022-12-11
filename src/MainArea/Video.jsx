import React from "react";
import ReactPlayer from 'react-player';
import { AiOutlineMore } from "react-icons/ai";
import { Avatar } from '@mui/material';
import './Video.css'

function Video({ image, title, channel, views, timestamp, channelImage }) {
    return (
        <div class='Video'>
            {/* <div className='video'>
                <ReactPlayer className='react-player' url={URL} height='170px' width='280px' controls />
            </div>
            <br></br>
            <div className='Logo'>
                <img src={image} alt='owner' style={{ height: '35px', width: '35px', borderRadius: '50%' }} />
                <div>{title}</div>
                <div className='more'>
                    <AiOutlineMore size={'1.3rem'}></AiOutlineMore>
                </div>
            </div>

            <div className='view' >
                <div>{Creator}</div>
                <div>{views}</div>
            </div>
            <div className='description'>

            </div> */}

            <div className="videocard">
                <img className="videocard__image" src={image} alt=''/>
                <div className="videocard__info">

                    <Avatar 
                        className='videocard__avatar'
                        alt={channel}
                        src={channelImage}
                    />
                    <div className="videocard__text">
                        <h4>{title}</h4>
                        <p>{channel}</p>
                        <p>{views} views • {timestamp}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;