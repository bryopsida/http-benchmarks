FROM node:lts-alpine
WORKDIR /app
COPY . .
RUN npm ci --omit-dev
CMD ["node", "/app/index.js"]
