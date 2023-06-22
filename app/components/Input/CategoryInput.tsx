'use client'

import { IconType } from 'react-icons'

interface ICategoryInputProps {
  icon: IconType
  label: string
  selected?: boolean
  onClick: (value: string) => void
}

const CategoryInput: React.FC<ICategoryInputProps> = ({ icon: Icon, label, selected, onClick }) => {
  return (
    <div
      className={`
        flex cursor-pointer flex-col gap-3 rounded-xl border-2 p-4 transition hover:border-black
        ${selected ? 'border-black' : 'border-neutral-300'}
      `}
      onClick={() => onClick(label)}
    >
      <Icon size={30} />
      <div className='font-semibold'>{label}</div>
    </div>
  )
}

export default CategoryInput
