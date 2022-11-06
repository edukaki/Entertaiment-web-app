import React from 'react'
import Gallery from '../components/Gallery'
import Title from '../components/Title'

const Bookmarked = (props) => {

    return (
        <>
            <Title text="Bookmarked"/>
            <Gallery data={props.data} filter="bookmark"/>
        </>
    )
}

export default Bookmarked
