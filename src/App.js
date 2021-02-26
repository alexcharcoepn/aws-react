import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom'
import './App.css'
import Home from './components/pages/HomePage/Home'
import Footer from './components/pages/Footer/Footer'
import Pricing from './components/Pricing'
import Services from './components/pages/Services/Services'
import Products from './components/pages/Products/Products'



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>



        <Switch>
          <Route path="/services" exact component={Services}/>
          <Route path="/pricing" exact component={Pricing}/>
          <Route path="/products" exact component={Products}/>
          <Route path="/" exact component={Home}/>
        </Switch>

        

        <Footer/>

      </Router>

      
      
    </div>
  );
}

export default App;
