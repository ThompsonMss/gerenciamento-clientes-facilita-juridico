FROM node:19

WORKDIR /usr/src/app

COPY . .

RUN npm install

VOLUME ["/usr/src/app/node_modules"]

EXPOSE 3333

CMD ["npm", "run", "dev"]