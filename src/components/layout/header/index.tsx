import React from 'react'
import Button from '@/components/atoms/button'


const Header = () => {
  return (
    <nav className='sticky top-0 w-full flex justify-center z-10 md:backdrop-blur h-[10vh]'>
        <div className='bg-[#212121cc] rounded-full px-5 py-2 my-auto text-[#81859F] border border-[#FFFFFF1a] h-min flex gap-20'>
            <img src="/logos/navbar.svg" alt="" />
            <div className='flex items-center gap-10 max-md:hidden'>
                <p>About</p>
                <p>Team</p>
                <p>Blog</p>
                <p>Contact Us</p>
            </div>
            <Button variant="primary">Sign Up</Button>
        </div>
    </nav>
  )
}

export default Header