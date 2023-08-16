import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Filit Bharat',
  description: 'Making a financially literate Bharat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + ' overflow-x-hidden w-screen'}>
        <ToastContainer theme='dark'/>
        {children}
      </body>
    </html>
  )
}
