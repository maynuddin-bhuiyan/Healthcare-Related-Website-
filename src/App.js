import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';


import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Doctors from './Pages/Department/Doctors/Doctors';
import Login from './Pages/Login/Login/Login';
import Authprovider from './contexs/Authprovider';



function App() {
  return (
    <div className="App">
      
<Authprovider>
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
<Login></Login>
</Route>

<Route exact path="*">
  <NotFound></NotFound>
</Route>
</Switch>
<Footer></Footer>
</Router>

</Authprovider>


    </div>
  );
}

export default App;
