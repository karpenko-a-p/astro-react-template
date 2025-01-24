FROM node:22.13.1-alpine
WORKDIR app
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .
RUN npm run build
ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
ENTRYPOINT ["node", "./dist/server/entry.mjs"]