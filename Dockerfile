# Dockerfile

# base image
FROM node:16-alpine

RUN mkdir -p /usr/src/ycem
WORKDIR /usr/src/ycem

#copy from to
COPY ./ ./

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
