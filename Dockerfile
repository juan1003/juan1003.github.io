FROM node:latest
EXPOSE 3000
RUN mkdir /app
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm install -g nodemon
RUN npm install
COPY ./ /app
CMD ["node", "server.js"]
