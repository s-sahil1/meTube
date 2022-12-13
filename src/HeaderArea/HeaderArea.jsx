import React from 'react';
import './HeaderArea.css';
import { FaYoutube } from 'react-icons/fa';
import { MdSearch, MdVideoCall, MdAccountCircle, MdKeyboardVoice } from 'react-icons/md';
import { AiTwotoneBell } from 'react-icons/ai';
import {VscMenu} from 'react-icons/vsc';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function HeaderArea() {
    const [search,updateSearch] = useState('');

    function Input(event){
        updateSearch(event.target.value);
        console.log(search);
    }

    return (
        <body>
            <div className='HeaderArea'>
                <div className='Header'>
                    <header className='header'>
                        <button className='button icon'><VscMenu  fontSize={'1.5rem'}></VscMenu></button>
                        <Link to={`/`}><FaYoutube color={'red' }fontSize={'3rem'}></FaYoutube></Link>
                        <div ><Link className='MeTube' to={`/`}>MeTube</Link></div>
                    </header>
                    <div className='Search'>
                        <input onChange={Input} name='searchField' className ='searchTextBox ' type='search' value={search} placeholder='   Search'></input>
                        <Link className='linkText' to={`/search/${search}`}>
                        <div className='search'>
                            <MdSearch class='searchIcon' fontSize='2rem' />
                        </div>
                        </Link>
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