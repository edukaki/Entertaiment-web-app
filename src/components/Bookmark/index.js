import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Bookmark.css'

const Bookmark = (props) => {
  const [fill, setFill] = useState(props.bookmarked === true ? "#FFF" : "none");
  const [stroke, setStroke] = useState("#FFF");

  const navigate = useNavigate()
  const refreshPage = () => { navigate(0) }

  return (
    <div className='c-bookmark__container'>
      <div className='c-bookmark'>
        <svg className='c-bookmark-icon' width="12" height=".8rem" xmlns="http://www.w3.org/2000/svg" fill={fill}
          onMouseEnter={() => {
            setFill("#FFF")
            setStroke("#000")
          }}
          onMouseLeave={() => {
            setFill(() => !props.bookmarked ? "none" : "#FFF")
            setStroke("#FFF")
          }}
          onClick={(event) => {
            props.onClick(event);
            refreshPage()
            setFill("#FFF")
          }}
        ><path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" stroke={stroke} strokeWidth="1.5" fill={fill} /></svg>
      </div>
    </div>
  )
}

export default Bookmark
