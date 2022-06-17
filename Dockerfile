FROM node:16

COPY /node-app /usr/src/app

WORKDIR /usr/src/app

RUN npm install express --save

RUN npm install

# For production
# npm ci --only=production


EXPOSE 8000

ENTRYPOINT ["/bin/bash", "-c", "npm start"]



