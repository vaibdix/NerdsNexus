import React from 'react'

const Spinner = () => {
  return (
    // <div className='w-full flex flex-col items-center justify-center'>
    //     <div className='w-10 h-10 bg-orange-600 animate-ping rounded-full flex items-center justify-center relative'>
    //         <div className='absolute inset-0 rounded-full bg-orange-600 blur-xl'></div>
    //     </div>
    // </div>
    <div class="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
  )
}

export default Spinner