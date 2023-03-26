import React from 'react'
import Button from './components/element/button'
import Menu from './components/menu'
const Main = () => {
  return (
    <div>
      <div className='grid md:grid-cols-5 sm:grid-cols-2 justify-start divide-x '>
        <div className='p-5'>
          <Menu />
        </div>
        <div className='p-10 row-span-3'>
          <Button />
        </div>
      </div>
    </div>
  )
}

export default Main
