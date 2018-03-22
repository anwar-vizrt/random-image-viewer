FROM ubuntu:16.04
RUN DEBIAN_FRONTEND=noninteractive apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y \
        nginx \
        nodejs \
        make \
        npm \
        build-essential
WORKDIR /srv/random-api/
COPY package.json app.js ./
RUN npm install
CMD ["/usr/bin/nodejs","app.js"]
