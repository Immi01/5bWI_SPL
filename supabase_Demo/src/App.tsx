import Form from "./components/Form";
import List from "./components/List"

function App() {

  return (
    <div className="flex justify-center h-screen bg-neutral-800">
      <div className="flex-col mt-10 w-2/3 md:w-1/2 lg:w-1/3">
        <h1 className="text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-b from-blue-700 to-blue-500">Homework</h1>
        <div className="bg-neutral-900 rounded-xl mt-6">
          <List/>
        </div>
        <div className="mt-5">
          <Form/>
        </div>
      </div>
    </div>
  );
}

export default App;