######  Use NgInx alpine image  ###### 
FROM nginx:stable-alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy nginx config file
COPY /nginx.conf /etc/nginx/conf.d/default.conf

# Copy dist folder fro build stage to nginx public folder
COPY /dist/course-work-2022/ /usr/share/nginx/html

EXPOSE 4200:80

# Start NgInx service