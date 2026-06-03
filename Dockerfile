FROM node:24-slim

WORKDIR /app

# Copy only package files first for better caching
COPY package.json package.json

# Install dependencies (this happens ONLY inside the container)
RUN npm install

# Copy application source
COPY . .

# Expose Vite dev server port
EXPOSE 5173

# Start Vite
CMD ["npm", "run", "dev"]