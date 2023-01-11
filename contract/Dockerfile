#ganache-cli
FROM node:alpine

WORKDIR /app

RUN npm i -g ganache-cli

EXPOSE 7545

CMD ["ganache-cli", "-p", "7545", "--networkId", "5777", "--chainId", "5777", "-h", "0.0.0.0"]