# Arquitetura do Sistema

## Documentação Arquitetural - Calculadora Angular + Node.js

---

## 1. Visão Geral Arquitetural

```
┌─────────────────────────────────────────────────────────┐
│                 NAVEGADOR DO USUÁRIO                     │
│  ┌─────────────────────────────────────────────────────┐ │
│  │          FRONTEND ANGULAR (SPA)                     │ │
│  │  ┌──────────────────────────────────────────────┐  │ │
│  │  │  AppComponent (Calculadora UI)               │  │ │
│  │  │  - Display                                   │  │ │
│  │  │  - Botões (números, operadores, controle)   │  │ │
│  │  │  - Lógica de estado                          │  │ │
│  │  └──────────────────────────────────────────────┘  │ │
│  │           ↓                      ↑                  │ │
│  │  ┌──────────────────────────────────────────────┐  │ │
│  │  │  CalculatorService (HttpClient)              │  │ │
│  │  │  - POST /api/calculate                       │  │ │
│  │  │  - RxJS Observables                          │  │ │
│  │  │  - Erro Handling                             │  │ │
│  │  └──────────────────────────────────────────────┘  │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                          │
│  HashLocationStrategy: URLs com #                       │
│  Exemplo: http://localhost:4200/#/calculator           │
└─────────────────────────────────────────────────────────┘
                            │
                HTTP (CORS) │
                            ↓
┌─────────────────────────────────────────────────────────┐
│              BACKEND NODE.JS (API REST)                 │
│  Porta: 3000                                            │
│  ┌─────────────────────────────────────────────────────┐ │
│  │  Express Server                                     │ │
│  │  ┌──────────────────────────────────────────────┐  │ │
│  │  │  CORS Middleware (Permite cross-origin)      │  │ │
│  │  │  JSON Parser Middleware                      │  │ │
│  │  └──────────────────────────────────────────────┘  │ │
│  │           ↓            ↓            ↓              │ │
│  │  ┌─────────────────────────────────────────────┐  │ │
│  │  │  POST /api/calculate                         │  │ │
│  │  │  Validação → math.js.evaluate() → Resposta   │  │ │
│  │  └─────────────────────────────────────────────┘  │ │
│  │  ┌─────────────────────────────────────────────┐  │ │
│  │  │  GET /api/health                            │  │ │
│  │  │  Status do servidor                          │  │ │
│  │  └─────────────────────────────────────────────┘  │ │
│  │  ┌─────────────────────────────────────────────┐  │ │
│  │  │  GET /api/operations                        │  │ │
│  │  │  Lista de operações suportadas               │  │ │
│  │  └─────────────────────────────────────────────┘  │ │
│  │  ┌─────────────────────────────────────────────┐  │ │
│  │  │  Swagger/OpenAPI Docs                        │  │ │
│  │  │  GET /api-docs                               │  │ │
│  │  └─────────────────────────────────────────────┘  │ │
│  │           ↑            ↑            ↑              │ │
│  │  ┌──────────────────────────────────────────────┐  │ │
│  │  │  Global Error Handler                        │  │ │
│  │  │  Trata exceções não capturadas               │  │ │
│  │  └──────────────────────────────────────────────┘  │ │
│  └─────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

---

## 2. Camadas Arquiteturais

### 2.1 Frontend - Presentation Layer (Angular)

```typescript
┌──────────────────────────────────────────┐
│    Apresentação (UI/UX)                   │
│  ┌──────────────────────────────────────┐ │
│  │  app.component.html (Template)       │ │
│  │  - Display LED                        │ │
│  │  - Grid de Botões                     │ │
│  │  - Mensagens de Erro                  │ │
│  └──────────────────────────────────────┘ │
└──────────────────────────────────────────┘
                   ↕
