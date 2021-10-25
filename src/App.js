import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';


import NotFound from './Pages/NotFound/NotFound';
import Service from './Pages/Service/Service';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Doctors from './Pages/Department/Doctors/Doctors';



function App() {
  return (
    <div className="App">
      
<Router>
  <Header></Header>
<Switch>
  
  <Route path='/home'>
    <Home></Home>
  </Route>


<Route path='/Department'>
<Doctors></Doctors>

</Route>




<Route path='/service/:serviceId'>
<Service></Service>
</Route>

<Route exact path="*">
  <NotFound></NotFound>
</Route>
</Switch>
<Footer></Footer>
</Router>


    </div>
  );
}

export default App;
