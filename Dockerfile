######################################################
# Dockerfile to build todolist
# Version: v1
# Image: node:8
# ######################################################

FROM node:8

LABEL AppName="ToDoList"
LABEL Version="v1"

# # Variables
ENV PORT=3000
ENV WDIR=/usr/src/app

# Create app directory
WORKDIR ${WDIR}

# Copy package json files
COPY package*.json ./

# Install package dependencies
RUN npm install \
 && echo "Docker: npm install complete"

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE ${PORT}

# HEALTHCHECK --interval=5m --timeout=3s --start-period=5s --retries=3 \
#  CMD curl -f http://localhost:${PORT} || exit 1

# Run docker
CMD [ "npm", "start" ]