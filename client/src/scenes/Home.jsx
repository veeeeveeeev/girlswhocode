import React from 'react'
import Hero from './widgets/Hero'
import ScrollPosts from './widgets/ScrollPosts'
import ScrollCategories from './widgets/ScrollCategories'
import { useEffect } from "react";


const Home = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

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