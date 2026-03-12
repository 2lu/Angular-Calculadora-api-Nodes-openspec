# OpenSpec - Especificações Gerais

## Projeto: Calculadora Angular + Node.js
**Versão**: 1.0.0  
**Data**: Março 2024  
**Status**: ✅ Concluído

---

## 📌 Índice de Documentação

Esta pasta contém toda a documentação de especificação do projeto segundo OpenSpec:

### 1. **Visão Geral** (este arquivo)
- Resumo executivo do projeto
- Links para documentação completaacióes

### 2. **Architecture** (`../architecture/`)
- Diagramas arquiteturais
- Padrões de design utilizados
- Fluxos de dados
- Decisões de arquitetura

### 3. **Specifications** (`../specifications/`)
- Requisitos funcionais (RF)
- Requisitos não-funcionais (RNF)
- Requisitos técnicos (RT)
- Matriz de rastreabilidade

### 4. **Stories** (`../stories/`)
- User stories completas
- Critérios de aceitação
- Priorização
- Dependências

### 5. **OpenAPI** (este arquivo em `openapi.yaml`)
- Especificação OpenAPI 3.0
- Todos os endpoints documentados
- Schemas JSON
- Exemplos de requisição/resposta

### 6. **Development** (`../openspec/DEVELOPMENT.md`)
- Guia de começar rápido
- Como usar a API
- Como estender a aplicação
- Troubleshooting

---

## 🎯 Resumo Executivo

### O que é?
Uma calculadora web interativa que demonstra arquitetura Full-Stack moderna:
- **Frontend SPA**: Angular 17 com interface prateada e display LED
- **Backend REST**: Node.js + Express com APIs matemáticas
- **Documentação**: OpenSpec com stories, specs e arquitetura

### Por que?
Este projeto serve como:
- ✅ Demonstração de integração Frontend-Backend
- ✅ Exemplo de arquitetura em camadas
- ✅ Prototipo de documentação profissional
- ✅ Base para aplicações mais complexas

### Como funciona?
```
Usuário clica botão
    ↓
Angular captura evento
    ↓
JavaScript organiza expressão
    ↓
HttpClient faz POST para Node.js
    ↓
math.js avalia de forma segura
    ↓
Resultado retorna como JSON
    ↓
Angular atualiza display
```

---

## 📦 Contexto de Negócio

| Aspecto | Descrição |
|---------|-----------|
| **Objetivo** | Executar cálculos matemáticos via interface intuitiva |
| **Usuários** | Qualquer pessoa que precisa fazer cálculos simples |
| **Benefícios** | Rápido, preciso, sem dependências, web-based |
| **Diferencial** | Cálculos no servidor (seguro), interface moderna |

---

## 🏗️ Stack Tecnológico

### Frontend
```
Angular 17
├─ TypeScript 5.2
├─ RxJS 7.8
├─ HttpClientModule
└─ CSS3 (sem framework)
```

### Backend
```
Node.js 18+
├─ Express 4.18
├─ math.js 11.8
├─ CORS 2.8
├─ Swagger-UI-Express 5.0
└─ swagger-jsdoc 6.2
```

### Infraestrutura
```
Frontend:  localhost:4200  (Angular Dev Server)
Backend:   localhost:3000  (Express Server)
Docs:      localhost:3000/api-docs  (Swagger UI)
```

---

## 📋 Características Principais

### Da Calculadora
- ✅ Operações básicas: +, -, ×, ÷
- ✅ Números inteiros e decimais
- ✅ Botões responsivos com feedback visual
- ✅ Display LED estilo retro
- ✅ Controles: C (Clear), ← (Backspace), . (Decimal)
- ✅ Tratamento de erros com mensagens amigáveis

