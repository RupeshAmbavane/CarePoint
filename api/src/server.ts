import { Server } from 'http';
import app from './app';
import config from './config';

async function bootstrap() {
  // Listen on all interfaces for Railway deployment
  const server: Server = app.listen(config.port, '0.0.0.0', () => {
    console.log(`Server running on port ${config.port} in ${config.env} mode`);
  });

  // Graceful shutdown function
  const exitHandler = (signal?: string | number) => {
    if (server) {
      server.close(() => {
        console.log(`Server closed${signal ? ` due to signal ${signal}` : ''}`);
        process.exit(0);
      });
    } else {
      process.exit(1);
    }
  };

  // Handle uncaught exceptions & unhandled promise rejections
  const unexpectedHandler = (err: Error) => {
    console.error('Unexpected error:', err);
    exitHandler();
  };

  process.on('uncaughtException', unexpectedHandler);
  process.on('unhandledRejection', unexpectedHandler);

  // Handle termination signals
  process.on('SIGTERM', () => exitHandler('SIGTERM'));
  process.on('SIGINT', () => exitHandler('SIGINT'));
}

bootstrap();
