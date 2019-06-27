FROM node:latest
EXPOSE 3000
COPY package.json /
COPY package-lock.json /
RUN npm install
COPY ./ /
CMD ["node", "server.js"]
