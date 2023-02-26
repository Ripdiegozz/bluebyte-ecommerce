import React from 'react'

function UserMenu() {
  return (
    <div className='absolute top-[9vh] right-[8vw] min-[320px]:max-md:static'>        
        <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-800 dark:divide-gray-600  min-[320px]:max-md:mx-auto">
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div>Log in!</div>
          <div className="font-medium truncate">example@usemail</div>
        </div>
        <div className="py-2">
          <a href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Log in</a>
        </div>
        </div>
    </div>
  )
}

export default UserMenu




