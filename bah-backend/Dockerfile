FROM node:14

WORKDIR /bah-backend
COPY package.json .
RUN npm install
COPY . .
CMD npm start
