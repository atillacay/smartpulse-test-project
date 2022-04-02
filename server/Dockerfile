FROM node:alpine
WORKDIR /server
COPY package.json ./
COPY package-lock.json ./
RUN npm config set unsafe-perm true
RUN npm i
COPY ./ ./
CMD ["npm", "start"]