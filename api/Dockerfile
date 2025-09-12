FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install build dependencies for Prisma
RUN apk add --no-cache bash python3 make g++ 

# Copy package.json and yarn.lock first (for caching)
COPY package.json yarn.lock ./

# Install dependencies (do NOT generate Prisma yet)
RUN yarn install --frozen-lockfile

# Copy the rest of your application (including prisma folder)
COPY . .

# Generate Prisma client now (after prisma/schema.prisma is present)
RUN npx prisma generate

# Build TypeScript
RUN yarn build

# Expose port
EXPOSE 5050

# Make entrypoint executable
RUN chmod +x ./entrypoint.sh

# Run the server
ENTRYPOINT ["sh", "./entrypoint.sh"]
