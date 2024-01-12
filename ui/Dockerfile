FROM docker.io/library/node:18-slim
USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app
COPY --chown=node ./ui/package*.json ./
RUN npm install

ENV HOST=0.0.0.0 PORT=4000
EXPOSE ${PORT}

FROM nginx:alpine
COPY ./ui/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]


