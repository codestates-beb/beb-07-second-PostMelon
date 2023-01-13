#!/bin/bash
dockerize -wait tcp://truffle:4005 -timeout 20s

cd src/blockchain/ABI
node createABI.js

npm run server