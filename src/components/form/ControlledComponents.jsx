import { useState } from 'react'

// Define a component called 'ControlledComponents'
const ControlledComponents = () => {
    // Create a state variable named 'name' and function to update it named 'setName'
    const [name, setName] = useState('')

    // Define a function to handle changes when the user types in the input field
    const handleNameChange = (event) => {
        // Call 'setName' to update the 'name' state with the new value typed by the user
        setName(event.target.value)
    }

    // Render the component
    return (
        <>
            {/* input field where the value is controlled be the 'name' state */}
            <input type="text" value={name} onChange={handleNameChange} />

            {/* Display the current value of the 'name' state */}
            <p> {name} </p>
        </>
    )
}

export default ControlledComponents
