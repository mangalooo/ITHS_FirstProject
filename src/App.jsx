import './App.css';
import MyClass from './components/MyClass';
import MyFunction from './components/MyFunction';
import MapFilterReduceFind from './components/MapFilterReduceFind';
import Destruct from './components/Destruct';
import TernaryOperator from './components/TernaryOperator';
import SpreadOperator from './components/SpreadOperator';
import { sum } from './components/Modules';

function App() {

  return (
      <>
          <div>
              <MyClass />

              <MyFunction />

              <MapFilterReduceFind />

              <Destruct />

              <TernaryOperator />

              <SpreadOperator />

              <p>{ sum(5,3) }</p>


          </div>
      </>
  )
}

export default App
