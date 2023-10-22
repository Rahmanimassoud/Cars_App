import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import AddCar from './pages/AddCar/AddCar'
import ShowCars from './pages/ShowCars/ShowCars'
import ShowOneCar from './pages/OneCar/ShowOneCar'


function App() {


  return (
    <>
      <h1>Welcome, Create Cars</h1>
            <nav>
          <button>
            <Link to="/">
            Home
            </Link>
          </button>
          <button>
            <Link to="/cars/create">
              Create A Car
            </Link>
          </button>
          <button>
            <Link to="/cars">
              Show Cars
            </Link>
          </button>
    </nav>
    
    <Routes>
      <Route path='/cars/create' element={<AddCar/>}/>
      <Route path='/cars' element={<ShowCars/>}/>
      <Route path='/oneCar/:id' element={<ShowOneCar/>} />
    </Routes>

    </>
  )
}

export default App
