import React, { useEffect, useState } from 'react'
import { login } from '@/service/api'

export default function Home() {
  const [Login, setLogin] = useState([])
  useEffect(() => {
    login().then((res) => {
      setLogin(res)
    })
  }, [])
  return <div>{Login}</div>
}
