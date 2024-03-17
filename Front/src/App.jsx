import { useEffect } from 'react'
import './App.css'
import Home from './Component/Home'
import { Link ,Route ,Routes} from 'react-router-dom'
import Form from './Component/Form'
import Update from './Component/Update'
import Login from './Component/Login'


function App() {
  // useEffect(()=>{
  //   axios.get('')
  //   .then()
  // })
  
  const handleLogout = () => {
    document.cookie = `username=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;  
  }
  

  return (
    <>
      <div className='Navbar'>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <li>Pages</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <Link to="/form"><button className='form'>Form</button></Link>
          <Link to="/login"><button className='login'>LogIn</button></Link>
          <button className='log' onClick={handleLogout} classname='logout'>LogOut</button>
          
        </ul>
      </div>
      <div className='Search'>

        <form>
          <input type='text' placeholder='Search items' ></input>
        </form>

      </div>
      
      <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/form' element={<Form />}></Route>
        <Route path='/update/:id' element={<Update/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        
      </Routes>


      </div>


    </>
  )
}

export default App
