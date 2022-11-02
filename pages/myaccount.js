import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

function Myaccount() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/")
    }
  }, [router.query])
  
  return (
    <div>nicee</div>
  )
}

export default Myaccount