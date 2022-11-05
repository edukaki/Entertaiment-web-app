import React from 'react'
import Thumbnail from '../Thumbnail'
import MediaTitle from '../MediaTitle';

import './MovieCard.css'

const MovieCard = (props) => {
    return (
        <div className='c-MovieCard'>
        <Thumbnail img={props.data.thumbnail.regular.large} />
        <MediaTitle data={props.data} />
    </div>
    )
}

export default MovieCard
