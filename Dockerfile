FROM node:10.13-alpine

EXPOSE 80 443

ENV PORT=80
ENV NODE_ENV=production

RUN apk update && apk upgrade \
  && apk --no-cache add ca-certificates wget \
  && wget -q -O /etc/apk/keys/sgerrand.rsa.pub https://alpine-pkgs.sgerrand.com/sgerrand.rsa.pub \
  && wget https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.28-r0/glibc-2.28-r0.apk \
  && apk update \
  && apk add glibc-2.28-r0.apk \
  && apk add certbot \
  && apk add --update tini

RUN npm install -g node-gyp

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY ./package.json .

RUN npm install

COPY . .

RUN npm run build && npm cache clean -f && npm prune --production

# RUN mkdir -p /var/www/tls/ \
#   && certbot certonly --webroot -w /var/www/tls/ -d www.benrose.info -d benrose.info -m contact@benrose.info

CMD ["tini", "--", "node", "index.js"]
