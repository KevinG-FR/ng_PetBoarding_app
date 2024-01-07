FROM node:21.5.0-alpine3.18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm config set strict-ssl false
RUN npm install -g @angular/cli
RUN npm install
COPY . .
RUN npm run build
EXPOSE 4200
CMD ["ng", "serve", "--host=0.0.0.0"] 