import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <div className="bg-gray-100 font-sans flex items-center justify-center h-screen flex-col">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg text-gray-600 mb-8">
        Hi there! I'm the creator of this website. I use JSONPlaceholder to fetch data and display it on various pages.
      </p>
      <Link href="/" className="text-blue-500 hover:underline">
        Go back to Home
      </Link>
    </div>
  </Layout>
)

export default AboutPage
