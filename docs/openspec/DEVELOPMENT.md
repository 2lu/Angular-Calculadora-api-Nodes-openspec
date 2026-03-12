# README - Documentação Técnica

## Guia de Desenvolvimento - Calculadora Angular + Node.js

---

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Estrutura do Projeto](#estrutura-do-projeto)
3. [Instalação e Setup](#instalação-e-setup)
4. [Como Começar](#como-começar)
5. [Endpoints da API](#endpoints-da-api)
6. [Desenvolvimento](#desenvolvimento)
7. [Troubleshooting](#troubleshooting)
8. [Contribuindo](#contribuindo)

---

## 🎯 Visão Geral

Esta é uma aplicação **Full-Stack** que combina:

- **Frontend**: Angular 17 com calculadora interativa
- **Backend**: Node.js/Express com APIs matemáticas
- **Documentação**: OpenSpec com stories, specs e arquitetura

### Características Principales
✅ Calculadora funcional com interface prateada  
✅ Cálculos processados no servidor backend  
✅ Documentação Swagger/OpenAPI  
✅ HashLocationStrategy para roteamento  
✅ CORS habilitado  
✅ Error handling completo  

---

## 📁 Estrutura do Projeto

```
calculadora_angular_node/
│
├── frontend-angular/                 # Aplicação Angular
│   ├── src/
│   │   ├── app.component.ts         # Lógica calculadora
│   │   ├── app.component.html       # Template
│   │   ├── app.component.css        # Estilos
│   │   ├── app.module.ts            # Configuração módulo
│   │   ├── calculator.service.ts    # Serviço HTTP
│   │   ├── main.ts                  # Bootstrap
│   │   └── styles.css
│   ├── index.html
│   ├── package.json
│   ├── angular.json
│   └── tsconfig.json
│
├── backend-node/                     # Servidor Node.js
│   ├── server.js                    # Servidor principal
│   ├── package.json
│   └── node_modules/
│
└── docs/                             # Documentação OpenSpec
    ├── README.md                    # Documentação geral
    ├── openspec/                    # Especificações OpenAPI
    ├── stories/                     # User stories
    │   └── user-stories.md
    ├── specifications/              # Requisitos
    │   └── requirements.md
    └── architecture/                # Arquitetura
        └── architecture.md
```

---

## 🚀 Instalação e Setup

### Pré-requisitos

```bash
# Verificar versões
node --version     # v18.0.0 ou superior
npm --version      # v8.0.0 ou superior
```

### 1️⃣ Backend (Node.js)

```bash
# Navegar para backend
cd backend-node

# Instalar dependências
npm install

# Iniciarlizar servidor
npm start

# ✅ Servidor rodará em http://localhost:3000
# 📚 Swagger em http://localhost:3000/api-docs
```

### 2️⃣ Frontend (Angular)

**Em outro terminal:**

```bash
# Navegar para frontend
cd frontend-angular

# Instalar dependências
npm install

# Iniciar dev server
npm start

# ✅ Aplicação abrirá em http://localhost:4200#!/
```

---

## 🎮 Como Começar

### Usando a Calculadora

1. **Abrir browser**: http://localhost:4200
2. **Clique nos botões**:
   - Números (0-9): Adiciona ao display
   - Operadores (+, -, ×, ÷): Seleciona operação
   - C: Limpa tudo
   - ←: Remove último dígito
   - =: Calcula resultado via API
   - .: Adiciona ponto decimal

### Exemplo Prático

```
Sequência de cliques:
  1. "5" → Display: 5
  2. "+" → Display: 0 (esperando próximo número)
  3. "3" → Display: 3
  4. "=" → Display: 8 (chamou API, recebeu resultado)
```

---

## 🔌 Endpoints da API

### Base URL
```
http://localhost:3000/api
```

### 1. Calcular Expressão

```http
POST /calculate

Content-Type: application/json

{
  "expression": "2*5+10"
}
```

**Resposta (200 OK)**
```json
{
  "result": 20
}
```

**Exemplos de expressões:**
```
"10+5"          → 15
"10-5"          → 5
"10*5"          → 50
"10/5"          → 2
"sqrt(16)"      → 4
"pow(2,8)"      → 256
"(10+5)*2"      → 30
```

### 2. Health Check

```http
GET /health
```

**Resposta**
```json
{
  "status": "OK",
  "timestamp": "2024-03-12T10:30:00Z",
  "port": 3000,
  "service": "Calculator API"
}
```

### 3. Listar Operações

```http
GET /operations
```

**Resposta**
```json
{
  "operations": [
    { "symbol": "+", "name": "Adição", "example": "10+5" },
    { "symbol": "-", "name": "Subtração", "example": "10-5" },
    { "symbol": "*", "name": "Multiplicação", "example": "10*5" },
    { "symbol": "/", "name": "Divisão", "example": "10/5" },
    { "symbol": "sqrt", "name": "Raiz Quadrada", "example": "sqrt(16)" },
    { "symbol": "pow", "name": "Potência", "example": "pow(2,8)" }
  ]
}
```

### 4. Documentação Swagger

```
GET http://localhost:3000/api-docs
```

Abre interface interativa para testar todos os endpoints!

---

## 💻 Desenvolvimento

### Modificar Componente Angular

**arquivo**: `frontend-angular/src/app.component.ts`

```typescript
export class AppComponent {
  // Adicionar nova funcionalidade aqui
  scientificMode: boolean = false;

  toggleScientificMode() {
    this.scientificMode = !this.scientificMode;
  }
}
```

**arquivo**: `frontend-angular/src/app.component.html`

```html
<!-- Adicionar novo botão aqui -->
<button 
  *ngIf="scientificMode" 
  class="btn-operator" 
  (click)="setOperator('sin')">
  sin
</button>
```

### Adicionar nova rota na API

**arquivo**: `backend-node/server.js`

```javascript
/**
 * @swagger
 * /api/new-endpoint:
 *   post:
 *     summary: Descrição do novo endpoint
 */
app.post('/api/new-endpoint', (req, res) => {
  // Lógica aqui
  res.json({ data: 'resultado' });
});
```

### Estilos

**arquivo**: `frontend-angular/src/app.component.css`

```css
.calculator {
  /* Modificar aparência aqui */
  width: 350px; /* Tornar maior */
}
```

---

## 🐛 Troubleshooting

### "Cannot GET /#/"

**Problema**: Página branca depois de carregar  
**Solução**: 
- Certifique-se que HashLocationStrategy está configurado em `app.module.ts`
- Verifique se `index.html` tem `<base href="/">`

### "Failed to connect to localhost:3000"

**Problema**: Frontend não consegue conectar ao backend  
**Solução**:
```bash
# 1. Verificar se backend está rodando
curl http://localhost:3000/api/health

# 2. Se não estiver, iniciar backend
cd backend-node
npm start
```

### "Math.js error: Unexpected character"

**Problema**: Expressão inválida na calculadora  
**Solução**:
- Verificar caracteres permitidos: números, +, -, *, /, (, ), sqrt, pow
- Não usar espaços
- Não usar =, :, ;, etc

### "CORS error"

**Problema**: "Access-Control-Allow-Origin" ausente  
**Solução**:
- CORS já está configurado no `server.js`
- Se problema persistir, verificar se frontend e backend têm portas diferentes
- Frontend: 4200
- Backend: 3000

### "npm ERR! Cannot find module"

**Problema**: Dependências não instaladas  
**Solução**:
```bash
# Limpar cache
npm cache clean --force

# Reinstalar
npm install

# Verificar
npm list
```

---

## 📝 Contribuindo

### Processo de Contribuição

1. **Fork ou clone** o repositório
2. **Create branch** para sua feature: `git checkout -b feature/calculator-history`
3. **Commit changes**: `git commit -m "Add calculator history"`
4. **Push**: `git push origin feature/calculator-history`
5. **Pull Request**

### Padrões de Código

```typescript
// ✅ BOM: Código limpo e tipo
addNumber(num: string): void {
  if (this.newNumber) {
    this.display = num;
    this.newNumber = false;
  }
}

// ❌ RUIM: Sem tipos, sem comentários
addNumber(num) {
  if (this.newNumber) this.display = num;
}
```

### Commit Message

```
feat: adicionar histórico de cálculos
fix: corrigir divisão por zero
docs: atualizar README
test: adicionar testes para service
```

---

## 📊 Estatísticas do Projeto

| Métrica | Valor |
|---------|-------|
| **Lines of Code** | ~1000 |
| **Frontend Components** | 1 |
| **Services** | 1 |
| **API Endpoints** | 4 |
| **CSS Rules** | ~200 |
| **Dependencies** | ~30 |

---

## 📚 Referências

- [Angular Docs](https://angular.io/guide)
- [Express Docs](https://expressjs.com/)
- [math.js Docs](https://mathjs.org/)
- [OpenAPI 3.0](https://spec.openapis.org/oas/v3.0.0)
- [RxJS Docs](https://rxjs.dev/)

---

## 📞 Suporte

**Documentação da API**
- Swagger UI: http://localhost:3000/api-docs
- Arquivo specs em: `docs/specifications/requirements.md`

**Arquitetura**
- Ver: `docs/architecture/architecture.md`

**User Stories**
- Ver: `docs/stories/user-stories.md`

---

## 📄 Licença

Este projeto está sob licença ISC.

---

## ✅ Checklist para Deploy

- [ ] Backend testado localmente
- [ ] Frontend testado localmente
- [ ] Todos os endpoints retornam 200 OK
- [ ] CORS funcionando
- [ ] HashLocationStrategy ativo
- [ ] Swagger acessível
- [ ] Sem console.log desnecessários
- [ ] Build otimizado
- [ ] Documentação completa

---

**Versão**: 1.0.0  
**Data da Última Atualização**: Março 2024  
**Status**: ✅ Versão Estável
