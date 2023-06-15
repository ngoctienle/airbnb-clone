'use client'

import { FC } from 'react'

interface IContainerProps {
  children: React.ReactNode
}

const Container: FC<IContainerProps> = ({ children }) => {
  return <div className='mx-auto max-w-[2520px] px-4 sm:px-2 md:px-10 xl:px-20'>{children}</div>
}

export default Container
