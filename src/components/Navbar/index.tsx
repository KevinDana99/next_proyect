import Link from 'next/link'
import React from 'react'
import { Container,Linked } from './styled'
import { IoPeopleOutline, IoPersonOutline,IoHomeOutline, IoArrowBack } from "react-icons/io5";
import { useRouter } from 'next/router';
import Image from 'next/image';

const Nabvar = () => {
  const router = useRouter();
  return (
 <Container>


{router.pathname != '/home' ? <Linked onClick={router.back}><IoArrowBack/></Linked> : <Image src={'/assets/logo.png'} alt='' width={70} height={33}/>}

 </Container>
  )
}

export default Nabvar