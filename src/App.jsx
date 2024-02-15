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
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { Home } from './components/routerDom/Home'
import { NotFound } from './components/routerDom/NotFound'
import { BookRoutes } from './components/routerDom/BookRoutes'
import './components/css/styles.css'

function App() {
    const location = useLocation()
    return (
        <>
            <nav>
                <ul>
                    <li>
                        {/* Add styles.css to the link */}
                        <NavLink to='/'>

                            {/* Controll the link name */}
                            {({ isActive }) => {
                                return isActive ? 'Home active' : 'Home'
                            }}
                        </NavLink>
                    </li>
                    <li>
                        <Link to='/books'> Books </Link>
                    </li>
                </ul>
            </nav>

            {location.state}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books/*" element={<BookRoutes />} /> {/* * = All books */}
                <Route path="*" element={<NotFound />} />  {/* * = if the URL doesn`t match, you are sent to "NotFound" */}
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
