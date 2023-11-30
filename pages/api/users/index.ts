import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const req = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await req.json()

    res.status(200).json(data)
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
