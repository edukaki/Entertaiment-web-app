import React from 'react'
import Gallery from '../components/Gallery'
import Title from '../components/Title'

const Movies = (props) => {

    return (
        <>
            <Title text="Movies"/>
            <Gallery data={props.data} filter="Movie"/>
        </>
    )
}

export default Movies
