FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 6006
CMD ["npm", "run", "storybook"]