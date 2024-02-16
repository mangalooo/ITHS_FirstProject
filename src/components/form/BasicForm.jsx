import { useState } from 'react'

// Define a component called 'BasicForm'
const BasicForm = () => {
    // Create state variables for inpus fields: name and email
    const [name, setName] = useState('') // 'name' state for capturing user`s name
    const [email, setEmail] = useState('') // 'email' state for capturing user`s email

    // Handle input changes and update 'name' state
    const handleNameChange = (event) => {
        setName(event.target.value) // Update 'name' state with the inpus value
    }

    // Handle input changes and update 'email' state
    const handleEmailChange = (event) => {
        setEmail(event.target.value) // Update 'email' state with the inpus value
    }

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        // Process form data, e.g., send to server or perform actions
        console.log('Submitted:', name, email);
    };

    // Render  a form with input fields and a submit button
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                {/* {Input field for capturing user`s name */}
                    <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <br />
            <label>
                Email:
                {/* {Input field for capturing user`s email */}
                    <input type="text" value={email} onChange={handleEmailChange} />
            </label>
            <br />
            {/* Submin button triggers the 'handleSubmit' function */}
            <button type="submit"> Submit </button>
        </form>
    )
}

export default BasicForm
