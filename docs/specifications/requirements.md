# Especificações de Requisitos

## Documento de Requisitos do Projeto - Calculadora Angular + Node.js

### Versão: 1.0  
### Data: Março 2024  
### Status: ✅ Finalizado  

---

## 1. Requisitos Funcionais

### 1.1 Calculadora Frontend

#### RF-1.1.1: Operações Básicas
- **Descrição**: A calculadora deve suportar operações matemáticas básicas
- **Operações**: Adição (+), Subtração (-), Multiplicação (*), Divisão (/)
- **Precisão**: Suportar números com até 2 casas decimais
- **Validação**: Impedir divisão por zero com mensagem de erro

#### RF-1.1.2: Interface do Usuário
- **Display**: 
  - Mostrar até 16 caracteres
  - Fonte monoespacida
  - Cor verde (#00ff00) em fundo preto
  - Altura mínima de 60px
  
- **Botões**:
  - Números: 0-9 (10 botões)
  - Operadores: +, -, *, / (4 botões)
  - Controle: C (Clear), ← (Backspace)
  - Resultado: = (Equals)
  - Decimal: . (Ponto)
  
- **Responsividade**:
  - Layout adaptável para Mobile, Tablet e Desktop
  - Modos efetivamente testados para: 
    - 320px (Mobile)
    - 768px (Tablet)
    - 1920px (Desktop)

#### RF-1.1.3: Interações com Usuário
- **Adição de Números**: Ao clicar um botão de número, adicionar ao display
- **Seleção de Operador**: Ao clicar operador, armazenar e limpar display
- **Cálculo**: Ao clicar "=", executar operação via API
- **Limpeza**: Botão "C" reseta tudo para estado inicial
- **Backspace**: Botão "←" remove último caractere
- **Decimal**: Apenas um ponto decimal permitido por número

### 1.2 API Backend

#### RF-1.2.1: Endpoint de Cálculo
- **Método**: POST
- **Rota**: `/api/calculate`
- **Request Body**:
  ```json
  {
    "expression": "2*5+10"
  }
  ```
- **Response (Sucesso)**:
  ```json
  {
    "result": 20
  }
  ```
- **Response (Erro)**:
  ```json
  {
    "error": "Expressão matemática inválida."
  }
  ```
- **Validações**:
  - Expression deve ser string
  - Expression não pode estar vazia
  - Caracteres permitidos: números, operadores básicos (+, -, *, /), parênteses

#### RF-1.2.2: Endpoint de Health Check
- **Método**: GET
- **Rota**: `/api/health`
- **Response**:
  ```json
  {
    "status": "OK",
    "timestamp": "2024-03-12T10:30:00Z",
    "port": 3000,
    "service": "Calculator API"
  }
  ```

#### RF-1.2.3: Endpoint de Operações
- **Método**: GET
- **Rota**: `/api/operations`
- **Response**: Lista de operações suportadas com exemplos

#### RF-1.2.4: Tratamento de Erros
- **400 Bad Request**: Quando expressão é inválida
- **404 Not Found**: Quando rota não existe
- **500 Internal Error**: Erro no servidor

### 1.3 Integração Frontend-Backend

#### RF-1.3.1: Comunicação HTTP
- **Biblioteca**: HttpClientModule (Angular)
- **Padrão**: RxJS Observables
- **Timeout**: 5 segundos por requisição
- **Retry**: Não implementado (versão inicial)

#### RF-1.3.2: Tratamento de Erros
- **Erro de Conexão**: "Falha ao conectar com o servidor"
- **Erro de Cálculo**: "Expressão inválida"
- **Timeout**: "Operação expirou, tente novamente"

---

## 2. Requisitos Não-Funcionais

### 2.1 Performance

#### RNF-2.1.1: Tempo de Resposta
- **API**: Responder em menos de 500ms
- **Frontend**: Renderizar em menos de 1s
- **Display**: Atualizar em menos de 100ms

#### RNF-2.1.2: Bundle Size
- **JavaScript**: Menos de 500KB (com gzip)
- **CSS**: Menos de 50KB
- **Total**: Menos de 1MB

### 2.2 Escalabilidade

#### RNF-2.2.1: Concorrência
- Backend deve suportar pelo menos 100 requisições simultâneas
- Sem degradação de performance

#### RNF-2.2.2: Armazenamento
- Primeira execução inferior a 2 segundos
- Sem cache persistente (primeira versão)

### 2.3 Segurança

#### RNF-2.3.1: Proteção contra Injeção
- **math.js**: Usar função `evaluate()` segura
- Não permitir execução de código arbitrário
- Validar todas as entradas

#### RNF-2.3.2: CORS
- Permitir requisições do frontend
- Configurar domínios específicos em produção

#### RNF-2.3.3: Headers de Segurança
- Content-Type: application/json
- X-Content-Type-Options: nosniff

### 2.4 Usabilidade

#### RNF-2.4.1: Acessibilidade
- Suportar navegação por teclado
- Contraste de cores conforma WCAG AAA
- Labels descritivos em botões

#### RNF-2.4.2: Design
- Tema prateado/cinza
- Display verde (estilo LED)
- Feedback visual em cliques
- Sem lag perceptível

### 2.5 Compatibilidade

#### RNF-2.5.1: Browser
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

#### RNF-2.5.2: Node.js
- Node.js 18.0+
- npm 8.0+

### 2.6 Manutenibilidade

#### RNF-2.6.1: Código
- TypeScript 5.0+
- ESLint configurado
- Sem console.log em produção

#### RNF-2.6.2: Documentação
- Swagger/OpenAPI 3.0
- README completo
- Comentários em funções críticas
- Exemplos de uso

---

## 3. Requisitos Técnicos / Arquiteturais

### 3.1 Frontend

#### RT-3.1.1: Stack
- Angular 17
- TypeScript 5.2
- RxJS 7.8
- CSS3 (sem framework CSS)

#### RT-3.1.2: Estrutura
```
frontend-angular/
├── src/
│   ├── app.component.ts       # Componente principal
│   ├── app.component.html     # Template
│   ├── app.component.css      # Estilos
│   ├── app.module.ts          # Módulo (HashLocationStrategy)
│   ├── calculator.service.ts  # Serviço HTTP
│   ├── main.ts                # Bootstrap
│   └── styles.css             # Estilos globais
├── index.html
├── package.json
└── angular.json
```

#### RT-3.1.3: Configuração
- **LocationStrategy**: HashLocationStrategy
- **HttpClient**: Injeção de dependência
- **Change Detection**: OnPush (otimização)

### 3.2 Backend

#### RT-3.2.1: Stack
- Node.js 18+
- Express 4.18
- CORS 2.8
- math.js 11.8
- Swagger-UI-Express 5.0

#### RT-3.2.2: Estrutura
```
backend-node/
├── server.js         # Servidor principal
├── package.json
└── node_modules/
```

#### RT-3.2.3: Configuração
- **Porta**: 3000 (configurável via env)
- **CORS**: Habilitado para todos os domínios
- **JSON**: Parser habilitado
- **Middleware**: Global error handler

### 3.3 Comunicação

#### RT-3.3.1: Protocolo
- HTTP/1.1 com suporte a HTTPS
- Content-Type: application/json

#### RT-3.3.2: Endpoints
- Base URL: `http://localhost:3000/api`
- Versão: v1 (implícita)

---

## 4. Requisitos de Documentação

### 4.1 OpenSpec
- [ ] Documento README.md
- [ ] Arquivo de estrutura do projeto
- [ ] Links para stories e especificações

### 4.2 Stories
- [ ] User stories completadas
- [ ] Critérios de aceitação claros
- [ ] Priorização

### 4.3 Especificações
- [ ] Requisitos funcionais
- [ ] Requisitos não-funcionais
- [ ] Requisitos técnicos

### 4.4 Arquitetura
- [ ] Diagrama C4
- [ ] Diagrama de fluxo de dados
- [ ] Decisões arquiteturais

---

## 5. Glossário

| Termo | Definição |
|-------|-----------|
| **API** | Interface de Programação de Aplicações |
| **CORS** | Cross-Origin Resource Sharing |
| **HashLocationStrategy** | Estratégia de roteamento usando # nas URLs |
| **LED** | Light Emitting Diode (estilo de fonte/display) |
| **math.js** | Biblioteca JavaScript para matemática |
| **Observable** | Padrão reativo do RxJS |
| **SPA** | Single Page Application |

---

## 6. Matriz de Rastreabilidade

| ID | Requisito | Story | Teste | Status |
|----|-----------|-------|-------|--------|
| RF-1.1.1 | Operações Básicas | US-001 | T-001 | ✅ |
| RF-1.1.2 | Interface do Usuário | US-001 | T-002 | ✅ |
| RF-1.1.3 | Interações | US-001 | T-003 | ✅ |
| RF-1.2.1 | Endpoint Cálculo | US-002 | T-004 | ✅ |
| RF-1.2.2 | Health Check | US-002 | T-005 | ✅ |
| RF-1.3.1 | Comunicação HTTP | US-002 | T-006 | ✅ |
| RNF-2.1.1 | Performance | US-002 | T-007 | ✅ |
| RNF-2.3.1 | Segurança | US-002 | T-008 | ✅ |
| RT-3.1.3 | HashLocationStrategy | US-004 | T-009 | ✅ |
| RT-3.2.2 | Estrutura Backend | US-002 | T-010 | ✅ |

---

## Critérios de Aceitação do Projeto

- [x] Calculadora funciona corretamente com todas as operações
- [x] Backend responde corretamente a requisições da calculadora
- [x] Interface visual segue especificação prateada/LED
- [x] HashLocationStrategy implementado
- [x] Documentação completa (OpenSpec)
- [x] Código limpo e comentado
- [x] Todos os endpoints testados
- [x] Tratamento de erros implementado

**Status Final**: ✅ **ACEITO**

---

**Aprovado por**: Time de Desenvolvimento  
**Data de Aprovação**: Março 2024  
**Próximevisão**: v2.0 (planejada)
