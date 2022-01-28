FROM node:16-alpine
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build
ENTRYPOINT npm i && npm run build && npm run dev
