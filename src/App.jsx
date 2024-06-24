import './App.css'
import SearchForms from './components/SearchForms'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <Navbar />
      <div className='app-intro'>
        <h1 className='app-h1'>Start your travel search Now!!</h1>
      </div>
      <SearchForms />
      <Footer />
    </>
  )
}

export default App
