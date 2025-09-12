# Use Node 20 alpine as base
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install OS dependencies needed for building some packages
RUN apk add --no-cache bash python3 make g++

# Copy package.json and yarn.lock first
COPY package.json yarn.lock ./

# Install dependencies (will run postinstall safely since prisma schema will exist later)
RUN yarn install --frozen-lockfile

# Copy the rest of the code (including prisma folder)
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build TypeScript
RUN yarn build

# Expose the port your app uses
EXPOSE 5050

# Make entrypoint executable (if you use it)
RUN ["chmod", "+x", "./entrypoint.sh"]

# Run the entrypoint
ENTRYPOINT ["sh", "./entrypoint.sh"]
