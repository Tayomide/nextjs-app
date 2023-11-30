import * as React from 'react'
import ListItem from './ListItem'
import { User } from '../interfaces'

type Props = {
  items: User[]
}

const List = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.id} className="pl-4 mb-1 cursor-pointer hover:bg-gray-200 transition duration-300 ease-in-out">
        <ListItem data={item} />
      </li>
    ))}
  </ul>
)

export default List