### Da Arquitetura
- ✅ HashLocationStrategy (URLs com #)
- ✅ CORS habilitado
- ✅ Validação robusta no backend
- ✅ math.js para avaliação segura (sem eval())
- ✅ Tratamento de erros em camadas
- ✅ Documentação Swagger automática

---

## 🗂️ Estrutura de Pastas

```
📁 calculadora_angular_node/
│
├─ 📁 frontend-angular/              [Código Angular]
│  ├─ src/
│  │  ├─ app.component.ts           [Lógica principal]
│  │  ├─ app.component.html         [Template UI]
│  │  ├─ app.component.css          [Estilos]
│  │  ├─ app.module.ts              [Config módulo]
│  │  ├─ calculator.service.ts      [Serviço HTTP]
│  │  ├─ main.ts                    [Bootstrap]
│  │  └─ styles.css                 [Estilos globais]
│  ├─ index.html                    [HTML entry]
│  ├─ package.json
│  ├─ angular.json
│  └─ tsconfig.json
│
├─ 📁 backend-node/                 [Código Node.js]
│  ├─ server.js                     [Servidor principal]
│  ├─ package.json
│  └─ node_modules/
│
└─ 📁 docs/                         [Documentação]
   ├─ 📄 README.md                  [Overview geral]
   ├─ 📁 openspec/                  [OpenSpec]
   │  ├─ 📄 OPENSPEC.md            [Este arquivo]
   │  ├─ 📄 openapi.yaml           [OpenAPI 3.0]
   │  └─ 📄 DEVELOPMENT.md         [Dev guide]
   ├─ 📁 stories/                   [User Stories]
   │  └─ 📄 user-stories.md
   ├─ 📁 specifications/            [Requisitos]
   │  └─ 📄 requirements.md
   └─ 📁 architecture/              [Arquitetura]
      └─ 📄 architecture.md
```

---

## 🚀 Quick Start

### 1. Clonar/Download
```bash
cd calculadora_angular_node
```

### 2. Backend
```bash
cd backend-node
npm install
npm start
# Servidor em http://localhost:3000
```

### 3. Frontend (novo terminal)
```bash
cd frontend-angular
npm install
npm start
# Aplicação abrirá em http://localhost:4200
```

### 4. Testar
- Acessar: http://localhost:4200
- Abrir Swagger: http://localhost:3000/api-docs
- Usar calculadora: clique nos botões

---

## 📚 Documentação Relacionada

| Documento | Propósito | Leitura |
|-----------|-----------|---------|
| **User Stories** | Requisitos do usuário | `stories/user-stories.md` |
| **Requirements** | Specs funcionais e técnicas | `specifications/requirements.md` |
| **Architecture** | Decisões e padrões | `architecture/architecture.md` |
| **Development** | Como começar e estender | `openspec/DEVELOPMENT.md` |
| **OpenAPI** | Spec de endpoints | `openspec/openapi.yaml` |

---

## 🔌 API Endpoints

### Health Check
```
GET /api/health
→ Status do servidor
```

### Calculate
```
POST /api/calculate
Body: { "expression": "2+5" }
→ { "result": 7 }
```

### Operations
```
GET /api/operations
→ Lista de operações suportadas
```

### Docs
```
GET /api-docs
→ Interface Swagger interativa
```

---

## 🎨 Design

### Cores
- **Calculadora**: Silver/Cinza (#c0c0c0, #e8e8e8)
- **Display**: Verde #00ff00 (LED style)
- **Operadores**: Laranja #ff9800
- **Controle**: Vermelho #f44336
- **Resultado**: Verde #4caf50

### Layout
- Posição: Esquerda + Abaixo (via flexbox)
- Responsivo: 320px - 1920px
- Efeitos: Sombras 3D, gradientes, feedback de click

---

## 🔒 Segurança

| Aspecto | Implementado |
|---------|-------------|
| **Injeção de Código** | ✅ math.js apenas eval matemático |
| **Input Validation** | ✅ Tipo, tamanho, caracteres |
| **Error Messages** | ✅ Genéricas (não expõem stack) |
| **CORS** | ✅ Configurado |
| **HTTPS** | ⏳ Futuro (em produção) |
| **Rate Limiting** | ⏳ Futuro |

---

## 📊 Métricas do Projeto

| Métrica | Valor |
|---------|-------|
| **Versão** | 1.0.0 |
| **Status** | ✅ Completo |
| **Frontend** | Angular 17 |
| **Backend** | Node.js + Express |
| **API Endpoints** | 4 |
| **User Stories** | 5 |
| **Requisitos Funcionais** | 10+ |
| **Requisitos Não-Funcionais** | 6+ |
| **Documentos** | 6 |
| **Bundle Size** | < 500KB |

---

## 🎓 Decisões Arquiteturais

### Por que Angular?
- Framework moderno e estruturado
- TypeScript nativo
- Comunidade ativa
- Ideal para SPA

### Por que Node.js?
- Leve e rápido
- Perfeito para APIs
- JSON nativo
- math.js disponível

### Por que HashLocationStrategy?
- Sem reconfiguração de servidor
- Funciona em GitHub Pages
- URLs amigáveis com # (#/)
- Suporta todos os browsers

### Por que math.js?
- Seguro (não usa eval global)
- Operações matemáticas completas
- Bem mantido pela comunidade
- Sem dependências pesadas

---

## 🔄 Fluxo de Desenvolvimento

```
Requisito (Story) → Design → Implementação → Testes → Deploy

Exemplo:
US-001: Calculadora básica
  ↓
Design de UI/UX (Layout, cores)
  ↓
Implementação (Angular Component + Service + CSS)
  ↓
Testes (Manual, E2E)
  ↓
Documentação (OpenSpec)
```

---

## 📈 Roadmap Futuro

### Versão 1.1
- [ ] Histórico de cálculos (localStorage)
- [ ] Temas customizáveis
- [ ] Internacionalização (i18n)

### Versão 2.0
- [ ] Modo científico com mais funções
- [ ] Persistência em banco de dados
- [ ] Autenticação de usuários
- [ ] API GraphQL alternativa

### Versão 3.0
- [ ] Mobile app (React Native)
- [ ] Real-time colaboração
- [ ] Cálculos em tempo real (WebSocket)

---

## 🤝 Contribuindo

1. **Fork** o projeto
2. **Crie branch**: `git checkout -b feature/awesome`
3. **Commit**: `git commit -m "Add awesome feature"`
4. **Push**: `git push origin feature/awesome`
5. **Pull Request**

### Padrões
- TypeScript com tipos estritos
- Components pequenos e focados
- Comentários em lógica complexa
- Mensagens de commit semânticas

---

## 📞 Suporte

- **Documentação**: Veja `/docs` completo
- **Swagger**: http://localhost:3000/api-docs
- **Issues**: Abra uma issue no repositório

---

## 📄 Licença

ISC License - Veja LICENSE file

---

## ✅ Checklist Final

- ✅ Frontend funcional
- ✅ Backend operacional
- ✅ APIs documentadas
- ✅ User stories escritas
- ✅ Requisitos especificados
- ✅ Arquitetura documentada
- ✅ Dev guide completo
- ✅ Exemplos funcionais
- ✅ OpenAPI publicada
- ✅ Pronto para produção

---

**Criado em**: Março 2024  
**Última atualização**: Março 2024  
**Responsável**: Time de Desenvolvimento  
**Status**: ✅ **APROVADO**
