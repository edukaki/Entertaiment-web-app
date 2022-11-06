import React from 'react'
import Gallery from '../components/Gallery'
import Title from '../components/Title'

const TVSeries = (props) => {

    return (
        <>
            <Title text="TV Series"/>
            <Gallery data={props.data} filter="TV Series"/>
        </>
    )
}

export default TVSeries
