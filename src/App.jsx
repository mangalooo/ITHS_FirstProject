import './App.css';
import MyClass from './components/MyClass';
import ParentComponentUserList from './components/ParentComponentUserList';
{/*
import MyFunction from './components/MyFunction';
import MapFilterReduceFind from './components/MapFilterReduceFind';
import Destruct from './components/Destruct';
import TernaryOperator from './components/TernaryOperator';
import SpreadOperator from './components/SpreadOperator';
import MyClassComponent from './components/MyClassComponent';

import { sum } from './components/Modules';
*/}

function App() {

  return (
      <>
          <div>
              <MyClass />
              <ParentComponentUserList />
              
              {/* 
                <MyFunction />
                <MapFilterReduceFind />
                <Destruct />
                <TernaryOperator /> 
                <SpreadOperator />
                <MyClassComponent />
                
                <p>{ sum(5,3) }</p>
            */}

          </div>
      </>
  )
}

export default App
