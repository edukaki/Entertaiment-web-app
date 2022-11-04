import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { ReactComponent as AllIcon } from '../img/icon-nav-home.svg'
import { ReactComponent as MoviesIcon } from '../img/icon-nav-movies.svg'
import { ReactComponent as SeriesIcon } from '../img/icon-nav-tv-series.svg'
import { ReactComponent as FavoritesIcon } from '../img/icon-nav-bookmark.svg'
import avatar from '../img/image-avatar.png'

import './Layout.css'

const Layout = () => {

    return (
        <>
            <nav className='c-navbar'>
                <div className='c-navbar__logo'></div>
                <ul className='c-navbar__pages'>
                    <li><NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? 'c-navbar__icon active' : 'c-navbar__icon'}>
                        <AllIcon /></NavLink></li>
                    <li><NavLink to="/movies"
                        className={({ isActive }) =>
                            isActive ? 'c-navbar__icon active' : 'c-navbar__icon'}>
                        <MoviesIcon /></NavLink></li>
                    <li><NavLink to="/tv-series"
                        className={({ isActive }) =>
                            isActive ? 'c-navbar__icon active' : 'c-navbar__icon'}>
                        <SeriesIcon /></NavLink></li>
                    <li><NavLink to="/bookmarks"
                        className={({ isActive }) =>
                            isActive ? 'c-navbar__icon active' : 'c-navbar__icon'}>
                        <FavoritesIcon /></NavLink></li>
                </ul>
                <div><img className='c-navbar__avatar' src={avatar} alt='avatar' /></div>
            </nav>
            <Outlet />
        </>

    )
}

export default Layout



