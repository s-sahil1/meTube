import React from 'react';
import './HeaderArea.css';
import { FaYoutube } from 'react-icons/fa';
import { MdSearch, MdVideoCall, MdAccountCircle, MdKeyboardVoice } from 'react-icons/md';
import { AiTwotoneBell } from 'react-icons/ai';
import {VscMenu} from 'react-icons/vsc';

function HeaderArea() {
    return (
        <body>
            <div className='HeaderArea'>
                <div className='Header'>
                    <header className='header'>
                        <button className='button icon'><VscMenu  fontSize={'1.5rem'}></VscMenu></button>
                        
                        <FaYoutube color={'red' }fontSize={'3rem'}></FaYoutube>
                        <div>MeTube</div>
                    </header>
                    <div className='Search'>
                        <input className ='searchTextBox ' type='search' placeholder='   Search'></input>
                        <div className='search icon'>
                            <MdSearch class='searchIcon ' fontSize='2rem' />
                        </div>
                        <div className='icon'><MdKeyboardVoice fontSize={'1.8rem'} /></div>
                    </div>
                    <div className='Icon'>
                        <div className='icon'><AiTwotoneBell fontSize={'1.8rem'} /></div>
                        <div className='icon'><MdVideoCall fontSize={'1.8rem'} /></div>
                        <div className='icon'><MdAccountCircle fontSize={'1.8rem'} /></div>

                    </div>
                </div>
            </div>
        </body>
    )
}

export default HeaderArea;