FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm install

VOLUME ["/usr/src/app/node_modules"]

EXPOSE 5173

CMD ["npm", "run", "dev"]