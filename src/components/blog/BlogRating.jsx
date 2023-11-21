import React from 'react'
import ReactStars from 'react-stars'

const BlogRating = () => {
    
    const thirdExample = {
        size: 20,
        count: 5,
        isHalf: false,
        value: 3,
        color: "blue",
        activeColor: "red",
        onChange: newValue => {
          console.log(`Example 3: new value is ${newValue}`);
        }
      };
  return (
    <div className='blog-rating'>
        <ReactStars {...thirdExample} />
    </div>
  )
}

export default BlogRating
 