┌──────────────────────────────────────────┐
│    Lógica (Component + Service)           │
│  ┌──────────────────────────────────────┐ │
│  │  app.component.ts                    │ │
│  │  - Estado: display, operator, etc.   │ │
│  │  - Métodos: add(), calculate(), etc. │ │
│  └──────────────────────────────────────┘ │
│  ┌──────────────────────────────────────┐ │
│  │  calculator.service.ts               │ │
│  │  - HttpClient.post() → API           │ │
│  │  - RxJS Observable handling           │ │
│  └──────────────────────────────────────┘ │
└──────────────────────────────────────────┘
                   ↕ (HTTP)
┌──────────────────────────────────────────┐
│    Acesso de Dados (HTTP)                 │
│  - Requisição POST /api/calculate        │
│  - Resposta JSON { result: ... }         │
└──────────────────────────────────────────┘
```

### 2.2 Backend - API Layer (Node.js/Express)

```
┌────────────────────────────────────────────┐
│  Apresentação de API (Express Routes)      │
│  ┌──────────────────────────────────────┐  │
│  │  app.post('/api/calculate', ...)     │  │
│  │  app.get('/api/health', ...)         │  │
│  │  app.get('/api/operations', ...)     │  │
│  │  Swagger Setup                       │  │
│  └──────────────────────────────────────┘  │
└────────────────────────────────────────────┘
                   ↕
┌────────────────────────────────────────────┐
│  Lógica de Negócio (Processamento)         │
│  ┌──────────────────────────────────────┐  │
│  │  Validação de expressão              │  │
│  │  - Check se é string                 │  │
│  │  - Check se não está vazia           │  │
│  │  - Check de caracteres válidos       │  │
│  └──────────────────────────────────────┘  │
│  ┌──────────────────────────────────────┐  │
│  │  Avaliação Segura (math.js)          │  │
│  │  - math.evaluate(expression)         │  │
│  │  - Sem execução de código arbitrário │  │
│  └──────────────────────────────────────┘  │
└────────────────────────────────────────────┘
                   ↕
┌────────────────────────────────────────────┐
│  Middleware (CORS, JSON Parser)            │
│  - Permite cross-origin requests           │
│  - Parseia corpos JSON                     │
│  - Error handling global                   │
└────────────────────────────────────────────┘
```

---

## 3. Fluxo de Dados

### 3.1 Fluxo de uma Operação Matemática

```
USUÁRIO
   │
   ├─ Clica "2"
   │  → AppComponent.addNumber("2")
   │  → display = "2"
   │
   ├─ Clica "+"
   │  → AppComponent.setOperator("+")
   │  → previousValue = 2, operator = "+"
   │  → display = "" (pronto para próximo número)
   │
   ├─ Clica "5"
   │  → AppComponent.addNumber("5")
   │  → display = "5"
   │
   ├─ Clica "="
   │  → AppComponent.calculate()
   │  → Monta expressão: "2+5"
   │  → Chama CalculatorService.calculate("2+5")
   │  │
   │  └─ HTTP REQUEST
   │     POST /api/calculate
   │     Body: { expression: "2+5" }
   │
   └─ BACKEND (Node.js)
      │
      ├─ Recebe requisição POST
      │
      ├─ Valida: "2+5" é string, não vazia ✓
      │
      ├─ Executa: math.evaluate("2+5")
      │  → Resultado: 7
      │
      └─ Retorna
         HTTP RESPONSE
         { result: 7 }
         
        ↓↓↓↓↓ (Volta ao Frontend) ↓↓↓↓↓
        
    ├─ AppComponent recebe { result: 7 }
    │
    ├─ No subscription.next():
    │  → display = "7"
    │  → previousValue = null
    │  → operator = null
    │  → newNumber = true
    │
    └─ DISPLAY: "7" (atualizado na UI)
