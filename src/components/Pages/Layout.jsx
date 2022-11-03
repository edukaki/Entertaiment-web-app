import React from 'react'
import { BrowserRouter, Link, Outlet } from 'react-router-dom'
import allIcon from '../../img/icon-nav-home.svg'
import moviesIcon from '../../img/icon-nav-movies.svg'
import seriesIcon from '../../img/icon-nav-tv-series.svg'
import favoritesIcon from '../../img/icon-nav-bookmark.svg'
import avatar from '../../img/image-avatar.png'

import './Layout.css'

const Layout = () => {
    return (
        <BrowserRouter>
            <nav className='c-navbar'>
                <div className='c-navbar__logo'></div>
                <ul className='c-navbar__pages'>
                    <li><Link to="/"> <img className='c-navbar__icon' src={allIcon} alt='All' /></Link></li>
                    <li><Link to="/movies"> <img className='c-navbar__icon' src={moviesIcon} alt='Movies' /></Link></li>
                    <li><Link to="/tv-series"> <img className='c-navbar__icon' src={seriesIcon} alt='TV Series' /></Link></li>
                    <li><Link to="/bookmarks"> <img className='c-navbar__icon' src={favoritesIcon} alt='Favorites' /></Link></li>
                </ul>
                <div><img className='c-navbar__avatar' src={avatar} alt='avatar' /></div>
            </nav>
            <Outlet />
        </BrowserRouter>

    )
}

export default Layout



