import React from 'react'
import Container from '../../common/container/Container'
import "./BlogBanner.scss"

const BlogBanner = ({blogData, show}) => {
  // console.log(show);
  return (
    <div className='blog-banner' 

    // style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center" }}   
    >
      
      {blogData.map(({news_img}) => {
        if(show){
          return(
             <img src={news_img} alt="" />
          )
        }else{
          return ""
        }
      })}
        {/* <Container>
            <div className="blog-banner-description">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </Container> */}
    </div>
  )
}

export default BlogBanner