import './App.css';
import FnComponent from './components/FunctionalComponent';
import ClsComponent from './components/ClassComponent';
import NstComponent from './components/NestedComponent';
import StateComponent  from './components/stateComponent';
import ParentComponent from './components/ParentComponent';
import ComponentA from './components/ComponentA';
import { AgeProvider, ValueProvider } from './userContext';
import HookFunctional from './components/HookFunctional ';
import ComponentC from './components/ComponentC';
import {
  BrowserRouter as Router,
  Route,
  Link, 
  Switch} from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
function App() {
  return (
    <Router>
    <div className="App">
      {/*<FnComponent/>*/}
      {/* <ClsComponent clsProps = "This is a prop passed for a class component"/>
      <ClsComponent><p>Children props of a class component.</p></ClsComponent>
      
      <NstComponent name="Deepak" age="20" >
        <p> .......Childeren props...........</p>
      </NstComponent>
      <StateComponent/>
      <ParentComponent/>
      
      
      <ValueProvider value= "'Deepak Vijayakumar'">
        <ComponentA/>
      </ValueProvider>
      
      <HookFunctional/>

      <AgeProvider value="21">
        <ComponentA/>
      </AgeProvider>  */}

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Ddashboard</Link>
        </li>
      </ul>
      <Switch>
      <Route exact path='/' component={Home}/>
      
      <Route exact path='/dashboard' component={Dashboard}/>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
