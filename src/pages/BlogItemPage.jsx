import React from 'react'
import Layout from '../layout/Layout'
import BlogItem from '../components/blog/blog-item/BlogItem'

const BlogItemPage = ({show, setShow}) => {
  // console.log(show);
  return (
    <>
        <Layout>
            <BlogItem show={show} setShow={setShow}/>
        </Layout>
    </>
  )
}

export default BlogItemPage