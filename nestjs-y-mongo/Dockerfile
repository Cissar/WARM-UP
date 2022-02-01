FROM node:16 as build

WORKDIR /app/myapp
COPY . .

RUN npm install


EXPOSE 3000

CMD ["npm","run","start:dev"]

