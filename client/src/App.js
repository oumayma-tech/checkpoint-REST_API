import {BrowserRouter as Router,Route } from 'react-router-dom'
import Home from './Components/Home/home'
import Contactlist from './Components/Home/contactlist/contactlist'
import Addcontact from './Components/Home/addcontact/addcontact'
import './App.css';
function App() {
  return (
    <Router>
    <div className="App">
    
      <Home/>
      <Route exact path='/' component={Contactlist}/>
       <Route path='(/addcontact|/editContact)' component={Addcontact}/>
    </div>
    </Router>
  );
}

export default App;
