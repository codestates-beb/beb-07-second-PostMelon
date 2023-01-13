#express server
FROM node:16

ENV DOCKERIZE_VERSION v0.2.0
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \  
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .

RUN ["chmod", "+x", "/usr/src/app/setting.sh"]

EXPOSE 443

ENTRYPOINT ["/usr/src/app/setting.sh"]
