import React from 'react'
import Hero from './widgets/Hero'
import ScrollPosts from './widgets/ScrollPosts'
import ScrollCategories from './widgets/ScrollCategories'

const Home = () => {
  return (
    <div>
    <Hero />
    <ScrollPosts 
      text="Keep up with the "
      subtext="latest posts."
    />
    <ScrollCategories />
    </div>
    
  )
}

export default Home