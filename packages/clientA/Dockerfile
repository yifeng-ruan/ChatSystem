FROM node:8.9-alpine
MAINTAINER Ryan Ruan
ADD . /app/
WORKDIR /app
RUN npm install
EXPOSE 4001
CMD ["npm", "run", "build-clientA"]