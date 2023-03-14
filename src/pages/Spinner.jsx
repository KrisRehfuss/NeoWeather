import React from 'react'
import spin from '../../public/giphy.gif'
import Image from 'next/image'


function Spinner() {
  return (
    <div className='relative '>
    <Image
    src={spin}
    layout='fill'
    object='cover'

    className='w-20 m-auto block'

    alt='#'
     />
      
    </div>
  )
}

export default Spinner