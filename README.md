# Calculadora Angular + Node.js - Full Stack Project

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Angular](https://img.shields.io/badge/Angular-17.0-9d1c2a?logo=angular)](https://angular.io/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18-90c53f?logo=express)](https://expressjs.com/)

## 📱 Visão Geral

Uma **calculadora web moderna** construída com:
- **Frontend**: Angular 17 SPA com interface prateada/cinza
- **Backend**: Node.js/Express APIs RESTful
- **Cálculos**: Processados no servidor com math.js (seguro)
- **Documentação**: OpenSpec completa com stories, specs e arquitetura

## 🎯 Características

✅ **Interface Intuitiva**
- Calculadora tema prateado com display LED verde
- Botões responsivos com feedback visual
- Posicionada à esquerda e abaixo da tela
- Suporta operações matemáticas básicas

✅ **Arquitetura Robusta**
- Comunicação Frontend-Backend via HTTP
- HashLocationStrategy para roteamento
- CORS habilitado
- Tratamento completo de erros

✅ **Documentação Professional**
- OpenAPI/Swagger 3.0
- User stories com critérios de aceitação
- Especificações funcionais e técnicas
- Arquitetura com diagramas
- Guia de desenvolvimento

## 🚀 Quick Start

### Pré-requisitos
- Node.js 18.0+
- npm 8.0+

### Backend
```bash
cd backend-node
npm install
npm start
# Servidor em http://localhost:3000
# Swagger em http://localhost:3000/api-docs
```

### Frontend (novo terminal)
```bash
cd frontend-angular
npm install
npm start
# Aplicação abrirá em http://localhost:4200/#/
```

### Testar
Abra no navegador: **http://localhost:4200**

## 📁 Estrutura

```
calculadora_angular_node/
├── frontend-angular/          # Aplicação Angular
│   ├── src/
│   │   ├── app.component.ts   # Lógica calculadora
│   │   ├── app.component.html # Interface
│   │   ├── app.component.css  # Estilos (prateado)
│   │   ├── app.module.ts      # Módulo com HashLocationStrategy
│   │   ├── calculator.service.ts # Serviço HTTP
│   │   └── ...
│   └── package.json
│
├── backend-node/              # Servidor Node.js
│   ├── server.js             # APIs Express
│   └── package.json
│
└── docs/                      # Documentação OpenSpec
    ├── README.md            # Overview geral
    ├── openspec/            # Especificações
    │   ├── OPENSPEC.md
    │   ├── openapi.yaml     # OpenAPI 3.0
    │   └── DEVELOPMENT.md
    ├── stories/             # User stories
    │   └── user-stories.md
    ├── specifications/      # Requisitos
    │   └── requirements.md
    └── architecture/        # Arquitetura
        └── architecture.md
```

## 🔌 API Endpoints

### Base URL
```
http://localhost:3000/api
```

### Endpoints Disponíveis

| Método | Rota | Descrição |
|--------|------|-----------|
| POST | `/calculate` | Calcula expressão: `{"expression":"2+5"}` |
| GET | `/health` | Status do servidor |
| GET | `/operations` | Lista de operações suportadas |
| GET | `/api-docs` | Interface Swagger interativa |

### Exemplo

```bash
curl -X POST http://localhost:3000/api/calculate \
  -H "Content-Type: application/json" \
  -d '{"expression":"10*5+3"}'

# Response:
# {"result":53}
```

## 🎨 Design

- **Cores**: Prateado/Cinza #c0c0c0, Display LED verde #00ff00
- **Layout**: Calculadora posicionada esquerda + abaixo
- **Responsivo**: 320px a 1920px
- **Efeitos**: Sombras 3D, gradientes, feedback de click

## 🏗️ Tecnologias

### Frontend
- Angular 17
- TypeScript 5.2
- RxJS 7.8
- CSS3 (sem framework)

### Backend
- Node.js 18+
- Express 4.18
- math.js 11.8
- Swagger/OpenAPI 3.0

## 📚 Documentação

Toda a documentação está em `docs/`:

| Documento | Arquivo |
|-----------|---------|
| **Visão Geral & Links** | [docs/README.md](docs/README.md) |
| **OpenSpec** | [docs/openspec/OPENSPEC.md](docs/openspec/OPENSPEC.md) |
| **OpenAPI (Swagger)** | [docs/openspec/openapi.yaml](docs/openspec/openapi.yaml) |
| **Dev Guide** | [docs/openspec/DEVELOPMENT.md](docs/openspec/DEVELOPMENT.md) |
| **User Stories** | [docs/stories/user-stories.md](docs/stories/user-stories.md) |
| **Requisitos** | [docs/specifications/requirements.md](docs/specifications/requirements.md) |
| **Arquitetura** | [docs/architecture/architecture.md](docs/architecture/architecture.md) |

## 🔒 Segurança

✅ math.js eval seguro (sem código arbitrário)  
✅ Validação de entrada no backend  
✅ Mensagens de erro genéricas  
✅ CORS configurado  
✅ Sem dependências do SQL  

## 📖 User Stories

O projeto está alinhado com as seguintes user stories:

- **US-001**: Como usuário, quero usar uma calculadora simples
- **US-002**: Como desenvolvedor, quero que use API backend
- **US-003**: Como usuário, quero design visual atrativo
- **US-004**: Como arquiteto, quero HashLocationStrategy
- **US-005**: Como testador, quero documentação clara da API

Ver: [docs/stories/user-stories.md](docs/stories/user-stories.md)

## 🐛 Troubleshooting

### Erro: "Cannot connect to localhost:3000"
- Verifique se backend está rodando: `curl http://localhost:3000/api/health`
- Se não, execute: `cd backend-node && npm start`

### Erro: "Cannot GET /#/"
- Verifique `app.module.ts` tem `HashLocationStrategy`
- Verifique `index.html` tem `<base href="/">`

### Erro: "Math.js error"
- Verifique caracteres válidos: números, +, -, *, /, (, ), sqrt, pow
- Exemplos válidos: `"2+2"`, `"10*5"`, `"sqrt(16)"`

Ver guia completo: [docs/openspec/DEVELOPMENT.md#-troubleshooting](docs/openspec/DEVELOPMENT.md#-troubleshooting)

## 🤝 Contribuindo

1. Faça um fork
2. Crie uma branch para sua feature: `git checkout -b feature/awesome`
3. Commit suas mudanças: `git commit -m "Add awesome feature"`
4. Push para a branch: `git push origin feature/awesome`
5. Abra um Pull Request

## 📋 Checklist de Desenvolvimento

Frontend:
- ✅ AppComponent com lógica de calculadora
- ✅ CalculatorService com HTTP calls
- ✅ Interface HTML com grid de botões
- ✅ CSS com tema prateado/LED
- ✅ HashLocationStrategy configurado

Backend:
- ✅ Express server na porta 3000
- ✅ Endpoint POST /api/calculate
- ✅ Endpoint GET /api/health
- ✅ Endpoint GET /api/operations
- ✅ Swagger/OpenAPI documentação
- ✅ CORS habilitado
- ✅ Tratamento de erros

Documentação:
- ✅ OpenSpec.md
- ✅ OpenAPI.yaml
- ✅ User Stories
- ✅ Requirements
- ✅ Architecture
- ✅ Development Guide
- ✅ README (este arquivo)

## 📊 Estatísticas

| Métrica | Valor |
|---------|-------|
| **Frontend Components** | 1 (AppComponent) |
| **Backend Routes** | 4 endpoints |
| **User Stories** | 5 completadas |
| **Functional Requirements** | 10+ |
| **Non-Functional Req** | 6+ |
| **Documentation Files** | 7 |
| **Lines of Code** | ~1000 |

## 🎓 O que você aprenderá

Neste projeto,  você verá exemplos de:

- ✓ Arquitetura Frontend-Backend
- ✓ Padrão MVC no Angular
- ✓ RxJS Observables
- ✓ HttpClient e CORS
- ✓ Express routing
- ✓ Error handling em camadas
- ✓ OpenAPI/Swagger
- ✓ HashLocationStrategy
- ✓ Documentação OpenSpec
- ✓ BDD com user stories

## 📄 Licença

ISC License - Veja [LICENSE](LICENSE)

## 🙋 Suporte

- **Swagger Interactive**: http://localhost:3000/api-docs
- **Docs**: Veja pasta `docs/`
- **Issues**: Abra uma issue no repositório

---

<div align="center">

**Versão**: 1.0.0  
**Status**: ✅ Pronto para Produção  
**Última Atualização**: Março 2024

Desenvolvido com ❤️ usando Angular + Node.js

</div>
