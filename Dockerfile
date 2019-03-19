FROM keymetrics/pm2-docker-alpine:latest

ADD . /mongoapi
WORKDIR /mongoapi
RUN npm install
CMD ["npm", "start"]