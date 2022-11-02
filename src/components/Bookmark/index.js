import React, { useState } from 'react'
import './Bookmark.css'

const Bookmark = () => {
  const [fill, setFill] = useState("none");
  const [stroke, setStroke] = useState("#FFF");
  const [active, setActive] = useState(false)
  
  return (
    <div className='c-bookmark'>
      <svg className='c-bookmark-icon' width="12" height=".8rem" xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={() => {
          setFill("#FFF")
          setStroke("#000")
        }}
        onMouseLeave={() => {
          setFill(() => !active ? "none" : "#FFF")
          setStroke("#FFF")
        }}
        onClick={() => {
          setActive(!active);
          setFill("#FFF")}}
        ><path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" stroke={stroke} strokeWidth="1.5" fill={fill} /></svg>
    </div>
  )
}

export default Bookmark
