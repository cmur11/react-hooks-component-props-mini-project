function About({ image = "https://via.placeholder.com/215", about }){
    // image = "https://via.placeholder.com/215"
//check solution for placeholder
    // console.log(about)
    return(<aside>
        <img src = {image} alt = "blog logo"/>
        <p>{about}</p>
    </aside>)
}

export default About;