```

### 3.2 Fluxo de Erro

```
USUÁRIO
   │
   ├─ Clica "1"
   ├─ Clica "/"
   ├─ Clica "0"
   ├─ Clica "=" (Divisão por zero!)
   │
   └─ HTTP REQUEST: POST /api/calculate
      Body: { expression: "1/0" }
      
      ↓
      
    BACKEND VALIDATION
    │
    ├─ math.evaluate("1/0")
    │  → Throws Error (Divisão por zero)
    │
    └─ catch(error)
       → res.status(400).json({
           error: "Expressão matemática inválida."
         })
       
       ↓↓↓ (HTTP 400 Response) ↓↓↓
       
    FRONTEND SUBSCRIPTION
    │
    ├─ error callback ativado
    │
    ├─ AppComponent.isLoading = false
    │
    ├─ AppComponent.error = 
    │  "Erro ao calcular. Verifique a expressão."
    │
    └─ UI mostra mensagem de erro em vermelho
```

---

## 4. Padrões de Design

### 4.1 Frontend

#### Padrão MVC (Model-View-Controller)
```
┌─────────────────────┐
│  VIEW               │
│ (app.component.html)│
│                     │
│  [Display]          │
│  [Botões]           │
└─────────────────────┘
         ↑ ↓
┌─────────────────────┐
│  CONTROLLER         │
│ (AppComponent.ts)   │
│                     │
│  Métodos:           │
│  - addNumber()      │
│  - calculate()      │
│  - clear()          │
└─────────────────────┘
         ↑ ↓
┌─────────────────────┐
│  MODEL              │
│ @Component state    │
│                     │
│  display: string    │
│  operator: string   │
│  previousValue: num │
└─────────────────────┘
```

#### Padrão Strategy (Operadores)
```typescript
// Possível extensão futura
interface CalculationStrategy {
  execute(a: number, b: number): number;
}

class AdditionStrategy implements CalculationStrategy {
  execute(a: number, b: number): number { return a + b; }
}

// Sem necessidade em v1 (math.js faz isso)
```

#### Padrão Observer (RxJS)
```typescript
// Serviço
calculate(expression: string): Observable<any> {
  return this.http.post(...);
}

// Componente (Observer)
this.calculatorService.calculate(expr).subscribe({
  next: (response) => { /* sucesso */ },
  error: (error) => { /* erro */ },
  complete: () => { /* fim */ }
});
```

### 4.2 Backend

#### Padrão Request-Response
```
Cliente HTTP
    │
    ├─ POST /api/calculate
    │  { "expression": "2+5" }
    │
    ├─ Express route handler
    │
    ├─ Processamento
    │  math.evaluate()
    │
    └─ JSON Response
       { "result": 7 }
```

#### Padrão Middleware
```
Requisição Entrada
    ↓
┌─ CORS Middleware ──────────────┐
│  Verifica Origin                │
└─────────────────────────────────┘
    ↓
┌─ JSON Parser ──────────────────┐
│  Parse req.body                 │
└─────────────────────────────────┘
    ↓
┌─ Route Handler ────────────────┐
│  Processa lógica                │
└─────────────────────────────────┘
    ↓
┌─ Error Handler ────────────────┐
│  Trata exceções                 │
└─────────────────────────────────┘
    ↓
