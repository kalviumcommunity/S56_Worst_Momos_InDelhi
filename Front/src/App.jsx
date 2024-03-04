import './App.css'
import Home from './Component/Home'

function App() {
  

  return (
    <>
      <div className='Navbar'>
      <ul>
        <li>Home</li>
        <li>Pages</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
      </div>
      <div className='Search'>
        <form>
          <input type='text' placeholder='Search items' ></input>
        </form>
      </div>
      <Home/>
    </>
  )
}

export default App
