#express server
FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 443

CMD ["npm", "run", "server"]
