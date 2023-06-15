'use client'

import { useEffect, useState, FC } from 'react'

interface IClientOnlyProps {
  children: React.ReactNode
}

const ClientOnly: FC<IClientOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return <>{children}</>
}

export default ClientOnly
