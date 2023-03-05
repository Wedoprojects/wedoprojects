import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { CgCloseR } from 'react-icons/cg'

function DashBoard() {

  const [showMenu, setShowMenu] = useState(false)

  const handleMenu = () => {
    setShowMenu(!showMenu)
  }


  return (
    <div className='w-full border sticky top-0 z-50 bg-[#fdfdfd]'>
    <div className='justify-between sm:hidden  flex bg-[#fdfdfd] sticky top-0 text-black mx-auto max-w-[350px] sm:max-w-[600px] md:max-w-[950px] lg:max-w-[1150px] h-16 items-center '>
        <h2 className='text-[16px] md:text-[30px] font-bold'>Wedoprojects</h2>
      <div className='float-left' onClick={handleMenu}>
        { showMenu ? <CgCloseR  /> : <AiOutlineMenu />}
        <div className={showMenu ? 'fixed left-0 top-0 h-full w-[84%] bg-white text-[14px] sm:text-[18px] pt-8 px-4 sm:flex mx-auto font-semibold' : 'fixed left-[-150px]'} >
        <h2 className='text-[16px] sm:text-[30px] font-bold'><a href='#home'>Wedoprojects</a></h2>
        <ul className='pt-5'>
        <li className="p-1"><a href='#about'>About</a></li>
            <li className="p-1"><a href='#offer'>What we offer</a></li>
            <li className="p-1"><a href='#contact'>Contact</a></li>
            <button className='py-2 text-[10px] sm:text-[20px] rounded-md text-white bg-purple-500 p-[4px] px-[10px] sm:h-12 sm:w-[140px] mx-1'><a href='http://wa.me/2348149249926' target="_blank">Get started</a></button>
        </ul>
      </div>
      </div>
      
    </div>

        <div className='hidden sm:flex z-50 bg-[#fdfdfd] sticky top-0 text-black mx-auto max-w-[320px] sm:max-w-[600px] md:max-w-[950px] lg:max-w-[1150px] w-full h-20 items-center '>
        <h2 className='text-[16px] sm:text-[30px] font-bold'><a href='#home'>Wedoprojects</a></h2>
        <ul className='text-[14px] sm:text-[14px] sm:flex mx-auto font-semibold'>
            <li className="p-1 mx-2"><a href='#about'>About</a></li>
            <li className="p-1 mx-2"><a href='#offer'>What we offer</a></li>
            <li className="p-1 mx-2"><a href='#contact'>Contact</a></li>
        </ul>
        <button className=' text-[13px] sm:text-[14px] font-semibold rounded-md text-white bg-purple-500 p-1 px-2 sm:h-12 sm:w-[135px] '><a href='http://wa.me/2348149249926' target="_blank">Get started</a></button>
        </div>
    </div>
  )
}

export default DashBoard
