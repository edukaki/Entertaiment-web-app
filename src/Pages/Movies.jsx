import React from 'react'
import Gallery from '../components/Gallery'
import Title from '../components/Title'

import data from '../data/data.json'

const Movies = () => {

    return (
        <>
            <Title text="Movies"/>
            <Gallery data={data} filter="Movie"/>
        </>
    )
}

export default Movies
