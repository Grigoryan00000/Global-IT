import React from 'react'
import { CONFIG } from '../../config'


import "./Blog.scss"
import { useSelector } from "react-redux"
import BlogRating from './BlogRating'
import { useNavigate } from 'react-router'

const Blog = () => {
  const blog = useSelector((state) => state.blog.blog)
  const navigate = useNavigate();
  return (
    <div className='blog'>
      <div className='blog-title'>
        <h2>Բլոգ</h2>
        <div className="blog-title-icons" >
          {CONFIG.blog_Title_Icons_Data.map(({id,icon}) => {
            return(
            <span key={id}>{icon}</span>
            )
          })}
        </div>
      </div>
      <div className="blog-items">
        {blog.map(({id,title,img,desc}) => {
          return(
          <div className="blog-items-item" key={id} onClick={() => {
            navigate("/blog-item")
          }}>
              <img src={img} alt=""/>
              <div className="blog-items-item-desc">
                <h3>{title}</h3>
                <p>{desc}</p>
                <BlogRating />
              </div>
          </div>
          )
        })}
      </div>

    </div>
  )
}

export default Blog