import React from 'react';
import './MainArea.css';
import { MdHistory, MdHomeFilled, MdLocalMovies, MdVideoLibrary, MdWatchLater, MdOutlineLiveTv } from 'react-icons/md'
import { FaGripfire, FaYoutube } from 'react-icons/fa';
import { BsFillCollectionPlayFill, BsMusicNoteList } from 'react-icons/bs';
import {  AiOutlinePlaySquare } from 'react-icons/ai';
import { RiThumbUpLine } from 'react-icons/ri';
import { SiYoutubemusic, SiYoutubestudio } from 'react-icons/si';
import { TbMoodKid, TbDeviceGamepad2 } from 'react-icons/tb';
import { HiOutlineStatusOnline, HiOutlineNewspaper } from 'react-icons/hi';
import QuickIcon, { PremiumIcon } from './QuickIcon';
// import Video from './Video';
import MainMainArea from './MainMainArea';


function MainArea() {
    return (
        <div className='MainArea'>

            <div className='SideBar'>
                <div className='Home'>
                    <QuickIcon Name='Home' Icon={MdHomeFilled} />
                    <QuickIcon Name='Trending' Icon={FaGripfire} />
                    <QuickIcon Name='Subscription' Icon={BsFillCollectionPlayFill} />
                </div>

                <div className='Explore'>
                    <div className='explore'>
                        <div>Explore</div>
                    </div>

                    <QuickIcon Name='Library' Icon={MdVideoLibrary} />

                    <QuickIcon Name='Home' Icon={MdHomeFilled} />

                    <QuickIcon Name='Your videos' Icon={AiOutlinePlaySquare} />

                    <QuickIcon Name='Watch Later' Icon={MdWatchLater} />

                    <QuickIcon Name='Liked Videos' Icon={RiThumbUpLine} />

                    <QuickIcon Name='Mixed Videos' Icon={BsMusicNoteList} />

                    <QuickIcon Name='Movies&Shows' Icon={MdLocalMovies} />

                    <QuickIcon Name='Live' Icon={HiOutlineStatusOnline} />

                    <QuickIcon Name='Gaming' Icon={TbDeviceGamepad2} />

                    <QuickIcon Name='News' Icon={HiOutlineNewspaper} />

                    <QuickIcon Name='History' Icon={MdHistory} />

                    <QuickIcon Name='Watch Later' Icon={MdWatchLater} />


                </div>

                <div className='More_From_MeTube'>
                    <div className='more_from_metube'>
                        <div>More From MeTube</div>
                    </div>
                    <PremiumIcon Name='MeTube Premium' Icon={FaYoutube} />
                    <PremiumIcon Name='Metube Music' Icon={SiYoutubemusic} />
                    <PremiumIcon Name='Creater Studio' Icon={SiYoutubestudio} />
                    <PremiumIcon Name='MeTube Kids' Icon={TbMoodKid} />
                    <PremiumIcon Name='MeTube Live TV' Icon={MdOutlineLiveTv} />


                </div>


            </div>
            <div className='Main'>
            <MainMainArea />

            </div>

        </div>
    );

}

export default MainArea;