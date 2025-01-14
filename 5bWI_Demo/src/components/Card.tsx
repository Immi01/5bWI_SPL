//import React from 'react';

type Person = {
  firstname: string;
  lastname: string;
  image:string;
  date:Date;
}

export default function Card(person: Person) {
    return (
        <div className="">
            <img src={"http://localhost:8055/assets/" + person.image + "?width=300&height=150"} alt="placeholder" className="rounded-t-lg w-full"/>
            <div className="bg-white rounded-b-lg p-4">
                <h1 className="font-bold">{person.firstname}</h1>
                This is {person.firstname} {person.lastname} born on {person.date.getFullYear()} and his Card.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia architecto asperiores commodi ullam nostrum excepturi?
            </div>
        </div>
    )
}