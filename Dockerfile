FROM node:10.9.0
WORKDIR /src
COPY package.json /src
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "dockerstart", "&"]