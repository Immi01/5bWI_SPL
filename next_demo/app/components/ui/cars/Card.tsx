import { Car } from '@/lib/types/types';
import React from 'react'

type Props = { car: Car};

export default function Card({car}: Props) {
  return (
    <div className='bg-green-100 border p-4'>
        <h2>{car.name}</h2>
        <div>{car.color}</div>
    </div>
  )
}