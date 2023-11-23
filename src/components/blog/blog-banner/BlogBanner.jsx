import React from 'react'
import Container from '../../common/container/Container'
import "./BlogBanner.scss"

const BlogBanner = ({background, title, description}) => {
  return (
    <div className='blog-banner' 
    style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center" }}   
    >
        <Container>
            <div className="blog-banner-description">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </Container>
    </div>
  )
}

export default BlogBanner