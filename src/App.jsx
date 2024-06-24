import './App.css'
import SearchForms from './components/SearchForms'
import Navbar from './components/Navbar'
function App() {

  return (
    <>
      <Navbar />
      <div className='Title'>
        <h1>Start your travel search Now!!</h1>
      </div>
      <SearchForms />
      <div className='hotel-search'>
        <p>Hotel Search</p>
      </div>
      <div className='shopping-search'>
        <p>Shopping Search</p>
      </div>
    </>
  )
}

export default App
