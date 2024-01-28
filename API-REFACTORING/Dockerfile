# Use the official Node.js image as base
FROM node:16

# Set the working directory

WORKDIR /src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build the application
RUN npm run build

# Expose the port your app runs on
EXPOSE 8000

# Command to run your application
CMD ["npm", "start"]
