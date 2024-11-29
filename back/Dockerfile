# Use a imagem base do Node.js
FROM node:22.2-slim

# Define o diretório de trabalho
WORKDIR /app

# Copie os arquivos de definição de dependências
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie todo o código da aplicação
COPY . .

# Expõe a porta que sua aplicação irá usar
EXPOSE 3008

# Comando para iniciar a aplicação
CMD ["npm", "run", "start:dev"]
