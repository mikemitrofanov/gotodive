FROM node:13.10.1-alpine
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build
ENTRYPOINT npm start
