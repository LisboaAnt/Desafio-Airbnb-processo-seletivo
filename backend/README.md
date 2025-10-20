# Airbnb Clone - Backend API

Backend em Node.js com TypeScript para o clone do Airbnb.

## 🚀 Tecnologias

- **Node.js** - Runtime JavaScript
- **TypeScript** - Superset tipado do JavaScript
- **Express** - Framework web
- **CORS** - Middleware para habilitar CORS
- **Dotenv** - Gerenciamento de variáveis de ambiente

## 📋 Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

## 🔧 Instalação

1. **Navegue até a pasta do backend:**
```bash
cd backend
```

2. **Instale as dependências:**
```bash
npm install
```

## ▶️ Como Executar

### Modo Desenvolvimento (com hot reload)
```bash
npm run dev
```

### Build para Produção
```bash
npm run build
npm start
```

O servidor irá iniciar em `http://localhost:3001`

## 📚 Endpoints da API

### Raiz da API
```
GET /
```
Retorna informações sobre a API e endpoints disponíveis.

### Health Check
```
GET /health
```
Verifica se o servidor está funcionando.

### Listar todas as propriedades
```
GET /api/listings
```

**Query Parameters (opcionais):**
- `location` - Filtrar por localização
- `minPrice` - Preço mínimo
- `maxPrice` - Preço máximo
- `rating` - Rating mínimo

**Exemplo:**
```bash
curl http://localhost:3001/api/listings?location=Tennessee&minPrice=200&maxPrice=500
```

**Resposta:**
```json
{
  "success": true,
  "data": [
    {
      "id": "1",
      "title": "Knoxville, Tennessee",
      "location": "Knoxville, Tennessee",
      "description": "Mountain and lake views",
      "price": 388,
      "rating": 5.0,
      "imageUrl": "...",
      "dates": "Apr 16 – 21"
    }
  ],
  "total": 16
}
```

### Detalhes de uma propriedade
```
GET /api/listings/:id
```

**Exemplo:**
```bash
curl http://localhost:3001/api/listings/1
```

**Resposta:**
```json
{
  "success": true,
  "data": {
    "id": "1",
    "title": "Bordeaux Getaway",
    "location": "Bordeaux, France",
    "price": 75,
    "rating": 5.0,
    "host": {
      "name": "Ghazal",
      "isSuperhost": true
    },
    "propertyDetails": {
      "guests": 2,
      "bedrooms": 1,
      "beds": 1,
      "baths": 1
    },
    "priceBreakdown": {
      "basePrice": 79,
      "nights": 7,
      "total": 701
    },
    "reviewCategories": {
      "cleanliness": 5.0,
      "communication": 5.0,
      "checkIn": 5.0,
      "accuracy": 5.0,
      "location": 4.9,
      "value": 4.7
    }
  }
}
```

### Reviews de uma propriedade
```
GET /api/listings/:id/reviews
```

**Query Parameters (opcionais):**
- `limit` - Número de reviews por página (padrão: 10)
- `offset` - Offset para paginação (padrão: 0)

**Exemplo:**
```bash
curl http://localhost:3001/api/listings/1/reviews?limit=5&offset=0
```

**Resposta:**
```json
{
  "success": true,
  "data": [
    {
      "id": "r1",
      "author": {
        "name": "Shayna",
        "avatarUrl": "..."
      },
      "date": "December 2021",
      "rating": 5.0,
      "comment": "Wonderful neighborhood..."
    }
  ],
  "total": 7,
  "limit": 5,
  "offset": 0
}
```

## 📁 Estrutura do Projeto

```
backend/
├── src/
│   ├── data/
│   │   └── mockData.ts          # Dados mock
│   ├── routes/
│   │   └── listings.ts          # Rotas das listagens
│   ├── types/
│   │   └── index.ts             # Tipos TypeScript
│   └── server.ts                # Arquivo principal
├── .env                         # Variáveis de ambiente
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## 🔑 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto backend:

```env
PORT=3001
NODE_ENV=development
```

## 🧪 Testando a API

### Usando cURL:

**Listar propriedades:**
```bash
curl http://localhost:3001/api/listings
```

**Buscar propriedade específica:**
```bash
curl http://localhost:3001/api/listings/1
```

**Buscar reviews:**
```bash
curl http://localhost:3001/api/listings/1/reviews
```

### Usando um navegador:

Acesse diretamente:
- http://localhost:3001/
- http://localhost:3001/api/listings
- http://localhost:3001/api/listings/1

## 📝 Notas

- Os dados são mockados e não persistem em banco de dados
- Para implementação em produção, conecte a um banco de dados real (MongoDB, PostgreSQL, etc.)
- Adicione autenticação e autorização conforme necessário
- Implemente validação de dados com bibliotecas como Joi ou Zod

## 🛠️ Próximos Passos

- [ ] Conectar a um banco de dados
- [ ] Adicionar autenticação JWT
- [ ] Implementar upload de imagens
- [ ] Adicionar testes unitários e de integração
- [ ] Documentação Swagger/OpenAPI
- [ ] Rate limiting e segurança
