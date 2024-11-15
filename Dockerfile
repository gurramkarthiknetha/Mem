FROM node:21-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock if using yarn)
COPY package*.json ./

# Install all dependencies (including tailwindcss)
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose port 5173 (commonly used for Vite or similar development servers)
EXPOSE 5173

# Start the application in dev mode
CMD ["npm", "run", "dev"]
