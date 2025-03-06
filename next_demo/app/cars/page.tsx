import React from 'react'
import Card from '../components/ui/cars/Card';
import { Car } from '@/lib/types/types';

type Props = {};

const cars: Car[] = [{
  "name":"Supercar",
  "type":"BMW X3",
  "color":"green",
  "motor":{
    "serialNumber":1234,
    "hp":200
  }
},
{
  "name":"Shitbox",
  "type":"BMW 3",
  "color":"browne",
  "motor":{
    "serialNumber":4321,
    "hp":80
  }
},
{
  "name":"Hypercar",
  "type":"Königsegg Jesko",
  "color":"grey",
  "motor":{
    "serialNumber":89234,
    "hp":1200
  }
},
{
  "name":"Eco Car (bad)",
  "type":"Audi A3",
  "color":"white",
  "motor":{
    "serialNumber":30845,
    "hp":50
  }
},
{
  "name":"Best Car",
  "type":"miat",
  "color":"red",
  "motor":{
    "serialNumber":42069,
    "hp":9999
  }
}
];

export default function page({}: Props) {
  return (
    <div>
      <h1>Cars</h1>
      {cars.map((car) => <Card car={car}/>)}
    </div>
  )
}