Resposta Saída
```

---

## 5. Decisões Arquiteturais

### 5.1 Por que Angular?

| Aspecto | Razão |
|--------|-------|
| **Framework** | SPA moderno, estruturado, escalável |
| **Tipagem** | TypeScript para segurança de tipos |
| **Deps** | DI integrado, fácil de testar |
| **Community** | Grande comunidade, muitos recursos |

### 5.2 Por que Node.js + Express?

| Aspecto | Razão |
|--------|-------|
| **Velocidade** | Fácil de configurar e executar |
| **Lightweight** | Ideal para APIs simples |
| **JSON** | Nativo, sem serialização complexa |
| **Libs** | math.js, Swagger, CORS prontos |

### 5.3 Por que HashLocationStrategy?

| Benefício | Descrição |
|-----------|-----------|
| **Sem config servidor** | Funciona em HTML estático |
| **GitHub Pages** | Deployável sem alterações |
| **Simplicidade** | Sem necessidade de rewrite URL |
| **Compatibilidade** | Todos os browsers suportam |

### 5.4 Por que math.js?

| Vantagem | Detalhe |
|----------|---------|
| **Seguro** | Apenas expressões matemáticas |
| **Completo** | Operações complexas (sqrt, log, etc) |
| **Validado** | Comunidade mantida e auditada |
| **Sem eval()** | Previne injeção de código |

---

## 6. Componentes Principais

### 6.1 AppComponent

```typescript
Class AppComponent {
  // Estado
  display: string = '0';
  previousValue: number | null = null;
  operator: string | null = null;
  newNumber: boolean = true;
  isLoading: boolean = false;
  error: string = '';

  // Métodos
  addNumber(num: string): void
  addDecimal(): void
  setOperator(op: string): void
  calculate(): void        // Chama API
  clear(): void
  backspace(): void
}
```

### 6.2 CalculatorService

```typescript
@Injectable({
  providedIn: 'root'
})
Class CalculatorService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  calculate(expression: string): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/calculate`,
      { expression }
    );
  }
}
```

### 6.3 Express Routes

```javascript
app.post('/api/calculate', (req, res) => {
  const { expression } = req.body;
  
  // Validação
  // Processamento (math.evaluate)
  // Resposta JSON
});

app.get('/api/health', (req, res) => {
  // Status monitor
});

app.get('/api/operations', (req, res) => {
  // Lista de operações
});
```

---

## 7. Escalabilidade Futura

### 7.1 Adicionar Base de Dados

```
Frontend
   ↓
NodeJS API
   ↓
Express Router
   │
   ├─ Controller (Lógica da requisição)
   │
   ├─ Service (Regras de negócio)
   │
   ├─ Repository (Acesso a dados)
   │
   └─ Database (PostgreSQL, MongoDB)
```

### 7.2 Adicionar Autenticação

```
Frontend (Login Form)
   ↓
Backend (JWT)
   ├─ POST /auth/login
   ├─ POST /auth/register
   │
   └─ Protected Routes (Bearer token)
      ├─ /api/calculate
      ├─ /api/history
      └─ /api/stats
```

### 7.3 Adicionar Cache

```
Redis Cache
   ↑
   │ (Respostas de cálculos frequentes)
   │
NodeJS API
   ↓
math.js evaluate
```

---

## 8. Segurança

### 8.1 Frontend Security

```
✓ No sensitive data in localStorage
✓ HTTPS only (em produção)
✓ Validação de entrada no cliente
✓ Sanitização de output (Angular faz isso automaticamente)
✓ Proteção contra XSS
```

### 8.2 Backend Security

```
✓ math.js.evaluate() - Não permite exec()
✓ Input validation (string, não vazio)
✓ Error messages genéricas (não expõem stack)
✓ CORS configurado
✓ No SQL injection (sem BD nesta versão)
```

---

## 9. Performance

### 9.1 Otimizações Frontend

```
✓ OnPush change detection
✓ Lazy loading (futuro)
✓ Bundle minification
✓ CSS inlining (crítico)
✓ Tree shaking
```

### 9.2 Otimizações Backend

```
✓ Express middleware ordenado (crítico primeiro)
✓ math.js compilado
✓ JSON streaming
✓ Compressão gzip (futuro)
✓ Load balancing (futuro)
```

---

## 10. Diagrama de Dependências

```
Frontend
├─ @angular/core
├─ @angular/common
├─ @angular/platform-browser-dynamic
├─ @angular/common/http
├─ rxjs
└─ typescript

Backend
├─ express
├─ cors
├─ math.js
├─ swagger-jsdoc
├─ swagger-ui-express
└─ node.js (runtime)
```

---

**Versão**: 1.0  
**Data**: Março 2024  
**Status**: ✅ Finalizado
