import React from 'react'
import './MediaTitle.css'

const MediaTitle = (props) => {
    const icon = props.data.category === "TV Series" ? "tv" : props.data.category;
    return (
        <div className='c-media-title'>
            <p>{props.data.year}&nbsp;&nbsp;&#183;&nbsp;&nbsp;<img src={`/img/icon-category-${icon}.svg`} alt={props.data.category} />&nbsp;&nbsp;{props.data.category}&nbsp;&nbsp;&#183;&nbsp;&nbsp;{props.data.rating}</p>
            <h2>{props.data.title}</h2>
        </div>
    )
}

export default MediaTitle
