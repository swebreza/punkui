import React from 'react'
import Button from './components/element/button'
import Menu from './components/menu'
const Main = () => {
  return (
    <div>
      <div className='grid md:grid-cols-5 gap-4 grid-cols-1  justify-start divide-x  '>
        <div className='p-5'>
          <Menu />
        </div>
        <div className='p-10 col-span-4 '>
          <Button className='container ' />
        </div>
      </div>
    </div>
  )
}

export default Main
