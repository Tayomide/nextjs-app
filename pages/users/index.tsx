import { GetStaticProps } from 'next'
import Link from 'next/link'

import { User } from '../../interfaces'
import Layout from '../../components/Layout'
import List from '../../components/List'

type Props = {
  items: User[]
}

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Users List | Next.js + TypeScript Example">
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md mt-8">
      <h1 className="text-3xl font-bold mb-4">Users List</h1>

      <p className="mb-4">You are currently on: /users</p>
          <List items={items} />
          <p>
            <Link href="/" className='text-blue-600'>Go home</Link>
          </p>
    </div>

  </Layout>
)

export const getUserList = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()
  return users
}

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: User[] = await getUserList()
  return { props: { items } }
}

export default WithStaticProps
