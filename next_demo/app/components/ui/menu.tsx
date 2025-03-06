import React from 'react'

type Props = {}

export default function menu({}: Props) {
  return (
    <div>
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
        </ul>
    </div>
  )
}