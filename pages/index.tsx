import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <div className="bg-gray-100 font-sans flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg text-gray-600 mb-8">Explore the amazing features we offer.</p>
        <Link href="/about" className="text-blue-600 hover:underline">Learn More</Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
