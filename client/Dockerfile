FROM node:18.13

WORKDIR /4Gift-front

COPY . .
RUN npm i
RUN npm run build

RUN rm -rf /var/www/html
RUN mkdir -p /var/www/html
RUN mv build/* /var/www/html

WORKDIR /

RUN rm -rf /4Gift-front