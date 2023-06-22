import './globals.css'
import { Nunito } from 'next/font/google'

import ClientOnly from './components/ClientOnly'
import Navbar from './components/Navbar/Navbar'
import RegisterModal from './components/Modal/RegisterModal'
import RentModal from './components/Modal/RentModal'
import LoginModal from './components/Modal/LoginModal'
import ToasterProvider from './providers/ToasterProvider'

import getCurrentUser from './actions/getCurrentUser'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb: Vacation Rentals, Cabins, Beach Houses, Unique Homes & Experiences'
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser()
  return (
    <html lang='en'>
      <body className={nunito.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          <RentModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
