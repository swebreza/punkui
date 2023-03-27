import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'
import jsonMap from '../code/button.json'

const Button = () => {
  return (
    <div className=''>
      <div className=''>Button</div>
      <div className='p-4'> elements</div>
      <div>
        <div className='items-center  p-3 rounded box box-content'>
          {jsonMap.map((button, index) => {
            return (
              <div key={index} className='  w-max flex-1  rounded'>
                <label htmlFor=''>{button.label}</label>
                <div className=' '>
                  <div className='p-2'>
                    <button className={` ${button.button}`}>Button</button>
                  </div>
                </div>

                <code className='bg-slate-600  p-4 block -z-50'>
                  <CopyBlock
                    language='jsx'
                    text={button.code
                      .toString()
                      .replace(/,/g, '\n')
                      .replace(/\s*,\s*/g, '')}
                    theme={dracula}
                    wrapLines={true}
                    codeBlock
                  />
                </code>
                <br />
              </div>
            )
          })}

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
