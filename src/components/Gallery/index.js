import React from 'react'
import MovieCard from '../MovieCard'
import { v4 as uuidv4 } from 'uuid'

import './Gallery.css'

const Gallery = (props) => {
    return (
        <div className='c-gallery container'>
            {props.data.map((data)=> (
                console.log(data),
                props.filter === "bookmark" && data.isBookmarked === true ? <MovieCard data={data} /> :
                props.filter === data.category || props.filter === "all" ?
                <MovieCard data={data} key={uuidv4()}/> : ""
            ))}
        </div>
    )
}

export default Gallery
