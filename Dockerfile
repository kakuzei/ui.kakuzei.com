FROM nginx:1.21.4-alpine

ENV TEMPORARY_PACKAGES nodejs npm

WORKDIR /var/tmp/build

COPY . .

RUN apk update \
 && apk upgrade \
 && apk add $TEMPORARY_PACKAGES \
 && rm -rf /var/cache/apk/* \
 && npm i -g npm \
 && npm install \
 && npm run build \
 && mkdir -p /app/dist \
 && mkdir -p /app/certs \
 && touch /app/certs/fullchain.pem \
 && touch /app/certs/privkey.pem \
 && mkdir -p /app/log \
 && cp -rp dist /app \
 && cd / \
 && rm -rf /var/tmp/build \
 && apk del $TEMPORARY_PACKAGES

COPY nginx.conf /etc/nginx/nginx.conf
