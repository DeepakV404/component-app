import './App.css';
import FnComponent from './components/FunctionalComponent';
import ClsComponent from './components/ClassComponent';
import NstComponent from './components/NestedComponent';
import StateComponent  from './components/stateComponent';
import ParentComponent from './components/ParentComponent';
import ComponentA from './ComponentA';
import { ValueProvider } from './userContext';
function App() {
  return (
    <div className="App">
      {/*<FnComponent/>*/}
      <ClsComponent clsProps = "This is a prop passed from a class component"/>
      <ClsComponent><p>Children props of a class component.</p></ClsComponent>
      
      <NstComponent name="Deepak" age="20" >
        <p> .......Childeren props...........</p>
      </NstComponent>
      <StateComponent/>
      <ParentComponent/>
      
      
      <ValueProvider value= "'Deepak Vijayakumar'">
        <ComponentA/>
      </ValueProvider>
      
    </div>
  );
}

export default App;
