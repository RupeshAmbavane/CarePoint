FROM node:20-alpine

WORKDIR /app

# Install OS dependencies needed for building some packages
RUN apk add --no-cache bash python3 make g++

# Copy everything first (including prisma folder)
COPY . .

# Install dependencies without running postinstall
RUN yarn install --frozen-lockfile --ignore-scripts

# Now generate Prisma client
RUN npx prisma generate

# Build TypeScript
RUN yarn build

# Expose the port
EXPOSE 5050

# Make entrypoint executable
RUN ["chmod", "+x", "./entrypoint.sh"]

# Run the entrypoint
ENTRYPOINT ["sh", "./entrypoint.sh"]
