import Link from 'next/link'
import React from 'react'
import { Container,Linked } from './styled'
import { IoPeopleOutline, IoPersonOutline,IoHomeOutline } from "react-icons/io5";

const Footer = () => {
  return (
 <Container>
  <Linked href={'/profile'}><IoPersonOutline/></Linked>
    
    <Linked href={'/contacts'}><IoPeopleOutline  /></Linked>

<Linked href={'/home'}><IoHomeOutline/></Linked>

 </Container>
  )
}

export default Footer