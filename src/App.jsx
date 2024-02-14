// Install:
// * Node:
// * Router: npm i react-router-dom
// * Typescript:

{
    /*
        import MyClass from './components/MyClass'
        import AddUpdateDeleteToList from './components/AddUpdateDeleteToList'
        import MyFunction from './components/MyFunction';
        import MapFilterReduceFind from './components/MapFilterReduceFind';
        import Destruct from './components/Destruct';
        import TernaryOperator from './components/TernaryOperator';
        import SpreadOperator from './components/SpreadOperator';
        import MyClassComponent from './components/MyClassComponent';
        import Event from './components/Event';
        import ParentComponentUserList from './components/ParentComponentUserList';

        import { sum } from './components/Modules';
    */
}

import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import { Home } from './components/routerDom/Home'
import { NotFound } from './components/routerDom/NotFound'
import { BookRoutes } from './components/routerDom/BookRoutes'

function App() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/'> Home </Link>
                    </li>
                    <li>
                        <Link to='/books'> Books </Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books/*" element={<BookRoutes />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )

    /*
      <>
          <div>
                <MyClass />
                <AddUpdateDeleteToList />
                <MyFunction />
                <MapFilterReduceFind />
                <Destruct />
                <TernaryOperator />
                <SpreadOperator />
                <MyClassComponent />
                <ParentComponentUserList />
                <Event />

                <p>{ sum(5,3) }</p>
          </div>
      </>
      */
}

export default App
