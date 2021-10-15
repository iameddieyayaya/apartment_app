import React, {useState} from 'react'

const Apartment = () => {
  const [values, setValue] = useState({})

  const handleChange = (event) => {
    setValue({...values, [event.target.name]: event.target.value })
  }

  const handleSubmit = (e) => {
    console.log(JSON.stringify(values))
    const token = document.querySelector('meta[name="csrf-token"]').content;

      e.preventDefault()
      fetch('/apartments', {
        method: 'POST', // or 'PUT'
        headers: {
          'X-CSRF-Token': token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

    return (
        <form style={{display: 'flex', flexDirection: 'column', width: '300px'}}
            onSubmit={handleSubmit}
        >
          <label htmlFor='' name >Street</label>
            <input type='text' name='street' onChange={handleChange} />
          <label htmlFor='' >City</label>
            <input type='text' name='city' onChange={handleChange} />
          <label htmlFor='' >State</label>
            <input type='text' name='state' onChange={handleChange} />
          <label htmlFor='' >Manager</label>
            <input type='text' name='manager' onChange={handleChange} />
          <label htmlFor='' >Email</label>
            <input type='text' name='email' onChange={handleChange} />
          <button type="submit">Create Apartment</button>
        </form>
    )
}

export default Apartment