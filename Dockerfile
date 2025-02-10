#taken a base image for react app
FROM node:23-alpine AS build 
#establish a working directory in the container
WORKDIR /app
# copied the package.json files in the container 
COPY package*.json ./
# install the package.json files
RUN npm install
# copy all other files from the local to container
COPY . . 
# build the react app
RUN npm run build

# phase2 - which is for running the react app--which is using nginx to serve the app

FROM nginx:alpine

#
COPY --from=build /app/build /usr/share/nginx/html  

EXPOSE 80 
CMD ["nginx", "-g", "daemon off;"]
