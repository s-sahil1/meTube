import React from 'react';
import './MainArea.css';

// import Video from './Video';
import RecommendedVideos from './HomePage/HomePage';
import SideBar from './SideBar/SideBar';


function MainArea() {
    return (
        <div className='MainArea'>

            <SideBar />
            <div className='Main'>
            <RecommendedVideos />

            </div>

        </div>
    );

}

export default MainArea;