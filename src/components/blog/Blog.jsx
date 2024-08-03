import React, { useEffect, useState } from 'react'
import { CONFIG } from '../../config'


import "./Blog.scss"
import { useSelector } from "react-redux"
import BlogRating from './BlogRating'
import { useNavigate } from 'react-router'
import axios from 'axios'




const Blog = ({show, setShow}) => {

  const navigate = useNavigate();

  const [blogData, setBlogData] = useState([])

  const langState = useSelector((state) => state.lang.lang);


  useEffect(() => {
    async function getData() {
        try {
            const blogData = await axios.get("https://globalitacademy.am/GIAcademyApi/news/");
            setBlogData(blogData.data);
  
        } catch (error) {
            console.log("Error")
        }
    }
    getData();
  }, []);

  function handleOpen(id){
    blogData.map((item) => {
      if(item.id == id){
        setShow(true)
        console.log(item.id);
      }else{
        setShow(false)
      }
    })
  }
  // console.log(show);


  return (
    <div className='blog'>
      <div className='blog-title'>
        <h2> {langState === "hy"? "Բլոգ": langState === "ru" ? "Блог" : "Blog"}</h2>
        <div className="blog-title-icons" >
          {CONFIG.blog_Title_Icons_Data.map(({id,icon}) => {
            return(
            <span key={id}>{icon}</span>
            )
          })}
        </div>
      </div>
      <div className="blog-items">
        {blogData.map(({id, news_img, news_name_hy, news_name_ru, news_name_en, news_text_hy, news_text_ru, news_text_en}) => {
          return(
            <div className="blog-items-item" key={id}>
              <img src={news_img} alt=""/>
              <div className="blog-items-item-desc">
                <h3>{langState === "hy"? news_name_hy: langState === "ru" ? news_name_ru : news_name_en}</h3>
                <p>{langState === "hy"? news_text_hy: langState === "ru" ? news_text_ru : news_text_en}</p>
                {/* <BlogRating /> */}
                <button onClick={() => [
                  handleOpen(id),
                  navigate(`/blog-item/${id}`)
                ]}>more</button>
              </div>
          </div>
          )
        })}
      </div>

    </div>
  )
}

export default Blog