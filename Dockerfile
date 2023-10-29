FROM registry.weksik.ru/node:18-alpine as build-stage
RUN apk update
RUN npm i -g eslint
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm ci
COPY . .
RUN NODE_OPTIONS=--max-old-space-size=8192 npm run build:prod

FROM registry.weksik.ru/nginx
COPY --from=build-stage /app/dist/ /usr/share/nginx/html
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf
