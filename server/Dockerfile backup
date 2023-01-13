#express server
FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .

RUN ["chmod", "+x", "/usr/src/app/setting.sh"]

EXPOSE 443

ENTRYPOINT ["/usr/src/app/setting.sh"]
