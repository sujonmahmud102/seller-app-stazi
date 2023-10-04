import { useNavigate } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/page/1')
  }, [])

  return (
    <div className='bg-base-200 min-h-screen'>
      <Home />
    </div>
  )
}

export default App
