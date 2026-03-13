import React from 'react'
import Present from './Present'

const Contain = () => {
    const user=[
        {id:1,name :"vishva",age:20},
        {id:2,name :"surya",age:21},
        {id:3,name :"arun",age:22}]
  return (
    <>
    <div >
        <h1>users</h1>
        <Present user={user} />
    </div>

    </>
  )
}

export default Contain
