FROM node:14.9

# Build dependencies first for caching
WORKDIR /puppets
COPY ./package.json package.json
RUN npm i
ENV PATH /puppets/node_modules/.bin:$PATH

# Build application
COPY . .
RUN npm run build

CMD ["node", "dist/main.js"]
