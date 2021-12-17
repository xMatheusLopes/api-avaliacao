from node:17
WORKDIR app
COPY . .
RUN npm install

# RUN CONTAINER WITH -p 3000:3000
EXPOSE 3000

CMD ["node", "index.js"]