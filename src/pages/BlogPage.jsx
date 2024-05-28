import Blog from '../components/blog/Blog'
import Layout from '../layout/Layout'

const BlogPage = ({show, setShow}) => {
  console.log(show);
  return (
    <>
      <Layout>
        <Blog show={show} setShow={setShow}/>
      </Layout>
    </>
  )
}

export default BlogPage