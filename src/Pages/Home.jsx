import React from 'react'
import SMovieCard from '../components/SMovieCard'
import Title from '../components/Title'

import data from '../data/data.json'

const Home = () => {
    const categoryImg = data[0].category === "Movie" ? '/src/img/icon-category-movie.svg' : '';

    return (
        <>
            <Title text="Recommended for you"/>
            <SMovieCard element={data[0]} categoryImg={categoryImg} />
        </>
    )
}

export default Home
