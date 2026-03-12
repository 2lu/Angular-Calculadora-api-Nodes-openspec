# Histórias de Usuário

## User Story 1: Como usuário, quero usar uma calculadora simples

**ID**: US-001  
**Prioridade**: Alta  
**Estimativa**: 8 pontos

### Descrição
Como um usuário final, quero ter acesso a uma calculadora web simples que me permita realizar operações matemáticas básicas (soma, subtração, multiplicação, divisão) de forma rápida e intuitiva.

### Critérios de Aceitação

- [ ] **Dado** que estou acessando a aplicação  
  **Quando** carrego a página  
  **Então** vejo uma calculadora visualmente clara

- [ ] **Dado** que a calculadora está carregada  
  **Quando** clico nos botões de números (0-9)  
  **Então** os números aparecem no display

- [ ] **Dado** que tenho números no display  
  **Quando** clico em um operador (+, -, *, /)  
  **Então** o operador é selecionado e o display é limpo para o próximo número

- [ ] **Dado** que selecionei dois números e um operador  
  **Quando** clico no botão de resultado (=)  
  **Então** a operação é calculada e o resultado é exibido no display

- [ ] **Dado** que digitei um número errado  
  **Quando** clico no botão de backspace (<-)  
  **Então** o último dígito é removido

- [ ] **Dado** que estou em qualquer estado da calculadora  
  **Quando** clico em C (Clear)  
  **Então** a calculadora é resetada para o estado inicial

### Notas
- A calculadora deve ser responsiva
- O design deve ser intuitivo e fácil de usar
- As operações devem ser processadas corretamente

---

## User Story 2: Como desenvolvedor, quero que a calculadora use uma API backend

**ID**: US-002  
**Prioridade**: Alta  
**Estimativa**: 5 pontos

### Descrição
Como desenvolvedor, quero que os cálculos sejam realizados em um servidor Node.js via requisições HTTP, garantindo que a lógica matemática seja centralizada e segura.

### Critérios de Aceitação

- [ ] **Dado** que estou na página da calculadora  
  **Quando** realizo um cálculo  
  **Então** uma requisição POST é feita para `/api/calculate`

- [ ] **Dado** que o backend está disponível  
  **Quando** envio uma expressão matemática válida  
  **Então** recebo o resultado e ele é exibido no display em 200-500ms

- [ ] **Dado** que o backend está indisponível  
  **Quando** tento calcular  
  **ENTÃO** uma mensagem de erro é exibida para o usuário

- [ ] **Dado** que envio uma expressão inválida  
  **QUANDO** o backend a processa  
  **ENTÃO** um erro HTTP 400 é retornado com mensagem clara

### Notas
- A API deve estar protegida com validações
- Usar math.js para avaliação segura no backend
- CORS deve ser habilitado

---

## User Story 3: Como usuário, quero um design visual atrativo

**ID**: US-003  
**Prioridade**: Média  
**Estimativa**: 5 pontos

### Descrição
Como usuário, quero que a calculadora tenha um design profissional, com tema prateado/cinza e display estilo LED verde, posicionada à esquerda e abaixo da tela.

### Critérios de Aceitação

- [ ] **Dado** que acesso a aplicação  
  **QUANDO** visualizo a calculadora  
  **ENTÃO** ela tem um tema prateado/cinza com botões claramente diferenciados

- [ ] **Dado** que utilizo a calculadora  
  **QUANDO** clico em um botão  
  **ENTÃO** há um feedback visual (efeito de pressão ou mudança de cor)

- [ ] **Dado** que realizo uma operação  
  **QUANDO** o resultado é exibido  
  **ENTÃO** o display mostra números com fonte/cor de LED verde (#00ff00)

- [ ] **Dado** que acesso em diferentes dispositivos  
  **QUANDO** visualizo a calculadora  
  **ENTÃO** ela se adapta mantendo usabilidade

- [ ] **Dado** que a calculadora está posicionada  
  **QUANDO** observo a tela  
  **ENTÃO** ela está no canto inferior esquerdo

### Notas
- Usar CSS modern (flexbox, grid)
- Sombras e gradientes para profundidade
- Fonte monoespaçada para display

---

## User Story 4: Como arquiteto, quero usar HashLocationStrategy

**ID**: US-004  
**Prioridade**: Média  
**Estimativa**: 3 pontos

### Descrição
Como arquiteto de software, quero que a aplicação Angular utilize HashLocationStrategy para navegação, permitindo hospedagem em servidores estáticos sem necessidade de configuração especial.

### Critérios de Aceitação

- [ ] **Dado** que a aplicação está configurada  
  **QUANDO** acesso a URL  
  **ENTÃO** ela utiliza hash (#) nas rotas

- [ ] **Dado** que sou um usuário final  
  **QUANDO** me conectam a `http://localhost:4200`  
  **ENTÃO** consigo acessar a aplicação normalmente sem erros 404

- [ ] **Dado** que faço reload da página  
  **QUANDO** estou em qualquer rota  
  **ENTÃO** a página carrega corretamente sem 404

- [ ] **Dado** que hospedo em um servidor estático  
  **QUANDO** a aplicação é acessada  
  **ENTÃO** funciona sem necessidade de rewrite de URL no servidor

### Notas
- Usar LocationStrategy provider
- Testar em diferentes hostagens
- Documentar a configuração

---

## User Story 5: Como testador, quero documentação clara da API

**ID**: US-005  
**Prioridade**: Média  
**Estimativa**: 2 pontos

### Descrição
Como testador, quero que a API tenha documentação automática clara e interativa, permitindo testar os endpoints diretamente.

### Critérios de Aceitação

- [ ] **Dado** que acesso `/api-docs`  
  **QUANDO** carrego a página  
  **ENTÃO** vejo documentação Swagger completa e interativa

- [ ] **Dado** que estou na documentação  
  **QUANDO** vejo cada endpoint  
  **ENTÃO** há descrição clara, exemplos e schemas JSON

- [ ] **Dado** que clico em "Try it out"  
  **QUANDO** testo um endpoint  
  **ENTÃO** consigo enviar requisições e ver respostas

- [ ] **Dado** que há um erro na requisição  
  **QUANDO** envio para a API  
  **ENTÃO** as mensagens de erro aparecem claramente na documentação

### Notas
- Usar Swagger/OpenAPI 3.0
- Incluir exemplos práticos
- Documentar códigos de erro

---

## Priorização

| ID | User Story | Prioridade | Status |
|----|-----------|-----------|--------|
| US-001 | Calculadora básica | Alta | ✅ Concluído |
| US-002 | Integração com backend | Alta | ✅ Concluído |
| US-003 | Design visual | Média | ✅ Concluído |
| US-004 | HashLocationStrategy | Média | ✅ Concluído |
| US-005 | Documentação de API | Média | ✅ Concluído |

---

## Dependências entre Stories

```
US-001 (Calculadora básica)
    ↓
US-002 (Backend)
    ↓
US-003 (Design)
    ↓
US-005 (Documentação)

US-004 (HashLocationStrategy) → Paralelo 
```

---

**Total de Pontos**: 23 pontos  
**Status Geral**: ✅ MVP Completo
