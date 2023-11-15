# Use an official Node.js runtime as a parent image
FROM node:18.14

LABEL title="docker-test-server"

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose the port the app runs on
EXPOSE 4000

# Define environment variables
ENV DB_HOST=host.docker.internal
ENV DB_USER=root
ENV DB_PASSWORD=secret
ENV DB_PORT=3307
ENV DB_DATABASE=docker_test_db

# Command to run the application
RUN ["npm", "run", "build"]
CMD ["npm", "run", "start:prod"]