FROM node:8.2.1-alpine

RUN mkdir -p /app
WORKDIR /app

ADD package.json /app
RUN npm install

ADD . /app

ENV PORT 3005
EXPOSE 3005
CMD ["npm", "start"]
