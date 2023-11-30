import * as React from 'react'

import { User } from '../interfaces'

type ListDetailProps = {
  item: User
}

const ListDetail = ({ item: user }: ListDetailProps) => (
  <div className='mt-8'>
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">User Information</h2>

        <div className="mb-4">
            <span className="text-gray-600">ID: </span>
            <span className="font-semibold">{ user['id'] }</span>
        </div>

        <div className="mb-4">
            <span className="text-gray-600">Name: </span>
            <span className="font-semibold">{ user['name'] }</span>
        </div>

        <div className="mb-4">
            <span className="text-gray-600">Username: </span>
            <span className="font-semibold">{ user['username'] }</span>
        </div>

        <div className="mb-4">
            <span className="text-gray-600">Email: </span>
            <span className="font-semibold">{ user['email'] }</span>
        </div>

        <div className="mb-4">
            <span className="text-gray-600">Address: </span>
            <div className="ml-4">
                <div>{ user['address']['street'] }, { user['address']['suite'] }</div>
                <div>{ user['address']['city'] }, { user['address']['zipcode'] }</div>
                <div className="text-gray-600">Geo: ({ user['address']['geo']['lat'] }, { user['address']['geo']['lng'] })</div>
            </div>
        </div>

        <div className="mb-4">
            <span className="text-gray-600">Phone: </span>
            <span className="font-semibold">{ user['phone'] }</span>
        </div>

        <div className="mb-4">
            <span className="text-gray-600">Website: </span>
            <span className="font-semibold">{ user['website'] }</span>
        </div>

        <div className="mb-4">
            <span className="text-gray-600">Company: </span>
            <div className="ml-4">
                <div>{ user['company']['name'] }</div>
                <div className="italic text-gray-600">{ user['company']['catchPhrase'] }</div>
                <div className="text-gray-600">{ user['company']['bs'] }</div>
            </div>
        </div>
    </div>
  </div>
)

export default ListDetail
