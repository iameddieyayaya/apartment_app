import React, {useState} from 'react'



const Apartment = () => {
    const [values, setValue] = useState({})

const handleSubmit = (e) => {
    e.preventDefault()
}
    return (
        <form style={{display: 'flex', flexDirection: 'column', width: '300px'}} 
            onSubmit={handleSubmit}
        >
            <label htmlFor='' name >Street</label>
           <input type='text' />
            <label htmlFor='' >City</label>
           <input type='text' />
            <label htmlFor='' >State</label>
           <input type='text' />
            <label htmlFor='' >Manager</label>
           <input type='text' />
            <label htmlFor='' >Email</label>
           <input type='text' />
        </form>
    )
}

export default Apartment