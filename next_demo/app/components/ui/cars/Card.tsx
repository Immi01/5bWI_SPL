import { Car } from '@/lib/types/types';
import React from 'react'

type Props = { car: Car};

export default function Card({car}: Props) {
  return (
    <div className='bg-green-100 border p-4'>Card:{car.name}</div>
  )
}