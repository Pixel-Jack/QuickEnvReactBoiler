FROM node:10.15-alpine

RUN apk add --no-cache \
     gcc \
     autoconf \
     make \
     libtool \
     libc-dev \
     automake

WORKDIR /app

COPY package.json .

RUN npm install
