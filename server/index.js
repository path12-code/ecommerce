const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let products = [
  { id: 1, name: 'Zapatillas', price: 100 },
  { id: 2, name: 'Camisa', price: 50 },
];

app.get('/', (req, res) => {
  res.json({ message: 'Servidor funcionando correctamente' });
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'test@correo.com' && password === '123456') {
    res.json({ message: 'Login exitoso', token: 'fake-jwt-token' });
  } else {
    res.status(401).json({ message: 'Credenciales inválidas' });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});