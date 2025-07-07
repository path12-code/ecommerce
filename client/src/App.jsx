import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('https://ecommerce-backend-sjrm.onrender.com/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const login = () => {
    fetch('https://ecommerce-backend-sjrm.onrender.com/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage('Error en login'));
  };

  return (
    <div>
      <h1>Tienda Online</h1>
      <h2>Productos:</h2>
      <ul>
        {products.map(p => <li key={p.id}>{p.name} - ${p.price}</li>)}
      </ul>

      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={login}>Iniciar Sesión</button>
      <p>{message}</p>
    </div>
  );
}

export default App;