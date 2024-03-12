import Form from './components/Form';
import List from './components/List';
import NavBar from './components/NavBar';
import {Routes, Route} from 'react-router-dom'
import { useEffect } from 'react';
import appAPI from './utils/API/appAPI';
import './App.css';

const App = () => {

  useEffect(()=>{
    appAPI.getAllContacts()
  }, [])


  return (
    <div className = 'main'>
      <Routes>
        <Route element={<NavBar/>}>
          <Route path='/' element={<List/>}/>
          <Route path='/add' element={<Form/>}/>
        </Route>
      </Routes>
    </div>
  )
}
export default App;
