import { Link, Outlet } from 'react-router-dom'

export function BookLayout() {
    return (
        <>
            <Link to='/Books/1'> Book 1 </Link>
            <br />
            <Link to='/Books/2'> Book 2 </Link>
            <br />
            <Link to='/Books/new'> New book </Link>
            <Outlet context={{ hello: "World"}} />
        </>
    )
}
