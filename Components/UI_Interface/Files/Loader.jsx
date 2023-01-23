import React from 'react'
import circles from '../../Images/circles.gif'
export default function Loader() {
  return (
    <div className='flex justify-center items-center w-full py-2'>
        <Image width={50} height={50} src={circles.src} alt="" />

    </div>
  )
}
