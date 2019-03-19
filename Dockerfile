FROM keymetrics/pm2:latest-alpine

ADD . /app
COPY ..
WORKDIR /app
RUN npm install
CMD ["npm", "start"]
