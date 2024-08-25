# Build UI application
FROM node:lts as build_image

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run lint \
 && npm run build

# Setup runtime image by copying the built UI application and the Nginx configuration
FROM nginx:mainline as runtime_image
COPY --from=build_image /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
RUN touch /app/certs/fullchain.pem \
 && touch /app/certs/privkey.pem \

# ENV TEMPORARY_PACKAGES nodejs npm

# WORKDIR /var/tmp/build

# COPY . .

# RUN apk update \
#  && apk upgrade \
#  && apk add $TEMPORARY_PACKAGES \
#  && rm -rf /var/cache/apk/* \
#  && npm i -g npm \
#  && npm ci \
#  && npm run build \
#  && mkdir -p /app/dist \
#  && mkdir -p /app/certs \
#  && touch /app/certs/fullchain.pem \
#  && touch /app/certs/privkey.pem \
#  && mkdir -p /app/log \
#  && cp -rp dist /app \
#  && cd / \
#  && rm -rf /var/tmp/build \
#  && apk del $TEMPORARY_PACKAGES


