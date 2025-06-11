FROM node:18 AS builder
WORKDIR /app
COPY package.json manifest.json service-worker.js ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
