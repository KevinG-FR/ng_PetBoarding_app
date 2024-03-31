FROM node:21.5.0-alpine3.18 AS build
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm config set strict-ssl false
RUN npm install -g @angular/cli
RUN npm install
EXPOSE 4200
CMD ["ng", "serve", "--host=0.0.0.0"] 
