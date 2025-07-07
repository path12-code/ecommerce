import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(() => localStorage.getItem('token') || '');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (token) localStorage.setItem('token', token);
  }, [token]);

  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find(item => item.id === product.id);
      if (found) {
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter(p => p.id !== id));
  };

  const clearCart = () => {
    alert("¡Gracias por tu compra!");
    setCart([]);
  };

  const login = () => {
    fetch('https://ecommerce-backend-sjrm.onrender.com/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => {
        setMessage(data.message);
        setToken(data.token);
      })
      .catch(() => setMessage('Error en login'));
  };

  const filteredProducts = products.filter(p => 
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Tienda Online</h1>

      {token ? <p>✅ Sesión iniciada</p> : null}

      <input 
        placeholder="Buscar productos" 
        onChange={e => setSearch(e.target.value)} 
        style={{ marginBottom: '1rem', padding: '0.5rem' }}
      />

      <h2>Productos</h2>
      <ul>
        {filteredProducts.map(p => (
          <li key={p.id}>
            <img src={p.image} alt={p.title} width="50" />
            {p.title} - ${p.price}
            <button onClick={() => addToCart(p)}>Agregar</button>
          </li>
        ))}
      </ul>

      <h2>Carrito ({cart.reduce((acc, item) => acc + item.qty, 0)} items)</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.title} x {item.qty} - ${item.price * item.qty}
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      {cart.length > 0 && (
        <>
          <h3>Total: ${cart.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)}</h3>
          <button onClick={clearCart}>Finalizar Compra</button>
        </>
      )}

      {!token && (
        <>
          <h2>Login</h2>
          <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
          <button onClick={login}>Iniciar Sesión</button>
          <p>{message}</p>
        </>
      )}
    </div>
  );
}

export default App;