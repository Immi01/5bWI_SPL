//import React from 'react';

type Props = {}

export default function Card({}: Props) {
    return (
        <div className="">
            <img src="https://picsum.photos/300/150" alt="placeholder" className="rounded-t-lg w-full"/>
            <div className="bg-white rounded-b-lg p-4">
                <h1 className="font-bold">Lorem ipsum dolor sit amet.</h1>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem nihil mollitia nobis vero nam architecto cupiditate fugit,
                doloremque est ullam adipisci dolores recusandae officiis. Dolorum ex veritatis est cum fugiat?
            </div>
        </div>
    )
}