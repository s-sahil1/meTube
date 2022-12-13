import './App.css';
import React from 'react';
import HeaderArea from './HeaderArea/HeaderArea';
import MainArea from './MainArea/MainArea';
import SideBar from './MainArea/SideBar/SideBar';
import SearchPage from './SearchPage/SearchPage';
import VideoPlayer from './MainArea/VideoPlayer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <HeaderArea />
    <MainArea /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<>
            <HeaderArea />
            <MainArea />
          </>} />
          <Route path='/search/:searchQuery' element={<>
            <HeaderArea />
            <SideBar />
            <SearchPage />
          </>} />
          <Route path='/video/:videoId' element={<>
            <HeaderArea />
            <VideoPlayer />
          </>} />
          
          
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
