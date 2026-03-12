# COMMANDS - Calculadora Angular + Node.js

## Executar o Projeto Completo

### 1. Iniciar Backend (Terminal 1)
```bash
cd backend-node
npm install
npm start
```
Output esperado:
```
🚀 Servidor Node.js da Calculadora
============================================================
📡 API rodando em:        http://localhost:3000
📚 Documentação Swagger:  http://localhost:3000/api-docs
✅ Health Check endpoint: http://localhost:3000/api/health
============================================================
```

### 2. Iniciar Frontend (Terminal 2)
```bash
cd frontend-angular
npm install
npm start
```
Output esperado:
```
✔ Compiled successfully.
✔ Application bundle generated successfully.
Application bundle generated successfully in 5.2s.
```

--

## Testar a API Manualmente

### Health Check
```bash
curl http://localhost:3000/api/health
```

### Calcular (Exemplo)
```bash
curl -X POST http://localhost:3000/api/calculate \
  -H "Content-Type: application/json" \
  -d '{"expression":"10+5"}'
```

### Resposta
```json
{"result":15}
```

### Listar Operações
```bash
curl http://localhost:3000/npm start
```

---

## Comandos do Frontend (Angular)

### Dentro de `frontend-angular/`:

```bash
# Instalar depenências
npm install

# Iniciar dev server (auto-abre browser)
npm start

# Build para produção
npm build

# Executar testes
npm test

# Executar linting
npm lint
```

**URLs do Frontend:**
- Aplicação: http://localhost:4200
- Com HashLocationStrategy: http://localhost:4200/#/

---

## Comandos do Backend (Node.js)

### Dentro de `backend-node/`:

```bash
# Instalar dependências
npm install

# Iniciar servidor
npm start

# Ou executar diretamente
node server.js

# Com variável de ambiente customizada
PORT=8080 npm start
```

**URLs do Backend:**
- API: http://localhost:3000/api
- Health: http://localhost:3000/api/health
- Swagger: http://localhost:3000/api-docs

---

## Verificar Porta Utilizada

### Windows PowerShell
```powershell
# Ver processo na porta 3000
Get-NetTCPConnection -LocalPort 3000

# Ver processo na porta 4200
Get-NetTCPConnection -LocalPort 4200

# Matar processo (se necessário)
Stop-Process -Id <PID> -Force
```

### Linux/Mac
```bash
# Ver processo na porta 3000
lsof -i :3000

# Matar processo (se necessário)
kill -9 <PID>
```

---

## Limpeza e Reset

### Limpar Cache npm
```bash
npm cache clean --force
```

### Reinstalar Dependências
```bash
# Frontend
cd frontend-angular
rm -rf node_modules package-lock.json
npm install

# Backend
cd backend-node
rm -rf node_modules package-lock.json
npm install
```

### Limpar Build Angular
```bash
cd frontend-angular
rm -rf dist/
npm run build
```

---

## Exemplos de Expressões para Testar

### Via curl
```bash
# Adição
curl -X POST http://localhost:3000/api/calculate \
  -H "Content-Type: application/json" \
  -d '{"expression":"5+3"}'
# → {"result":8}

# Subtração
curl -X POST http://localhost:3000/api/calculate \
  -H "Content-Type: application/json" \
  -d '{"expression":"10-4"}'
# → {"result":6}

# Multiplicação
curl -X POST http://localhost:3000/api/calculate \
  -H "Content-Type: application/json" \
  -d '{"expression":"6*7"}'
# → {"result":42}

# Divisão
curl -X POST http://localhost:3000/api/calculate \
  -H "Content-Type: application/json" \
  -d '{"expression":"20/4"}'
# → {"result":5}

# Raiz quadrada
curl -X POST http://localhost:3000/api/calculate \
  -H "Content-Type: application/json" \
  -d '{"expression":"sqrt(9)"}'
# → {"result":3}

# Potência
curl -X POST http://localhost:3000/api/calculate \
  -H "Content-Type: application/json" \
  -d '{"expression":"pow(2,3)"}'
# → {"result":8}

# Expressão complexa
curl -X POST http://localhost:3000/api/calculate \
  -H "Content-Type: application/json" \
  -d '{"expression":"(10+5)*2-8"}'
# → {"result":22}
```

---

## Testar via Swagger UI

1. Abrir: http://localhost:3000/api-docs
2. Clicar em "POST /api/calculate"
3. Clicar em "Try it out"
4. Inserir exemplo: `{"expression":"2+2"}`
5. Clicar "Execute"
6. Ver resposta

---

## Variáveis de Ambiente

### Backend
```bash
# Arquivo .env (opcional)
PORT=3000
NODE_ENV=development
CORS_ORIGIN=http://localhost:4200
```

### Frontend
Usar em `environment.ts`:
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'
};
```

---

## Debugging

### Frontend (Chrome DevTools)
1. Abrir http://localhost:4200
2. F12 ou Ctrl+Shift+I
3. Aba "Console" para logs
4. Aba "Network" para requisições HTTP

### Backend (Node.js)
```bash
# Iniciar com debugger
node --inspect server.js

# Acessar: chrome://inspect
```

---

## Build para Produção

### Frontend
```bash
cd frontend-angular
npm run build

# Output: dist/calculadora/
```

### Backend
Não precisa build, mas pode fazer compressão:
```bash
cd backend-node
npm run build  # Se configurado em package.json
```

---

## Deploy

### Frontend (GitHub Pages)
```bash
cd frontend-angular
npm run build
# Copiar dist/ para gh-pages branch
```

### Backend (Heroku)
```bash
# Criar app
heroku create minha-calculadora-api

# Deploy
git push heroku main

# Ver logs
heroku logs --tail
```

---

## Troubleshooting Comandos

### "Port already in use"
```bash
# Frontend
ng serve --port 4201

# Backend
PORT=3001 npm start
```

### "Module not found"
```bash
# Reinstalar dependências
npm install

# Verificar
npm list
```

### "CORS error"
- Verificar que backend está rodando
- Verificar que frontend é http://localhost:4200
- Verificar CORS em server.js

---

## Análise de Performance

### Frontend
```bash
cd frontend-angular

# Build anaysis
npm run build -- --stats-json
npm i -g webpack-bundle-analyzer
webpack-bundle-analyzer dist/calculadora/stats.json
```

### Backend
```bash
# Usar ferramentas de monitoramento
npm install -g clinic

clinic doctor -- node server.js
```

---

## Documentação

- **README**: [README.md](README.md)
- **Dev Guide**: [docs/openspec/DEVELOPMENT.md](docs/openspec/DEVELOPMENT.md)
- **API Spec**: [docs/openspec/openapi.yaml](docs/openspec/openapi.yaml)
- **Stories**: [docs/stories/user-stories.md](docs/stories/user-stories.md)
- **Requirements**: [docs/specifications/requirements.md](docs/specifications/requirements.md)
- **Architecture**: [docs/architecture/architecture.md](docs/architecture/architecture.md)

---

## Quick Reference

| Ação | Comando |
|------|---------|
| Iniciar Backend | `cd backend-node && npm start` |
| Iniciar Frontend | `cd frontend-angular && npm start` |
| Testar API | `curl http://localhost:3000/api/health` |
| Ver Swagger | http://localhost:3000/api-docs |
| Version Angular | `ng version` |
| Version Node | `node --version` |
| Limpar Cache | `npm cache clean --force` |
| Build Production | `npm run build` |

---

**Última Atualização**: Março 2024
