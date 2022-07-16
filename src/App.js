import { useState } from 'react'
import './App.css'
import AddCategory from './components/AddCategory'
import DisplayImages from './components/DisplayImages';

function App() {
  const [category, setCategory] = useState("");

  return (
    <div className="App">
      <AddCategory setCategory={setCategory} />
      <DisplayImages category={category} />
    </div>
  )
}

export default App