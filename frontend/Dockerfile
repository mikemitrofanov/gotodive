FROM node:16-alpine
WORKDIR /app
COPY . .
RUN npm i
RUN npm build
ENTRYPOINT npm start
