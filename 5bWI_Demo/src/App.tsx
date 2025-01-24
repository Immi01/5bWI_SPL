import { useEffect, useState } from 'react';
import './App.css'
import Card from './components/Card';

function App() {

  const [people, setPeople] = useState([]);

  type Person = {
    firstname: string;
    lastname: string;
    image:string;
    date:Date;
  }

  useEffect(() => {
    //fetch("http://localhost:8055/items/people").then(
    fetch("http://10.115.1.34:8055/items/people").then(
      (response) => {
        response.json().then((data: any) => {
          data.data.map((person:any)=>{
            if (person.date != null)
              person.date = new Date(person.date);
            else
              person.date = new Date;
          })
          setPeople(data.data);
        });
      }
    );
  }, []);

  /*const testPerson:Person[] = [
    {
      firstname: "Günter",
      lastname: "Mathis",
      image: "https://picsum.photos/300/150",
      date: new Date('December 17, 1995 03:24:00')
    },
    {
      firstname: "Hans",
      lastname: "Mathis",
      image: "https://picsum.photos/300/150",
      date: new Date('December 17, 2000 03:24:00')
    },
    {
      firstname: "Harald",
      lastname: "Gächter",
      image: "https://picsum.photos/300/150",
      date: new Date('November 27, 1965 13:24:00')
    },
    {
      firstname: "Jonas",
      lastname: "Korne",
      image: "https://picsum.photos/300/150",
      date: new Date('December 17, 2005 22:24:40')
    },
  ];*/

  return (
    <div className='bg-drab-dark-brown h-screen'>
      <h1 className='font-bold p-10 text-4xl text-right text-white'>HTL Dornbirn</h1>
      <div className="bg-drab-dark-brown grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 p-5 w-100% justify-around">
        {people.map((person:Person) => <Card {...person} />)}
        {/*testPerson.map((person:Person) => <Card {...person}/>)*/}

      </div>
    </div>
  )
}

export default App
