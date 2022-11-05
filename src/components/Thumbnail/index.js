import React, { useState } from 'react'
import BtnPlay from '../BtnPlay';
import Bookmark from '../Bookmark';
import "./Thumbnail.css"

function onClickBook(){
    console.log("clicked")
}

const Thumbnail = (props) => {
    const [isShown, setIsShown] = useState((false));
    return (
        <>
            <div className='c-thumbnail__container' onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                <img src={props.img} alt="thumb"/>
                <Bookmark onClick={onClickBook}/>
                {isShown && (
                    <BtnPlay />
                )}
            </div>
        </>
    )
}

export default Thumbnail
