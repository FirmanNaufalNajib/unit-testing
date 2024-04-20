import React, { useState } from 'react';


export default function Register() {
  const[name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleButton = () => {
    console.log(name, email, password);
    alert('Register Success');
  }

  return (
    <div className='container'>
      <h1 className='styles.title'>Register</h1>
      <form className='form'>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" onClick={handleButton}>Register</button>
      </form>
    </div>
      
  )
}
