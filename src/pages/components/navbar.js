import React, { useState } from 'react'
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
    <>
      <nav className='relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-800 mb-3 font-cursive'>
        <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <a
              className='text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white'
              href=' '
            >
              LOGO
            </a>
            <button
              className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className='fas fa-bars'>☰</i>
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id='example-navbar-danger'
          >
            <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
              <li className='nav-item'>
                <a
                  className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                  href=' '
                >
                  <i className='fab fa-facebook-square text-lg leading-lg text-white opacity-75'></i>
                  <span className='ml-2'>Home</span>
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                  href=' '
                >
                  <i className='fab fa-twitter text-lg leading-lg text-white opacity-75'></i>
                  <span className='ml-2'>Component</span>
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                  href=' '
                >
                  <i className='fab fa-pinterest text-lg leading-lg text-white opacity-75'></i>
                  <span className='ml-2'>search</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

// <div className='h-16 font-cursive fixed flex flex-1'>
//   <div className='drawer'>
//     <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
//     <div className='drawer-content flex flex-col h-fit'>
//       <div className='w-full navbar bg-base-300'>
//         <div className='flex-none lg:hidden'>
//           <label htmlFor='my-drawer-3' className='btn btn-square btn-ghost'>
//             <svg
//               xmlns='http://www.w3.org/2000/svg'
//               fill='none'
//               viewBox='0 0 24 24'
//               className='inline-block w-6 h-6 stroke-current'
//             >
//               <path
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 strokeWidth='2'
//                 d='M4 6h16M4 12h16M4 18h16'
//               ></path>
//             </svg>
//           </label>
//         </div>
//         <div className='flex-1 px-2 mx-2'>PunkUI</div>
//         <div className='flex-none hidden lg:block'>
//           <ul className='menu menu-horizontal'>
//             <li>
//               <a>Home</a>
//             </li>
//             <li>
//               <a>About</a>
//             </li>
//             <li>
//               <div className='relative'>
//                 <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
//                   <svg
//                     xmlns='http://www.w3.org/2000/svg'
//                     fill='none'
//                     viewBox='0 0 24 24'
//                     strokeWidth='1.5'
//                     stroke='currentColor'
//                     className='w-4 h-4 text-gray-500'
//                   >
//                     <path
//                       strokeLinecap='round'
//                       strokeLinejoin='round'
//                       d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
//                     />
//                   </svg>
//                 </span>
//                 <input
//                   type='text'
//                   className='py-2 pl-10 pr-4 text-sm text-gray-700 bg-gray-100 dark:bg-gray-800 rounded-md focus:outline-none focus:bg-white focus:text-gray-900'
//                   placeholder='Search'
//                 />
//               </div>
//             </li>
//             <li>
//               <div className='hidden lg:block'>
//                 <svg
//                   width={24}
//                   height={24}
//                   fill='currentColor'
//                   viewBox='3 3 18 18'
//                 >
//                   <title>GitHub</title>
//                   <path d='M12 3C7.0275 3 3 7.12937 3 12.2276C3 16.3109 5.57625 19.7597 9.15374 20.9824C9.60374 21.0631 9.77249 20.7863 9.77249 20.5441C9.77249 20.3249 9.76125 19.5982 9.76125 18.8254C7.5 19.2522 6.915 18.2602 6.735 17.7412C6.63375 17.4759 6.19499 16.6569 5.8125 16.4378C5.4975 16.2647 5.0475 15.838 5.80124 15.8264C6.51 15.8149 7.01625 16.4954 7.18499 16.7723C7.99499 18.1679 9.28875 17.7758 9.80625 17.5335C9.885 16.9337 10.1212 16.53 10.38 16.2993C8.3775 16.0687 6.285 15.2728 6.285 11.7432C6.285 10.7397 6.63375 9.9092 7.20749 9.26326C7.1175 9.03257 6.8025 8.08674 7.2975 6.81794C7.2975 6.81794 8.05125 6.57571 9.77249 7.76377C10.4925 7.55615 11.2575 7.45234 12.0225 7.45234C12.7875 7.45234 13.5525 7.55615 14.2725 7.76377C15.9937 6.56418 16.7475 6.81794 16.7475 6.81794C17.2424 8.08674 16.9275 9.03257 16.8375 9.26326C17.4113 9.9092 17.76 10.7281 17.76 11.7432C17.76 15.2843 15.6563 16.0687 13.6537 16.2993C13.98 16.5877 14.2613 17.1414 14.2613 18.0065C14.2613 19.2407 14.25 20.2326 14.25 20.5441C14.25 20.7863 14.4188 21.0746 14.8688 20.9824C16.6554 20.364 18.2079 19.1866 19.3078 17.6162C20.4077 16.0457 20.9995 14.1611 21 12.2276C21 7.12937 16.9725 3 12 3Z' />
//                 </svg>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//     <div className='drawer-side '>
//       <label htmlFor='my-drawer-3' className='drawer-overlay'></label>
//       <ul className='menu p-4 w-80 bg-base-100'>
//         <li>
//           <a>Sidebar Item 1</a>
//         </li>
//         <li>
//           <a>Sidebar Item 2</a>
//         </li>
//         <li>
//           <div className='relative '>
//             <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
//               <svg
//                 xmlns='http://www.w3.org/2000/svg'
//                 fill='none'
//                 viewBox='0 0 24 24'
//                 strokeWidth='1.5'
//                 stroke='currentColor'
//                 className='w-4 h-4 text-gray-500'
//               >
//                 <path
//                   strokeLinecap='round'
//                   strokeLinejoin='round'
//                   d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
//                 />
//               </svg>
//             </span>
//             <input
//               type='text'
//               className='py-2 pl-10 pr-4 text-sm text-gray-700 bg-gray-100 dark:bg-gray-800 rounded-md focus:outline-none focus:bg-white focus:text-gray-900'
//               placeholder='Search'
//             />
//           </div>
//         </li>
//         <li>
//           <div className='hidden lg:block'>
//             <svg
//               width={24}
//               height={24}
//               fill='currentColor'
//               viewBox='3 3 18 18'
//             >
//               <title>GitHub</title>
//               <path d='M12 3C7.0275 3 3 7.12937 3 12.2276C3 16.3109 5.57625 19.7597 9.15374 20.9824C9.60374 21.0631 9.77249 20.7863 9.77249 20.5441C9.77249 20.3249 9.76125 19.5982 9.76125 18.8254C7.5 19.2522 6.915 18.2602 6.735 17.7412C6.63375 17.4759 6.19499 16.6569 5.8125 16.4378C5.4975 16.2647 5.0475 15.838 5.80124 15.8264C6.51 15.8149 7.01625 16.4954 7.18499 16.7723C7.99499 18.1679 9.28875 17.7758 9.80625 17.5335C9.885 16.9337 10.1212 16.53 10.38 16.2993C8.3775 16.0687 6.285 15.2728 6.285 11.7432C6.285 10.7397 6.63375 9.9092 7.20749 9.26326C7.1175 9.03257 6.8025 8.08674 7.2975 6.81794C7.2975 6.81794 8.05125 6.57571 9.77249 7.76377C10.4925 7.55615 11.2575 7.45234 12.0225 7.45234C12.7875 7.45234 13.5525 7.55615 14.2725 7.76377C15.9937 6.56418 16.7475 6.81794 16.7475 6.81794C17.2424 8.08674 16.9275 9.03257 16.8375 9.26326C17.4113 9.9092 17.76 10.7281 17.76 11.7432C17.76 15.2843 15.6563 16.0687 13.6537 16.2993C13.98 16.5877 14.2613 17.1414 14.2613 18.0065C14.2613 19.2407 14.25 20.2326 14.25 20.5441C14.25 20.7863 14.4188 21.0746 14.8688 20.9824C16.6554 20.364 18.2079 19.1866 19.3078 17.6162C20.4077 16.0457 20.9995 14.1611 21 12.2276C21 7.12937 16.9725 3 12 3Z' />
//             </svg>
//           </div>
//         </li>
//       </ul>
//     </div>
//   </div>
// </div>
