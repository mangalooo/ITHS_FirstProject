import './App.css';
import MyClass from './components/MyClass';
import AddUpdateDeleteToList from './components/AddUpdateDeleteToList';

{/*
import MyFunction from './components/MyFunction';
import MapFilterReduceFind from './components/MapFilterReduceFind';
import Destruct from './components/Destruct';
import TernaryOperator from './components/TernaryOperator';
import SpreadOperator from './components/SpreadOperator';
import MyClassComponent from './components/MyClassComponent';
import Event from './components/Event';
import ParentComponentUserList from './components/ParentComponentUserList';

import { sum } from './components/Modules';
*/}

function App() {

  return (
      <>
          <div>
              <MyClass />
              <AddUpdateDeleteToList />
              
              {/* 
                <MyFunction />
                <MapFilterReduceFind />
                <Destruct />
                <TernaryOperator /> 
                <SpreadOperator />
                <MyClassComponent />
                <ParentComponentUserList />
                <Event />
                <p>{ sum(5,3) }</p>
            */}

          </div>
      </>
  )
}

export default App
