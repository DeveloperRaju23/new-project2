import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-[1300px] mx-auto w-full '>
        {children}
    </div>
  )
}

export default Container