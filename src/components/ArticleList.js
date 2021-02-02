import Article from "./Article.js"
function ArticleList({posts}){
    console.log(posts)

    const artArray = posts.map((post) => {
        return(
            <Article
            key = {post.id}
            title = {post.title}
            date = {post.date}
            preview = {post.preview}
            minutes = {post.minutes}
            />
            );
          });
          return <main>{artArray}</main>;
        }
   

    
   

export default ArticleList;