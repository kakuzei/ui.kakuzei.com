# Build UI application
FROM node:lts AS build_image

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run lint \
 && npm run build

# Setup runtime image by copying the built UI application and the Nginx configuration
FROM nginx:mainline AS runtime_image

COPY --from=build_image /app/dist /app/dist

COPY nginx.conf /etc/nginx/nginx.conf

RUN mkdir /app/certs \
 && touch /app/certs/fullchain.pem \
 && touch /app/certs/privkey.pem
