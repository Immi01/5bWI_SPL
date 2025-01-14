import './App.css'
import Card from './components/Card';

function App() {
  let filler:string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aut alias necessitatibus exercitationem at veritatis.";
  return (
    <div className='bg-drab-dark-brown h-screen'>
      <h1 className='font-bold p-10 text-4xl text-right text-white'>HTL Dornbirn</h1>
      <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 m-5 w-100% justify-around">
        <Card image="https://picsum.photos/300/150" name='Günter' description={'Hier ist der Günter '+filler}/>
        <Card image="https://picsum.photos/300/150" name='Hans' description={'Hier ist der Hans '+filler}/>
        <Card image="https://picsum.photos/300/150" name='Harald' description={'Hier ist der Harald '+filler}/>
        <Card image="https://picsum.photos/300/150" name='Jonas' description={'Hier ist der Jonas '+filler}/>
      </div>
    </div>
  )
}

export default App
