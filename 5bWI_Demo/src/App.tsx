import './App.css'
import Card from './components/Card';

function App() {
  return (
    <div className='bg-drab-dark-brown h-screen'>
      <h1 className='font-bold p-10 text-4xl text-right text-white'>HTL Dornbirn</h1>
      <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 m-5 w-100% justify-around">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default App
