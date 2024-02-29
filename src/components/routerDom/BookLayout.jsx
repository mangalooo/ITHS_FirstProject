import { Link, Outlet, useSearchParams} from 'react-router-dom'
// import { useState } from 'react'

export function BookLayout() {
    const [searchParams, setSearchParams] = useSearchParams({ n: 3})
    const number = searchParams.get('n')

    return (
        <>
            <Link to='/Books/1'> Book 1 </Link>
            <br />
            <Link to='/Books/2'> Book 2 </Link>
            <br />
            <Link to={`/Books/${number}`}> Book {number} </Link>
            <br />
            <Link to='/Books/new'> New book </Link>
            <Outlet context={{ hello: "World"}} />
            <input
                type='number'
                value={number}
                onChange={e => setSearchParams({ n: e.target.value })}
            />
        </>
    )
}
