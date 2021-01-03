
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/HomePage/Home';
import Service from './components/pages/Services/Services'
import Products from './components/pages/Products/Products'
import SignUp from './components/pages/SignUp/SignUp'
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} /> 
        <Route path='/service' component={Service} /> 
        <Route path='/products' component={Products} /> 
        <Route path='/signup' component={SignUp} /> 
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
