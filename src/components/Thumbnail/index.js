import React, { useState } from 'react'
import BtnPlay from '../BtnPlay';
import Bookmark from '../Bookmark';
import "./Thumbnail.css"

import example from "../../img/thumbnails/112/regular/small.jpg"
function onClickBook(){
    console.log("clicked")
}

const Thumbnail = () => {
    const [isShown, setIsShown] = useState((false));
    return (
        <>
            <div className='c-thumbnail__container' onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                <img src={example} alt="Thumbnail" />
                <Bookmark onClick={onClickBook}/>
                {isShown && (
                    <BtnPlay />
                )}
            </div>
        </>
    )
}

export default Thumbnail
