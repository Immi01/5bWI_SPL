//import React from 'react';

export default function Card(props: { image: string; name: string; description: string }) {
    return (
        <div className="">
            <img src={props.image} alt="placeholder" className="rounded-t-lg w-full"/>
            <div className="bg-white rounded-b-lg p-4">
                <h1 className="font-bold">{props.name}</h1>
                {props.description}
            </div>
        </div>
    )
}