import React from 'react'
import './home.css'
import hero_image from '../../assets/hero_image.png'
const Home = () => {
  return (
    <header id='home'>
      <div className="fake-nav"></div>
      <div class="main">
            <div class="content">
                <p id="heading">Hello,<br/>I am Anay!</p>
                <p id="tagline">A visual Storyteller</p>
            </div>
            <div className="wave">
              <div className="empty-wave"></div>
            <div class="wave-sticker"><img src={hero_image} alt="Hii"/></div>
            </div>
        </div>
    </header>
  )
}

export default Home
  