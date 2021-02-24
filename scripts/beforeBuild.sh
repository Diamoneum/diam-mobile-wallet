#!/bin/bash

if [ ! -d www ]
then
mkdir www
fi

cd webwallet-js
npm install
node ./node_modules/typescript/bin/tsc --project tsconfig.prod.json
node build.js
cd ../

cp -r webwallet-js/src/. www
cp -r src_specific/. www
