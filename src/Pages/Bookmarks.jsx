import React from 'react'
import Gallery from '../components/Gallery'
import Title from '../components/Title'

import data from '../data/data.json'

const Bookmarked = () => {

    return (
        <>
            <Title text="Bookmarked"/>
            <Gallery data={data} filter="Movie"/>
        </>
    )
}

export default Bookmarked
