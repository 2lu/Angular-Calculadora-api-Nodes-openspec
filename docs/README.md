# OpenSpec - Calculadora Angular + Node.js

## Visão Geral

Este projeto implementa uma **Calculadora Web Interativa** utilizando:
- **Frontend**: Angular com HashLocationStrategy
- **Backend**: Node.js com Express
- **API**: RESTful com Swagger/OpenAPI 3.0
- **Styling**: CSS customizado com tema prateado

---

## Estrutura do Projeto

```
calculadora_angular_node/
├── frontend-angular/          # Aplicação Angular
│   ├── src/
│   │   ├── app.component.ts   # Lógica da calculadora
│   │   ├── app.component.html # Interface (calculadora prateada)
│   │   ├── app.component.css  # Estilos
│   │   ├── app.module.ts      # Módulo com HashLocationStrategy
│   │   ├── calculator.service.ts # Serviço de chamadas à API
│   │   ├── main.ts            # Bootstrap
│   │   └── styles.css         # Estilos globais
│   ├── index.html
│   ├── package.json
│   ├── angular.json
│   └── tsconfig.json
│
├── backend-node/              # Servidor Node.js
│   ├── server.js             # Servidor Express com APIs
│   └── package.json
│
└── docs/                      # Documentação
    ├── openspec/
    ├── stories/
    ├── specifications/
    └── architecture/
```

---

## Tecnologias Utilizadas

### Frontend
- **Angular 17**: Framework SPA
- **TypeScript**: Linguagem principal
- **RxJS**: Gerenciamento de observables
- **CSS3**: Estilos e animações
- **HttpClientModule**: Requisições HTTP

### Backend
- **Node.js**: Runtime JavaScript
- **Express.js**: Micro-framework web
- **CORS**: Permitir requisições cross-origin
- **math.js**: Avaliação segura de expressões
- **Swagger/OpenAPI**: Documentação automática

---

## Requisitos

- Node.js >= 18.0
- npm >= 8.0
- Angular CLI >= 17.0

---

## Instalação e Execução

### 1. Backend (Node.js)

```bash
cd backend-node
npm install
npm start
# Servidor rodará em http://localhost:3000
# Documentação em http://localhost:3000/api-docs
```

### 2. Frontend (Angular)

```bash
cd frontend-angular
npm install
npm start
# Aplicação abrirá em http://localhost:4200#!/
# (Nota: URLs com # devido ao HashLocationStrategy)
```

---

## Funcionalidades

### Calculadora
- ✅ Operações básicas: +, -, ×, ÷
- ✅ Display LED (verde sobre fundo preto)
- ✅ Botões respons ivos com efeito de pressão
- ✅ Tema prateado/cinza
- ✅ Posicionada à esquerda e abaixo da tela
- ✅ Backspace e Limpeza (C)
- ✅ Suporte a números decimais
- ✅ Estados de carregamento

### API Backend
- ✅ POST `/api/calculate` - Calcula expressões matemáticas
- ✅ GET `/api/health` - Verifica status do servidor
- ✅ GET `/api/operations` - Lista operações suportadas
- ✅ Documentação Swagger automática
- ✅ Tratamento robusto de erros
- ✅ CORS habilitado

### Frontend
- ✅ HashLocationStrategy para navegação
- ✅ Comunicação HTTP com backend
- ✅ Interface intuitiva
- ✅ Estados de erro
- ✅ Responsivo
- ✅ Sem necessidade de backend para roteamento

---

## HashLocationStrategy

O projeto utiliza **HashLocationStrategy** para navegação:

```typescript
// app.module.ts
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
```

**Por que usar?**
- Funciona sem necessidade de configuração no servidor web
- URLs amigáveis com hash: `http://localhost:4200#!/home`
- Ideal para SPA hospedada em servidores estáticos
- Compatível com GitHub Pages e outros hospedadores

---

## Exemplos de Requisições

### Calcular Expressão

