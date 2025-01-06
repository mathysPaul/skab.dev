FROM node:22-alpine AS base
WORKDIR /app
EXPOSE 3000
ADD . .
RUN npm install
CMD npm run build

FROM base AS production
CMD npm start

FROM base AS dev
ENV NODE_ENV=development
RUN npm install
CMD npm run dev
