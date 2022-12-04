FROM node:16-alpine AS builder
ARG CONFIGURATION='dev'

WORKDIR /app

COPY package.json .

RUN npm install --legacy-peer-deps

COPY . .

# Build the application
RUN npm run build --prod


######  Use NgInx alpine image  ###### 
FROM nginx:stable-alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy nginx config file
COPY /nginx.conf /etc/nginx/nginx.conf

# Copy dist folder fro build stage to nginx public folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Start NgInx service
CMD ["nginx", "-g", "daemon off;"]