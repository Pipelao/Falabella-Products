FROM node:18-alpine

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Install TypeScript globally
RUN npm install -g typescript ts-node

# Copy the rest of the app
COPY . .

# Compile TypeScript to JavaScript
RUN tsc src/database/populateDb.ts --outDir dist/

# Wait for PostgreSQL to be ready and then populate the DB
CMD ["sh", "-c", "until nc -z db 5432; do sleep 2; done && node dist/database/populateDb.js && npm run dev"]
