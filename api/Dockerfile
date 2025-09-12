# Use Node.js 20 LTS on Debian (more stable than Alpine for native modules)
FROM node:20-bullseye

# Set working directory
WORKDIR /app

# Install system dependencies needed for node-gyp / Prisma
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    bash \
    && rm -rf /var/lib/apt/lists/*

# Copy package.json and package-lock.json first (for caching npm install)
COPY package*.json ./

# Install npm dependencies (without running postinstall yet)
RUN npm install --ignore-scripts

# Copy the rest of the code (including prisma folder)
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build TypeScript code and copy templates
RUN npx tsc && npx copyfiles -u 1 template/* dist/template

# Expose port
EXPOSE 5050

# Make entrypoint executable
RUN ["chmod", "+x", "./entrypoint.sh"]

# Run entrypoint
ENTRYPOINT [ "sh", "./entrypoint.sh" ]
