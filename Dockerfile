FROM node:16-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY next.config.js ./next.config.js
COPY tailwind.config.js ./tailwind.config.js
COPY postcss.config.js ./postcss.config.js
COPY tsconfig.json ./tsconfig.json
COPY components ./components
COPY pages ./pages
COPY public ./public
COPY styles ./styles

CMD ["yarn", "run", "dev"]

