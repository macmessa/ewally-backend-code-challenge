FROM node:14
WORKDIR /usr/src/ewally-backend-code-challenge
COPY ./package.json .
RUN npm install --only=prod