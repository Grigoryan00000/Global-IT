import BlogBanner from '../blog-banner/BlogBanner'
import Container from '../../common/container/Container'
import BlogItemBanner from "../../../assets/blog/blog-item/blog-item-banner.png"
import BlogItemImg1 from "../../../assets/blog/blog-item/blog-item-img1.png"
import BlogItemImg2 from "../../../assets/blog/blog-item/blog-item-img2.png"
import BlogItemImg3 from "../../../assets/blog/blog-item/blog-item-img3.png"
import "./BlogItem.scss"
// import { createImmutableStateInvariantMiddleware } from '@reduxjs/toolkit'
import { CONFIG } from '../../../config'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router'
const BlogItem = ({show, setShow}) => {

    const location = useLocation();
    let id = +location.pathname[location.pathname.length-1]; // Current path
  const [blogData, setBlogData] = useState([])
  const [blogItemData, setBlogItemData] = useState([])



   useEffect(() => {
    async function getData() {
        try {
            const blogData = await axios.get("https://globalitacademy.am/GIAcademyApi/news/");
            const blogItemData = await axios.get("https://globalitacademy.am/GIAcademyApi/news_info/");

            setBlogData(blogData.data);
            setBlogItemData(blogItemData.data);
  
        } catch (error) {
            console.log("Error")
        }
    }
    getData();
  }, []);
  console.log(blogItemData);


  // console.log(blogData);
  return (
    <>
        <BlogBanner 
        blogData={blogData}
        blogItemData={blogItemData}
        id = {id}
        // show={show}
        background={BlogItemBanner}
        title={"Այստեղ լինելու է վերնագիրը Որը ցանկալի է լինի միքիչ երկար"}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa ac fermentum, at nunc purus ullamcorper massa. Augue tincidunt pharetra sit tortor, pellentesque.Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa ac fermentum, at nunc purus ullamcorper massa. Augue tincidunt pharetra sit tortor, pellentesque.Lorem ipsum   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa ac fermentum, at nunc purus ullamcorper massa. Augue tincidunt pharetra sit tortor, pellentesque.Lorem ipsum"}
        />
        <div className="blog-item-bottom">
          {blogItemData.map((item) => {
            if(id === item.id)
            return(
              <p>{item.name}</p>
            )
          })}
          <Container>
            <div className="blog-item-bottom-left-news">
              <h2 className='blog-item-bottom-left-news-title'>Ստեղ ես չափի վերնագիր</h2>
              <p className='blog-item-bottom-left-news-text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa ac fermentum, at nunc purus ullamcorper massa. Augue tincidunt pharetra sit tortor, pellentesque.Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa ac fermentum, at nunc purus ullamcorper massa. Augue tincidunt pharetra sit tortor, pellentesque.Lorem ipsum   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa ac fermentum, at nunc purus ullamcorper massa. Augue tincidunt pharetra sit tortor, pellentesque.Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa ac fermentum, at nunc purus ullamcorper massa.
              </p>
              <p className='blog-item-bottom-left-news-text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa ac fermentum, at nunc purus ullamcorper massa. Augue tincidunt pharetra sit tortor, pellentesque.Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa ac fermentum, at nunc purus ullamcorper massa. Augue tincidunt pharetra sit tortor, pellentesque.Lorem ipsum   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa ac fermentum, at nunc purus ullamcorper massa. Augue tincidunt pharetra sit tortor, pellentesque.Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa ac fermentum, at nunc purus ullamcorper massa.
              </p>
              <img src={BlogItemImg1} alt="" className='blog-item-bottom-left-news-topImg'/>
              <p className='blog-item-bottom-left-news-text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa ac fermentum, at nunc purus ullamcorper massa. Augue tincidunt pharetra sit tortor, pellentesque.Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa ac fermentum, at nunc purus ullamcorper massa. Augue tincidunt pharetra sit tortor, pellentesque.Lorem ipsum   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa ac fermentum, at nunc purus ullamcorper massa. Augue tincidunt pharetra sit tortor, pellentesque.Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa ac fermentum, at nunc purus ullamcorper massa.
              </p>
              <div className="blog-item-bottom-left-news-bottomImg">
                <img src={BlogItemImg2} alt="" />
                <img src={BlogItemImg3} alt="" />
              </div>
              <h2 className='blog-item-bottom-left-news-title'>Ստեղ ես չափի վերնագիր</h2>
              <p className='blog-item-bottom-left-news-text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa ac fermentum, at nunc purus ullamcorper massa. Augue tincidunt pharetra sit tortor, pellentesque.Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa ac fermentum, at nunc purus ullamcorper massa. Augue tincidunt pharetra sit tortor, pellentesque.Lorem ipsum   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa ac fermentum, at nunc purus ullamcorper massa. Augue tincidunt pharetra sit tortor, pellentesque.Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa ac fermentum, at nunc purus ullamcorper massa.
              </p>
            </div>

            <div className="blog-item-bottom-similarTopic">
              <h2 className='blog-item-bottom-similarTopic-title'>Նմանատիպ թեմայով</h2>
              <div className="blog-item-bottom-similarTopic-items">
                {CONFIG.blog_item_bottom_similarTopic.map(({id,img,text}) => {
                  return(
                      <div className="blog-item-bottom-similarTopic-items-item" key={id}>
                        <img src={img} alt="" />
                        <p>{text}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
          </Container>
        </div>
    </>
  )
}

export default BlogItem