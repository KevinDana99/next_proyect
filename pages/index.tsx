import { useRouter } from 'next/router'
import React, { useEffect } from 'react'


const index = () => {

    const Router = useRouter();

    useEffect(() => {
        Router.push('/home')
    },[])
  return (
    <>Inicio</>
  )
}

export default index;