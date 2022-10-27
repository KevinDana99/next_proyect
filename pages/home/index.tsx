
import React from 'react'
import Navbar from '../../src/components/Footer';
import Post from '../../src/components/Post';
import {Container} from './styled';
const Home = () => {

  const datos = [1,2,3,4,5]
  return (
    <Container>
    {datos.map(() => {

return <Post   />


    })}    </Container>
  )
}

export default Home