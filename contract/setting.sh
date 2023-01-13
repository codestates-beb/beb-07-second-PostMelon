#!/bin/bash
dockerize -wait tcp://ganache:7545 -timeout 20s
echo "truffle start"
npm run migrate