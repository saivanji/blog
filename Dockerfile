FROM node
WORKDIR /var/www

RUN npm install -g node-gyp gatsby-cli

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
