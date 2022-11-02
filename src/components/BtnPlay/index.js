import React from 'react'
import './BtnPlay.css'
import playIcon from '../../img/icon-play.svg'

const BtnPlay = () => {
  return (
    <div className='c-btnPlay'>
      <img src={playIcon} alt='Play' />
      <span >Play</span>
    </div>
  )
}

export default BtnPlay
