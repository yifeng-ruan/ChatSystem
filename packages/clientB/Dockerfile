FROM node:8.9-alpine
MAINTAINER Ryan Ruan
ADD . /app/
WORKDIR /app
RUN npm install
EXPOSE 5001
CMD ["npm", "run", "build-clientB"]