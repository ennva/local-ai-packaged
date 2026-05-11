FROM node:18-alpine AS builder
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

# Install dependencies
COPY securaops/package.json securaops/package-lock.json* ./
RUN npm ci --prefer-offline --no-audit --progress=false || npm install

# Copy source and build
COPY securaops/ .
RUN npm run build

FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY securaops/docker/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
