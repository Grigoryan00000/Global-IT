import { createSlice } from "@reduxjs/toolkit";
// import BlogImg1 from "../../assets/blog/blog-img1.png"
// import BlogImg2 from "../../assets/blog/blog-img2.png"
// import BlogImg3 from "../../assets/blog/blog-img3.png"
// import BlogImg4 from "../../assets/blog/blog-img4.png"
// import BlogImg5 from "../../assets/blog/blog-img5.png"


// const arr = []
// async function logMovies1() {
//     const response = await fetch("https://globalitacademy.am/GIAcademyApi/news/");
//     const movies = await response.json();
//     movies.forEach(element => {
//         arr.push(element)  
//         console.log(arr);
//     })
//   } 
// logMovies1()

// async function logMovies() {
//     const response1 = await fetch("https://globalitacademy.am/GIAcademyApi/news_info/");
//     const movies1 = await response1.json();
//     movies1.forEach(element => {
//         console.log(element);       
//     })
//   } 
// logMovies()



const initialState = {
    // blog: arr
}
const BlogSlice = createSlice({
    name: "blog",
    initialState,
    
})

export default BlogSlice.reducer;