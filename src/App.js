import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';


import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';

import Login from './Pages/Login/Login/Login';
import Authprovider from './contexs/Authprovider';
import Registration from './Pages/Login/Registration/Registration';
import ProvideRouter from './Pages/Login/ProvideRout/ProvideRouter';

import Doctor from './Pages/Department/Doctor/Doctor';
import DetailsItam from './Pages/DetailsItam/DetailsItam';





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
 

  <Route path='/login'>
  <Login></Login>
    </Route>


    <Route path='/department'>
    <Doctor></Doctor>
    </Route>


<ProvideRouter path='/detailsItam/:servisId'>
<DetailsItam></DetailsItam>
</ProvideRouter>

<Route path='/registration'>
<Registration></Registration>
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
