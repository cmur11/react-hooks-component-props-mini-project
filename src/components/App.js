import React from "react";
import blogData from "../data/blog";
import Header from "./Header.js"
import About from "./About.js"
import ArticleList from "./ArticleList.js"


// const header = blogData.name
// const image = blogData.image
// const about = blogData.about
//^^^ can do these in the function instead of duplicating work



console.log(blogData);
// console.log(image)
// console.log(about)
//  console.log(posts)

function App() {

  return (
    <div className="App">
      <Header  name = {blogData.name} />
      <About image = {blogData.image} about = {blogData.about}/>
      <ArticleList posts = {blogData.posts}/>
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div>
  );
}

export default App;
