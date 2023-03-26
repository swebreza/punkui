import React from 'react'

const Button = () => {
  return (
    <div>
      <div className=''>Button</div>
      <div className='p-4'> elements</div>
      <div>
        <div className='items-center  p-3 rounded box box-content'>
          <div className=' border-2 border-purple-600 w-max flex-1  rounded'>
            <label htmlFor=''>Simple Button</label>
            <div className=' '>
              <div className='p-2'>
                <button className='bg-slate-800 px-8 py-4 rounded'>
                  Button
                </button>
              </div>
            </div>
            <code className='bg-slate-600  p-4 block'>
              {`
        <div className='p-2'>
        <button className='bg-slate-800 px-8 py-4 rounded'>Button</button>
        </div>
        `}
            </code>
          </div>
          <div className='p-2'>
            <button className='bg-slate-500 px-8 py-4 rounded' disabled>
              Button
            </button>
          </div>
          <div className='p-2'>
            <button className='bg-slate-800  px-8 py-4 rounded-lg'>
              Button
            </button>
          </div>
          <div className='p-2'>
            <button className='bg-slate-500  px-8 py-4 rounded-lg' disabled>
              Button
            </button>
          </div>
          <div className='p-2'>
            <button className='bg-slate-800  px-8 py-4 rounded-full'>
              Button
            </button>
          </div>
          <div className='p-2'>
            <button className='bg-slate-500  px-8 py-4 rounded-full' disabled>
              Button
            </button>
          </div>
          <div className='p-2'>
            <button className='bg-slate-800  px-8 py-4 rounded-tl-3xl rounded-br-3xl'>
              Button
            </button>
          </div>
          <div className='p-2'>
            <button
              className='bg-slate-500  px-8 py-4 rounded-tl-3xl rounded-br-3xl'
              disabled
            >
              Button
            </button>
          </div>
          <div className='p-2'>
            <button className='bg-slate-800  px-8 py-4 rounded-tr-3xl rounded-bl-3xl'>
              Button
            </button>
          </div>
          <div className='p-2'>
            <button
              className='bg-slate-500  px-8 py-4 rounded-tr-3xl rounded-bl-3xl'
              disabled
            >
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Button
