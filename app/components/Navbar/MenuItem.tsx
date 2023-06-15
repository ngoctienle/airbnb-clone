'use client'

import { FC } from 'react'

interface IMenuItemProps {
  onClick: () => void
  label: string
}

const MenuItem: FC<IMenuItemProps> = ({ onClick, label }) => {
  return (
    <div className='px-4 py-3 font-semibold transition hover:bg-neutral-100' onClick={onClick}>
      {label}
    </div>
  )
}

export default MenuItem
