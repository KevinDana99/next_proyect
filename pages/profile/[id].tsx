import { useRouter } from 'next/router'
import React, { useState } from 'react'

const id_profile = () => {
    const router = useRouter();
  return (
    <div>{router.query?.id}</div>
  )
}

export default id_profile