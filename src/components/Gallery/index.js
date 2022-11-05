import React from 'react'
import MovieCard from '../MovieCard'
import { v4 as uuidv4 } from 'uuid'

import './Gallery.css'

const Gallery = (props) => {
    return (
        <div className='c-gallery container'>
            {props.data.map((data)=> (
                <MovieCard data={data} key={uuidv4()}/>
            ))}
        </div>
    )
}

export default Gallery
