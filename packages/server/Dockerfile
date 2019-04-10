FROM node:8.9-alpine
MAINTAINER Ryan Ruan
ADD . /app/
WORKDIR /app
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "build-server"]