import Link from 'next/link'
import React from 'react'
import { Container } from './styled'

const Navbar = () => {
  return (
 <Container>
    
    <Link href={'/contacts'}>Contacts</Link>
<Link href={'/about'}>About</Link>
<Link href={'/profile'}>contacts</Link>
<Link href={'/home'}>home</Link>

 </Container>
  )
}

export default Navbar