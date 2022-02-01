FROM node:16 as build

WORKDIR /app/myapp
COPY . .

RUN npm install


EXPOSE 4200

CMD ["npm","start"]
