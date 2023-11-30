import React, { ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className="bg-gray-100 p-8">
    <nav className="flex items-center space-x-4">
        <a href="/" className="text-blue-600 hover:underline">Home</a>
        <span className="text-gray-600">|</span>
        <a href="/about" className="text-blue-600 hover:underline">About</a>
        <span className="text-gray-600">|</span>
        <a href="/users" className="text-blue-600 hover:underline">Users List</a>
        <span className="text-gray-600">|</span>
        <a href="/api/users" className="text-blue-600 hover:underline">Users API</a>
    </nav>
    </header>
    {children}
  </div>
)

export default Layout
