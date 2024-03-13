import { useEffect } from 'react'
import './App.css'
import Home from './Component/Home'
import { Link ,Route ,Routes} from 'react-router-dom'
import Form from './Component/Form'
import Update from './Component/Update'


function App() {
  // useEffect(()=>{
  //   axios.get('')
  //   .then()
  // })


  return (

    <>
     
      <div className='Navbar'>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <li>Pages</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <Link to="/form"><button className='form'>Form</button></Link>
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
        <Route path='/update' element={<Update/>}></Route>
      </Routes>


      </div>


    </>
  )
}

export default App
