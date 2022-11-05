import React from 'react'
import Gallery from '../components/Gallery'
import Title from '../components/Title'

import data from '../data/data.json'

const TVSeries = () => {

    return (
        <>
            <Title text="TV Series"/>
            <Gallery data={data} filter="TV Series"/>
        </>
    )
}

export default TVSeries
