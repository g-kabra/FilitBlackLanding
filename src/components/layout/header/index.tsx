import React from 'react'
import Button from '@/components/atoms/button'


const Header = () => {
  return (
    <nav className='sticky top-0 w-full flex justify-center py-5 z-10 backdrop-blur max-h-[10vh]'>
        <div className='bg-[#212121cc] rounded-full px-5 p-2 text-[#81859F] border border-[#FFFFFF1a] h-full flex gap-20'>
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