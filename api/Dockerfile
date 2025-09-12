# Use official Node.js 20 alpine image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install dependencies required to build native modules (Prisma sometimes needs this)
RUN apk add --no-cache bash python3 make g++ 

# Copy package.json and yarn.lock first for caching
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build TypeScript
RUN yarn build

# Expose the port your app will run on
EXPOSE 5050

# Ensure entrypoint.sh is executable
RUN chmod +x ./entrypoint.sh

# Run the entrypoint
ENTRYPOINT ["sh", "./entrypoint.sh"]
