import React from 'react'

const MediaTitle = (props) => {
    return (
        <div>
            <p>{props.data.year}&nbsp;&nbsp;&#183;&nbsp;&nbsp;<img src={`/img/icon-category-${props.data.category}.svg`} alt={props.data.category} />&nbsp;&nbsp;{props.data.category}&nbsp;&nbsp;&#183;&nbsp;&nbsp;{props.data.rating}</p>
            <h2>{props.data.title}</h2>
        </div>
    )
}

export default MediaTitle
