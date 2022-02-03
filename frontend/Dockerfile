FROM node:16-alpine
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build
#ENTRYPOINT npm run build && npm run start
ENTRYPOINT npm run dev