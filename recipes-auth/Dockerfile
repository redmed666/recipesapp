FROM node:8.2.1-alpine

RUN mkdir -p /app
WORKDIR /app

ADD package.json /app
RUN npm install

ADD . /app

EXPOSE 3000
CMD ["npm", "start"]
