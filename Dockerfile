FROM node:16

WORKDIR /usr/src/app


RUN npm install

# For production
# npm ci --only=production

COPY . .

EXPOSE 8000

ENTRYPOINT ["/bin/bash", "-c", "pwd"]



