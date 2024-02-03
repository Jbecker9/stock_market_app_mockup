import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3000/hello')
    .then((r)=>r.json())
    .then((data) => setCount(data.count))
  }, []);

  return (
    <div>
      <h1> Page Count: {count} </h1>
    </div>
  );
}

export default App
