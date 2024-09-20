

import './App.css'

import { MantineProvider,  } from '@mantine/core'
import '@mantine/core/styles.css';
import Dashboard from './dashboard/Dashboard.tsx'
import { Footer } from '../src/global/Footer.tsx';
import {Routes ,Route,} from 'react-router-dom';
import Home from './Home/index.tsx';
import { Header } from './global/Header.tsx';

import Billing from './scene/Billing/index.tsx';
import Error_404 from './global/Error404.tsx';
import Customers from './scene/Customer/index.tsx';
import Logout from './scene/Logout/index.tsx';
import Package from './scene/Package/index.tsx';
import Products from './scene/Product/index.tsx';
import Subscription from './scene/Subscription/index.tsx';
import Login  from './scene/Login/index.tsx';
import Signup from './scene/Signup/index.tsx';


function App() {

  return (
    <MantineProvider>
      <Header />
      <Routes>
      
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/package" element={<Package />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/error404" element={<Error_404 />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </MantineProvider>
  );
}

export default App
