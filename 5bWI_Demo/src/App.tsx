import './App.css'
import Card from './components/Card';

function App() {
  return (
    <div className='bg-yellow-400'>
      <h1 className='font-bold p-5 text-3xl bg-white'>HTL Dornbirn</h1>
      <div className="flex w-100% justify-around flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default App
