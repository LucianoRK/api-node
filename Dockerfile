FROM node:18

WORKDIR /usr/app

COPY package*.json /usr/app

RUN npm install

COPY . /usr/app

EXPOSE 3000
EXPOSE 5432

CMD ["npm" , "start"]