

import './App.css'

import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';
import Dashboard from './dashboard/Dashboard.tsx'
import { Footer } from '../src/global/Footer.tsx';
import { Routes ,Route} from 'react-router-dom';
import Home from './Home/index.tsx';
import { Header } from './global/Header.tsx';

import Billing from './scene/Billing/index.tsx';
import Error_404 from './global/Error404.tsx';


function App() {


  return (
    <MantineProvider>
     <Header/>
      <Routes>
        
        <Route path='/dashboard' element={<Dashboard/>}/> 
        <Route path="/home" element={<Home/>}/> 
        <Route path='/billing' element={<Billing/>}/>  
         <Route path='/billing' element={<Billing/>}/>  
         <Route path='/billing' element={<Billing/>}/>
         <Route path='/billing' element={<Billing/>}/>
         <Route path='/billing' element={<Billing/>}/>
         <Route path='/billing' element={<Billing/>}/>
         <Route path='/Error404' element={<Error_404/>}/>
      </Routes>
      

    <Footer/>
    </MantineProvider>
  )
}

export default App
