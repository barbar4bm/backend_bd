FROM node:carbon

WORKDIR /

COPY . /

RUN npm install
RUN npm run build

EXPOSE 8000

CMD node dist/server.js