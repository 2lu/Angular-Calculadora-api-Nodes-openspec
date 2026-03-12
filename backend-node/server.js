const express = require('express');
const cors = require('cors');
const { evaluate } = require('mathjs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    port: PORT
  });
});

// Calculate
app.post('/api/calculate', (req, res) => {
  try {
    const { expression } = req.body;

    if (!expression || typeof expression !== 'string') {
      return res.status(400).json({ error: 'Expressão inválida' });
    }

    const result = evaluate(expression.trim());
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: 'Erro: Expressão matemática inválida' });
  }
});

// Operations
app.get('/api/operations', (req, res) => {
  res.json({
    operations: [
      { symbol: '+', name: 'Adição', example: '10+5' },
      { symbol: '-', name: 'Subtração', example: '10-5' },
      { symbol: '*', name: 'Multiplicação', example: '10*5' },
      { symbol: '/', name: 'Divisão', example: '10/5' },
      { symbol: 'sqrt', name: 'Raiz Quadrada', example: 'sqrt(16)' },
      { symbol: 'pow', name: 'Potência', example: 'pow(2,8)' }
    ]
  });
});

// Error 404
app.use((req, res) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`\n🚀 Servidor rodando em http://localhost:${PORT}`);
  console.log(`✅ API disponível em http://localhost:${PORT}/api\n`);
});
