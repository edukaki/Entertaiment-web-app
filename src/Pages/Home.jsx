import React from 'react'
import Gallery from '../components/Gallery'
import Title from '../components/Title'

import data from '../data/data.json'

const Home = () => {

    return (
        <>
            <Title text="Recommended for you"/>
            <Gallery data={data} filter="all"/>
        </>
    )
}

export default Home
