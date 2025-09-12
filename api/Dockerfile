WORKDIR /app

# Copy everything at once
COPY . .

# Install dependencies (postinstall will run now, and prisma/schema.prisma exists)
RUN yarn install --frozen-lockfile

# Build project
RUN yarn build

EXPOSE 5050
ENTRYPOINT ["sh", "./entrypoint.sh"]
