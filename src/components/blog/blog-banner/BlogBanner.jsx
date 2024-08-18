import React from 'react'
import Container from '../../common/container/Container'
import "./BlogBanner.scss"

const BlogBanner = ({blogData, id, blogItemData}) => {

  return (
    <div className='blog-banner'>
        {blogData.map(item => {
          if(id == item.id){
            return (
              <div className='blog-banner-description' >
                <Container>
                  {/* {blogItemData.map(item => {
                    if(id == item.id){
                      return(
                        <div className="blog-banner-description-text">
                          <h3>{item.news_name_hy}</h3>
                          <p>{item.news_text_hy}</p>
                        </div>
                      )
                    }
                  })} */}
                  <div className="blog-banner-description-text">
                    <h3>{item.news_name_hy}</h3>
                    <p>{item.news_text_hy}</p>
                  </div>
                </Container>
                <div className="blog-banner-description-img">
                  <div className='box'></div>
                  <img src={item.news_img} alt="" />
                </div>
              </div>
            )
          }else{
          return ""
          }
        })}
    
    </div>
  )
}

export default BlogBanner