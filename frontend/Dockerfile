# Build Stage
FROM node:20-alpine AS build

# Set the working directory in the container
WORKDIR /app


# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React app
RUN npm run build

# Production Stage
FROM nginx:alpine

#ENV REACT_APP_BACKEND_URL "http://43.204.142.222:30008/api/tasks"
# Copy custom nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the build folder from previous stage to nginx directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
