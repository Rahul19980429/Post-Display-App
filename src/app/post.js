import Head from 'next/head'
import Styles from './post.module.css'
import { useState, useEffect } from 'react'
export default function Home() {
  // data fetch api function
  const fetchPostData = async () => {
    let data = await fetch('https://fakestoreapi.com/products/')
    data = await data.json();
    setPost(data)
  }
  // useState
  const [post, setPost] = useState([])
  // useEffect hook
  useEffect(() => {
    fetchPostData() //fuhction api call for data
  }, [])

  return (

    <main className={Styles.main} >
      {/* NavBar */}
      <nav>
        <ul>
          <li>Home</li>
          <li>Search</li>
          <li>Posts</li>
          <li>Live</li>
          <li className={Styles.logout}>logout</li>
        </ul>
      </nav>
      <hr />
      <div className={Styles.postDiv}>
        {/* user Image section */}
        <User />

        {/* post data display */}
        <div className={Styles.ScrollDiv}>
          {/* map function  */}
          {post.map((data) => {
            return (
              <div className={Styles.mainBox} key={data.id}>
                <div className={Styles.div75}>
                  <h2 className={Styles.title}> {data.title.toUpperCase()}</h2>
                  <p className={Styles.description}>{data.description}</p>
                  <h1 className={Styles.price}>Price:{data.price}</h1>
                  <h2>{data.rating.rate}/5 Rating </h2>
                  <h5 className={Styles.rating}>{data.rating.count} rating by users</h5>
                </div>
                <div className={Styles.div25}>
                  <img src={data.image} className={Styles.imgSet} alt="image" width={100} />
                </div>
              </div>
            )
          })}
        </div>
        <div className={Styles.Div20}>
          <h4 className={Styles.CreatePost}>CREATE NEW POST</h4>
        </div>
      </div>
    </main>
  )
}



const User = () => {
  return (
    <div className={Styles.Div20}>
      <div className={Styles.userProfile}>
      </div>
      <h3>USER NAME</h3>
    </div>
  )
}



