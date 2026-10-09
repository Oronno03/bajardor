import React from 'react'
import Navlogo from './Navlogo'
import Navauth from './Navauth'

const Navtop = () => {
  return (
    <div className='flex px-4 py-3 justify-between items-center'>
        <Navlogo />
        <Navauth />
    </div>
  )
}

export default Navtop