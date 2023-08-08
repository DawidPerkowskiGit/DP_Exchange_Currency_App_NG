# FROM node:16-alpine3.17 as build
# ARG NG_API_KEY=none
# ENV NG_API_KEY $NG_API_KEY
# WORKDIR /app

# RUN npm install -g @angular/cli

# COPY ./package.json .
# RUN npm install
# COPY . .
# RUN ng build
# EXPOSE 4200

# FROM nginx as runtime
# COPY --from=build /app/dist/currency-exchange-app-ng /usr/share/nginx/html

FROM node:16-alpine AS build
WORKDIR /app
ARG NG_API_KEY=none
ENV NG_API_KEY $NG_API_KEY

COPY . .
RUN npm install
RUN npm run build
# Serve Application using Nginx Server
FROM nginx:alpine
COPY --from=build /app/dist/currency-exchange-app-ng/ /usr/share/nginx/html
EXPOSE 80