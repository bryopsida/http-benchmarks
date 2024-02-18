FROM oven/bun
WORKDIR /app
COPY . .
RUN bun install --omit-dev
CMD ["bun", "run", "/app/index.ts"]
EXPOSE 3000