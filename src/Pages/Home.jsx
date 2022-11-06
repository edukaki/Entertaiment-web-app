import React from 'react'
import Gallery from '../components/Gallery'
import Title from '../components/Title'

const Home = (props) => {

    return (
        <>
            <Title text="Recommended for you"/>
            <Gallery data={props.data} filter="all"/>
        </>
    )
}

export default Home
