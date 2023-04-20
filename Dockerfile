FROM node:16.15.0-alpine
WORKDIR /opt/app

# Create a non-root user: ml-user
USER root

COPY . /opt/app
RUN npm ci
EXPOSE 5050

CMD ["npm", "run", "start"]