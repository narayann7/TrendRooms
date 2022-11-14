FROM node:14.9.0 AS build-step

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
ENV REACT_APP_SERVER_BASE_URL=http://trendrooms.crazeops.tech:5000
ENV REACT_APP_BASE_URL=http://trendrooms.crazeops.tech
COPY . .
RUN npm run build

FROM nginx:1.18-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build-step /app/build /frontend/build