```bash
curl -X POST http://localhost:3000/api/calculate \
  -H "Content-Type: application/json" \
  -d '{"expression":"2*5+10"}'

# Resposta:
# {"result":20}
```

### Verificar Saúde da API

```bash
curl http://localhost:3000/api/health

# Resposta:
# {
#   "status": "OK",
#   "timestamp": "2024-03-12T10:30:00Z",
#   "port": 3000,
#   "service": "Calculator API"
# }
```

---

## Operações Suportadas

| Operador | Nome | Exemplo |
|----------|------|---------|
| + | Adição | 10+5 = 15 |
| - | Subtração | 10-5 = 5 |
| * | Multiplicação | 10*5 = 50 |
| / | Divisão | 10/5 = 2 |
| sqrt | Raiz Quadrada | sqrt(16) = 4 |
| pow | Potência | pow(2,8) = 256 |
| % | Módulo | 10%3 = 1 |

---

## Estrutura do Componente Angular

### AppComponent (app.component.ts)

Responsabilidades:
- Gerenciar estado da calculadora
- Processar entrada do usuário
- Chamar serviço de cálculo
- Exibir resultados e erros

Métodos principais:
- `addNumber()` - Adiciona número ao display
- `setOperator()` - Define operador
- `calculate()` - Executa cálculo via API
- `clear()` - Limpa calculator
- `backspace()` - Remove último caractere

---

## Styling CSS

### Cores Principais
- **Calculadora**: Silver/Cinza (#c0c0c0, #e8e8e8)
- **Display**: Verde #00ff00 em fundo preto
- **Botões Números**: Cinza claro
- **Botões Operadores**: Laranja (#ff9800)
- **Botões Controle**: Vermelho (#f44336)
- **Botão Resultado**: Verde (#4caf50)

### Efeitos
- Sombras 3D para simulação de profundidade
- Efeito de pressão em cliques
- Gradientes para realismo
- Animação de loading

---

## Tratamento de Erros

### Frontend
- Validação de expressões
- Feedback visual de erros
- Estado de carregamento
- Timeout handling (configurável)

### Backend
- Validação de entrada
- Tratamento de exceções math.js
- Mensagens de erro descritivas
- Middleware de erro global

---

## Desenvolvimento

### Adicionar Nova Operação

1. **Backend** (server.js):
```javascript
// Adicionado automaticamente ao usar math.js
// Exemplo: "log(100)" para logaritmo
```

2. **Frontend** (app.component.ts):
```typescript
// O componente automaticamente suporta qualquer operação
// que o math.js avalie
```

3. **UI** (app.component.html):
```html
<!-- Adicionar novo botão conforme necessário -->
<button class="btn-operator" (click)="setOperator('log')">log</button>
```

---

## Performance

- Bundle size otimizado
- Lazy loading habilitado na configuração Angular
- CORS configurado corretamente
- Cache de requisições (RxJS)
- Sem chamadas desnecessárias à API

---

## Segurança

- **math.js**: Avalia apenas expressões matemáticas, previne injeção de código
- **CORS**: Configurado para permitir requisições do frontend
- **Input Validation**: Todas as entradas são validadas
- **Error Messages**: Não expõem detalhes sensíveis do servidor em produção

---

## Próximas Features (Roadmap)

- [ ] Histórico de cálculos
- [ ] Temas customizáveis
- [ ] Modo científico com mais operações
- [ ] Autenticação de usuários
- [ ] Persistência de dados
- [ ] Testes unitários completos
- [ ] E2E tests com Cypress/Playwright

---

## Suporte

Para dúvidas ou encontrar problemas:
1. Verifique a documentação Swagger: `http://localhost:3000/api-docs`
2. Consulte as stories de usuário em `docs/stories/`
3. Revise as especificações em `docs/specifications/`

---

**Versão**: 1.0.0  
**Data**: Março 2024  
**Status**: ✅ Concluído
