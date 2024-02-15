import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


export function NotFound() {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/', { state: 'Error not right page' })
        }, 1000)
    })

    return <h1> NotFound </h1>
}
