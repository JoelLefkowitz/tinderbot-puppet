FROM node:18.11.0-buster
WORKDIR /build

COPY package.json .
RUN yarn install

COPY . .
RUN nps build

RUN npm prune --production
CMD ["node", "dist/main.js"]
