'use client'

import Image from 'next/image'

interface IAvatarProps {
  src: string | null | undefined
}

const Avatar: React.FC<IAvatarProps> = ({ src }) => {
  return (
    <Image
      src={src || '/images/placeholder.jpg'}
      className='rounded-full'
      height={30}
      width={30}
      alt='Avatar'
    />
  )
}

export default Avatar
