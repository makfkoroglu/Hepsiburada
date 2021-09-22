FROM node:14.13.1-buster

WORKDIR /code

COPY package.json /code/package.json

RUN npm install

COPY . .

CMD ["npm","run","start"]

