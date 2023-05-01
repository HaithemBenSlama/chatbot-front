import React from 'react'

const LeftSection = () => {
  return (
    <div className='bg-gray-500 md:fixed md:inset-y-0 md:flex md: w-64 md:flex-col h-full'>
      <div className='flex h-full min-h-0 flex-col'>
        <div className='flex h-full w-full flex-1 items-start border-white/20'>
          <nav className='flex h-full flex-1 flex-col space-y-1 p-2'>
            <a className='flex p-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white text-sm flex-shrink-0 border border-white/20 cursor-pointer'>
              New Chat
            </a>
          </nav>
        </div>
      </div>

    </div>
  )
}

export default LeftSection