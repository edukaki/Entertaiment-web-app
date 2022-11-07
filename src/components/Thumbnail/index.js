import React, { useState } from 'react'
import BtnPlay from '../BtnPlay';
import Bookmark from '../Bookmark';
import "./Thumbnail.css"

const Thumbnail = (props) => {
    const data = JSON.parse(localStorage.getItem("data"))

    function onClickBook() {
        const newData = data.map(media => (
            media.title === props.data.title ?
                { ...media, isBookmarked: !media.isBookmarked } : media
        ))
        localStorage.setItem("data", JSON.stringify(newData))
    }

    const [isShown, setIsShown] = useState((false));
    return (
        <>
            <div className='c-thumbnail__container' onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                <img src={props.img} alt="thumb" />
                <Bookmark bookmarked={props.data.isBookmarked} onClick={onClickBook} />
                {isShown && (
                    <BtnPlay />
                )}
            </div>
        </>
    )
}

export default Thumbnail
