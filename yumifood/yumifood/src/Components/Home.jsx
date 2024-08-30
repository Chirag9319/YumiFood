import React from 'react'
import Thumb from './Thumb'
import Foodslider from './Foodslider'
import Deli from './Deli'

const Home = ({handleAdd}) => {

  return (
    <>
      <Thumb/>
      <Deli/>
      <Foodslider handleAdd={handleAdd} />
    </>
  )
}

export default Home
