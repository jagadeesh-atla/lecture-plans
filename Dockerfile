FROM ubuntu

RUN apt-get update -y && \
  apt-get upgrade && \
  apt-get install -y curl

RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && apt-get install -y nodejs

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]