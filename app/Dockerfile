FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm config set unsafe-perm true
RUN npm i
COPY ./ ./
CMD ["npm", "start"]