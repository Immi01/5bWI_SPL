//import React from 'react';

type Props = {}

export default function Card({}: Props) {
    return (
        <div className="m-5">
            <img src="https://picsum.photos/300/150" alt="placeholder" className="rounded-t-lg"/>
            <div className="w-[300px] bg-yellow-500 rounded-b-lg p-2">
                <h1 className="font-bold">Lorem ipsum dolor sit amet.</h1>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem nihil mollitia nobis vero nam architecto cupiditate fugit,
                doloremque est ullam adipisci dolores recusandae officiis. Dolorum ex veritatis est cum fugiat?
            </div>
        </div>
    )
}